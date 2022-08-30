import { useState } from "react";
import { IAirport } from "../../interfaces";
import api from "../../services/api";

export function useAirport() {
  const [loading, setLoading] = useState<boolean>(false);
  const [airports, setAirports] = useState<Array<IAirport>>([]);
  const [error, setError] = useState<unknown>(null);

  const retriveAllAirportsV2 = async () => {
    setLoading(true);
    setError(null);

    try {
      const { data } = await api.get(`/airports?api_key=${process.env.REACT_APP_API_KEY}&country_code=${process.env.REACT_APP_COUNTRY_CODE}`)

      const formatList = data.response.map((element: any) => {
        return {
          label: element.name + " " + element.iata_code,
          iata_code: element.iata_code,
          lat: element.lat,
          lng: element.lng,
        };
      });

      setAirports(formatList);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }

  }

  const values = {
    loading,
    airports,
    error,
    retriveAllAirportsV2,
  };

  return values;
}
