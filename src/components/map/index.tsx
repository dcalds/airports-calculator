import {
  GoogleMap,
  DirectionsRenderer,
  useJsApiLoader,
  Polyline,
} from "@react-google-maps/api";
import { IMap } from "../../interfaces";

const defaultCoodinate = { lat: 39.156610, lng: -97.380671 }

export const Map: React.FC<IMap> = ({ finalCoorinates }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS as string,
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "90%" }}
      center={finalCoorinates ? finalCoorinates[0] : defaultCoodinate}
      zoom={5}
    >
      {/* {directionsResponse && (
        <DirectionsRenderer directions={directionsResponse} />
      )} */}
      {
        finalCoorinates && (
          <Polyline
            path={finalCoorinates}
            options={{
              strokeColor: 'red',
              strokeOpacity: 1,
              strokeWeight: 2,
              icons: [{
                offset: '0',
                repeat: '10px'
              }],
            }}
          />
        )
      }
    </GoogleMap >
  ) : (
    <></>
  );
};
