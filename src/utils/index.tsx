import { ICoordinate } from "../interfaces";

export function calculateDistanceBetweenCoordinates(
  origin: ICoordinate,
  destination: ICoordinate
) {
  const R = 6371;
  const diferenceLatitude = toRadian(destination.latitude - origin.latitude);
  const diferenceLongitude = toRadian(destination.longitude - origin.longitude);

  const a =
    Math.sin(diferenceLatitude / 2) * Math.sin(diferenceLatitude / 2) +
    Math.cos(toRadian(origin.latitude)) *
      Math.cos(toRadian(destination.latitude)) *
      Math.sin(diferenceLongitude / 2) *
      Math.sin(diferenceLongitude / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = R * c;

  return d / 1.852;
}

// Converts numeric degrees to radians
export function toRadian(value: number) {
  return (value * Math.PI) / 180;
}
