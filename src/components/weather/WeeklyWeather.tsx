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
  // const clickRef = useRef<HTMLLIElement>(null);
  const clickRef = useRef() as React.MutableRefObject<HTMLLIElement>;
  const [clicked, setClicked] = useState(false);
  const clickWeek = ({ currentTarget  }: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const clickEl = currentTarget as Element;
    // if (clickRef && clickRef.current && clickRef.current.parentNode) {
      const $ul = clickRef.current.parentNode as HTMLElement;
      console.log(clickEl);
      [...$ul.children].map((li) =>
        li.classList.toggle("clicked", li === clickEl)
      );
    };
      // $ul.querySelector(".clicked")!.classList.remove("clicked");
      // clickEl.classList.add('clicked');
    // }
      // if (clickRef.current.classList.contains("clicked")) {
      // console.log(clickRef.current);
      // console.log([...$ul.children]);
      // console.log($ul.querySelector(".clicked")); // null
      // clickRef.current.classList.toggle("clicked");
      // clickRef.current.className = "clicked";
      // }
      // setClicked(!clicked);

  // if (clickRef.current !== null) {
  // if (clickRef && clickRef.current && clickRef.current.parentNode) {
  //   const $ul = clickRef.current.parentNode;
  //   $ul.querySelector(".clicked").classList.remove(".clicked");

  // }

  return (
    <StyledLi
      className={classNames("weekContainer", { clicked })}
      // className="clicked"
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
