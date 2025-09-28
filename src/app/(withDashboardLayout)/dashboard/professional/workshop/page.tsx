import ProfessionalWorkshopPage from "@/components/Dashboard/Professional/Wrokshop/ProfessionalWorkshopPage";
import TagTypes from "@/helpers/config/TagTypes";
import { fetchWithAuth } from "@/lib/fetchWraper";
import { IWorkshop } from "@/types";
import React from "react";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const params = await searchParams;
  const tab = params?.tab || "approved";
  const activeTab = (tab === "approved" ? "approved" : "pending") as
    | "approved"
    | "pending";

  const page = Number(params?.page) || 1;
  const searchText = params?.search || "";
  const limit = 12;

  const res = await fetchWithAuth(`/workshop/my?approvalStatus=${activeTab}`, {
    next: {
      tags: [TagTypes.workshop],
    },
  });

  const data = await res.json();

  const totalData = data?.data?.meta?.total;

  const workshops: IWorkshop[] = data?.data?.result || [];

  console.log("workshops", workshops);

  return (
    <ProfessionalWorkshopPage
      tab={tab as "approved" | "pending"}
      searchText={searchText as string}
      page={page}
      limit={limit}
      workshops={workshops}
      totalData={totalData}
    />
  );
};

export default page;
