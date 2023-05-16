import { MainLayout } from "@/components/layout/MainLayout";
import { Portafolio } from "@/components/shared/portafolio";
import ProfileComponent from "@/components/shared/profile/ProfileComponent";
import { useEffect } from "react";
import listProject from "@/data/projects/projects.json";
import { Banner } from "@/components/shared/banner";
import { Footer } from "@/components/shared/footer/footer";

export default function HomePage() {
  useEffect(() => {
    console.log("project=>>", listProject);
    return () => {};
  }, []);
  return (
    <>
      <MainLayout>
        <div className="container-page">
          <Banner />
          <ProfileComponent
            title={"Sobre mi"}
            description={
              "Tengo 20 años y soy estudiante de ingeniería de software en la universidad de ciencias aplicadas(UPC). Soy de Perú, Apacionado por la programación y el diseño. La zona de confort no me atrae, por eso soy autodidacta para especializarme como programador capacitado."
            }
            url={[
              "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original.svg",
              "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original.svg",
              "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-original.svg",
              "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-plain.svg",
              "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg",
            ]}
            url2={[
              "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/java/java-original.svg",
              "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/mysql/mysql-original.svg",
              "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/mongodb/mongodb-original.svg",
              "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/github/github-original-wordmark.svg",
              "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
            ]}
            name={["HTML", "CSS", "Typescript", "JavaScript", "React"]}
            name2={["Java", "MySQL", "MongoDB", "Github", "Postman"]}
          />

          <Portafolio />
        </div>
        <Footer />
      </MainLayout>
    </>
  );
}
