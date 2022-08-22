import { useState } from "react";
import { IAirport } from "../../interfaces";

export function useAirport() {
  const [loading, setLoading] = useState<boolean>(false);
  const [airports, setAirports] = useState<Array<IAirport>>([]);
  const [error, setError] = useState<unknown>(null);

  const retriveAllAirports = async () => {
    setLoading(true);
    setError(null);

    try {
      const promise = await fetch(
        `https://www.air-port-codes.com/api/v1/autocomplete?type=a&limit=20&term=United States`,
        {
          method: "GET",
          headers: {
            "APC-Auth": process.env.REACT_APP_AUTH as string,
          },
          mode: "cors",
          cache: "default",
        }
      );

      const response = await promise.json();

      const formatList = response.airports.map((element: any) => {
        return {
          label: element.name + " " + element.iata,
          iata: element.iata,
        };
      });

      setAirports(formatList);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  const retriveSingleAirport = async (origin: IAirport) => {
    setLoading(true);
    setError(null);
    
    try {
      const promise = await fetch(
        `https://www.air-port-codes.com/api/v1/single?iata=${origin.iata}`,
        {
          method: "GET",
          headers: {
            "APC-Auth": "f0c102907c",
          },
          mode: "cors",
          cache: "default",
        }
      );
      const response = await promise.json();
      return response.airport;
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  const values = {
    loading,
    airports,
    error,
    retriveAllAirports,
    retriveSingleAirport,
  };

  return values;
}
