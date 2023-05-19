import Link from "next/link";
import styles from "./redes.module.css";

import { Avatar, Grid } from "@nextui-org/react";

interface SocialNetworks {
  icon: React.ReactNode;
  link: string;
}

type Props = {
  socialNetworks: SocialNetworks[];
};

export const Redes = ({ socialNetworks }: Props) => {
  return (
    <Grid.Container gap={1}>
      <Grid xs={12} style={{ display: "flex", justifyContent: "center" }}>
        <Grid style={{ display: "flex" }} className={`${styles["containers"]}`}>
          {socialNetworks.map(({ icon, link }) => {
            return (
              <>
                <Link href={link} target="_blank">
                  <Avatar
                    key={link}
                    icon={icon}
                    size="md"
                    pointer
                    bordered
                    zoomed
                  />
                </Link>
              </>
            );
          })}
        </Grid>
      </Grid>
    </Grid.Container>
  );
};
