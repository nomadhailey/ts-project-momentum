import styled from "styled-components";
import { ModalStyle } from "../global/ModalStyle";

export const StyledDiv = styled(ModalStyle)`
  top: 60px;
  right: 15px;
  width: 400px;
  height: 178px;
  padding: 21px 21px 18px;
  &::before {
    bottom: 100%;
    right: 1.5em;
    border-top: none;
    border-bottom-color: #0f0f0fec;
  }
`;
export const Top = styled.div`
  div {
    display: flex;
    span {
      margin-left: 10px;
      color: #aaa;
    }
  }
  p {
    color: #aaa;
  }
`;
export const Center = styled.div`
  display: flex;
  font-size: 3rem;
  padding-bottom: 10px;
  border-bottom: 1px solid #ffffff;
  i {
    margin: auto 0;
    margin-right: 10px;
  }
  p {
    span {
      font-size: 2rem;
      color: #aaa;
    }
  }
`;
export const Bottom = styled.div`
  ul {
    display: flex;
    justify-content: space-around;
    padding-top: 10px;
  }
`;
