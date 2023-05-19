import styles from "./footer.module.css";

import { Redes } from "@/components/ui/redes";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Avatar, Grid, Text } from "@nextui-org/react";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <footer className={styles["container-footer"]}>
        <div className={styles["footer"]}>
          <div className={styles["container-logo-redes"]}>
            <div className={styles["separate-sections"]}>
              <img src="download/m.png" alt="" width={70} height={70} />
              {/* <InstagramIcon />, <GitHubIcon />, <LinkedInIcon /> */}
              <div className={styles["container-redes"]}>
                <Redes
                  socialNetworks={[
                    {
                      icon: <InstagramIcon />,
                      link: "https://www.instagram.com/maycol_bnet/",
                    },
                    {
                      icon: <GitHubIcon />,
                      link: "https://github.com/erickmaycolhc",
                    },
                    {
                      icon: <LinkedInIcon />,
                      link: "https://www.linkedin.com/in/erick-maycol-hc-686084264/",
                    },
                  ]}
                />
              </div>
            </div>
          </div>

          <div className={styles["container-contacto-links"]}>
            <div className={styles["container-title"]}>
              <h1 className={styles["title"]}>Contactos</h1>
            </div>
            <div className={styles["container-contac"]}>
              <Grid.Container gap={1}>
                <Grid xs={12}>
                  <Grid style={{ display: "flex" }}>
                    <Link
                      href="https://mail.google.com/mail/u/0/#inbox"
                      target="_blank"
                    >
                      <Avatar
                        style={{ marginRight: "18px", fontFamily: "saira" }}
                        icon={<MailOutlineIcon />}
                        size="md"
                        pointer
                        bordered
                        // color="gradient"
                        zoomed
                      />
                    </Link>
                    <Text>erickmaycolhc@gmail.com</Text>
                  </Grid>
                </Grid>
              </Grid.Container>
            </div>
            <div className={styles["container-contacts"]}>
              <Grid.Container gap={1}>
                <Grid xs={12}>
                  <Grid style={{ display: "flex" }}>
                    <Link
                      href="https://api.whatsapp.com/send/?phone=993192658&text=Hola te escribo desde la web&type=phone_number&app_absent=0"
                      target="_blank"
                    >
                      <Avatar
                        style={{ marginRight: "18px", fontFamily: "saira" }}
                        icon={<LocalPhoneIcon />}
                        size="md"
                        pointer
                        bordered
                        // color="gradient"
                        zoomed
                      />
                    </Link>
                    <Text>+51 993 192 658</Text>
                  </Grid>
                </Grid>
              </Grid.Container>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
