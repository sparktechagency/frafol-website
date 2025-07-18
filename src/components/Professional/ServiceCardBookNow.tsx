/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ReuseButton from "../ui/Button/ReuseButton";

const ServiceCardBookNow = ({ openModal }: any) => {
  return (
    <>
      <ReuseButton
        variant="secondary"
        className="!text-xs sm:!text-sm lg:!text-base !px-2 !py-1 w-fit"
        onClick={openModal}
      >
        Book Now
      </ReuseButton>
    </>
  );
};

export default ServiceCardBookNow;
