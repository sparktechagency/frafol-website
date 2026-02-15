"use client";
import ChangePassword from "@/components/shared/ChangePassword";
import EditProfile from "@/components/shared/EditProfile";
import ReusableTabs from "@/components/ui/ReusableTabs";
import React from "react";
import PortfolioPage from "./PortfolioPage";
import AccountCredentialPage from "./AccountCredentialPage";
import OtherInformationPage from "./OtherInformationPage";
import { ICategory, IProfile } from "@/types";
import { ITown } from "@/app/(Auth)/sign-up/professional/legal-invoice/page";

const ProfileSettingsPage = ({
  activeTab,
  myData,
  portfolio,
  categories,
  towns
}: {
  activeTab:
  | "profile"
  | "portfolio"
  | "accountCredentials"
  | "unavailability"
  | "changePassword";
  myData: IProfile;
  portfolio: "introVideo" | "bannerImage" | "galleryImage";
  categories: ICategory[];
  towns: ITown[]
}) => {
  return (
    <div>
      <div className="mt-10">
        <ReusableTabs
          activeTab={activeTab}
          align="left"
          tabs={[
            {
              label: "Edit Profile",
              value: "profile",
              content: <EditProfile myData={myData} categories={categories} towns={towns} />,
            },
            {
              label: "Portfolio",
              value: "portfolio",
              content: <PortfolioPage activeTab={portfolio} myData={myData} />, // Placeholder for portfolio content
            },
            {
              label: "Account Credentials",
              value: "accountCredentials",
              content: <AccountCredentialPage myData={myData} />, // Placeholder for account credentials content
            },
            {
              label: "Unavailability",
              value: "unavailability",
              content: <OtherInformationPage myData={myData} />, // Placeholder for other information content
            },
            {
              label: "Change Password",
              value: "changePassword",
              content: <ChangePassword />,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default ProfileSettingsPage;
