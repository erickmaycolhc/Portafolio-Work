import React from "react";
import styles from "./ProfileComponent.module.css";

interface Vinculo {
  image: string;
  link: string;
}
interface Vinculo2 {
  image: string;
  link: string;
}

type Props = {
  title: string;
  description: string;
  url: Vinculo[];
  url2: Vinculo2[];
  name: string[];
  name2: string[];
};

const ProfileComponent = ({
  title,
  description,
  url,
  url2,
  name,
  name2,
}: Props) => {
  const componentSkill = () => {
    return (
      <div className={styles["skills-container"]}>
        <h4>SKILLS</h4>
        <div className={styles["container gaps"]}>
          <div className={styles["gap-1"]}>
            {url.map((skill, i) => {
              return (
                <div className={styles["container-effect"]} key={i}>
                  <a
                    className={styles["link-kill-img"]}
                    href={skill.link}
                    target="_blank"
                  >
                    <img
                      className={styles["skill-img"]}
                      src={skill.image}
                      width={50}
                      height={50}
                    ></img>
                  </a>
                  <span className={styles["tool-tip"]}>{name[i]}</span>
                </div>
              );
            })}
          </div>
          <div className={styles["gap-2"]}>
            {url2.map((skill2, i) => {
              return (
                <div className={styles["container-effect-2"]} key={i}>
                  <a
                    className={styles["link-kill-img-2"]}
                    href={skill2.link}
                    target="_blank"
                  >
                    <img
                      className={styles["skill-img-2"]}
                      src={skill2.image}
                      width={50}
                      height={50}
                    ></img>
                  </a>
                  <span className={styles["tool-tip-2"]}>{name2[i]}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className={styles["section"]} id="sobre-mi">
      <div className={styles["container"]}>
        <div className={styles["title-about"]}>
          <h1>{title}</h1>
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
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            </div>
            {componentSkill()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileComponent;
