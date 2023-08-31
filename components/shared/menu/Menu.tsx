import Link from "next/link";
import { useRouter } from "next/router";
import React, { CSSProperties, useEffect, useState } from "react";
import styles from "./menu.module.css";

export const menuItems = [
  {
    text: "Inicio",
    href: "",
  },
  {
    text: "Sobre mi",
    href: "#sobre-mi",
  },
  {
    text: "Portafolio",
    href: "#portafolio",
  },
];

interface Props {
  isOpen: boolean;
}

export const Menu = ({ isOpen }: Props) => {
  const [menuActive, setMenuActive] = useState<string>("");

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    hrefActual: string
  ) => {
    e.preventDefault();

    setMenuActive(hrefActual);

    if (hrefActual == "") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const elem = document.querySelector(hrefActual);
      elem?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className={`${styles["items-menu"]} ${isOpen ? styles["show"] : ""}`}>
      {/* Inicio, sobre mi , portafolio*/}
      {menuItems.map(({ text, href }) => (
        <Link
          className={`${styles["menu-style"]} ${
            menuActive == href ? styles["active"] : ""
          }`}
          href={href}
          onClick={(e) => handleScroll(e, href)}
        >
          {text}
        </Link>
      ))}
    </nav>
  );
};
