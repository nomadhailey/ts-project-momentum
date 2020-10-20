import React, { useState, useRef } from "react";
import { StyledBtn } from "./WeatherStyle";

import ModalWeather from "./ModalWeather";

export default function Weather() {
  const [modal, setModal] = useState(false);
  const clickModal = () => {
    setModal(!modal);
  }
  return (
    <StyledBtn>
      <div onClick={clickModal}>weather</div>
      {modal &&<ModalWeather />}
    </StyledBtn>
  );
}
