import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  position: fixed;
  bottom: 100px;
  right: 40px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
  z-index: 10;
  background: #ededed;
  color: #222222;
  border-radius: 5px;
  padding: 10px 10px 0;
  font-size: 0.9rem;
  cursor: pointer;
  ul {
    list-style: none;
    li {
      padding-bottom: 10px;
    }
  }
`;
interface modalEditProps {
  deleteTodo: () => void;
}
export default function ModalEdit({ deleteTodo }: modalEditProps) {
  const editTodo = () => {};

  return (
    <StyledDiv>
      <ul>
        <li onClick={editTodo}>Edit</li>
        <li>Move to Today</li>
        <li>Move to...</li>
        <li onClick={deleteTodo}>Delete</li>
      </ul>
    </StyledDiv>
  );
}
