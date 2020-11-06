import styled from "styled-components";

export const StyledLi = styled.li`
text-align: center;
font-size: 0.8rem;
border-radius: 5px;
cursor: pointer;
padding: 5px;
&.clicked {
  background: #333333;
}
div {
  display: flex;
  i {
    font-size: 1rem;
  }
  .temp {
    padding-left: 5px;
  }
}
`;