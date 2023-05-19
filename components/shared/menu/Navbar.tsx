import Link from "next/link";
import { Menu } from "./Menu";
import styles from "./menu.module.css";
import { Grid, Switch, Spacer } from "@nextui-org/react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

export const Navbar = () => {
  // const flagsElement = document.getElementById("falgs");

  // flagsElement.addEventListener("click", (e) => {
  //   console.log(e.target);
  // });

  const [isOpen, setIsOpen] = useState(false);
  const [isLenguajeActive, setIsLenguajeActive] = useState(false);

  // const [currentLanguage, setCurrentLanguage] = useState("es");

  // const [texts, setTexts] = useState({});

  useEffect(() => {
    // console.log("ddd ==> ", isLenguajeActive);
  }, [isLenguajeActive]);

  const changeLenguaje = async () => {
    setIsLenguajeActive(!isLenguajeActive);

    // if (isLenguajeActive) {
    //   setCurrentLanguage("es");
    // } else {
    //   setCurrentLanguage("en");
    // }
    // const response = await import(`../../../lenguajes/en.json`);
    // setTexts(response.default);
  };

  const handlerOnClickMenu = () => {
    console.log("handlerOnClickMenu=>>>", isOpen);
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <header className={styles["header-container"]}>
      <div className={`${styles["menu-container"]}`}>
        <div className={styles["wrapper-logo"]}>
          <Link href={"/"}>
            {/* logo de mi nombre*/}
            <img
              className={styles["edit-logo"]}
              src="download/m.png"
              alt=""
              id=""
              width={55}
              height={60}
            />
          </Link>
          {/* ///////////////////////////////////////////////////////////////////// */}
          <div>
            <IconButton
              className={`${styles["open-hamburguer"]}`}
              onClick={handlerOnClickMenu}
            >
              {isOpen ? (
                <CloseIcon fontSize="large" sx={{ color: "white" }} />
              ) : (
                <MenuIcon fontSize="large" sx={{ color: "white" }} />
              )}
            </IconButton>
          </div>
        </div>

        {/* ///////////////////////////////////////////////////////////////////// */}
        <Menu isOpen={isOpen} />

        <div
          className={`${styles["caja-tema-idioma"]} ${
            isOpen ? styles["show"] : ""
          }`}
        >
          <div className={styles["dark"]}>
            <Grid.Container
              gap={2} /*className={`${styles["row-center"]}`}*/
              style={{
                display: "flex",
                justifyContent: "center",
                marginLeft: "6px",
              }}
            >
              <Switch
                className={`${styles["input-change-country"]}  ${
                  isLenguajeActive ? styles["checked"] : ""
                }`}
                id="flags"
                shadow
                checked={isLenguajeActive}
                onChange={() => changeLenguaje()}
                size="xl"
                iconOn={<img src="img/español.png" alt="" />}
                iconOff={<img src="img/ingles.png" alt="" />}
              />
              <Spacer />
            </Grid.Container>
          </div>
        </div>
      </div>
    </header>
  );
};
