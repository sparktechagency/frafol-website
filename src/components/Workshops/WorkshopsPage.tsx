"use client";
import React, { Suspense } from "react";
import SectionHeader from "../ui/SectionHeader";
import WorkShopsCards from "../shared/WorkShopsCards";
import RegisterWorkshopModal from "../ui/Modal/RegisterWorkshopModal";
import { IWorkshop } from "@/types";
import PaginationSection from "../shared/PaginationSection";

const WorkshopsPage = ({
  workshops,
  totalData,
  page,
  limit,
}: {
  workshops: IWorkshop[];
  totalData: number;
  page: number;
  limit: number;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const openModal = () => setIsOpen(true);
  return (
    <div className="py-20">
      <SectionHeader
        title="Photography & Videography Workshops"
        description="Learn new skills and techniques from industry professionals."
      />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {workshops.map((item) => (
          <WorkShopsCards openModal={openModal} key={item._id} data={item} />
        ))}
      </div>
      <div className="mt-16 flex justify-center items-center">
        <Suspense fallback={<div>Loading...</div>}>
          <PaginationSection page={page} limit={limit} totalData={totalData} />
        </Suspense>
      </div>

      <RegisterWorkshopModal
        isModalVisible={isOpen}
        handleCancel={() => setIsOpen(false)}
      />
    </div>
  );
};

export default WorkshopsPage;
