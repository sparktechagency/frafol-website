import ReuseButton from "@/components/ui/Button/ReuseButton";
import { Modal } from "antd";
import Image from "next/image";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { AllImages } from "../../../../../public/assets/AllImages";
import { IEventOrder } from "@/types";
import { getServerUrl } from "@/helpers/config/envConfig";
import { formatDate, formetTime } from "@/utils/dateFormet";
import { acceptDirectOrder } from "@/services/EventOrderService/EventOrderServiceApi";
import tryCatchWrapper from "@/utils/tryCatchWrapper";
import { budgetLabels } from "@/utils/budgetLabels";

interface ProfessionalEventViewModalProps {
  showCreateOrderModal: ({ record }: { record: IEventOrder | null }) => void;
  isViewModalVisible: boolean;
  handleCancel: () => void;
  currentRecord: IEventOrder | null;
  activeTab: string; // Optional prop for active tab
}
const ProfessionalEventViewModal: React.FC<ProfessionalEventViewModalProps> = ({
  showCreateOrderModal,
  isViewModalVisible,
  handleCancel,
  currentRecord,
  activeTab, // Default to "pending" if not provided
}) => {
  const serverUrl = getServerUrl();

  const handleDirectAccept = async (record: IEventOrder) => {
    const res = await tryCatchWrapper(
      acceptDirectOrder,
      {
        params: record?._id,
      },
      "Accepting Order...",
      "Order accepted successfully!",
      "Something went wrong! Please try again."
    );

    if (res?.success) {
      handleCancel();
    }
  };
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
            {currentRecord?.packageId?.title || "Custom Order"}
          </p>
          <p className="text-sm sm:text-base lg:text-kg xl:text-xl font-medium capitalize mt-1">
            {currentRecord?.serviceType}
          </p>
          <p className="text-xs sm:text-sm lg:text-base xl:text-lg font-medium mt-2">
            By {currentRecord?.serviceProviderId?.name}
          </p>
        </div>

        {/* Client Info */}
        <div className="mb-4">
          <h4 className="text-base sm:text-lg lg:text-xl xl:text-2xl text-secondary-color font-bold">
            Client Information
          </h4>
          <div className="flex flex-col gap-1 my-2 ">
            <Image
              src={
                currentRecord?.userId?.profileImage
                  ? serverUrl + currentRecord?.userId?.profileImage
                  : AllImages.dummyProfile
              }
              alt="photographer"
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
            <div>
              <p className="font-bold text-lg">
                {currentRecord?.companyName ||
                  currentRecord?.name ||
                  currentRecord?.userId?.name}
              </p>
              <p className="text-base font-semibold text-gray-600">
                {currentRecord?.isRegisterAsCompany ? "Company" : "Personal"}
              </p>

              {/* <p className="text-sm text-gray-600">Wedding Photographer</p> */}
            </div>
          </div>
          {currentRecord?.ICO ? (
            <p className="text-sm font-semibold">
              ICO :{" "}
              <span className="text-secondary-color">{currentRecord?.ICO}</span>
            </p>
          ) : null}
          {currentRecord?.IC_DPH ? (
            <p className="text-sm font-semibold">
              IC_DPH :{" "}
              <span className="text-secondary-color">
                {currentRecord?.IC_DPH}
              </span>
            </p>
          ) : null}
          {currentRecord?.DIC ? (
            <p className="text-sm font-semibold">
              DIC :{" "}
              <span className="text-secondary-color">{currentRecord?.DIC}</span>
            </p>
          ) : null}
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
              {formatDate(currentRecord?.createdAt)}
            </p>
            {currentRecord?.status !== "pending" && (
              <p className="text-xs sm:text-sm lg:text-base">
                <span className="font-semibold">Delivery Date :</span>{" "}
                {formatDate(currentRecord?.statusTimestamps?.deliveredAt)}
              </p>
            )}
          </div>
        </div>

        {/* Event Details */}
        <div className="mb-4">
          <h4 className="text-base sm:text-lg lg:text-xl xl:text-2xl text-secondary-color font-bold mb-2">
            Event Details
          </h4>
          <p className="text-xs sm:text-sm lg:text-base mt-1 flex items-center gap-1 mb-2">
            <FaCalendarAlt /> <span>Event Date : </span>
            {formatDate(currentRecord?.date)}
          </p>
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
        {activeTab === "Delivered" ? (
          <div className="mt-5 flex flex-col items-center gap-5">
            <ReuseButton variant="secondary" className="!w-fit">
              Download Invoice With Client
            </ReuseButton>
            <ReuseButton variant="secondary" className="!w-fit">
              Download Invoice with Admin
            </ReuseButton>
          </div>
        ) : activeTab === "inProgress" ? (
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
        ) : activeTab === "pending" ? (
          <div className="mt-5 flex gap-3 items-center justify-center flex-wrap">
            <ReuseButton
              onClick={() =>
                currentRecord?.orderType === "custom"
                  ? showCreateOrderModal({ record: currentRecord })
                  : handleDirectAccept(currentRecord as IEventOrder)
              }
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
