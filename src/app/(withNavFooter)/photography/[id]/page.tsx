// app/(withNavFooter)/photography/[id]/page.tsx

import React from "react";
import PhotographyCategoryDetails from "@/components/Photography/PhotographyCategoryDetails";

const PhotographyCategoryDetailsPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>; // Type params as a Promise
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const { id } = await params; // Await the params to resolve the Promise
  const paramsData = await searchParams;

  const title = paramsData?.title || "";
  const src = paramsData?.src || "";

  const data: { id: string; title: string | string[]; src: string | string[] } =
    {
      id,
      title,
      src,
    };

  return (
    <div>
      <PhotographyCategoryDetails data={data} />
    </div>
  );
};

export default PhotographyCategoryDetailsPage;
