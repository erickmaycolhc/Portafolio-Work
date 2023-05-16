import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <>
      <footer className={styles["container-footer"]}>
        <h1 className={styles["h1"]}>footer</h1>
        <div className={styles["footer"]}>
          <div className={styles["container-logo-links"]}></div>
          <div className={styles["container-contacto-links"]}></div>
        </div>
      </footer>
    </>
  );
};
