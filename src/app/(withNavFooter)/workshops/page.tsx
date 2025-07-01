import Container from "@/components/ui/Container";
import SectionBanner from "@/components/ui/SectionBanner";
import WorkshopsPage from "@/components/Workshops/WorkshopsPage";
import React from "react";
import { AllImages } from "../../../../public/assets/AllImages";

const page = () => {
  return (
    <main>
      <SectionBanner image={AllImages.workspaceBanner?.src} title="Workshops" />
      <Container>
        <WorkshopsPage />
      </Container>
    </main>
  );
};

export default page;
