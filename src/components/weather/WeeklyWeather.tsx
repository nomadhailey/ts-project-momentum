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
  weather: [{ main: string; description:string; }];
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
    const $ul = clickRef.current.parentNode as HTMLElement;
    const $bottom = $ul.parentNode as HTMLElement;
    const $center = $bottom.previousSibling as HTMLElement;
    const $centerIcon = $center.firstChild as HTMLElement;
    const $centerTemp = $center.lastChild as HTMLElement;
    const $top = $center.previousSibling as HTMLElement;
    const $topDesc = $top.querySelector('p') as HTMLElement;
    const $topSpan = $top.querySelector('span') as HTMLElement;   
    [...$ul.children].map((li) =>
      li.classList.toggle("clicked", li === clickEl)
    );
    if (index !== 0) {
    $topDesc.textContent = weather[0].description;
    $centerIcon.className='wi '+ weather[0].main;
    $centerTemp.innerHTML=`${Math.round(temp.max)}° <span>${Math.round(temp.min)}°</span>`;
    }
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
