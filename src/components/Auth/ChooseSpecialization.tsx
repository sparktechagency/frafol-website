"use client";
import { useRouter } from "next/navigation";
import ReusableTabs from "../ui/ReusableTabs";
import { useState } from "react";
import ReuseButton from "../ui/Button/ReuseButton";

const specializationOptions = {
  photography: [
    "Wedding Photography",
    "Family Photography",
    "Portrait Photography",
    "Event Photography",
    "Product Photography",
    "Fashion Photography",
  ],
  videography: [
    "Wedding Videography",
    "Event Videography",
    "Documentary Videography",
    "Corporate Videography",
    "Music Video Production",
    "Real Estate Videography",
  ],
};

const ChooseSpecialization = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"photography" | "videography">(
    "photography"
  );

  const [selectedSpecializations, setSelectedSpecializations] = useState<
    string[]
  >([]);

  const handleSpecializationClick = (specialization: string) => {
    setSelectedSpecializations(
      (prev) =>
        prev.includes(specialization)
          ? prev.filter((item) => item !== specialization) // Remove if already selected
          : [...prev, specialization] // Add if not selected
    );
  };

  return (
    <div className="flex flex-col justify-center gap-3 h-full w-full sm:w-3/4 mx-auto">
      <div className="mb-3">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-secondary-color mb-5">
          Your Specializations
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-base-color">
          Select the services you specialize in
        </p>
      </div>
      <div>
        <ReusableTabs<"photography" | "videography">
          align="left"
          activeTab={activeTab}
          onTabChange={setActiveTab}
          tabs={[
            {
              label: "Photography",
              value: "photography",
              content: (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {specializationOptions?.photography.map((item, index) => (
                    <div
                      key={index}
                      className={` text-sm sm:text-base lg:text-lg font-bold w-full py-2 px-3 rounded  cursor-pointer ${
                        selectedSpecializations.includes(item)
                          ? "bg-secondary-color text-primary-color"
                          : "bg-background-color text-base-color"
                      }`}
                      onClick={() => handleSpecializationClick(item)}
                    >
                      {item}
                    </div>
                  ))}{" "}
                </div>
              ),
            },
            {
              label: "Videography",
              value: "videography",
              content: (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {specializationOptions?.videography.map((item, index) => (
                    <div
                      key={index}
                      className={` text-sm sm:text-base lg:text-lg font-bold w-full py-2 px-3 rounded cursor-pointer ${
                        selectedSpecializations.includes(item)
                          ? "bg-secondary-color text-primary-color"
                          : "bg-background-color text-base-color"
                      }`}
                      onClick={() => handleSpecializationClick(item)}
                    >
                      {item}
                    </div>
                  ))}{" "}
                </div>
              ),
            },
          ]}
          tabContentStyle="mt-5"
        />
      </div>
      <div className="flex justify-end items-end w-full mt-5">
        <ReuseButton
          variant="secondary"
          className="!w-fit !text-[10px] sm:!text-xs lg:!text-sm !px-5 !py-2.5"
          onClick={() =>
            router.push("/sign-up/professional/additional-information")
          }
        >
          Continue
        </ReuseButton>
      </div>
    </div>
  );
};
export default ChooseSpecialization;
