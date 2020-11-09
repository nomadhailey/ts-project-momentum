import styled from "styled-components";

export const StyledDiv = styled.div`
  cursor: pointer;
  padding: 10px;
  position: absolute;
  top: 0;
  right: 10px;
  .wrapper {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    margin-bottom: -10px;
    p {
      margin-left: 5px;
    }
  }
  span {
    font-size: 0.8rem;
    margin-left: 20px;
  }
`;
