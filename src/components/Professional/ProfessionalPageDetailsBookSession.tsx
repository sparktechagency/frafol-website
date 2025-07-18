"use client";
import React from "react";
import ReuseButton from "../ui/Button/ReuseButton";
import { IoCameraOutline } from "react-icons/io5";
import ProfessionalBookingModal from "../ui/Modal/Professional/ProfessionalBookingModal";

const ProfessionalPageDetailsBookSession = () => {
  const [isBookModalOpen, setIsBookModalOpen] = React.useState(false);

  const openBookModal = () => setIsBookModalOpen(true);

  const handleCancle = () => setIsBookModalOpen(false);
  return (
    <>
      <ReuseButton
        variant="outline"
        className="!py-4.5 !px-4 !text-xs sm:!text-sm lg:!text-base !text-secondary-color !border-secondary-color flex items-center"
        onClick={openBookModal}
      >
        <IoCameraOutline className="" /> Book a Session
      </ReuseButton>
      <ProfessionalBookingModal
        isModalVisible={isBookModalOpen}
        handleCancel={handleCancle}
      />
    </>
  );
};

export default ProfessionalPageDetailsBookSession;
