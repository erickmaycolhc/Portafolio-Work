import React from "react";
import styles from "./ProfileComponent.module.css";

const ProfileComponent = () => {
  return (
    <section className={styles["section"]} id="sobre-mi">
      <div className={styles["container"]}>
        <div className={styles["title-about"]}>
          <h1> Sobre mi</h1>
        </div>
        <div className={styles["container-about"]}>
          <div className={styles["photo"]}>
            <img src="img/user.png" alt="" />
          </div>
          <div className={styles["container-descrip-skills"]}>
            <div className={styles["container-description"]}>
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
                      Tengo 20 años y soy estudiante de ingeniería de software
                      en la universidad de ciencias aplicadas(UPC). Soy de Perú,
                      Apacionado por la programación y el diseño. La zona de
                      confort no me atrae, por eso soy autodidacta para
                      especializarme como programador capacitado.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["container-skills-container"]}>
              <div className={styles["skills-container"]}>
                <h4>SKILLS</h4>
                <div className={styles["gap-1"]}>
                  <a
                    className={styles["link-kill-img"]}
                    href="https://developer.mozilla.org/es/docs/Web/HTML"
                    target="_blank"
                  >
                    <span className={styles["tool-tip"]}>HTML</span>
                    <img
                      className={styles["skill-img"]}
                      src="download/html.svg"
                      width={50}
                      height={50}
                    ></img>
                  </a>
                  <a
                    className={styles["link-kill-img"]}
                    href="https://developer.mozilla.org/es/docs/Web/CSS"
                    target="_blank"
                  >
                    <span className={styles["tool-tip"]}>CSS</span>
                    <img
                      className="skill-img"
                      src="download/css.svg"
                      width={50}
                      height={50}
                    ></img>
                  </a>
                  <a
                    className={styles["link-kill-img"]}
                    href="https://developer.mozilla.org/es/docs/Web/JavaScript"
                    target="_blank"
                  >
                    <span className={styles["tool-tip"]}>JavaScript</span>
                    <img
                      className="skill-img"
                      src="download/js.svg"
                      width={50}
                      height={50}
                    ></img>
                  </a>
                  <a
                    className={styles["link-kill-img"]}
                    href="https://es.react.dev"
                    target="_blank"
                  >
                    <span className={styles["tool-tip"]}>React</span>
                    <img
                      className="skill-img"
                      src="download/reactjs.svg"
                      width={50}
                      height={50}
                    ></img>
                  </a>
                  <a
                    className={styles["link-kill-img"]}
                    href="https://www.oracle.com/pe/java/"
                    target="_blank"
                  >
                    <span className={styles["tool-tip"]}>Java</span>
                    <img
                      className="skill-img"
                      src="download/java.svg"
                      width={50}
                      height={50}
                      style={{ borderRadius: "20%" }}
                    ></img>
                  </a>
                </div>
                <div className={styles["gap-2"]}>
                  <a
                    className={styles["link-kill-img"]}
                    href="https://www.mysql.com"
                    target="_blank"
                  >
                    <span className={styles["tool-tip"]}>MySQL</span>
                    <img
                      className="skill-img"
                      src="download/mysql.svg"
                      width={50}
                      height={50}
                    ></img>
                  </a>
                  <a
                    className={styles["link-kill-img"]}
                    href="https://www.mongodb.com"
                    target="_blank"
                  >
                    <span className={styles["tool-tip"]}>MongoDB</span>
                    <img
                      className="skill-img"
                      src="download/mongo.svg"
                      width={50}
                      height={50}
                    ></img>
                  </a>
                  <a
                    className={styles["link-kill-img"]}
                    href="https://git-scm.com"
                    target="_blank"
                  >
                    <span className={styles["tool-tip"]}>Git</span>
                    <img
                      className="skill-img"
                      src="download/git2.svg"
                      width={50}
                      height={50}
                    ></img>
                  </a>
                  <a
                    className={styles["link-kill-img"]}
                    href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"
                    target="_blank"
                  >
                    <span className={styles["tool-tip"]}>Typescript</span>
                    <img
                      className="skill-img"
                      src="download/typescript.png"
                      width={50}
                      height={50}
                      style={{ borderRadius: "20%" }}
                    ></img>
                  </a>
                  <a
                    className={styles["link-kill-img"]}
                    href="https://www.postman.com"
                    target="_blank"
                  >
                    <span className={styles["tool-tip"]}>Postman</span>
                    <img
                      className="skill-img"
                      src="download/postman.png"
                      width={50}
                      height={50}
                      style={{ borderRadius: "20%" }}
                    ></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileComponent;
