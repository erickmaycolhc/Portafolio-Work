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
              "Tengo 20 años y soy estudiante de ingeniería de software en la universidad de ciencias aplicadas(UPC). Soy de Perú, Apasionado por la programación y el diseño. La zona de confort no me atrae, por eso soy autodidacta para especializarme como programador capacitado."
            }
            url={[
              {
                image:
                  "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original.svg",
                link: "https://developer.mozilla.org/es/docs/Web/HTML",
              },
              {
                image:
                  "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original.svg",
                link: "https://developer.mozilla.org/es/docs/Web/CSS",
              },
              {
                image:
                  "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-original.svg",
                link: "https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html",
              },
              {
                image:
                  "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-plain.svg",
                link: "https://developer.mozilla.org/es/docs/Web/JavaScript",
              },
              {
                image:
                  "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg",
                link: "https://legacy.reactjs.org/docs/getting-started.html",
              },
            ]}
            url2={[
              {
                image:
                  "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/java/java-original.svg",
                link: "https://docs.oracle.com/javase/8/docs/",
              },
              {
                image:
                  "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/mysql/mysql-original.svg",
                link: "https://dev.mysql.com/doc/",
              },
              {
                image:
                  "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/mongodb/mongodb-original.svg",
                link: "https://www.mongodb.com/cloud/atlas/lp/try4?utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_core_prosp-brand_gic-null_amers-pe_ps-all_desktop_eng_lead&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624332&adgroup=115749719263&cq_cmp=12212624332&gad=1&gclid=CjwKCAjw9pGjBhB-EiwAa5jl3OMMh1x68ix9j3JtTaHzR8LrxKUNTIdPmBBr4ABKjhcnXJV--pfWEBoC32QQAvD_BwE",
              },

              {
                image: "https://img.icons8.com/?size=512&id=63777&format=png",
                link: "https://docs.github.com/en",
              },
              {
                image:
                  "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
                link: "https://learning.postman.com/docs/publishing-your-api/documenting-your-api/",
              },
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
