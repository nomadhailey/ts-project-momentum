import React, { useState, useEffect, useRef } from "react";
import { StyledDiv, Top, Center, Bottom } from "./ModalTodoStyle";
import TodoList from "./TodoList";
import { BsThreeDots } from "react-icons/bs";
import classNames from "classnames";

export default function ModalTodo() {
  const [inputIsShown, setInputIsShown] = useState(false);
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([] as any);
  // const [todos, setTodos] = useState<T>([]:T);
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
  // const onSubmitNewTodo = (e: { preventDefault: () => void }) => {
  const onSubmitNewTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodoListIsShown(true);
    setTodos([...todos, { id: generateId, content: newTodo, done: false }]);
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

  // checkedChange = (id) => {
  //   this.setState((prevState) => {
  //     return {
  //       todos: prevState.todos.map((todo) =>
  //         todo.id === id ? { ...todo, completed: !todo.completed } : todo
  //       ),
  //     };
  //   });
  // };
  const [checked, setChecked] = useState(false);
  const checkTodo = (id: number) => {
    console.log("id", id);
    setTodos(
      todos.map((todo: any) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
    // setChecked(todo.done);
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
          <TodoList todos={todos} checked={checked} checkTodo={checkTodo} />
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
