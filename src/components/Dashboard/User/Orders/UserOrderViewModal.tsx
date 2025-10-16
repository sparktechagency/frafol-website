/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from "antd";
import { FaMapMarkerAlt, FaClock, FaCalendarAlt } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { AllImages } from "../../../../../public/assets/AllImages";
import ReuseButton from "@/components/ui/Button/ReuseButton";
import { IEventOrder } from "@/types";
import { formatDate, formetTime } from "@/utils/dateFormet";
import { budgetLabels } from "@/utils/budgetLabels";
import { getServerUrl } from "@/helpers/config/envConfig";

interface UserOrderViewModalProps {
  isViewModalVisible: boolean;
  handleCancel: () => void;
  currentRecord: IEventOrder | null;
  activeModal: string;
  showCancelModal?: any;
}

const UserOrderViewModal: React.FC<UserOrderViewModalProps> = ({
  isViewModalVisible,
  handleCancel,
  currentRecord,
  activeModal,
  showCancelModal,
}) => {
  const serverUrl = getServerUrl();

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
            {currentRecord?.packageId?.title || "Custom Order"}
          </p>
          <p className="text-sm sm:text-base lg:text-kg xl:text-xl font-medium">
            {currentRecord?.serviceType}
          </p>
          <p className="text-xs sm:text-sm lg:text-base xl:text-lg font-medium mt-2">
            By {currentRecord?.serviceProviderId?.name}
          </p>
          <p className="text-xs lg:text-sm text-gray-500 mt-1 flex items-center gap-1">
            <FaCalendarAlt /> {formatDate(currentRecord?.date)}
          </p>
          <p className="text-xs lg:text-sm text-gray-500 mt-1 flex items-center gap-1">
            <FaClock /> {formetTime(currentRecord?.time)}
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
              <span className="font-semibold">Order Date :</span>{" "}
              {formatDate(currentRecord?.statusTimestamps?.createdAt)} -{" "}
              {formetTime(currentRecord?.statusTimestamps?.createdAt)}
            </p>
            <p className="text-xs sm:text-sm lg:text-base">
              <span className="font-semibold">Event Date :</span>{" "}
              {formatDate(currentRecord?.date)} -{" "}
              {formetTime(currentRecord?.time)}
            </p>
            <p className="text-xs sm:text-sm lg:text-base">
              <span className="font-semibold">Delivery Date :</span>{" "}
              {formatDate(currentRecord?.statusTimestamps?.deliveredAt)} -{" "}
              {formetTime(currentRecord?.statusTimestamps?.deliveredAt)}
            </p>
          </div>
        </div>

        {/* Photographer Info */}
        <div className="mb-4">
          <h4 className="text-base sm:text-lg lg:text-xl xl:text-2xl text-secondary-color font-bold">
            Photographer Information
          </h4>
          <div className="flex items-center gap-1 mt-2">
            <Image
              src={
                currentRecord?.serviceProviderId?.profileImage
                  ? serverUrl + currentRecord?.serviceProviderId?.profileImage
                  : AllImages.dummyProfile
              }
              alt="photographer"
              width={50}
              height={50}
              className="rounded-full h-7 w-7 object-cover"
            />
            <div>
              <p className="font-bold text-base">
                {currentRecord?.serviceProviderId?.name}
              </p>
              {/* <p className="text-sm text-gray-600">Wedding Photographer</p> */}
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div className="mb-4">
          <h4 className="text-base sm:text-lg lg:text-xl xl:text-2xl text-secondary-color font-bold mb-2">
            Event Details
          </h4>
          <p className="text-xs sm:text-sm lg:text-base flex items-start gap-2 mb-2">
            <div className="flex items-center text-nowrap">
              <FaMapMarkerAlt /> <span>Location : </span>
            </div>
            {currentRecord?.location}
          </p>
          <p className="text-xs sm:text-sm lg:text-base flex items-center gap-2 mb-2">
            <FaClock /> <span>Time : </span>
            {formetTime(currentRecord?.time)}
          </p>
        </div>

        {/* Payment Details */}
        <div>
          <h4 className="text-base sm:text-lg lg:text-xl xl:text-2xl text-secondary-color font-bold">
            Payment Details
          </h4>
          <p className="text-xs sm:text-sm lg:text-base xl:text-lg mt-2">
            <span className="font-semibold">
              {currentRecord?.totalPrice ? "Amount" : "Budget Range"} :
            </span>{" "}
            {currentRecord?.totalPrice ||
              budgetLabels[currentRecord?.budget_range as string] ||
              currentRecord?.budget_range}
          </p>
        </div>
        <div className="mt-5">
          {activeModal === "currentOrder" ? (
            <ReuseButton
              onClick={() => showCancelModal(currentRecord)}
              variant="secondary"
            >
              Cancle Order
            </ReuseButton>
          ) : activeModal === "orderOffer" ? (
            <ReuseButton
              variant="secondary"
              onClick={() => showCancelModal(currentRecord)}
            >
              Cancle Order
            </ReuseButton>
          ) : activeModal === "delivered" ? (
            <ReuseButton variant="secondary">Download Invoice</ReuseButton>
          ) : null}
        </div>
      </div>
    </Modal>
  );
};

export default UserOrderViewModal;
