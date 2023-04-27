import Head from "next/head";
import { Navbar } from "../ui/menu/Navbar";
import { ReactNode } from "react";
import { ParticlesBackground } from "../config/ParticlesBackbround";

interface Props {
  children: ReactNode;
}

export const MainLayout = ({ children }: Props) => {
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
