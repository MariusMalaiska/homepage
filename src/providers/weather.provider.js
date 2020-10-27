import React, { useState, useCallback } from "react";

const WeatherContext = React.createContext({});

function WeatherProvider({ children }) {
  const [weather, setWeather] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // const [location, setLocation] = useState("vilnius");

  const date = new Date();

  const getWeather = useCallback(async () => {
    console.log("fetching");
    setIsLoading(true);

    const location = localStorage.getItem(`location`);
    try {
      let response = await fetch(
        `https://proxy-api-master.herokuapp.com/proxy?url=https://api.meteo.lt/v1/places/${location}/forecasts/long-term`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      const data = await response.json();
      if (response.ok) {

        const arr = data.forecastTimestamps.map(x => x)

        const now = (arr) => {
          for (var i = 0; i < arr.length; i++) {
            if (arr[i].forecastTimeUtc === `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:00:00`) {
              return arr[i]
            }
          }
        }

        setWeather(now(arr))


      } else {
        setError(response);
        console.log("error");
      }
    } catch (e) {
      console.log(await e);
    } finally {
      setIsLoading(false);
    }
  }, [setError, setIsLoading, date]);

  return (
    <WeatherContext.Provider value={{ getWeather, weather, error, isLoading }}>
      {children}
    </WeatherContext.Provider>
  );
}

export { WeatherProvider, WeatherContext };
