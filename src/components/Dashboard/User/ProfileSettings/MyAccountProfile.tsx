/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import ChangePassword from "@/components/shared/ChangePassword";
import EditProfile from "@/components/shared/EditProfile";
import ReusableTabs from "@/components/ui/ReusableTabs";
import React, { useState } from "react";
import DeleteModal from "@/components/ui/Modal/DeleteModal";

const MyAccountProfile = () => {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [currentRecord, setCurrentRecord] = useState<any>(null);

  const handleCancel = () => {
    setIsDeleteModalVisible(false);
    setCurrentRecord(null);
  };

  const [activeTab, setActiveTab] = useState<"profile" | "changePassword">(
    "profile"
  );
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

export default MyAccountProfile;
