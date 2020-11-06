import React from "react";
import { FcGoogle } from "react-icons/fc";
import naverLogo from "../../images/naver_square_20x20.png";
import { StyledDiv } from "./ModalSearch.style";

interface ModalSearchProps {
  toggleNaver: () => void;
  toggleGoogle: () => void;
}
export default function ModalSearch({
  toggleNaver,
  toggleGoogle,
}: ModalSearchProps) {
  return (
    <StyledDiv>
      <h3>SEARCH WITH</h3>
      <ul>
        <li onClick={toggleGoogle}>
          <FcGoogle />
          <span>Google</span>
        </li>
        <li onClick={toggleNaver}>
          <img src={naverLogo} alt="naverLogo" />
          <span>Naver</span>
        </li>
      </ul>
    </StyledDiv>
  );
}
