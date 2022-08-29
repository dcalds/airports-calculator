import { ICoordinate } from "../interfaces";

export function calculateDistanceBetweenCoordinates(
  origin: ICoordinate,
  destination: ICoordinate
) {
  const R = 6371;
  const diferenceLatitudeToRad = toRadian(destination.latitude - origin.latitude);
  const diferenceLongitudeToRad = toRadian(destination.longitude - origin.longitude);

  const a =
    Math.sin(diferenceLatitudeToRad / 2) * Math.sin(diferenceLatitudeToRad / 2) +
    Math.cos(toRadian(origin.latitude)) *
      Math.cos(toRadian(destination.latitude)) *
      Math.sin(diferenceLongitudeToRad / 2) *
      Math.sin(diferenceLongitudeToRad / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = R * c;

  return (d / 1.852).toFixed(1);
}

// Converts numeric degrees to radians
export function toRadian(value: number) {
  return (value * Math.PI) / 180;
}
