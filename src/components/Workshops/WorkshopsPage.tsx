"use client";
import React from "react";
import SectionHeader from "../ui/SectionHeader";
import WorkShopsCards from "../shared/WorkShopsCards";
import RegisterWorkshopModal from "../ui/Modal/RegisterWorkshopModal";

const WorkshopsPage = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const openModal = () => setIsOpen(true);
  return (
    <div className="py-20">
      <SectionHeader
        title="Photography & Videography Workshops"
        description="Learn new skills and techniques from industry professionals."
      />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {Array.from({ length: 12 }).map((_, index) => (
          <WorkShopsCards openModal={openModal} key={index} />
        ))}
      </div>
      <RegisterWorkshopModal
        isModalVisible={isOpen}
        handleCancel={() => setIsOpen(false)}
      />
    </div>
  );
};

export default WorkshopsPage;
