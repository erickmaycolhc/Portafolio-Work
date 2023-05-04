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
          <ProfileComponent />
          <Portafolio />
        </div>
      </MainLayout>
    </>
  );
}
