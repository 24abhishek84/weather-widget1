import React from "react";
import { Image } from "antd";
import "./WeatherWidgetDisplay.css";

const WeatherWidgetDisplay = ({ settings, weatherData }) => {
  const name = weatherData?.name ? weatherData.name : "";
  const weatherTemp = weatherData?.main ? weatherData.main.temp : "";
  const weatherWind = weatherData?.wind ? weatherData.wind : "";

  // get Wind direction based on wind angle
  const degToCompass = (num) => {
    const val = Math.floor(num / 22.5 + 0.5);
    const arr = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];
    return arr[val % 16];
  };

  // get temperature in Farenheit/ Calcious.
  const getWeatherTemp = () => {
    if (settings.temp === "F") {
      const cToFahr = Math.round(weatherTemp * 9) / 5 + 32;
      return cToFahr;
    }
    return weatherTemp;
  };
  const temperature = getWeatherTemp();
  // Assuming wind speed is in KM/H
  const windSpeed = weatherWind?.speed ? weatherWind.speed : "";
  const windDirection = weatherWind?.deg ? degToCompass(weatherWind.deg) : "";

  return (
    <div style={{ width: "400px" }}>
      <div className="myclass">
        <label htmlFor="titleOfWidget" className="display-title">
          {settings.title}
        </label>
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "48px" }}
        >
          <Image src="./weather.jfif" width={100} height={60} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "23px",
            }}
          >
            <div>{name}</div>
            <div className="temperature">{temperature}°</div>
            {settings.wind === "On" && (
              <div className="marginTop">
                <strong>Wind</strong> {windDirection} {windSpeed}km/h
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidgetDisplay;
