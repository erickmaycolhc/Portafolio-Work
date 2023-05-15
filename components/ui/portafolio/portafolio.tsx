import { Button, Card, Col, Grid, Row, Text } from "@nextui-org/react";
import styles from "./portafolio.module.css";
import Link from "next/link";
import { CardHeader, List } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useState } from "react";

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
              <Grid.Container gap={2} justify="flex-start">
                <Grid xs={12} sm={5}>
                  <Card /*isPressable*/ isHoverable variant="flat">
                    <Card.Body>
                      <div>
                        <Link href="https://pokemoness.vercel.app">
                          <Card.Image
                            src="download/pokemones.png"
                            objectFit="cover"
                            width="100%"
                            height="100%"
                          />
                        </Link>
                      </div>
                    </Card.Body>

                    {/* <Card.Divider
                      style={{
                        background: "#9BA1A6",
                      }}
                    /> */}
                    <Card.Header
                      css={{ display: "flex", justifyContent: "center" }}
                    >
                      <Text b css={{ fontSize: "30px", fontWeight: "$medium" }}>
                        Pokemones
                      </Text>
                    </Card.Header>
                    {/* <Card.Divider /> */}
                    <Card.Header
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <List
                        style={{
                          display: "flex",
                          gap: "1rem",
                          justifyContent: "center",
                        }}
                      >
                        <Card.Image
                          src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg"
                          width="34px"
                          height="34px"
                          style={{
                            transition: "transform 0.3s ease-in-out",
                            cursor: "pointer",
                          }}
                        />
                        <Card.Image
                          src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-original.svg"
                          width="34px"
                          height="34px"
                          style={{
                            transition: "transform 0.3s ease-in-out",
                            cursor: "pointer",
                          }}
                        />
                        <Card.Image
                          src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/mongodb/mongodb-original.svg"
                          width="34px"
                          height="34px"
                          style={{
                            transition: "transform 0.3s ease-in-out",
                            cursor: "pointer",
                          }}
                        />
                        <Card.Image
                          src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                          width="34px"
                          height="34px"
                          style={{
                            transition: "transform 0.3s ease-in-out",
                            cursor: "pointer",
                          }}
                        />
                      </List>
                    </Card.Header>
                    {/* <Card.Divider /> */}

                    <Card.Header
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Row justify="center">
                        <Link href="https://pokemoness.vercel.app">
                          <Button
                            flat
                            auto
                            rounded
                            // css={{ color: "#94f9f0", bg: "#94f9f026" }}
                            color="gradient"
                          >
                            <Text
                              css={{ color: "inherit", paddingRight: "5px" }}
                              size={12}
                              weight="bold"
                              transform="uppercase"
                            >
                              Ver
                            </Text>
                            <RemoveRedEyeIcon />
                          </Button>
                        </Link>
                      </Row>
                      <Row justify="center">
                        <Link href="https://github.com/erickmaycolhc/pokemones">
                          <Button
                            flat
                            auto
                            rounded
                            // css={{ color: "#94f9f0", bg: "#94f9f026" }}
                            color="gradient"
                          >
                            <Text
                              css={{ color: "inherit", paddingRight: "5px" }}
                              size={12}
                              weight="bold"
                              transform="uppercase"
                            >
                              Código
                            </Text>
                            <GitHubIcon />
                          </Button>
                        </Link>
                      </Row>
                    </Card.Header>
                  </Card>
                </Grid>
              </Grid.Container>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
