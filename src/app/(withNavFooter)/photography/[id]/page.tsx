/* eslint-disable @typescript-eslint/no-explicit-any */
// app/(withNavFooter)/photography/[id]/page.tsx

import React from "react";
import PhotographyCategoryDetails from "@/components/Photography/PhotographyCategoryDetails";
import { fetchWithAuth } from "@/lib/fetchWraper";
import TagTypes from "@/helpers/config/TagTypes";

const PhotographyCategoryDetailsPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>; // Type params as a Promise
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const { id } = await params; // Await the params to resolve the Promise
  const paramsData = await searchParams;

  const role = (paramsData?.role as string) || "";
  const title = (paramsData?.title as string) || "";
  const src = (paramsData?.src as string) || "";
  const search = (paramsData?.search as string) || "";
  const minPrice = (paramsData?.min as string) || null;
  const maxPrice = (paramsData?.max as string) || null;
  const availity = (paramsData?.availity as string) || null;
  console.log(availity)
  const data: {
    id: string;
    role: string;
    title: string;
    src: string;
  } = {
    id,
    role,
    title,
    src,
  };

  const res = await fetchWithAuth(
    `/users/professionalsByCategory?role=${role}&categoryType=${title}&searchTerm=${search}&minPrice=${minPrice || ""}&maxPrice=${maxPrice || ""}&availableDate=${availity || ""}`,
    {
      next: {
        tags: [TagTypes.category],
        revalidate: 0,
      },
    }
  );
  const resdata = await res.json();
  const categories: any[] = resdata?.data?.result;
  console.log(resdata);
  return (
    <div>
      <PhotographyCategoryDetails categories={categories} data={data} />
    </div>
  );
};

export default PhotographyCategoryDetailsPage;
