import AuthSectionTemplate from "@/components/ui/AuthSectionTemplet";
import React from "react";
import { AllImages } from "../../../../../../public/assets/AllImages";
import ChooseSpecialization from "@/components/Auth/ChooseSpecialization";

const page = () => {
  return (
    <div>
      <AuthSectionTemplate
        imageScr={AllImages.signUpSpecialization}
        showLogo={false}
      >
        <ChooseSpecialization />
      </AuthSectionTemplate>
    </div>
  );
};

export default page;
