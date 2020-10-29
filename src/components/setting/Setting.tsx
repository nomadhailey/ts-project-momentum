import React, { useState } from "react";
import classNames from "classnames";
import { IoMdSettings } from "react-icons/io";
import { StyledDiv } from "./SettingStyle";
import ModalSetting from "./ModalSetting";

export default function Setting() {
  // const btnRef = useRef(null);
  const [modal, setModal] = useState(false);
  const openSettingModal = () => {
    setModal(true);
  };
  return (
    <StyledDiv onClick={openSettingModal}>
      <IoMdSettings className={classNames("settingIcon", { modal })} />
      <ModalSetting />
      {/* {modal && <ModalSetting />} */}
    </StyledDiv>
  );
}
