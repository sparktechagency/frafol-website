import React from "react";
import VideographyCategoryDetails from "@/components/Videographey/VideographyCategoryDetails";
import videographyData from "../../../../../public/data/videographyData";

const VideographyCategoryDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>; // Type params as a Promise
}) => {
  const { id } = await params; // Await the params to resolve the Promise
  const data = videographyData.find((item) => item.id === id);

  return (
    <div>
      <VideographyCategoryDetails data={data} />
    </div>
  );
};

export default VideographyCategoryDetailsPage;
