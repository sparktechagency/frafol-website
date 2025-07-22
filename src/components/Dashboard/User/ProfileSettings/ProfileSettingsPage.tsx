/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import ChangePassword from "@/components/shared/ChangePassword";
import EditProfile from "@/components/shared/EditProfile";
import ReusableTabs from "@/components/ui/ReusableTabs";
import React, { useState } from "react";
import PortfolioPage from "./PortfolioPage";
import DeleteModal from "@/components/ui/Modal/DeleteModal";
import AccountCredentialPage from "./AccountCredentialPage";
import OtherInformationPage from "./OtherInformationPage";

const ProfileSettingsPage = () => {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [currentRecord, setCurrentRecord] = useState<any>(null);

  const showDeleteModal = (record: any) => {
    setIsDeleteModalVisible(true);
    setCurrentRecord(record);
  };

  const handleCancel = () => {
    setIsDeleteModalVisible(false);
    setCurrentRecord(null);
  };

  const [activeTab, setActiveTab] = useState<
    | "profile"
    | "portfolio"
    | "accountCredentials"
    | "otherInformation"
    | "changePassword"
  >("profile");
  return (
    <div>
      <div className="mt-10">
        <ReusableTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
          align="left"
          tabs={[
            {
              label: "Edit Profile",
              value: "profile",
              content: <EditProfile />,
            },
            {
              label: "Portfolio",
              value: "portfolio",
              content: <PortfolioPage showDeleteModal={showDeleteModal} />, // Placeholder for portfolio content
            },
            {
              label: "Account Credentials",
              value: "accountCredentials",
              content: <AccountCredentialPage />, // Placeholder for account credentials content
            },
            {
              label: "Other Information",
              value: "otherInformation",
              content: <OtherInformationPage />, // Placeholder for other information content
            },
            {
              label: "Change Password",
              value: "changePassword",
              content: <ChangePassword />,
            },
          ]}
        />
        <DeleteModal
          handleDelete={() => {
            console.log("Delete action for:", currentRecord);
          }}
          currentRecord={currentRecord}
          isDeleteModalVisible={isDeleteModalVisible}
          handleCancel={handleCancel}
        />
      </div>
    </div>
  );
};

export default ProfileSettingsPage;
