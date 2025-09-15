"use client";
import React, { useState } from "react";

type Category =
  | "Cameras"
  | "Lenses"
  | "Tripods"
  | "Gimbals"
  | "Lights"
  | "Audio";

const categories: Category[] = [
  "Cameras",
  "Lenses",
  "Tripods",
  "Gimbals",
  "Lights",
  "Audio",
];

const MarketPlaceTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Category>("Cameras");

  return (
    <div className="flex flex-wrap items-center gap-3">
      {categories?.map((category) => (
        <div
          key={category}
          onClick={() => setActiveTab(category)}
          className={`${
            activeTab === category
              ? "bg-secondary-color text-white border-secondary-color"
              : "bg-transparent text-secondary-color border-base-color/30"
          } px-4 py-1.5 cursor-pointer rounded-md transition-all duration-300 border text-sm sm:text-base`}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default MarketPlaceTab;
