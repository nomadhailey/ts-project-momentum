import React, { useState } from "react";
import { StyledDiv } from "./MainTodoStyle";
import classNames from "classnames";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

export default function MainTodo() {
  const [mainTodo, setMainTodo] = useState("");
  const [checked, setChecked] = useState(false);
  const [inputIsShown, setInputIsShown] = useState(true);
  const [buttonIsShown, setButtonIsShown] = useState(false);

  const onChangeMainTodo = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setMainTodo(e.target.value);
  };

  const submitMainTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // error : Property 'value' does not exist on type 'EventTarget'.
    // setMainTodo((e.target as HTMLInputElement).value);
    localStorage.setItem("mainTodo", mainTodo);
    setInputIsShown(false);
  };
  const checkMainTodo = () => {
    setChecked(!checked);
  };
  const removeMainTodo = () => {
    // setMainTodo("");
    setInputIsShown(true);
  };
  const addMainTodo = () => {
    setInputIsShown(true);
  };
  const onMouseOver = () => {
    setButtonIsShown(true);
  };
  const onMouseOut = () => {
    setButtonIsShown(false);
  };
  console.log(buttonIsShown);
  return (
    <StyledDiv>
      {inputIsShown ? (
        <div className="inputMainTodoWrapper">
          <h3>What is your main focus for today?</h3>
          <form className="mainTodoForm" onSubmit={submitMainTodo}>
            <input type="text" value={mainTodo} onChange={onChangeMainTodo} />
          </form>
        </div>
      ) : (
        <div className="mainTodoListWrapper">
          <h4>TODAY</h4>
          <div
            className="mainTodoList"
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
          >
            <label className={classNames({ buttonIsShown })}>
              <input
                type="checkbox"
                checked={checked}
                onClick={checkMainTodo}
              />
              <div className="checkBtn">
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
              </div>
            </label>

            <span className={classNames("mainTodo", { checked })}>
              {mainTodo}
            </span>

            <div className={classNames("btns", { buttonIsShown })}>
              {checked ? (
                <button onClick={addMainTodo}>+</button>
              ) : (
                <button onClick={removeMainTodo}>X</button>
              )}
            </div>
          </div>
        </div>
      )}
    </StyledDiv>
  );
}
