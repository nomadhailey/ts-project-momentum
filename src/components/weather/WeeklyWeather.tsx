import React, { useState, useRef } from "react";
import styled from "styled-components";
import classNames from "classnames";

const StyledLi = styled.li`
  text-align: center;
  font-size: 0.8rem;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px;
  &.clicked {
    background: #333333;
  }
  div {
    display: flex;
    i {
      font-size: 1rem;
    }
    .temp {
      padding-left: 5px;
    }
  }
`;
interface WeeklyWeatherProps {
  // weather: {daily:[{weather:{}}]};
  key: number;
  weather: [{ main: string }];
  temp: { max: number; min: number };
  week: string;
  index: number;
  // onClick: (e: { target: any }) => void;
  // clicked: boolean;
}
export default function WeeklyWeather({
  key,
  weather,
  temp,
  week,
  index,
}: // onClick,
// clicked,
WeeklyWeatherProps) {
  const clickRef = useRef(null);
  const [clicked, setClicked] = useState(false);
  const clickWeek = (e: { target: any }) => {
    // if (clickRef.current === e.target) {
    setClicked(!clicked);
    // clickRef.current.className = "active";
    console.log(e.target);
    // console.log(clickRef.current);
    // }
  };
  return (
    <StyledLi
      className={classNames("weekContainer", { clicked })}
      onClick={clickWeek}
      ref={clickRef}
    >
      <p>{week}</p>
      <div>
        <i className={"wi " + weather[0].main}></i>
        <p className="temp">
          {Math.round(temp.max)}° <span>{Math.round(temp.min)}°</span>
        </p>
      </div>
    </StyledLi>
  );
}
