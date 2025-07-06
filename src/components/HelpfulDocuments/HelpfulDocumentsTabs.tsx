"use client";
import React from "react";
import HelpfulDocumentsCards from "./HelpfulDocumentsCards";

const HelpfulDocumentsTabs = () => {
  const [activeTab, setActiveTab] = React.useState<
    "templets" | "legalDocument"
  >("templets");
  return (
    <div>
      <div className="bg-background-color p-1.5 rounded-lg w-fit mx-auto">
        <div className="flex justify-center items-center gap-2 font-semibold text-xs sm:text-sm lg:text-base xl:text-lg">
          <button
            className={`${
              activeTab === "templets"
                ? "bg-secondary-color text-white"
                : "bg-transparent text-secondary-color"
            } px-3 py-1 cursor-pointer rounded-lg transition-all duration-500 relative group min-w-[200px]`}
            onClick={() => setActiveTab("templets")}
          >
            Templets
          </button>
          <button
            className={`${
              activeTab === "legalDocument"
                ? "bg-secondary-color text-white"
                : "bg-transparent text-secondary-color"
            } px-3 py-1 cursor-pointer rounded-lg transition-all duration-500 relative group min-w-[200px]`}
            onClick={() => setActiveTab("legalDocument")}
          >
            Legal Document
          </button>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-5 items-center">
        {activeTab === "templets" && (
          <div className="flex flex-col gap-5 items-center">
            {Array.from({ length: 3 }).map((_, index) => (
              <HelpfulDocumentsCards key={index} />
            ))}
          </div>
        )}
        {activeTab === "legalDocument" && (
          <div className="flex flex-col gap-5 items-center">
            {Array.from({ length: 3 }).map((_, index) => (
              <HelpfulDocumentsCards key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HelpfulDocumentsTabs;
