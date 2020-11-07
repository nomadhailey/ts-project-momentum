import React from "react";
import { StyledDiv } from "./ModalMain.style";
import General from "./General";

export interface themeProps {
  theme: boolean;
  clickDark: () => void;
  clickLight: () => void;
}

export default function ModalMain({
  theme,
  clickDark,
  clickLight,
}: themeProps) {
  return (
    <StyledDiv>
      <General theme={theme} clickDark={clickDark} clickLight={clickLight} />
      {/* <Todo />
      <Mantras/>
      <Photos />
      <Quotes />
      <Links />
      <Balance /> */}
    </StyledDiv>
  );
}
