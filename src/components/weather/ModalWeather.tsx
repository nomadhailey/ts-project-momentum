import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { StyledDiv, Top, Center, Bottom } from "./ModalWeatherStyle";
import { BsThreeDots } from "react-icons/bs";
import WeeklyWeather from "./WeeklyWeather";

import "./weather-icons.css";
import "./weather-icons-wind.css";

const API_KEY = "b3fb0d709d10c02822333fb492ae1f50";
const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const date = new Date();
const today = date.getDay();

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
      weather: [{ main: string, description:string }];
      temp: { max: number; min: number };
    }
  ];
  loading: boolean;
}

export default function ModalWeather() {
  const [weather, setWeather] = useState<weatherType>({
    current: {
      weather: [{ description: "", main: "" }],
      temp: 0,
    },
    daily: [
      {
        dt: 0,
        weather: [{ main: "", description:'' }],
        temp: { max: 0, min: 0 },
      },
    ],
    loading: false,
  });
  const [city, setCity] = useState<cityType>({ name: "" });
  //   const weatherParent = useRef();
  //   const btnRef = useRef(null)
  
  // const [clicked, setClicked] = useState(false);
  // const clickWeek = (e: { target: any }) => {
  //   // if (clickRef.current === e.target) {
  //   setClicked(!clicked);
  //   console.log(e.target);
  //   // }
  // };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    function geoError() {
      console.log("위치 정보를 가져올 수 없습니다.");
    }

    async function geoSuccess(position: { coords: any }) {
      const { coords } = position;
      const lat = coords.latitude;
      const lon = coords.longitude;
      // const cityUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
      // const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
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

        console.log('cityData',cityData);
        console.log('weatherData',weatherData);
        setCity(cityData);
        setWeather(weatherData);
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  // const handleClickOutside = (e) => {
  //   if (btnRef.current && !btnRef.current.contains(e.target)) {
  //     btnRef.current.classList.remove("active");
  //   } else {
  //     btnRef.current.classList.add("active");
  //   }
  // };
  // useEffect(() => {
  //   document.addEventListener("click", handleClickOutside, true);
  //   return () => {
  //     document.removeEventListener("click", handleClickOutside, true);
  //   };
  // }, []);

  return (
    <StyledDiv>
      <Top>
        <div>
          <h4 className="city">{city.name}</h4>
          <span></span>
          <p
            className="description"
            // data-description={weather.current.weather[0].description}
          >
            {weather.current.weather[0].description}
          </p>
        </div>
        {/* <BsThreeDots /> */}
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
      <Bottom>
        <ul>
          {weather.daily.slice(0, 5).map((day, i) => (
            <WeeklyWeather
              key={day.dt}
              weather={day.weather}
              temp={day.temp}
              week={
                week[
                  today + i === 7
                    ? 0
                    : today + i === 8
                    ? 1
                    : today + i === 9
                    ? 2
                    : today + i === 10
                    ? 3
                    : today + i
                ]
              }
              index={i}
              // onClick={clickWeek}
              // clicked={clicked}
            />
          ))}
        </ul>
      </Bottom>
    </StyledDiv>
  );
}
