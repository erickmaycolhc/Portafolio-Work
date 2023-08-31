import React, { useState } from "react";
import styles from "./home.module.css";
// import styles from "../menu/menu.module.css";
import { ButttonCv } from "../../ui/boton-cv/butttonCv";
import Link from "next/link";
import { useRouter } from "next/router";
import { menuItems } from "../menu";

const { href } = menuItems[1];
console.log("href =>>>", href);
export const Banner = () => {
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
    <>
      <div className={styles["container-header-perfile"]}>
        <div className={styles["container-user-cv"]}>
          <div className={styles["nombre"]}>
            <h2>
              <span className={styles["hola"]}>Hola, </span>
              <span className={styles["soy"]}>soy</span>
            </h2>
            <h1 className={styles["nombre-name"]}>Maycol Huallullo Cirineo</h1>
          </div>
          <div className={styles["ocupación"]}>
            <p className={styles["description"]}>Ingeniero de software</p>
          </div>
          <div className={styles["buttom-cv"]}>
            <ButttonCv />
          </div>
        </div>
        <div className={styles["photo"]}>
          <img src="img/mm.png" alt="" />
        </div>
        <div
          className={`${styles["boton-hacia-abajo"]} ${
            menuActive === href ? styles["active"] : ""
          }`}
        >
          <Link href={href} onClick={(e) => handleScroll(e, href)}>
            <span></span>
            <span></span>
          </Link>
        </div>
      </div>
    </>
  );
};
