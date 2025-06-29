import SectionBanner from "@/components/ui/SectionBanner";
import React from "react";
import { AllImages } from "../../../../public/assets/AllImages";
import Container from "@/components/ui/Container";
import ForumPage from "@/components/Forum/ForumPage";

const page = () => {
  return (
    <main className="pb-20">
      <SectionBanner image={AllImages?.forum?.src} title="Forum" />
      <Container>
        <ForumPage />
      </Container>
    </main>
  );
};

export default page;
