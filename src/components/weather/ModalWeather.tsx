import React, { useRef, useCallback, useEffect } from "react";
import { StyledDiv, Top, Center, Bottom } from "./ModalWeather.style";
import { MdClose } from "react-icons/md";
import WeeklyWeather from "./WeeklyWeather";

const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const date = new Date();
const today = date.getDay();

interface ModalWeatherProps {
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
  closeModal: () => void;
}
export default function ModalWeather({
  city,
  weather,
  closeModal,
}: ModalWeatherProps) {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;

  const escapeListener = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );

  const clickListener = useCallback(
    (e: MouseEvent) => {
      if (!(ref.current! as any).contains(e.target)) {
        closeModal?.();
      }
    },
    [closeModal, ref]
  );

  useEffect(() => {
    // Attach the listeners on component mount.
    document.addEventListener("click", clickListener);
    document.addEventListener("keyup", escapeListener);
    // Detach the listeners on component unmount.
    return () => {
      document.removeEventListener("click", clickListener);
      document.removeEventListener("keyup", escapeListener);
    };
  }, []);
  return (
    <StyledDiv ref={ref}>
      <Top>
        <div>
          <h4 className="city">{city.name}</h4>
          <MdClose className="closeIcon" onClick={closeModal} />
          <span></span>
        </div>
        <p
          className="description"
          data-description={weather.current.weather[0].description}
        >
          {weather.current.weather[0].description.charAt(0).toUpperCase() +
            weather.current.weather[0].description.slice(1)}
        </p>
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
