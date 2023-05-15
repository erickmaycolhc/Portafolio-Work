import { Grid } from "@nextui-org/react";
import styles from "./portafolio.module.css";
import { CardProject } from "../../ui/cards/CardProject";
import listProjects from "@/data/projects/projects.json";

export const Portafolio = () => {
  return (
    <>
      <div
        className={styles["container-section-portafolio"]}
        style={{ height: "500px" }}
      >
        <section className={styles["section"]} id="portafolio">
          <div className={styles["container"]}>
            <div className={styles["container-title-portafolio"]}>
              <h1>Portafolio</h1>
            </div>
            <div className={styles["container-grid"]}>
              <Grid.Container gap={2} justify="center">
                {listProjects.map((project, index) => {
                  return (
                    <CardProject
                      link={project.link}
                      img={project.img}
                      title={project.title}
                      tecnologies={project.tecnologies}
                      ver={project.ver}
                      linkCode={project.linkCode}
                    />
                  );
                })}
              </Grid.Container>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
