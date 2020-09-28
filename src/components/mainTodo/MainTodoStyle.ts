import styled, { keyframes } from "styled-components";

const fadeout = keyframes`
  from {
    opacity:1; 
  } 
  to {
  opacity : 0;
  }
`;
export const StyledDiv = styled.div`
  text-align: center;
  margin: 20px 0;
  font-size: 2.2rem;
  .inputMainTodoWrapper {
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
    .compliments {
      display: none;
      font-size: 1.2rem;
      animation: ${fadeout} 1s 1s linear forwards;
      &.checked {
        display: block;
      }
    }
    width: 100%;
    /* height: 80px; */
    h4 {
      font-size: 1.2rem;
      font-weight: bold;
    }

    .mainTodoList {
      display: flex;
      justify-content: center;

      label {
        transition: all 0.2s ease-in;
        opacity: 0;
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
        margin-right: 10px;

        &.checked {
          text-decoration: line-through;
        }
      }
      .btns {
        cursor: pointer;
        opacity: 0;
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
