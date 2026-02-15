import { ITown } from "@/app/(Auth)/sign-up/professional/legal-invoice/page";
import MyAccountProfile from "@/components/Dashboard/User/ProfileSettings/MyAccountProfile";
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
  const tab = (params?.tab as "profile" | "changePassword") || "profile";

  const res = await fetchWithAuth("/users/my-profile", {
    next: {
      tags: [TagTypes.profile],
    },
  });

  const data = await res.json();

  const myData: IProfile = data?.data;

  const townres = await fetchWithAuth(
    `/town`,
    {
      next: {
        tags: [TagTypes.town],
      },
    }
  );

  const towns = await townres.json();
  const townData: ITown[] = towns?.data || [];

  return <MyAccountProfile activeTab={tab} myData={myData} townData={townData} />;
};

export default page;
