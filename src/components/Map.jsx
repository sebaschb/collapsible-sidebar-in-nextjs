import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useContext, useEffect, useState } from "react";
import { GoogleMapsContext } from "@/context/GoogleMapsContext";

const Map = () => {
  const { googleMapsLoaded } = useContext(GoogleMapsContext);
  const [map, setMap] = useState(null);

  const onLoad = (mapInstance) => {
    setMap(mapInstance);
  };

  useEffect(() => {
    if (map && googleMapsLoaded) {
    }
  }, [map, googleMapsLoaded]);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "800px" }}
        center={{ lat: 51.505, lng: -0.09 }}
        zoom={13}
        onLoad={onLoad}
      ></GoogleMap>
    </LoadScript>
  );
};

export default Map;
