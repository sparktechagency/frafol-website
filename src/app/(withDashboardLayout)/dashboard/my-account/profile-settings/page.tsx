import MyAccountProfile from "@/components/Dashboard/User/ProfileSettings/MyAccountProfile";
import React from "react";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const params = await searchParams;
  const tab = (params?.tab as "profile" | "changePassword") || "profile";
  return <MyAccountProfile activeTab={tab} />;
};

export default page;
