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

  const clickDots = (id: number) => {
    // const result = todos.map((todo: any) => (todo.id === id ? true : false));
    // console.log(id);
    // setEditIsShown(!editIsShown);
    // setEditIsShown(
    //   todos.filter((todo: any) => (todo.id === id ? true : false))
    // );
    const result = todos.find((todo: any) => todo.id === id);
    if (result?.id !== id) return;
    setEditIsShown(!editIsShown);
    console.log(editIsShown);
  };
  // const clickDots = (e: React.MouseEvent) => {
  //   if (e.target !== todo.id) return;
  //   setEditIsShown(!editIsShown);
  // };

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
              </label>
              <BsThreeDots
                className="listThreeDots"
                onClick={() => clickDots(todo.id)}
                // onClick={clickDots}
              />
              {editIsShown && (
                <ModalEdit deleteTodo={() => deleteTodo(todo.id)} />
              )}
            </li>
          )
      )}
    </StyledUl>
  );
}
