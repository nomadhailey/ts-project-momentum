import styled from "styled-components";

export const StyledNav = styled.nav`
  flex-grow: 1;
  border: 1px solid yellow;
  ul {
    li {
      padding: 5px 0;
      cursor: pointer;
      &.clicked {
        font-weight: bold;
      }
    }
  }
`;
