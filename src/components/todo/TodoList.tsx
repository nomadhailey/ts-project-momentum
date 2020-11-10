import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { StyledUl } from "./TodoListStyle";
import classNames from "classnames";
import ModalEdit from "./ModalEdit";

interface TodoListProps {
  todos: [
    {
      id: number;
      content: string;
      done: boolean;
    }
  ];
  checked: boolean;
  checkTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}
export default function TodoList({
  todos,
  checked,
  checkTodo,
  deleteTodo,
}: TodoListProps) {
  const [editIsShown, setEditIsShown] = useState(false);

  const clickDots = (e: React.MouseEvent) => {
    setEditIsShown(!editIsShown);
  };

  return (
    <StyledUl>
      {todos.map(
        (todo) =>
          todo.id !== 0 && (
            <li key={todo.id}>
              <label htmlFor={`ck-${todo.id}`}>
                <input
                  type="checkbox"
                  id={`ck-${todo.id}`}
                  checked={todo.done}
                  onChange={() => checkTodo(todo.id)}
                />
                <span className={classNames("todo", { checked: todo.done })}>
                  {todo.content}
                </span>
                <BsThreeDots className="listThreeDots" onClick={clickDots} />
                {editIsShown && (
                  <ModalEdit deleteTodo={() => deleteTodo(todo.id)} />
                )}
              </label>
            </li>
          )
      )}
    </StyledUl>
  );
}
