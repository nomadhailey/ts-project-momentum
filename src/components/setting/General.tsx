import React from "react";
import classNames from "classnames";
import { themeProps } from "./ModalMain";

import {
  StyledDiv,
  StyledHeader,
  StyledUl,
  StyledTheme,
} from "./General.style";

let generalList = [
  { id: 1, text: "Links", check: true },
  { id: 2, text: "Search", check: true },
  { id: 3, text: "Weather", check: true },
  { id: 4, text: "Focus", check: true },
  { id: 5, text: "Todo", check: true },
  { id: 6, text: "Quotes", check: true },
];

export default function General({ theme, clickDark, clickLight }: themeProps) {
  const settingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const $label = e.target.parentNode!.parentNode as Element;
    const $labelCtr = $label.getAttribute("data-ctr");
    if ($label.classList.contains("active")) {
      $label.className = "";
      switch ($labelCtr) {
        case "Links":
          document.querySelector(".linksContainer")!.classList.add("hidden");
          generalList[1].check = false;
          break;
        case "Search":
          document.querySelector(".searchContainer")!.classList.add("hidden");
          generalList[2].check = false;
          break;
        case "Weather":
          document.querySelector(".weatherContainer")!.classList.add("hidden");
          generalList[3].check = false;
          break;
        case "Focus":
          document.querySelector(".focusContainer")!.classList.add("hidden");
          generalList[4].check = false;
          break;
        case "Todo":
          document.querySelector(".todoContainer")!.classList.add("hidden");
          generalList[5].check = false;
          break;
        case "Quotes":
          document.querySelector(".quotesContainer")!.classList.add("hidden");
          generalList[6].check = false;
          break;
        default:
          console.log("알 수 없는 에러");
      }
    } else {
      $label.className = "active";
      switch ($labelCtr) {
        case "Links":
          document.querySelector(".linksContainer")!.classList.remove("hidden");
          generalList[1].check = false;
          break;
        case "Search":
          document
            .querySelector(".searchContainer")!
            .classList.remove("hidden");
          generalList[2].check = false;
          break;
        case "Weather":
          document
            .querySelector(".weatherContainer")!
            .classList.remove("hidden");
          generalList[3].check = false;
          break;
        case "Focus":
          document.querySelector(".focusContainer")!.classList.remove("hidden");
          generalList[4].check = false;
          break;
        case "Todo":
          document.querySelector(".todoContainer")!.classList.remove("hidden");
          generalList[5].check = false;
          break;
        case "Quotes":
          document
            .querySelector(".quotesContainer")!
            .classList.remove("hidden");
          generalList[6].check = false;
          break;
        default:
          console.log("알 수 없는 에러");
      }
    }
  };

  return (
    <StyledDiv>
      <StyledHeader>
        <h3>General</h3>
        <p className="description">Customize your dashboard</p>
      </StyledHeader>
      <StyledUl>
        <h4>SHOW</h4>
        {generalList.map((item) => (
          <li key={item.id}>
            <label data-ctr={item.text} className={item.check ? "active" : ""}>
              {item.text}
              <div className="viewCtr">
                <input
                  type="checkbox"
                  checked={item.check}
                  onChange={settingChange}
                />
                <span className="btn"></span>
              </div>
            </label>
          </li>
        ))}
      </StyledUl>
      <StyledTheme>
        <h4>CUSTOMIZE</h4>
        <ul className="themeContainer">
          <li>
            <span>Theme</span>
            <ul className="themeOptions">
              <li onClick={clickDark} className={classNames("dark", { theme })}>
                Dark
              </li>
              <li
                onClick={clickLight}
                className={classNames("light", { theme })}
              >
                Light
              </li>
            </ul>
          </li>
        </ul>
      </StyledTheme>
    </StyledDiv>
  );
}
