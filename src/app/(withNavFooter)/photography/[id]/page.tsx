// app/(withNavFooter)/photography/[id]/page.tsx

import React from "react";
import PhotographyCategoryDetails from "@/components/Photography/PhotographyCategoryDetails";
import photographerData from "../../../../../public/data/photographerData";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PhotographyCategoryDetailsPage = async ({ params }: { params: any }) => {
  const { id } = params;

  const data = photographerData.find((item) => item.id === id);

  return (
    <div>
      <PhotographyCategoryDetails data={data} />
    </div>
  );
};

export default PhotographyCategoryDetailsPage;
