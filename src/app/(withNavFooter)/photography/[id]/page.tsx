// app/(withNavFooter)/photography/[id]/page.tsx

import React from "react";
import PhotographyCategoryDetails from "@/components/Photography/PhotographyCategoryDetails";
import photographerData from "../../../../../public/data/photographerData";

const PhotographyCategoryDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>; // Type params as a Promise
}) => {
  const { id } = await params; // Await the params to resolve the Promise
  const data = photographerData.find((item) => item.id === id);

  return (
    <div>
      <PhotographyCategoryDetails data={data} />
    </div>
  );
};

export default PhotographyCategoryDetailsPage;
