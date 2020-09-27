import React from "react";
import GlobalContainer, { Header, Main, Bottom } from "./GlobalStyle";
import MainTodo from "../mainTodo/MainTodo";
import Search from "../search/Search";
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
        <Search />
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
