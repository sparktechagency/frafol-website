import ProfessionalPageDetails from "@/components/Professional/ProfessionalPageDetails";
import TagTypes from "@/helpers/config/TagTypes";
import { fetchWithAuth } from "@/lib/fetchWraper";
import { IProfessionalUser } from "@/types";
import React from "react";

const page = async ({
  params,
}: {
  params: Promise<{ id: string }>; // Type params as a Promise
}) => {
  const { id } = await params; // Await the params to resolve the Promise
  const res = await fetchWithAuth(`/users/${id}`, {
    next: {
      tags: [TagTypes.prfessional],
    },
  });
  const data = await res.json();
  const professionalUser: IProfessionalUser = data?.data;
  return <ProfessionalPageDetails professionalUser={professionalUser} />;
};

export default page;
