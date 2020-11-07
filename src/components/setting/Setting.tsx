import React, { useState } from "react";
import classNames from "classnames";
import { IoMdSettings } from "react-icons/io";
import { StyledDiv } from "./Setting.style";
import ModalSetting from "./ModalSetting";

export default function Setting() {
  // const btnRef = useRef(null);
  const [modal, setModal] = useState(false);
  const openSettingModal = () => {
    setModal(!modal);
  };
  return (
    <StyledDiv onClick={openSettingModal}>
      <h2 className="a11yHidden">setting</h2>
      <IoMdSettings className={classNames("settingIcon", { modal })} />
      {/* <ModalSetting /> */}
      {modal && <ModalSetting />}
    </StyledDiv>
  );
}
