import ProfileSettingsPage from "@/components/Dashboard/User/ProfileSettings/ProfileSettingsPage";
import React from "react";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const params = await searchParams;
  const tab =
    (params?.tab as
      | "profile"
      | "portfolio"
      | "accountCredentials"
      | "otherInformation"
      | "changePassword") || "profile";
  return <ProfileSettingsPage activeTab={tab} />;
};

export default page;
