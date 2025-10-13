import ProfileSettingsPage from "@/components/Dashboard/User/ProfileSettings/ProfileSettingsPage";
import TagTypes from "@/helpers/config/TagTypes";
import { fetchWithAuth } from "@/lib/fetchWraper";
import { IProfile } from "@/types";
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
      | "availability"
      | "changePassword") || "profile";

  const res = await fetchWithAuth("/users/my-profile", {
    next: {
      tags: [TagTypes.profile],
    },
  });

  const data = await res.json();

  const myData: IProfile = data?.data;
  return <ProfileSettingsPage activeTab={tab} myData={myData} />;
};

export default page;
