import React from "react";
import styles from "./ProfileComponent.module.css";

const ProfileComponent = () => {
  return (
    <section className={styles["section"]}>
      <div className={styles["container"]}>
        <div className={styles["title-about"]}>
          <h1> About</h1>
        </div>
        <div className={styles["container-about"]}>
          <div className={styles["photo"]}>
            <img src="img/erick.png" alt="" />
          </div>
          <div className={styles["container-descrip-skills"]}>
            <div className={styles["description"]}>
              <div className={styles["container-cuerpo-menu"]}>
                <div className={styles["caja-semaforo"]}>
                  <span className={styles["btn-red"]}></span>
                  <span className={styles["btn-yellow"]}></span>
                  <span className={styles["btn-green"]}></span>
                </div>
                <div className={styles["caja-about"]}>about.txt</div>
              </div>

              <div className={styles["container-cuerpo-parrafo"]}>
                <div className={styles["comentario-1"]}>1</div>
                <div className={styles["descrip-erick"]}>
                  <p>
                    Tengo 20 años y soy estudiante de ingeniería de software en
                    la universidad de ciencias aplicadas(UPC). Soy de Perú,
                    Apacionado por la programación y el diseño. La zona de
                    confort no me atrae, por eso soy autodidacta para
                    especializarme como programador capacitado.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles["skilss"]}>skills</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileComponent;
