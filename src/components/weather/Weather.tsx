import React, { useState, useRef } from "react";
import { StyledBtn } from "./WeatherStyle";

import ModalWeather from "./ModalWeather";

export default function Weather() {
  return (
    <StyledBtn>
      <div>weather</div>
      <ModalWeather />
    </StyledBtn>
  );
}
