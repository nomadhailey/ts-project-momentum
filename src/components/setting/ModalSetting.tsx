import React from "react";
import { StyledDiv } from "./ModalSettingStyle";
import ModalNav from "./ModalNav";
import ModalMain from "./ModalMain";
import Profile from "./Profile";

export default function ModalSetting() {
  return (
    <StyledDiv>
      <ModalNav>
        <Profile />
      </ModalNav>
      <ModalMain />
    </StyledDiv>
  );
}
