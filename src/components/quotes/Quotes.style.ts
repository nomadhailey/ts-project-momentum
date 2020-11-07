import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 480px;
  border: 1px solid blue;
  &:hover {
    .quotes {
      transition: all 1s;
      transform: translateY(-20px);
    }
    .author {
      opacity: 1;
    }
  }
  .quotes {
    z-index: 10;
    text-align: center;
    q {
      display: block;
      font-size: 1.2rem;
    }
  }
  .author {
    /* z-index: 1; */
    display: flex;
    justify-content: center;
    transform: translateY(-15px);
    opacity: 0;
    .replay {
      padding-left: 10px;
      font-size: 1.5rem;
      cursor: pointer;
    }
  }
`;
