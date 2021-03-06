import React, { useState, useEffect } from "react";
import { StyledDiv, Top, Center, Bottom } from "./ModalTodoStyle";
import TodoList from "./TodoList";
import { BsThreeDots } from "react-icons/bs";
import classNames from "classnames";

export default function ModalTodo() {
  const [inputIsShown, setInputIsShown] = useState(false);
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([] as any);
  const { id, content, done } = todos;
  const [todoListIsShown, setTodoListIsShown] = useState(false);
  useEffect(() => {
    const getTodoList = localStorage.getItem("todos");
    if (typeof getTodoList === "string") {
      const parsedGetTodoList = JSON.parse(getTodoList);
      if (parsedGetTodoList !== null) {
        setTodos(parsedGetTodoList);
      }
    }
  }, []);

  const onNewTodoClick = () => {
    setInputIsShown(!inputIsShown);
  };

  let generateId = todos.length
    ? Math.max(...todos.map((todo: { id: any }) => todo.id)) + 1
    : 1;

  const onSubmitNewTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodoListIsShown(true);
    setTodos([...todos, { id: generateId, content: newTodo, done: false }]);
    setNewTodo("");
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    if (todos) setTodoListIsShown(true);
    setInputIsShown(true);
  }, []);

  const onChangeNewTodo = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setNewTodo(e.target.value);
  };

  const [checked, setChecked] = useState(false);
  const checkTodo = (id: number) => {
    setTodos(
      todos.map((todo: any) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo: any) => todo.id !== id));
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
          <TodoList
            todos={todos}
            checked={checked}
            checkTodo={checkTodo}
            deleteTodo={deleteTodo}
          />
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
