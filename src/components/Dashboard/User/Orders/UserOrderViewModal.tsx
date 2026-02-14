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
import InvoiceDocumentFromClientSide from "@/utils/InvoiceDocumentFromClientSide";
import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer"; // Import pdf function from @react-pdf/renderer
import { toast } from "sonner";

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

  const handleDownload = (currentRecord: IEventOrder) => {
    const toastId = toast.loading("Downloading...", {
      duration: 2000,
    });
    // Generate the PDF using @react-pdf/renderer's pdf function
    pdf(
      <InvoiceDocumentFromClientSide
        currentRecord={currentRecord as IEventOrder}
      />
    )
      .toBlob()
      .then((blob: any) => {
        // Use file-saver to trigger the download
        saveAs(blob, `${currentRecord.orderId}-invoice.pdf`);
        toast.success("Downloaded successfully!", { id: toastId });

      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .catch((error: any) => {
        toast.error("Download failed", { id: toastId });
      });
  };

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
        <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-1">
          Order Details
        </h3>
        <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-secondary-color font-bold mb-5">
          {currentRecord?.orderId}
        </p>
        {/* Title & Category */}
        <div className="mb-3">
          <div className="flex items-center gap-x-2">
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-secondary-color font-bold">
              {currentRecord?.packageId?.title || currentRecord?.title}
            </p>
            <p className={`text-xs sm:text-sm font-bold border w-fit rounded-2xl py-0.5 px-2 mt-1 ${currentRecord?.orderType === "custom" ? "text-secondary-color" : "border-base-color text-base-color"}`}>
              {currentRecord?.orderType === "custom" ? "Custom" : "Direct"}
            </p>
          </div>
          <p className="text-sm sm:text-base lg:text-kg xl:text-xl font-medium">
            {currentRecord?.serviceType === "both" ? "Photography & Videography" : currentRecord?.serviceType}
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
              {formatDate(currentRecord?.date)}
            </p>
            {currentRecord?.status !== "cancelled" && (
              <p className="text-xs sm:text-sm lg:text-base">
                <span className="font-semibold">Expected Delivery Date :</span>{" "}
                {formatDate(currentRecord?.deliveryDate)}
              </p>
            )}
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
        <div className="mb-4">
          <h4 className="text-base sm:text-lg lg:text-xl xl:text-2xl text-secondary-color font-bold">
            Payment Details
          </h4>
          <p className="text-xs sm:text-sm lg:text-base xl:text-lg mt-2">
            <span className="font-semibold">
              {currentRecord?.totalPrice ? "Total Amount" : "Budget Range"} :
            </span>{" "}
            {currentRecord?.totalPrice ||
              budgetLabels[currentRecord?.budget_range as string] ||
              currentRecord?.budget_range}
          </p>
        </div>



        {activeModal === "cancelled" && (
          <div className="mb-4">
            <h4 className="text-base sm:text-lg lg:text-xl xl:text-2xl text-secondary-color font-bold">
              Cancel Reason
            </h4>
            <div className="mt-2">
              {" "}
              <p className="text-xs sm:text-sm lg:text-base">
                <span className="font-semibold">Reason :</span>{" "}
                {currentRecord?.cancelReason}
              </p>
            </div>
          </div>
        )}
        {activeModal === "orderOffer" && (
          <div className="mb-4">
            <h4 className="text-base sm:text-lg lg:text-xl xl:text-2xl text-secondary-color font-bold">
              Description
            </h4>
            <div className="mt-2">
              {" "}
              <p className="text-xs sm:text-sm lg:text-base">
                {currentRecord?.description}
              </p>
            </div>
          </div>
        )}

        <div className="mt-5">
          {activeModal === "currentOrder" ? (
            <ReuseButton
              onClick={() => showCancelModal(currentRecord)}
              variant="secondary"
            >
              Cancle Order
            </ReuseButton>
          ) : activeModal === "toConfirm" ? (
            <ReuseButton
              onClick={() => showCancelModal(currentRecord)}
              variant="secondary"
            >
              Decline Delivery Request
            </ReuseButton>
          ) : activeModal === "accepted" ? (
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
            <ReuseButton
              variant="secondary"
              onClick={() => handleDownload(currentRecord as IEventOrder)}
            >
              Download Invoice
            </ReuseButton>
          ) : null}
        </div>
      </div>
    </Modal>
  );
};

export default UserOrderViewModal;
