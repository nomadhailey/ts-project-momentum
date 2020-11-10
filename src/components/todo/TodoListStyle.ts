import styled from "styled-components";

export const StyledUl = styled.ul`
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 15px;
  box-sizing: border-box;
  /* background: transparent; */
  background: green;
  li {
    position: relative;
    label {
      display: block;
      width: 90%;
      input {
        margin-right: 10px;
      }
      .todo {
        width: 100%;
        &.checked {
          text-decoration: line-through;
        }
      }
    }
    .listThreeDots {
      position: absolute;
      right: -15px;
      bottom: 50%;
      transform: translateY(50%);
      cursor: pointer;
      padding: 10px;
      /* opacity: 0; */
      &:hover {
        opacity: 1;
      }
    }
  }
`;
