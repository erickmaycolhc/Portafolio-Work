import Link from "next/link";
import { ActiveLink } from "./ActiveLinxs";
import styles from "./menu.module.css";
import { Avatar, Button, Grid, Switch } from "@nextui-org/react";
import SunIcon from "@/components/utils/SunIcon";
import MoonIcon from "@/components/utils/MoonIcon";
import { ParticlesBackground } from "@/components/config/ParticlesBackbround";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const menuItems = [
  {
    text: "Inicio",
    href: "/",
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

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handlerOnClickMenu = () => {
    console.log("handlerOnClickMenu=>>>", isOpen);
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  // const [isClose, setIsClose] = useState(false);
  // const handlerOnClickClose = () => {
  //   console.log("handlerOnClickClose =>>>", isClose);
  //   if (isClose) {
  //     setIsClose(false);
  //   } else {
  //     setIsClose(true);
  //   }
  // };

  return (
    <header className={styles["header-container"]}>
      <div className={`${styles["menu-container"]}`}>
        <div className={styles["wrapper-logo"]}>
          <Link href={"/"}>
            {/* logo de mi nombre*/}
            <img
              className={styles["edit-logo"]}
              src="/img/logaso.png"
              alt=""
              width={60}
              height={65}
            />
          </Link>
          {/* ///////////////////////////////////////////////////////////////////// */}
          <div>
            <IconButton
              className={`${styles["open-hamburguer"]}`}
              onClick={handlerOnClickMenu}
            >
              {isOpen ? (
                <CloseIcon
                  sx={{ color: "white", fontSize: "50px", padding: "0" }}
                />
              ) : (
                <MenuIcon sx={{ color: "white", fontSize: "50px" }} />
              )}
            </IconButton>
          </div>
        </div>

        {/* ///////////////////////////////////////////////////////////////////// */}
        <nav
          className={`${styles["items-menu"]} ${isOpen ? styles["show"] : ""}`}
        >
          {/* Inicio, sobre mi , portafolio*/}
          {menuItems.map(({ text, href }) => (
            <ActiveLink key={href} text={text} href={href} />
          ))}
        </nav>
        <div
          className={`${styles["caja-tema-idioma"]} ${
            isOpen ? styles["show"] : ""
          }`}
        >
          <div className={styles["dark"]}>
            <Grid.Container
              gap={2} /*className={`${styles["row-center"]}`}*/
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Switch
                checked={true}
                size="xl"
                iconOn={<img src="img/ingles.png" alt="" />}
                iconOff={<img src="img/español.png" alt="" />}
              />
            </Grid.Container>
          </div>
        </div>
      </div>
    </header>
  );
};
