"use client";
import React, { useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import ProfessionalServiceCard from "../shared/ProfessionalServiceCard";
import ProfessionalServiceBookingModal from "../ui/Modal/Professional/ProfessionalServiceBookingModal";

const data = [
  {
    title: "Destination Wedding Photography",
    description:
      "Capture your wedding in a stunning location with intimate and unique shots. ",
    price: "500",
    duration: "3",
    delivery: "2-3 days",
  },
  {
    title: "Destination Wedding Photography",
    description:
      "Capture your wedding in a stunning location with intimate and unique shots. ",
    price: "500",
    duration: "3",
    delivery: "2-3 days",
  },
  {
    title: "Destination Wedding Photography",
    description:
      "Capture your wedding in a stunning location with intimate and unique shots. ",
    price: "500",
    duration: "3",
    delivery: "2-3 days",
  },
  {
    title: "Destination Wedding Photography",
    description:
      "Capture your wedding in a stunning location with intimate and unique shots. ",
    price: "500",
    duration: "3",
    delivery: "2-3 days",
  },

  {
    title: "Destination Wedding Photography",
    description:
      "Capture your wedding in a stunning location with intimate and unique shots. ",
    price: "500",
    duration: "3",
    delivery: "2-3 days",
  },
  {
    title: "Destination Wedding Photography",
    description:
      "Capture your wedding in a stunning location with intimate and unique shots. ",
    price: "500",
    duration: "3",
    delivery: "2-3 days",
  },
  {
    title: "Destination Wedding Photography",
    description:
      "Capture your wedding in a stunning location with intimate and unique shots. ",
    price: "500",
    duration: "3",
    delivery: "2-3 days",
  },
];

const ProfessionalPageDetailsMyServices = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => setIsModalVisible(true);

  const handleCancel = () => setIsModalVisible(false);
  return (
    <div className="mt-16">
      <SectionHeader title="My Services" className="mb-3" />

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((item, index) => (
          <ProfessionalServiceCard
            key={index}
            data={item}
            openModal={openModal}
          />
        ))}
      </div>
      <ProfessionalServiceBookingModal
        isModalVisible={isModalVisible}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default ProfessionalPageDetailsMyServices;
