import styled from "styled-components";

export const StyledDiv = styled.div`
  cursor: pointer;
  padding-left: 10px;
  padding-bottom: 5px;
  .settingIcon {
    font-size: 1.4rem;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
    &.modal {
      opacity: 1;
      transform: rotate(-45deg);
    }
  }
`;
