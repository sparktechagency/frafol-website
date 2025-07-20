"use client";
import ChangePassword from "@/components/shared/ChangePassword";
import EditProfile from "@/components/shared/EditProfile";
import ReusableTabs from "@/components/ui/ReusableTabs";
import React, { useState } from "react";

const ProfileSettingsPage = () => {
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
      </div>
    </div>
  );
};

export default ProfileSettingsPage;
