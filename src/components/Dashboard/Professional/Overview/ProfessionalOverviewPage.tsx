"use client";
import React from "react";
import ProfessionalOverviewCards from "./ProfessionalOverviewCards";
import IncomeOverview from "./IncomeOverview";
import ProfessionalOverviewCalender from "./ProfessionalOverviewCalender";

const ProfessionalOverviewPage = () => {
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl  font-bold mb-5 ">
          Welcome back, Jane!
        </h1>
        <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-34xl font-semibold mb-5">
          Here&apos;s what&apos;s happening with your photography business
          today.
        </h3>
      </div>
      <ProfessionalOverviewCards />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <IncomeOverview />
        <ProfessionalOverviewCalender />
      </div>
    </div>
  );
};

export default ProfessionalOverviewPage;
