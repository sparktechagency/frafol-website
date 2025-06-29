import React from "react";
import VideographyCategoryDetails from "@/components/Videographey/VideographyCategoryDetails";
import videographyData from "../../../../../public/data/videographyData";

interface VideographyCategoryDetailsPageProps {
  params: { id: string };
}
const VideographyCategoryDetailsPage = ({
  params,
}: VideographyCategoryDetailsPageProps) => {
  const { id } = params;
  const data = videographyData.find((item) => item.id === id);

  return (
    <div>
      <VideographyCategoryDetails data={data} />
    </div>
  );
};

export default VideographyCategoryDetailsPage;
