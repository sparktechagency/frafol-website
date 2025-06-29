"use client";
import React, { useEffect, useRef } from "react";
import ReuseInput from "../ui/Form/ReuseInput";
import { FiSearch } from "react-icons/fi";
import { IoFilter } from "react-icons/io5";
import { Typography } from "antd";
import ReuseButton from "../ui/Button/ReuseButton";
import ReuseSelect from "../ui/Form/ReuseSelect";

const MarketPlaceSeacrhFiltre = () => {
  const inputRef = useRef<HTMLDivElement>(null);

  const [height, setHeight] = React.useState(0);
  const [filter, setFilter] = React.useState(false);

  useEffect(() => {
    if (filter && inputRef.current) {
      setHeight(inputRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [filter]);
  return (
    <div>
      <ReuseInput
        prefix={<FiSearch className="text-base-color size-5" />}
        suffix={
          <IoFilter
            onClick={() => setFilter((prev) => !prev)}
            className="text-secondary-color size-5 cursor-pointer"
          />
        }
        name="search"
        inputClassName="!bg-background-color !rounded-lg !text-base-color !border-none !shadow-none text-lg font-semibold !w-full lg:!w-96 !py-2.5"
        placeholder="Search"
        type="text"
      />
      <div className="relative -mt-5 z-20">
        <div
          ref={inputRef}
          style={{
            height: `${height}px`,
            overflow: "hidden",
            transition: "height 0.5s ease",
          }}
          className="absolute top-0 w-full bg-primary-color rounded-md shadow"
        >
          <div className="w-full p-4">
            <ReuseSelect
              name="category"
              label="Category"
              placeholder="Category"
              options={[
                {
                  value: "Cameras",
                  label: "Cameras",
                },
                {
                  value: "Lenses",
                  label: "Lenses",
                },
                {
                  value: "Tripods",
                  label: "Tripods",
                },
                {
                  value: "Gimbals",
                  label: "Gimbals",
                },
                {
                  value: "Lights",
                  label: "Lights",
                },
                {
                  value: "Audio",
                  label: "Audio",
                },
              ]}
            />
            <Typography.Title
              level={5}
              className="!text-base-color !font-normal"
            >
              Price Range
            </Typography.Title>
            <div className="flex items-center gap-3">
              <ReuseInput name="min" placeholder="Min" type="text" />
              <ReuseInput name="max" placeholder="Max" type="text" />
            </div>
            <ReuseSelect
              name="condition"
              label="Condition"
              placeholder="Condition"
              options={[
                {
                  value: "New",
                  label: "New",
                },
                {
                  value: "Used",
                  label: "Used",
                },
              ]}
            />
            <ReuseButton
              variant="secondary"
              className="w-full !text-sm sm:!text-sm lg:!text-base"
            >
              Apply Filters
            </ReuseButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPlaceSeacrhFiltre;
