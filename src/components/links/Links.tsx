import React, { useState } from "react";
import classNames from "classnames";
import { StyledDiv } from "./Links.style";
import { BiSearch } from "react-icons/bi";
import ModalSearch from "./ModalSearch";
// import { IoLogoGoogle } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import naverLogo from "../../images/naver_square_20x20.png";

export default function Links() {
  const [searchModal, setSearchModal] = useState(false);
  const [toggle, setToggle] = useState({
    naver: false,
    google: true,
  });
  const { naver, google } = toggle;
  const [style, setStyle] = useState(false);
  const openModal = () => {
    setSearchModal(true);
    setStyle(true);
  };
  const onFocus = () => {
    setStyle(true);
    console.log("focus");
  };
  const onFocusOut = (): void => {
    setStyle(false);
    console.log("blur");
  };
  console.log("style", style);
  const toggleGoogle = () => {
    setToggle({
      naver: false,
      google: true,
    });
    setSearchModal(false);
    setStyle(true);
  };
  const toggleNaver = () => {
    setToggle({
      naver: true,
      google: false,
    });
    setSearchModal(false);
    setStyle(true);
  };
  const [keyword, setKeyword] = useState("");
  const onChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };
  const submitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (google) {
      window.open(`https://www.google.com/search?q=${keyword}`, "_blank");
    }
    if (naver) {
      window.open(
        `https://search.naver.com/search.naver?query=${keyword}`,
        "_blank"
      );
    }
  };
  // input 클릭 => underline, icon opacity : 1;
  // modalsearch가 떠져 있는 상태에서 underline, icon opacity : 1
  return (
    <>
      <StyledDiv className="linksContainer">
        {/* <a href='chrome://apps' target='_blank' rel='noopener noreferrer'> */}
        {/* <a href='chrome-search://local-ntp/local-ntp.html' target='_blank' rel='noopener noreferrer'> */}
        <div className="linkWrapper">
          <span className="links">Links</span>
          <BiSearch className="searchIcon" />
        </div>
        <div
          className="inputWrapper"
          onFocus={onFocus}
          onBlur={onFocusOut}
          tabIndex={-1}
        >
          <form
            onSubmit={submitSearch}
            className={classNames("form", { style })}
          >
            <label htmlFor="search" />
            <input
              type="text"
              id="search"
              value={keyword}
              onChange={onChangeKeyword}
              autoComplete="off"
              maxLength={255}
            />
            <span className="underline" />
            <div className="toggledIcon" onClick={openModal}>
              {google && <FcGoogle className="googleBtn" />}
              {naver && (
                <img src={naverLogo} alt="naverLogo" className="naverBtn" />
              )}
            </div>
          </form>
        </div>
      </StyledDiv>
      {searchModal && (
        <ModalSearch toggleNaver={toggleNaver} toggleGoogle={toggleGoogle} />
      )}
    </>
  );
}
