import styled from "styled-components";

export const StyledDiv = styled.div`
  font-size: 9rem;
  height: 168px;
`;
export const Greeting = styled.div`
  font-size: 2.8rem;
  height: 60px;

  display: flex;
  justify-content: center;
  .greetingWrapper {
    border: 1px solid red;
  }
  .nameWrapper {
    border: 1px solid blue;
    form {
      /* max-width: 12em; */
      display: inline-block;
      input[type="text"] {
        font-size: 2.8rem;
        border: none;
        border-bottom: 2px solid #ffffff;
        background: transparent;
        outline: none;
        color: white;
      }
    }
    .threeDots {
      font-size: 1.5rem;
      opacity: 0;
      cursor: pointer;
      &:hover {
        opacity: 1;
      }
    }
  }
`;
