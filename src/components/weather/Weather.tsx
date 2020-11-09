import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyledDiv } from "./Weather.style";

import ModalWeather from "./ModalWeather";

import "./weather-icons.css";
import "./weather-icons-wind.css";

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
  daily: [
    {
      dt: number;
      weather: [{ main: string; description: string }];
      temp: { max: number; min: number };
    }
  ];
  loading: boolean;
}
export default function Weather() {
  const [weather, setWeather] = useState<weatherType>({
    current: {
      weather: [{ description: "", main: "" }],
      temp: 0,
    },
    daily: [
      {
        dt: 0,
        weather: [{ main: "", description: "" }],
        temp: { max: 0, min: 0 },
      },
    ],
    loading: false,
  });
  const [city, setCity] = useState<cityType>({ name: "" });

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
      const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
      try {
        const cityData = await axios
          .get(cityUrl)
          .then((res) => res.data)
          .catch((err) => console.log(`cityGetError:${err}`));
        const weatherData = await axios
          .get(weatherUrl)
          .then((res) => res.data)
          .catch((err) => console.log(`weatherGetError:${err}`));

        console.log("cityData", cityData);
        console.log("weatherData", weatherData);
        setCity(cityData);
        setWeather(weatherData);
      } catch (err) {
        console.log(err);
      }
    }
  }, []);
  const [modal, setModal] = useState(false);
  const clickModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  return (
    <>
      <StyledDiv onClick={clickModal} className="weatherContainer">
        <div className="wrapper">
          <i
            className={"wi " + weather.current.weather[0].main}
            data-icon={"wi " + weather.current.weather[0].main}
          ></i>
          <p data-temp={Math.round(weather.current.temp)}>
            {Math.round(weather.current.temp)}°
          </p>
        </div>
        <span>{city.name}</span>
      </StyledDiv>
      {modal && (
        <ModalWeather city={city} weather={weather} closeModal={closeModal} />
      )}
    </>
  );
}
