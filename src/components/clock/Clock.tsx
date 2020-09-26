import React, { useState, useEffect } from "react";
import { StyledDiv, Greeting } from "./ClockStyle";

export default function Clock() {
  const [date, setDate] = useState(new Date());
  const hour = date.getHours();
  const min = date.getMinutes();

  const tick = () => {
    setDate(new Date());
  };
  console.log(hour, ":", min);
  useEffect(() => {
    tick();
    const timerId: number = setInterval(() => tick(), 1000);
    console.log(hour, ":", min);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <>
      <StyledDiv>
        {hour < 10 ? `0${hour}` : hour}:{min < 10 ? `0${min}` : min}
      </StyledDiv>
      <Greeting>
        {hour >= 5 && hour < 12
          ? "Good morning"
          : hour >= 12 && hour < 18
          ? "Good afternoon"
          : "Good evening"}
        , hailey.
      </Greeting>
    </>
  );
}
