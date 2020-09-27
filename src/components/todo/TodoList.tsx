import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { StyledUl } from "./TodoListStyle";
import classNames from "classnames";

interface TodoListProps {
  todos: [
    {
      id: number;
      content: string;
      done: boolean;
    }
  ];
}
export default function TodoList({ todos }: TodoListProps) {
  const [checked, setChecked] = useState(false);
  const [editIsShown, setEditIsShown] = useState(false);
  const checkTodo = () => {
    setChecked(!checked);
  };
  const clickDots = () => {
    setEditIsShown(true);
  };
  return (
    <StyledUl>
      {todos.map(
        (todo) =>
          todo.id !== 0 && (
            <li key={todo.id}>
              <input type="checkbox" checked={checked} onClick={checkTodo} />
              <span className={classNames("todo", { checked })}>
                {todo.content}
              </span>
              <BsThreeDots className="listThreeDots" onClick={clickDots} />
            </li>
          )
      )}
    </StyledUl>
  );
}
