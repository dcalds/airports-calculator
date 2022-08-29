import {
  GoogleMap,
  useJsApiLoader,
  Polyline,
  Marker,
} from "@react-google-maps/api";
import { IMap } from "../../interfaces";
import Pin from '../../assets/pin.png';
import './styles.css';

const defaultCoodinate = { lat: 39.156610, lng: -97.380671 }

export const Map: React.FC<IMap> = ({ finalCoorinates, iataCodes }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS as string,
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "90%" }}
      center={finalCoorinates ? finalCoorinates[0] : defaultCoodinate}
      zoom={5}
      options={{
        disableDefaultUI: true,
      }}
    >
      {
        finalCoorinates && (
          <Polyline
            path={finalCoorinates}
            options={{
              geodesic: true,
              strokeColor: '#1769aa',
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
      {
        finalCoorinates && (
          <>
            <Marker icon={Pin} position={finalCoorinates[0]} options={{
              label: {
                text: iataCodes[0],
                color: '#1769aa',
                fontWeight: 'bold',
                fontSize: '16px',
                className: 'label-text',
              },
            }} />

            <Marker icon={Pin} position={finalCoorinates[1]} options={{
              label: {
                text: iataCodes[1],
                color: '#1769aa',
                fontWeight: 'bold',
                fontSize: '16px',
                className: 'label-text',
              },
            }} />
          </>
        )
      }
    </GoogleMap >
  ) : (
    <></>
  );
};
