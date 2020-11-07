import React, { useState } from "react";
import classNames from "classnames";
import { StyledDiv } from "./ModalSetting.style";
import ModalNav from "./ModalNav";
import ModalMain from "./ModalMain";
import Profile from "./Profile";

export default function ModalSetting() {
  const [theme, setTheme] = useState(false);
  const clickDark = () => {
    setTheme(false);
  };
  const clickLight = () => {
    setTheme(true);
  };
  return (
    <StyledDiv className={classNames("mode", { theme })}>
      <ModalNav>
        <Profile theme={theme} clickDark={clickDark} clickLight={clickLight} />
      </ModalNav>
      <ModalMain theme={theme} clickDark={clickDark} clickLight={clickLight} />
    </StyledDiv>
  );
}
