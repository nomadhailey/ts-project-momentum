import React, { useState, useEffect } from "react";
import { StyledDiv, Greeting } from "./ClockStyle";
import { BsThreeDots } from "react-icons/bs";

export default function Clock() {
  // 시간
  const [date, setDate] = useState(new Date());
  const hour = date.getHours();
  const min = date.getMinutes();

  const tick = () => {
    setDate(new Date());
  };
  // console.log(hour, ":", min);
  useEffect(() => {
    tick();
    const timerId: number = setInterval(() => tick(), 1000);
    // console.log(hour, ":", min);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  // 이름 바꾸기
  const [name, setName] = useState("");
  const [inputIsHidden, setInputIsHidden] = useState(true);
  const onChangeName = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setName(e.target.value);
  };
  const submitName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("name", name);
    setInputIsHidden(!inputIsHidden);
  };
  const onDoubleClickName = () => {
    setInputIsHidden(!inputIsHidden);
  };
  useEffect(() => {
    const getName = localStorage.getItem("name");
    if (getName !== null) {
      setName(getName);
    }
  }, []);
  return (
    <>
      <StyledDiv className="clockContainer">
        {hour < 10 ? `0${hour}` : hour}:{min < 10 ? `0${min}` : min}
      </StyledDiv>
      <Greeting>
        <div className="greetingWrapper">
          {hour >= 5 && hour < 12
            ? "Good morning"
            : hour >= 12 && hour < 17
            ? "Good afternoon"
            : "Good evening"}
          ,
        </div>
        <div className="nameWrapper">
          {inputIsHidden ? (
            <span onDoubleClick={onDoubleClickName}>
              <span>{name}.</span>
            </span>
          ) : (
            <form onSubmit={submitName}>
              <input
                type="text"
                value={name}
                onChange={onChangeName}
                // size={5}
                maxLength={22}
              />
            </form>
          )}
          <BsThreeDots className="threeDots" />
          {/* <form onSubmit={submitName}>
        <input type="text" value={name} onChange={onChangeName} />
        </form> */}
        </div>
      </Greeting>
    </>
  );
}
