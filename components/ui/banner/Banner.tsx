import React from "react";
import styles from "./home.module.css";
// import styles from "../menu/menu.module.css";
import { ButttonCv } from "../boton-cv/butttonCv";

export const Banner = () => {
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
          <img src="img/user.png" alt="" />
        </div>
        <div className={styles["boton-hacia-abajo"]}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
};
