import React from "react";
import photographerData from "../../../../../public/data/photographerData";
import PhotographyCategoryDetails from "@/components/Photography/PhotographyCategoryDetails";

interface PhotographyCategoryDetailsPageProps {
  params: { id: string };
}

const PhotographyCategoryDetailsPage = ({
  params,
}: PhotographyCategoryDetailsPageProps) => {
  const { id } = params;
  const data = photographerData.find((item) => item.id === id);

  return (
    <div>
      <PhotographyCategoryDetails data={data} />
    </div>
  );
};

export default PhotographyCategoryDetailsPage;
