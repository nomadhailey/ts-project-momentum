import React, { useState, useRef, useEffect } from "react";
import { StyledDiv, Top, Center, Bottom } from "./ModalWeatherStyle";
import { BsThreeDots } from "react-icons/bs";
import axios from "axios";
// import * as styles from "./weather-icons.css";
// import * as styles2 from "./weather-icons-wind.css";
// import * as weather-icons from "./weather-icons.css";
// import * as weather-icons-wind from "./weather-icons-wind.css";
const weatherIcons = require("./WeatherIcons.css");
const weatherIconsWind = require("./WeatherIconsWind.css");

const API_KEY = "b3fb0d709d10c02822333fb492ae1f50";
interface cityType {
  name: string;
}
interface weatherType {
  current: {
    weather: [
      {
        description: string;
        main: string;
      }
    ];
    temp: number;
  };
  daily: [];
  loading: boolean;
}

export default function ModalWeather() {
  const [weather, setWeather] = useState<weatherType>({
    current: {
      weather: [{ description: "", main: "" }],
      temp: 0,
    },
    daily: [],
    loading: false,
  });
  const [city, setCity] = useState<cityType>({ name: "" });
  //   const weatherParent = useRef();
  //   const btnRef = useRef(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    function geoError() {
      console.log("위치 정보를 가져올 수 없습니다.");
    }
    async function geoSuccess(position: { coords: any }) {
      const { coords } = position;
      const lat = coords.latitude;
      const lon = coords.longitude;
      const cityUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
      const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
      try {
        const cityData = await axios
          .get(cityUrl)
          .then((res) => res.data)
          .catch((err) => console.log(`cityGetError:${err}`));
        const weatherData = await axios
          .get(weatherUrl)
          .then((res) => res.data)
          .catch((err) => console.log(`weatherGetError:${err}`));

        console.log(cityData);
        console.log(weatherData);
        setCity(cityData);
        setWeather(weatherData);
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  return (
    <StyledDiv>
      <Top>
        <div>
          <h4 className="city">{city.name}</h4>
          <p
            className="description"
            // data-description={weather.current.weather[0].description}
          >
            {weather.current.weather[0].description}
          </p>
        </div>
        <BsThreeDots />
      </Top>
      <Center>
        <i
          className={"wi " + weather.current.weather[0].main}
          data-icon={"wi " + weather.current.weather[0].main}
        ></i>
        <p data-temp={Math.round(weather.current.temp)}>
          {Math.round(weather.current.temp)}° <span></span>
        </p>
      </Center>
      <Bottom>날씨</Bottom>
    </StyledDiv>
  );
}
