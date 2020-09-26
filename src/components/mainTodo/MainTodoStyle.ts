import styled from "styled-components";

export const StyledDiv = styled.div`
  background: orange;
  text-align: center;
  margin: 20px 0;
  font-size: 2.2rem;
  .inputMainTodoWrapper {
    /* margin-top: 30px; */
    h3 {
      font-size: 1.9rem;
      font-weight: normal;
    }
    input[type="text"] {
      all: unset;
      line-height: 40px;
      padding-top: 4px;
      border-bottom: 2px solid #fff;
      width: 480px;

      font-size: 1.8rem;
      font-weight: normal;
    }
  }
  .mainTodoListWrapper {
    /* display: flex; */
    /* justify-content: center;
    align-items: center; */
    position: relative;
    width: 100%;
    height: 80px;
    h4 {
      font-size: 1.2rem;
      font-weight: bold;
    }
    .mainTodoList {
      position: absolute;

      transform: translateX(-50%);
      display: flex;
      justify-content: center;
      &.hover {
        left: 50%;
        border: 1px solid red;
        opacity: 0;
        &:hover {
          opacity: 1;
          background: red;
        }
      }
      &.no_hover {
        border: 1px solid blue;
        opacity: 1;
        left: 51%;
        z-index: 10;
        &:hover {
          opacity: 0;
          background: blue;
        }
      }

      label {
        transition: all 0.2s ease-in;
        /* opacity: 0; */
        &.buttonIsShown {
          opacity: 1;
        }
        input[type="checkbox"] {
          width: 0;
          height: 0;
          position: absolute;
          opacity: 0;
        }
        .checkBtn {
          cursor: pointer;
          color: #adb5bd;
          align-items: center;
          font-size: 2rem;
          margin-right: 0.25rem;
          margin-top: 10px;
        }
      }
      .mainTodo {
        /* position: absolute; */
        margin-right: 10px;

        &.checked {
          text-decoration: line-through;
        }
      }
      .btns {
        cursor: pointer;
        /* opacity: 0; */
        transition: all 0.2s ease-in;
        &.buttonIsShown {
          opacity: 1;
        }
        button {
          font-size: 1rem;
        }
      }
    }
  }
`;
