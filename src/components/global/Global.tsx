import React from "react";
import GlobalContainer, { Header, Main, Bottom } from "./Global.style";
import MainTodo from "../mainTodo/MainTodo";
import Links from "../links/Links";
import Weather from "../weather/Weather";
import Clock from "../clock/Clock";
import Setting from "../setting/Setting";
import Quotes from "../quotes/Quotes";
import Todo from "../todo/Todo";
// import ModalTodo from "../todo/ModalTodo";
export default function () {
  return (
    <GlobalContainer>
      <Header>
        <Links />
        <Weather />
      </Header>
      <div className="emptySpace" />
      <Main>
        <Clock />
      </Main>
      <MainTodo />
      <Bottom>
        <Setting />
        <Quotes />
        <Todo />
      </Bottom>
      {/* <ModalTodo /> */}
    </GlobalContainer>
  );
}
