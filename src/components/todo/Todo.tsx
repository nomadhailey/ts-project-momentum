import React, { useState } from "react";
import { StyledDiv } from "./TodoStyle";
import ModalTodo from "./ModalTodo";

export default function Todo() {
  const [modalIsShown, setModalIsShown] = useState(false);
  const clickTodo = () => {
    setModalIsShown(!modalIsShown);
  };
  return (
    <>
      <StyledDiv>
        <button onClick={clickTodo}>Todo</button>
        {modalIsShown && <ModalTodo />}
      </StyledDiv>
    </>
  );
}
