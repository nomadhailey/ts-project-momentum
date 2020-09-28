import React, { useState, useEffect, useRef } from "react";
import { StyledDiv, Top, Center, Bottom } from "./ModalTodoStyle";
import TodoList from "./TodoList";
import { BsThreeDots } from "react-icons/bs";
import classNames from "classnames";

// type TodoType = {
//   id: number;
//   content: string;
//   done: boolean;
// };
// interface TodoType {
//   todos: [{ id: null | number; content: null | string; done: boolean }];
// }
export default function ModalTodo() {
  const [inputIsShown, setInputIsShown] = useState(false);
  const [newTodo, setNewTodo] = useState("");
  // const [todos, setTodos] = useState<TodoType[]>([
  //   {
  //     id: 0,
  //     content: "",
  //     done: false,
  //   },
  // ]);
  const [todos, setTodos] = useState([
    // {
    //   id: 0,
    //   content: "",
    //   done: false,
    // },
  ] as any);
  const { id, content, done } = todos;
  const [todoListIsShown, setTodoListIsShown] = useState(false);
  useEffect(() => {
    const getTodoList = localStorage.getItem("todos");
    if (typeof getTodoList === "string") {
      const parsedGetTodoList = JSON.parse(getTodoList);

      // if (getTodoList.length !== 0) {
      if (parsedGetTodoList !== null) {
        setTodos(parsedGetTodoList);
      }
    }
  }, []);

  const onNewTodoClick = () => {
    setInputIsShown(!inputIsShown);
  };

  const nextId = useRef(1);
  const onSubmitNewTodo = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setTodoListIsShown(true);
    setTodos([...todos, { id: nextId.current, content: newTodo, done: false }]);
    nextId.current += 1;
    setNewTodo("");
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onChangeNewTodo = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setNewTodo(e.target.value);
  };

  return (
    <StyledDiv className={classNames("todoWrapper", { todoListIsShown })}>
      <Top>
        <select name="todoSelect">
          <option value="inbox" selected>
            Inbox
          </option>
          <option value="today">Today</option>
          <option value="done">Done</option>
          <option value="newlist">+ New List</option>
        </select>
        <BsThreeDots className="threeDots" />
      </Top>

      <Center>
        {todoListIsShown ? (
          <TodoList todos={todos} />
        ) : (
          <div className="instruction">
            <p>Add a todo to get started</p>
            <button className="switch">Switch to Today &gt; </button>
          </div>
        )}

        {!inputIsShown && (
          <button className="newTodo" onClick={onNewTodoClick}>
            New Todo
          </button>
        )}
      </Center>
      {inputIsShown && (
        <Bottom>
          <form onSubmit={onSubmitNewTodo}>
            <input
              type="text"
              placeholder="New Todo"
              value={newTodo}
              onChange={onChangeNewTodo}
              autoFocus
            />
          </form>
        </Bottom>
      )}
    </StyledDiv>
  );
}
