import React from "react";
import { StyledDiv, Top, Center, Bottom } from "./ModalWeather.style";
// import { BsThreeDots } from "react-icons/bs";
import WeeklyWeather from "./WeeklyWeather";

const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const date = new Date();
const today = date.getDay();

interface ModalWeatherProps {
  onFocusOut: () => void;
  city: { name: string };
  weather: {
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
  };
}
export default function ModalWeather({ city, weather }: ModalWeatherProps) {
  return (
    <StyledDiv>
      <Top>
        <div>
          <h4 className="city">{city.name}</h4>
          <span></span>
        </div>
        <p
          className="description"
          data-description={weather.current.weather[0].description}
        >
          {weather.current.weather[0].description.charAt(0).toUpperCase() +
            weather.current.weather[0].description.slice(1)}
        </p>

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
            />
          ))}
        </ul>
      </Bottom>
    </StyledDiv>
  );
}
