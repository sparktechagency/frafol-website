import AllProfessionals from "@/components/Professional/AllProfessionalPage";
import React from "react";

const page = ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  return <AllProfessionals searchParams={searchParams} />;
};

export default page;
