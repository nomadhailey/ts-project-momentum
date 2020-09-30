import React from "react";
import styled from "styled-components";

const StyledLi = styled.li``;
interface WeeklyWeatherProps {
  weather: {};
  temp: { max: number; min: number };
  week: string;
}
export default function WeeklyWeather({
  weather,
  temp,
  week,
}: WeeklyWeatherProps) {
  return (
    <StyledLi>
      <p>{week}</p>
      <div>
        {/* <i className={"wi " + weather[0].main}></i> */}
        <p className="temp">
          {Math.round(temp.max)}° <span>{Math.round(temp.min)}°</span>
        </p>
      </div>
    </StyledLi>
  );
}
