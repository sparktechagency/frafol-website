import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { fetchWithAuth } from "@/lib/fetchWraper";
import React from "react";

const GeneralDataProtectionRegulation = async () => {
  const res = await fetchWithAuth(`/settings/gdpr`, {});
  const data = await res.json();
  return (
    <Container>
      <div className=" py-10 text-gray-800 min-h-[95vh]">
        <SectionHeader title="General Data Protection Regulation." />
        <div dangerouslySetInnerHTML={{ __html: data?.data?.content }}></div>
      </div>
    </Container>
  );
};

export default GeneralDataProtectionRegulation;
