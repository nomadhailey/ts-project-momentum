import styled from "styled-components";

export const ModalStyle = styled.div`
  position: fixed;
  border-radius: 5px;
  color: #ffffff;
  background: #0f0f0fec;
  border: 1px solid black;
  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    /* bottom: 100%; */
    /* right: 1.5em; */
    border: 0.75rem solid transparent;
    /* border-top: none;
    border-bottom-color: #0f0f0fec; */
    background: transparent;
  }
`;
