/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import VideographyCategoryDetails from "@/components/Videographey/VideographyCategoryDetails";
import videographyData from "../../../../../public/data/videographyData";

const VideographyCategoryDetailsPage = ({ params }: { params: any }) => {
  const { id } = params;
  const data = videographyData.find((item) => item.id === id);

  return (
    <div>
      <VideographyCategoryDetails data={data} />
    </div>
  );
};

export default VideographyCategoryDetailsPage;
