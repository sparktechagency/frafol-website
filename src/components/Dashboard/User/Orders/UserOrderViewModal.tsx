import { Modal } from "antd";
import { FaMapMarkerAlt, FaClock, FaCalendarAlt } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { AllImages } from "../../../../../public/assets/AllImages";
import ReuseButton from "@/components/ui/Button/ReuseButton";

interface UserOrderViewModalProps {
  isViewModalVisible: boolean;
  handleCancel: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  currentRecord: any | null;
  activeModal: string;
}

const UserOrderViewModal: React.FC<UserOrderViewModalProps> = ({
  isViewModalVisible,
  handleCancel,
  currentRecord,
  activeModal,
}) => {
  return (
    <Modal
      open={isViewModalVisible}
      onCancel={handleCancel}
      footer={null}
      centered
      closeIcon={<MdClose className="text-secondary-color text-xl" />}
      className="lg:!w-[600px]"
    >
      <div className="p-5 text-[#1a1a1a]">
        <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-5">
          Order Details
        </h3>

        {/* Title & Category */}
        <div className="mb-3">
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-secondary-color font-bold">
            Custom Photography
          </p>
          <p className="text-sm sm:text-base lg:text-kg xl:text-xl font-medium">
            Wedding Photography
          </p>
          <p className="text-xs sm:text-sm lg:text-base xl:text-lg font-medium mt-2">
            By {currentRecord?.name || "Peter Kováč"}
          </p>
          <p className="text-xs lg:text-sm text-gray-500 mt-1 flex items-center gap-1">
            <FaCalendarAlt /> {currentRecord?.date || "May 24, 2025"}
          </p>
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
              <span className="font-semibold">Event Date :</span> May 28, 2024
            </p>
            <p className="text-xs sm:text-sm lg:text-base">
              <span className="font-semibold">Delivery Date :</span> June 6,
              2024
            </p>
          </div>
        </div>

        {/* Photographer Info */}
        <div className="mb-4">
          <h4 className="text-base sm:text-lg lg:text-xl xl:text-2xl text-secondary-color font-bold">
            Photographer Information
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

        {/* Event Details */}
        <div className="mb-4">
          <h4 className="text-base sm:text-lg lg:text-xl xl:text-2xl text-secondary-color font-bold mb-2">
            Event Details
          </h4>
          <p className="text-xs sm:text-sm lg:text-base flex items-center gap-2">
            <FaMapMarkerAlt /> <span>Location : Bratislava</span>
          </p>
          <p className="text-xs sm:text-sm lg:text-base flex items-center gap-2">
            <FaClock /> <span>Duration : 4 Hours</span>
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
        <div className="mt-5">
          {activeModal === "currentOrder" ? (
            <ReuseButton variant="secondary">Cancle Order</ReuseButton>
          ) : activeModal === "delivered" ? (
            <ReuseButton variant="secondary">Download Invoice</ReuseButton>
          ) : null}
        </div>
      </div>
    </Modal>
  );
};

export default UserOrderViewModal;
