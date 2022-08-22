import { useEffect, useState } from "react";
import { calculateDistanceBetweenCoordinates } from "./utils";
import { Map, Panel } from "./components";
import { useAirport } from "./hooks";
import { IAirport } from "./interfaces";
import * as S from "./styles";

export default function App() {
  const { loading, airports, error, retriveAllAirports, retriveSingleAirport } =
    useAirport();

  const [airportOrigin, setAirportOrigin] = useState<IAirport | null>(null);
  const [airportDestination, setAirportDestination] = useState<IAirport | null>(
    null
  );
  const [directionsResponse, setDirectionsResponse] = useState<any | null>(
    null
  );
  const [finalDistance, setFinalDistance] = useState<string | null>(null);

  const calculateFinalDistance = async () => {
    if (airportOrigin && airportDestination) {
      const originData = await retriveSingleAirport(airportOrigin);
      const destinationData = await retriveSingleAirport(airportDestination);

      const directionsService = new google.maps.DirectionsService();

      const results = await directionsService.route({
        origin: {
          lat: parseFloat(originData.latitude),
          lng: parseFloat(originData.longitude),
        },
        destination: {
          lat: parseFloat(destinationData.latitude),
          lng: parseFloat(destinationData.longitude),
        },
        travelMode: google.maps.TravelMode.DRIVING,
      });

      setDirectionsResponse(results);

      const finalDistance = calculateDistanceBetweenCoordinates(
        originData,
        destinationData
      ).toFixed(1);

      setFinalDistance(finalDistance);
    }
  };

  useEffect(() => {
    retriveAllAirports();
  }, []);

  return (
    <S.MainContainer maxWidth={false}>
      <Map directionsResponse={directionsResponse} />
      <Panel
        loading={loading}
        airports={airports}
        error={error}
        setAirportOrigin={setAirportOrigin}
        setAirportDestination={setAirportDestination}
        calculateFinalDistance={calculateFinalDistance}
        setFinalDistance={setFinalDistance}
        finalDistance={finalDistance}
      />
    </S.MainContainer>
  );
}
