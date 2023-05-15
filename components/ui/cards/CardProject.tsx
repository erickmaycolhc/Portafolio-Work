import { Card, Grid, Text, Row, Button } from "@nextui-org/react";
import Link from "next/link";
import { List } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import GitHubIcon from "@mui/icons-material/GitHub";
import { technology } from "@/interfaces/technology";

type Props = {
  link: string;
  img: string;
  title: string;
  tecnologies: technology[];
  ver: string;
  linkCode: string;
};

export const CardProject = ({
  link,
  img,
  title,
  tecnologies,
  ver,
  linkCode,
}: Props) => {
  return (
    <Grid xs={12} sm={5} lg={5}>
      <Card isHoverable variant="flat">
        <Card.Body>
          <div>
            <Link href={link}>
              <Card.Image
                src={img}
                objectFit="cover"
                width="100%"
                height="100%"
              />
            </Link>
          </div>
        </Card.Body>

        <Card.Header css={{ display: "flex", justifyContent: "center" }}>
          <Text b css={{ fontSize: "30px", fontWeight: "$medium" }}>
            {title}
          </Text>
        </Card.Header>
        <Card.Header style={{ display: "flex", justifyContent: "center" }}>
          <List
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            {tecnologies.map((technology, i) => {
              return (
                <Card.Image
                  key={i}
                  src={technology.url}
                  width="34px"
                  height="34px"
                  style={{
                    transition: "transform 0.3s ease-in-out",
                    cursor: "pointer",
                  }}
                />
              );
            })}
          </List>
        </Card.Header>

        <Card.Header
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Row justify="flex-end" style={{ paddingRight: 25 }}>
            <Link href={ver}>
              <Button flat auto rounded color="gradient">
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
          <Row justify="flex-start">
            <Link href={linkCode}>
              <Button flat auto rounded color="gradient">
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
  );
};
