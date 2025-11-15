import InsuranceForm from "@/components/Insurance/InsuranceForm";
import InsurancePage from "@/components/Insurance/InsurancePage";
import Container from "@/components/ui/Container";
import React from "react";

const page = () => {
  return (
    <div>
      <main className="py-16">
        <Container>
          <InsurancePage />
          <InsuranceForm />
        </Container>
      </main>
    </div>
  );
};

export default page;
