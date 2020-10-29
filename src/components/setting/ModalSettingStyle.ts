import styled from "styled-components";
import { ModalStyle } from "../global/ModalStyle";

export const StyledDiv = styled(ModalStyle)`
  bottom: 60px;
  left: 15px;
  width: 400px;
  height: 178px;
  padding: 21px 21px 18px;
  &::before {
    top: 100%;
    left: 0.8em;
    border-bottom: none;
    border-top-color: #0f0f0fec;
  }
`;
