"use client";
import { Dropdown, MenuProps, Button } from "antd";
import { DownOutlined, StarFilled } from "@ant-design/icons";
import { useState } from "react";

const sortItems: MenuProps["items"] = [
  {
    key: "all",
    label: "All Reviews",
  },
  {
    key: "newest",
    label: "Newest",
  },
  {
    key: "oldest",
    label: "Oldest",
  },
];

const ProfessionalReviewsFiltre = () => {
  const [selectedSort, setSelectedSort] = useState("all");
  const [selectedStar, setSelectedStar] = useState<number | null>(5); // default to 5-star selected

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    setSelectedSort(e.key);
  };

  return (
    <div className="flex flex-wrap items-center gap-4 mt-5">
      {/* Sort Dropdown */}
      <Dropdown
        menu={{ items: sortItems, onClick: handleMenuClick }}
        placement="bottomLeft"
      >
        <Button>
          {(() => {
            const found = sortItems.find((item) => item?.key === selectedSort);
            return found && "label" in found ? found.label : "";
          })()}{" "}
          <DownOutlined />
        </Button>
      </Dropdown>

      {/* Star Filter Buttons */}
      <div className="flex items-center gap-2">
        {[5, 4, 3, 2, 1].map((star) => (
          <button
            key={star}
            onClick={() =>
              setSelectedStar((prev) => (prev === star ? null : star))
            }
            className={`flex items-center gap-1 px-3 py-1 rounded-full border text-sm font-medium cursor-pointer
              ${
                selectedStar === star
                  ? "bg-yellow-400 text-white border-yellow-400"
                  : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
              }`}
          >
            <StarFilled
              className={selectedStar === star ? "text-white" : "text-gray-400"}
            />
            {star}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalReviewsFiltre;
