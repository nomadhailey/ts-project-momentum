import styled from "styled-components";
import { ModalStyle } from "../global/GlobalModal.style";

export const StyledDiv = styled(ModalStyle)`
  display: flex;
  bottom: 60px;
  left: 15px;
  height: 450px;
  width: 700px;
  padding: 21px 21px 18px;
  overflow: auto;
  &::before {
    top: 100%;
    left: 0.8em;
    border-bottom: none;
    border-top-color: #0f0f0fec;
  }
`;
