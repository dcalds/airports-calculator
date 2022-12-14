import { useEffect, useState } from "react";
import { calculateDistanceBetweenCoordinates } from "./utils";
import { Map, Panel } from "./components";
import { useAirport } from "./hooks";
import { IAirport, IGoogleCoordinate } from "./interfaces";
import * as S from "./styles";

export default function App() {
  const { loading, airports, error, retriveAllAirportsV2 } =
    useAirport();
  const [airportOrigin, setAirportOrigin] = useState<IAirport | null>(null);
  const [airportDestination, setAirportDestination] = useState<IAirport | null>(
    null
  );
  const [iataCodes, setIataCodes] = useState<Array<string>>();
  const [finalCoorinates, setFinalCoorinates] = useState<Array<IGoogleCoordinate> | null>(null);
  const [finalDistance, setFinalDistance] = useState<string | null>(null);

  const calculateFinalDistance = async () => {
    setFinalCoorinates(null);

    if (airportOrigin && airportDestination) {

      setIataCodes([
        airportOrigin.iata_code,
        airportDestination.iata_code,
      ])

      setFinalCoorinates([
        {
          lat: airportOrigin.lat,
          lng: airportOrigin.lng,
        },
        {
          lat: airportDestination.lat,
          lng: airportDestination.lng,
        },
      ])

      const finalDistance = calculateDistanceBetweenCoordinates(
        airportOrigin,
        airportDestination
      );

      setFinalDistance(finalDistance);
    }
  };

  useEffect(() => {
    retriveAllAirportsV2();
  }, []);

  return (
    <S.MainContainer maxWidth={false}>
      <Map
        iataCodes={iataCodes}
        finalCoorinates={finalCoorinates}
      />
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
