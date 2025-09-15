import React from "react";
import VideographyCategoryDetails from "@/components/Videographey/VideographyCategoryDetails";

const VideographyCategoryDetailsPage = async ({
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
      <VideographyCategoryDetails data={data} />
    </div>
  );
};

export default VideographyCategoryDetailsPage;
