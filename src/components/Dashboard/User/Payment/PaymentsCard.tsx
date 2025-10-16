/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { BsEye } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";

const PaymentsCard = ({
  data,
  openModal = () => {},
}: {
  data: any;
  openModal?: () => void;
}) => {
  return (
    <div className="p-4 rounded-md border border-[#E1E1E1] shadow-xs hover:shadow-md transition-all duration-200">
      <div>
        <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-secondary-color mb-1">
          {data.title}
        </h3>
        <p className="text-xs sm:text-sm lg:text-base text-gray-700">
          {data.role} : {data.name}
        </p>
        <div className="text-xs sm:text-sm text-[#5D5D5D] flex items-center gap-1 mt-1">
          <IoCalendarOutline />
          <span>{data.date}</span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-secondary-color mt-1">
            {data.amount}
          </p>

          <button
            onClick={() => openModal()}
            className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 text-sm transition cursor-pointer"
          >
            <BsEye size={16} />
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentsCard;
