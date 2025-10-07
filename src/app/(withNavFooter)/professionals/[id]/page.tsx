import ProfessionalPageDetails from "@/components/Professional/ProfessionalPageDetails";
import TagTypes from "@/helpers/config/TagTypes";
import { fetchWithAuth } from "@/lib/fetchWraper";
import { IProfessionalUser } from "@/types";
import React from "react";

const page = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const { id } = await params;
  const paramsData = await searchParams;

  const sort = (paramsData?.sort as string) || "";
  const rating = (paramsData?.rating as string) || "";

  const res = await fetchWithAuth(`/users/${id}`, {
    next: {
      tags: [TagTypes.prfessional],
    },
  });
  const data = await res.json();
  const professionalUser: IProfessionalUser = data?.data;

  return (
    <ProfessionalPageDetails
      professionalUser={professionalUser}
      sort={sort}
      rating={rating}
    />
  );
};

export default page;
