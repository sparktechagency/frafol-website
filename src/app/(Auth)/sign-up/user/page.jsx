import AuthSectionTemplate from "@/components/ui/AuthSectionTemplet";
import React from "react";
import { AllImages } from "../../../../../public/assets/AllImages";
import SignUpUser from "@/components/Auth/SignUpUser";

const page = () => {
  return (
    <div>
      <AuthSectionTemplate imageScr={AllImages.signupuser} showLogo={false}>
        <SignUpUser />
      </AuthSectionTemplate>
    </div>
  );
};

export default page;
