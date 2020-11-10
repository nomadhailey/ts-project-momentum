import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 320px;
  max-height: 482.4px;
  /* height: auto; */
  height: 245px;
  background: #ffffff;
  /* opacity: 0.8; */
  border-radius: 5px;
  border: 1px solid black;
  margin: 0 10px 40px 0;
  padding-top: 10px;
  box-sizing: border-box;
  &.todoListIsShown {
    height: auto;
    background: yellow;
  }
`;
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  .todoSelect {
    border: none;
  }
  .threeDots {
    color: hsla(243, 10%, 43%, 0.95);
  }
`;

export const Center = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  height: auto;
  margin: auto;
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  .instruction {
    text-align: center;
    p {
      /* user-select: none; */
      color: #848484;
      margin: 0;
      font-size: 0.8rem;
    }
    .switch {
      color: #bcbcbc;
      font-size: 0.8rem;
    }
  }
  .newTodo {
    color: white;
    background: hsla(243, 10%, 43%, 0.95);
    border-radius: 50px;
    padding: 5px 25px;
    font-size: 0.8rem;
    margin-top: 15px;
    cursor: pointer;
  }
`;

export const Bottom = styled.div`
  input[type="text"] {
    width: 100%;
    outline: none;
    border: none;
    padding: 10px;
    box-sizing: border-box;
    color: #848484;
  }
`;
