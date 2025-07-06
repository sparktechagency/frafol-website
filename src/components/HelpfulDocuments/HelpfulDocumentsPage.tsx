import React from "react";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import HelpfulDocumentsTabs from "./HelpfulDocumentsTabs";

const HelpfulDocumentsPage = () => {
  return (
    <section>
      <Container>
        <SectionHeader
          title="Helpful Documents"
          description="Download useful templates and legal documents for your photography and videography projects"
        />
        <HelpfulDocumentsTabs />
      </Container>
    </section>
  );
};

export default HelpfulDocumentsPage;
