import { IPayment } from "@/types";
import { formatDate } from "@/utils/dateFormet";
import React from "react";
import { BsEye } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";

const PaymentsCard = ({
  data,
  openModal,
}: {
  data: IPayment;
  openModal: (data: IPayment) => void;
}) => {
  return (
    <div className="p-4 rounded-md border border-[#E1E1E1] shadow-xs hover:shadow-md transition-all duration-200">
      <div>
        <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-secondary-color mb-1">
          {data.paymentType === "event"
            ? data.eventOrderId?.orderType === "custom"
              ? "Custom Order"
              : data?.eventOrderId?.packageId?.title || "Event"
            : data.paymentType === "gear"
            ? data?.gearOrderIds?.map((gear) => gear?.gearMarketplaceId?.name)
            : data.paymentType === "workshop"
            ? data.workshopId?.title || "Workshop"
            : ""}
        </h3>

        {/* User or Seller Info */}
        {data.paymentType === "event" && data.userId && (
          <p className="text-xs sm:text-sm lg:text-base text-gray-700">
            User: {data.userId.name}
          </p>
        )}

        {data.paymentType === "gear" && data?.gearOrderIds?.length > 0 && (
          <div className="text-xs sm:text-sm lg:text-base text-gray-700">
            {data.gearOrderIds.map((gear) => (
              <div key={gear._id} className="mb-1">
                <p>
                  <span className="font-bold">
                    {gear.gearMarketplaceId.description}
                  </span>{" "}
                  - ${gear.gearMarketplaceId.price}
                </p>
                <p className="text-gray-500 text-sm">
                  Seller: {gear.sellerId.name}
                </p>
              </div>
            ))}
          </div>
        )}

        {data.paymentType === "workshop" && data.workshopId && (
          <p className="text-xs sm:text-sm lg:text-base text-gray-700">
            Workshop: {data.workshopId.title}
          </p>
        )}

        <div className="text-xs sm:text-sm text-[#5D5D5D] flex items-center gap-1 mt-1">
          <IoCalendarOutline />
          <span>{formatDate(data?.createdAt)}</span>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-secondary-color mt-1">
            {data.amount}€
          </p>

          <button
            onClick={() => openModal(data)}
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
