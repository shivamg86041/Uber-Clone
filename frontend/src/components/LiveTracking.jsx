import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { useEffect, useState, useRef } from "react";
import { loadGoogleMapsApi } from "../utils/loadGoogleMapsApi";

const containerStyle = {
  width: "100%",
  height: "100%"
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const LiveTracking = () => {
  const [currentPosition, setCurrentPosition] = useState(center);
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    const updatePosition = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setCurrentPosition({
              lat: latitude,
              lng: longitude,
            });
          },
          (error) => console.error(error),
          {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
          }
        );
      }
    };

    // Update position immediately and then every 10 seconds
    updatePosition();
    const intervalId = setInterval(updatePosition, 1000); // Adjusted interval for efficiency

    return () => clearInterval(intervalId);
  }, []);
  
  useEffect(() => {
    loadGoogleMapsApi(import.meta.env.VITE_GOOGLE_MAPS_API)
      .then(() => setMapLoaded(true))
      .catch((error) => console.error("Error loading Google Maps API:", error));
  }, []);

  if (!mapLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={currentPosition}
      zoom={15}
      options={{
        zoomControl: true,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        draggable: true,
        scrollwheel: true,
        disableDoubleClickZoom: false,
      }}
      onLoad={(map) => (mapRef.current = map)}
    >
      <MarkerF
        position={currentPosition}
        icon={{
          url: "https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2_hdpi.png",
          scaledSize: { width: 25, height: 37 },
        }}
      />
    </GoogleMap>
  );
};

export default LiveTracking;
