import React from "react";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import ExploreCategoryTab from "./ExploreCategoryTab";

const ExploreCategories = () => {
  return (
    <section className="py-28">
      <Container>
        <SectionHeader
          title="Explore Categories"
          description="Frafol makes it easy to find and hire the perfect photographer or videographer for your project."
        />
        <div className="mt-16">
          <ExploreCategoryTab />
        </div>
      </Container>
    </section>
  );
};

export default ExploreCategories;
