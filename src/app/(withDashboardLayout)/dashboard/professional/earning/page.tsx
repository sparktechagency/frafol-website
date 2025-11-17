import EarningsPage from "@/components/Dashboard/Professional/Earnings/EarningsPage";
import TagTypes from "@/helpers/config/TagTypes";
import { fetchWithAuth } from "@/lib/fetchWraper";
import React from "react";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const params = await searchParams;

  const page = Number(params?.page) || 1;
  const searchText = params?.search || "";

  const earningRes = await fetchWithAuth(
    `/users/my-earning?page=${page}&limit=12&searchTerm=${searchText}`,
    {
      next: {
        tags: [TagTypes.earning],
      },
    }
  );

  const earningData = await earningRes.json();
  const earning = earningData?.data?.data || [];
  const totalData = earningData?.data?.meta?.total;
  return <EarningsPage earning={earning} totalData={totalData} />;
};

export default page;
