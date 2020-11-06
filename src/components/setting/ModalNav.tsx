import React from "react";
import { StyledNav } from "./ModalNav.style";

interface modalNav {
  children?: React.ReactNode;
}

let navList = [
  { id: 1, text: "General" },
  { id: 2, text: "Todo" },
  { id: 3, text: "Mantras" },
  { id: 4, text: "Photos" },
  { id: 5, text: "Quotes" },
  { id: 6, text: "Links" },
  { id: 7, text: "Balance" },
];
export default function ModalNav({ children }: modalNav) {
  const clickNav = ({
    currentTarget,
  }: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const clickEl = currentTarget as Element;
    const $ul = clickEl.parentNode as HTMLElement;
    [...$ul.children].map((li) =>
      li.classList.toggle("clicked", li === clickEl)
    );
  };

  return (
    <StyledNav>
      <ul>
        {navList.map((nav) => (
          <li key={nav.id} onClick={clickNav}>
            {nav.text}
          </li>
        ))}
      </ul>
      {children}
    </StyledNav>
  );
}
