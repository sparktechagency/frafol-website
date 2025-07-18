"use client";
import React, { useState } from "react";
import ReuseButton from "../ui/Button/ReuseButton";
import ProfessionalServiceBookingModal from "../ui/Modal/Professional/ProfessionalServiceBookingModal";

const ServiceCardBookNow = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => setIsModalVisible(true);

  const handleCancel = () => setIsModalVisible(false);
  return (
    <>
      <ReuseButton
        variant="secondary"
        className="!text-xs sm:!text-sm lg:!text-base !px-2 !py-1 w-fit"
        onClick={openModal}
      >
        Book Now
      </ReuseButton>
      <ProfessionalServiceBookingModal
        isModalVisible={isModalVisible}
        handleCancel={handleCancel}
      />
    </>
  );
};

export default ServiceCardBookNow;
