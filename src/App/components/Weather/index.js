import React, { useContext, useEffect } from "react";
import "./index.scss";
import { WeatherContext } from "../../../providers/weather.provider";
import loading from "../../styles/icons/Loading.gif"
import sun from "../../styles/icons/sun-hand-drawn-day-symbol.svg"
import sunCloud from "../../styles/icons/clouds-and-sun.svg"
import clouds from "../../styles/icons/clouds.svg"
import rain from "../../styles/icons/rain.svg"
import sleet from "../../styles/icons/sleet.svg"
import snow from "../../styles/icons/frost.svg"
import fog from "../../styles/icons/fog.svg"
import bunny from "../../styles/icons/bunny.svg"

function Weather() {
  const { weather, isLoading, getWeather } = useContext(WeatherContext);




  useEffect(() => {
    getWeather()
    setInterval(getWeather, 30 * 60 * 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (

    <React.Fragment>
      { isLoading ? <img className="Loading Weather" alt="Loading-icon" src={loading} /> : <div className="Weather">
        {localStorage.getItem("location") === "vilnius" ? <h2 className="Weather-station">Vilnius</h2> : localStorage.getItem("location") === "kaunas" ? <h2 className="Weather-station">Kaunas</h2> : localStorage.getItem("location") === "siauliai" ? <h2 className="Weather-station">Šiauliai</h2> : localStorage.getItem("location") === "zarasai" && <h2 className="Weather-station">Zarasai</h2>}

        {weather.conditionCode === "clear" && <React.Fragment><p className="Weather-condition" >Giedra</p><picture className="Weather-icon"><img className="Svg" src={sun} alt={weather.conditionCode} ></img></picture></React.Fragment>}
        {weather.conditionCode === "isolated-clouds" && <React.Fragment><p className="Weather-condition" >Mažai debesuota</p><picture className="Weather-icon"><img className="Svg" src={sunCloud} alt={weather.conditionCode} ></img></picture></React.Fragment>}
        {weather.conditionCode === "scattered-clouds" && <React.Fragment><p className="Weather-condition" >Debesuota su pragiedruliais</p><picture className="Weather-icon"><img className="Svg" src={sunCloud} alt={weather.conditionCode} ></img></picture></React.Fragment>}
        {weather.conditionCode === "overcast" && <React.Fragment><p className="Weather-condition" >Debesuota</p><picture className="Weather-icon"><img className="Svg" src={clouds} alt={weather.conditionCode} ></img></picture></React.Fragment>}
        {weather.conditionCode === "light-rain" && <React.Fragment><p className="Weather-condition" >Nedidelis lietus</p><picture className="Weather-icon"><img className="Svg" src={rain} alt={weather.conditionCode} ></img></picture></React.Fragment>}
        {weather.conditionCode === "moderate-rain" && <React.Fragment><p className="Weather-condition" >Lietus</p><picture className="Weather-icon"><img className="Svg" src={rain} alt={weather.conditionCode} ></img></picture></React.Fragment>}
        {weather.conditionCode === "heavy-rain" && <React.Fragment><p className="Weather-condition" >Smarkus lietus</p><picture className="Weather-icon"><img className="Svg" src={rain} alt={weather.conditionCode} ></img></picture></React.Fragment>}
        {weather.conditionCode === "sleet" && <React.Fragment><p className="Weather-condition" >Šlapdriba</p><picture className="Weather-icon"><img className="Svg" src={sleet} alt={weather.conditionCode} ></img></picture></React.Fragment>}
        {weather.conditionCode === "light-snow" && <React.Fragment><p className="Weather-condition" >Nedidelis sniegas</p><picture className="Weather-icon"><img className="Svg" src={snow} alt={weather.conditionCode} ></img></picture></React.Fragment>}
        {weather.conditionCode === "moderate-snow" && <React.Fragment><p className="Weather-condition" >Sniegas</p><picture className="Weather-icon"><img className="Svg" src={snow} alt={weather.conditionCode} ></img></picture></React.Fragment>}
        {weather.conditionCode === "heavy-snow" && <React.Fragment><p className="Weather-condition" >Smarkus sniegas</p><picture className="Weather-icon"><img className="Svg" src={snow} alt={weather.conditionCode} ></img></picture></React.Fragment>}
        {weather.conditionCode === "fog" && <React.Fragment><p className="Weather-condition" >Rūkas</p><picture className="Weather-icon"><img className="Svg" src={fog} alt={weather.conditionCode} ></img></picture></React.Fragment>}
        {weather.conditionCode === "na" && <React.Fragment><p className="Weather-condition" >Oro sąlygos nenustatytos</p><picture className="Weather-icon"><img className="Svg" src={bunny} alt={weather.conditionCode} ></img></picture></React.Fragment>}
        {weather && <h1>{weather.airTemperature} °C</h1>}
        {weather && <p className="Weather-time" >Paskurini kartą tikrinta {weather.forecastTimeUtc}</p>}
        <p className="Weather-source">Duomenų šaltinis yra LHMT</p>
      </div>}
    </React.Fragment>
  );
}

export default Weather;
