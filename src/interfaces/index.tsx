import { Dispatch, SetStateAction } from "react";
export interface IAirport {
  name: string;
  iata: string;
}
export interface IData {
  airports: Array<IAirport>;
}

export interface ILocation {
  origin: string;
}

export interface ICoordinate {
  latitude: number;
  longitude: number;
}

export interface IMap {
  finalCoorinates: any;
  iataCodes: any;
}
export interface IPanel {
  loading: boolean;
  airports: Array<IAirport>;
  error: unknown;
  setAirportOrigin: Dispatch<SetStateAction<IAirport | null>>;
  setAirportDestination: Dispatch<SetStateAction<IAirport | null>>;
  setFinalDistance: Dispatch<SetStateAction<string | null>>;
  calculateFinalDistance: () => {} | null;
  finalDistance: number | string | null;
}
