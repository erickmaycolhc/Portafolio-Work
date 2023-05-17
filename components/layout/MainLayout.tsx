import Head from "next/head";
import { Navbar } from "../shared/menu/Navbar";
import { ReactNode, useEffect } from "react";
import { ParticlesBackground } from "../config/ParticlesBackbround";

interface Props {
  children: ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  // useEffect(() => {
  //   console.log("Width : movil: App" + window.innerWidth);
  //   console.log("Height : movil App" + window.innerHeight);
  //   alert("Width: " + window.innerWidth);
  //   alert("Height: " + window.innerHeight);
  // }, []);
  return (
    <>
      <ParticlesBackground />

      <Head>
        <title>Erick</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      {children}
    </>
  );
};
