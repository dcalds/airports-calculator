import { IGoogleCoordinate } from "../interfaces";

export function calculateDistanceBetweenCoordinates(
  origin: IGoogleCoordinate,
  destination: IGoogleCoordinate
) {
  const R = 6371;
  const diferenceLatitudeToRad = toRadian(destination.lat - origin.lat);
  const diferenceLongitudeToRad = toRadian(destination.lng - origin.lng);

  const a =
    Math.sin(diferenceLatitudeToRad / 2) * Math.sin(diferenceLatitudeToRad / 2) +
    Math.cos(toRadian(origin.lat)) *
      Math.cos(toRadian(destination.lat)) *
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
