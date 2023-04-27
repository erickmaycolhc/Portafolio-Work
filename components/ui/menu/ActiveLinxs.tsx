import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties } from "react";
import styles from "./menu.module.css";

type props = {
  text: string;
  href: string;
};

const style: CSSProperties = {
  color: "#D5BE74",
  textDecoration: "none",
};

export const ActiveLink = ({ text, href }: props) => {
  const { asPath } = useRouter();

  return (
    <Link
      className={styles["menu-style"]}
      style={asPath === href ? style : undefined}
      href={href}
    >
      {text}
    </Link>
  );
};
