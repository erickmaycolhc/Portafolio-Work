import Head from "next/head";
import { Navbar } from "../shared/menu/Navbar";
import { ReactNode } from "react";
import { ParticlesBackground } from "../config/ParticlesBackbround";

interface Props {
  children: ReactNode;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const MainLayout = ({ children }: Props) => {
  console.log(origin);
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

        <meta property="og:title" content="Portafolio" />
        <meta
          property="og:description"
          content="Este es mi portafolio espero y les guste."
        />
        <meta property="og:image" content="http://localhost:3000/img/m.png" />
      </Head>
      <Navbar />

      {children}
    </>
  );
};
