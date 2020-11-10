import React, { useState, useRef } from "react";
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
  // checkTodo: (id: any) => void;
}
export default function TodoList({ todos, checked, checkTodo }: TodoListProps) {
  const [editIsShown, setEditIsShown] = useState(false);

  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  // const checkTodo = (str: string) => {
  //   console.log(ref.current.id); // todo의 length가 찍힘
  //   console.log(str); // 이게 제대로 찍히는 값임
  //   if (ref.current.id !== str) return;
  //   ref.current.checked = !checked;
  //   setChecked(!checked);
  // };

  const clickDots = (e: React.MouseEvent) => {
    setEditIsShown(!editIsShown);
  };

  return (
    <StyledUl>
      {todos.map(
        (todo) =>
          todo.id !== 0 && (
            <li key={todo.id}>
              <input
                type="checkbox"
                // id={`${todo.id}check`}
                id={`ck-${todo.id}`}
                checked={todo.done}
                onChange={() => checkTodo(todo.id)}
                ref={ref}
              />
              <span className={classNames("todo", { checked: todo.done })}>
                {todo.content}
              </span>
              <BsThreeDots className="listThreeDots" onClick={clickDots} />
              {editIsShown && <ModalEdit />}
            </li>
          )
      )}
    </StyledUl>
  );
}
