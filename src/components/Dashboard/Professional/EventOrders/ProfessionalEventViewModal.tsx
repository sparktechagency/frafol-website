/* eslint-disable @typescript-eslint/no-explicit-any */
import ReuseButton from "@/components/ui/Button/ReuseButton";
import { Modal } from "antd";
import Image from "next/image";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { AllImages } from "../../../../../public/assets/AllImages";

interface ProfessionalEventViewModalProps {
  showCreateOrderModal: any;
  isViewModalVisible: boolean;
  handleCancel: () => void;
  currentRecord: any | null;
  activeTab: string; // Optional prop for active tab
}
const ProfessionalEventViewModal: React.FC<ProfessionalEventViewModalProps> = ({
  showCreateOrderModal,
  isViewModalVisible,
  handleCancel,
  currentRecord,
  activeTab, // Default to "Pending" if not provided
}) => {
  return (
    <Modal
      open={isViewModalVisible}
      onCancel={handleCancel}
      footer={null}
      centered
      className="lg:!w-[600px]"
    >
      <div className="p-5 text-[#1a1a1a]">
        <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-5">
          Order Details
        </h3>

        {/* Title & Category */}
        <div className="mb-3">
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-secondary-color font-bold">
            Standard Wedding Photography
          </p>
          <p className="text-sm sm:text-base lg:text-kg xl:text-xl font-medium">
            Wedding Photography
          </p>
          <p className="text-xs sm:text-sm lg:text-base xl:text-lg font-medium mt-2">
            By {currentRecord?.name || "Peter Kováč"}
          </p>
        </div>

        {/* Client Info */}
        <div className="mb-4">
          <h4 className="text-base sm:text-lg lg:text-xl xl:text-2xl text-secondary-color font-bold">
            Client Information
          </h4>
          <div className="flex items-center gap-3 mt-2">
            <Image
              src={AllImages.dummyProfile}
              alt="photographer"
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
            <div>
              <p className="font-bold">Peter Kováč</p>
              <p className="text-sm text-gray-600">Wedding Photographer</p>
            </div>
          </div>
        </div>

        {/* Order Info */}
        <div className="mb-4">
          <h4 className="text-base sm:text-lg lg:text-xl xl:text-2xl text-secondary-color font-bold">
            Order Information
          </h4>
          <div className="mt-2">
            {" "}
            <p className="text-xs sm:text-sm lg:text-base">
              <span className="font-semibold">Order Date :</span> May 24, 2024
            </p>
            <p className="text-xs sm:text-sm lg:text-base">
              <span className="font-semibold">Delivery Date :</span> June 6,
              2024
            </p>
          </div>
        </div>

        {/* Event Details */}
        <div className="mb-4">
          <h4 className="text-base sm:text-lg lg:text-xl xl:text-2xl text-secondary-color font-bold mb-2">
            Event Details
          </h4>
          <p className="text-xs lg:text-sm text-gray-500 mt-1 flex items-center gap-1">
            <FaCalendarAlt /> {currentRecord?.date || "May 24, 2025"}
          </p>
          <p className="text-xs sm:text-sm lg:text-base flex items-center gap-2">
            <FaMapMarkerAlt /> <span>Location : Bratislava</span>
          </p>
          <p className="text-xs sm:text-sm lg:text-base flex items-center gap-2">
            <FaClock /> <span>Time : 12:00 PM</span>
          </p>
        </div>

        {/* Payment Details */}
        <div>
          <h4 className="text-base sm:text-lg lg:text-xl xl:text-2xl text-secondary-color font-bold">
            Payment Details
          </h4>
          <p className="text-xs sm:text-sm lg:text-base xl:text-lg mt-2">
            <span className="font-semibold">Amount :</span> $
            {currentRecord?.amount || "200"}
          </p>
        </div>
        {activeTab === "Delivered" ? (
          <div className="mt-5 flex flex-col items-center gap-5">
            <ReuseButton variant="secondary" className="!w-fit">
              Download Invoice With Client
            </ReuseButton>
            <ReuseButton variant="secondary" className="!w-fit">
              Download Invoice with Admin
            </ReuseButton>
          </div>
        ) : activeTab === "InProgress" ? (
          <div className="mt-5 flex gap-3 items-center justify-center flex-wrap">
            <ReuseButton
              variant="secondary"
              className="!text-white !bg-success !border-success !w-fit"
            >
              Deliver Order
            </ReuseButton>
            <ReuseButton
              variant="secondary"
              className="!text-white !bg-error !border-error !w-fit"
            >
              Cancel Order
            </ReuseButton>
            <ReuseButton
              variant="secondary"
              className="!text-white !bg-[#2529FF] !border-[#2529FF] !w-fit"
            >
              Request Extension
            </ReuseButton>
          </div>
        ) : activeTab === "Pending" ? (
          <div className="mt-5 flex gap-3 items-center justify-center flex-wrap">
            <ReuseButton
              onClick={() => showCreateOrderModal({ record: currentRecord })}
              variant="secondary"
              className="!text-white !bg-success !border-success !w-fit"
            >
              Accept
            </ReuseButton>
            <ReuseButton
              variant="secondary"
              className="!text-white !bg-error !border-error !w-fit"
            >
              Reject
            </ReuseButton>
          </div>
        ) : null}
      </div>
    </Modal>
  );
};

export default ProfessionalEventViewModal;
