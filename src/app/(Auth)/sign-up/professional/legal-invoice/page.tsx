import React from "react";
import { AllImages } from "../../../../../../public/assets/AllImages";
import AuthSectionTemplate from "@/components/ui/AuthSectionTemplet";
import LegalInvoiceDetails from "@/components/Auth/LegalInvoiceDetails";

const page = () => {
  return (
    <div>
      <AuthSectionTemplate imageScr={AllImages.chooseRole} showLogo={false}>
        <LegalInvoiceDetails />
      </AuthSectionTemplate>
    </div>
  );
};

export default page;
