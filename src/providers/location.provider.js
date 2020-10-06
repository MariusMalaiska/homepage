import React, { useState, useCallback } from "react";

const LocationContext = React.createContext({});

function LocationProvider({ children }) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getLocatons = useCallback(async () => {
    setIsLoading(true);

    try {
      let response = await fetch("https://api.meteo.lt/v1/places", {
        mode: "no-cors",
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
      } else {
        setError(response);
        console.log("error");
      }
    } catch (e) {
      console.log(await e);
    } finally {
      setIsLoading(false);
    }
  }, [setError]);

  return (
    <LocationContext.Provider value={{ getLocatons, error, isLoading }}>
      {children}
    </LocationContext.Provider>
  );
}

export { LocationProvider, LocationContext };
