/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import ChangePassword from "@/components/shared/ChangePassword";
import EditProfile from "@/components/shared/EditProfile";
import ReusableTabs from "@/components/ui/ReusableTabs";
import React, { useState } from "react";
import DeleteModal from "@/components/ui/Modal/DeleteModal";

const MyAccountProfile = ({
  activeTab,
}: {
  activeTab: "profile" | "changePassword";
}) => {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [currentRecord, setCurrentRecord] = useState<any>(null);

  const handleCancel = () => {
    setIsDeleteModalVisible(false);
    setCurrentRecord(null);
  };

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
