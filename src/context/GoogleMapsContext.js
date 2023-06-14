import { createContext, useState } from "react";

const GoogleMapsContext = createContext();

const GoogleMapsProvider = ({ children }) => {
  const [googleMapsLoaded, setGoogleMapsLoaded] = useState(false);

  const handleGoogleMapsLoad = () => {
    setGoogleMapsLoaded(true);
  };

  return (
    <GoogleMapsContext.Provider
      value={{ googleMapsLoaded, handleGoogleMapsLoad }}
    >
      {children}
    </GoogleMapsContext.Provider>
  );
};

export { GoogleMapsContext, GoogleMapsProvider };
