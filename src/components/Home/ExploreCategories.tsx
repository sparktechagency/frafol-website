import React from "react";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import ExploreCategoryTab from "./ExploreCategoryTab";

const ExploreCategories = () => {
  return (
    <div className="py-20">
      <Container>
        <SectionHeader
          title="Explore Categories"
          description="Frafol makes it easy to find and hire the perfect photographer or videographer for your project."
        />
        <div className="mt-10">
          <ExploreCategoryTab />
        </div>
      </Container>
    </div>
  );
};

export default ExploreCategories;
