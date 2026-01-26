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
      | "unavailability"
      | "changePassword") || "profile";
  const portfolio = (params?.portfolio as "introVideo" | "bannerImage" | "galleryImage") || "introVideo";

  const res = await fetchWithAuth("/users/my-profile", {
    next: {
      tags: [TagTypes.profile],
    },
  });

  const data = await res.json();

  const myData: IProfile = data?.data;
  console.log(myData)
  return <ProfileSettingsPage activeTab={tab} portfolio={portfolio} myData={myData} />;
};

export default page;
