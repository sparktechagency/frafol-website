import VideographeyPage from "@/components/Videographey/VideographeyPage";
import React from "react";

const page = ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  return (
    <div className="py-20">
      <VideographeyPage searchParams={searchParams} />
    </div>
  );
};

export default page;
