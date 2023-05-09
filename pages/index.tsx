import { MainLayout } from "@/components/layout/MainLayout";
import { Banner } from "@/components/ui";
import { Portafolio } from "@/components/ui/portafolio";
import ProfileComponent from "@/components/ui/profile/ProfileComponent";

export default function HomePage() {
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
            skills={[
              "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original.svg",
              "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original.svg",
            ]}
            name={[
              "HTML",
              // "CSS",
              // "JavaScript",
              // "React",
              // "Java",
              // "MySQL",
              // "MongoDB",
              // "Git",
              // "Typescript",
              // "Postman",
            ]}
          />
          <Portafolio />
        </div>
      </MainLayout>
    </>
  );
}
