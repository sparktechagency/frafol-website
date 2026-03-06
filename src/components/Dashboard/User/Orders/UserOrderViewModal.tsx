/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from "antd";
import { FaMapMarkerAlt, FaClock, FaCalendarAlt } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";
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
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);

  console.log(currentRecord)

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
            <p className={`text-sm sm:text-sm font-bold border w-fit rounded-2xl py-0.5 px-2 mt-1 ${currentRecord?.orderType === "custom" ? "text-secondary-color" : "border-base-color text-base-color"}`}>
              {currentRecord?.orderType === "custom" ? "Custom" : "Direct"}
            </p>
          </div>
          <p className="text-sm sm:text-base lg:text-kg xl:text-xl font-medium">
            {currentRecord?.serviceType === "both" ? "Photography & Videography" : currentRecord?.serviceType}
          </p>
          <p className="text-sm sm:text-sm lg:text-base xl:text-lg font-medium mt-2">
            By {currentRecord?.serviceProviderId?.name}
          </p>
          <p className="text-sm lg:text-sm text-gray-500 mt-1 flex items-center gap-2">
            <FaCalendarAlt className="shrink-0" /> {formatDate(currentRecord?.date)}
          </p>
          <p className="text-sm lg:text-sm text-gray-500 mt-1 flex items-center gap-2">
            <FaClock className="shrink-0" /> {formetTime(currentRecord?.time)}
          </p>
          {(() => {
            const desc = currentRecord?.description || currentRecord?.packageId?.description;
            const LIMIT = 150;
            if (!desc) return null;
            return (
              <div className="mt-2">
                <p className="text-sm sm:text-sm lg:text-base text-base-color/80">
                  {descriptionExpanded || desc.length <= LIMIT ? desc : `${desc.slice(0, LIMIT)}...`}
                </p>
                {desc.length > LIMIT && (
                  <button
                    onClick={() => setDescriptionExpanded((prev) => !prev)}
                    className="text-secondary-color text-sm font-semibold mt-1 hover:underline"
                  >
                    {descriptionExpanded ? "Show less" : "Show more"}
                  </button>
                )}
              </div>
            );
          })()}
        </div>

        {/* Order Info */}
        <div className="mb-4">
          <h4 className="text-base sm:text-lg lg:text-xl xl:text-2xl text-secondary-color font-bold">
            Order Information
          </h4>
          <div className="mt-2">
            <p className="text-sm sm:text-sm lg:text-base">
              <span className="font-semibold">Order Date :</span>{" "}
              {formatDate(currentRecord?.statusTimestamps?.createdAt)} -{" "}
              {formetTime(currentRecord?.statusTimestamps?.createdAt)}
            </p>
            <p className="text-sm sm:text-sm lg:text-base">
              <span className="font-semibold">Event Date :</span>{" "}
              {formatDate(currentRecord?.date)}
            </p>
            {currentRecord?.status !== "cancelled" && (
              <p className="text-sm sm:text-sm lg:text-base">
                <span className="font-semibold">Expected Delivery Date :</span>{" "}
                {formatDate(currentRecord?.deliveryDate)}
              </p>
            )}

            {currentRecord?.duration && (
              <p className="text-sm sm:text-sm lg:text-base mt-1">
                <span className="font-semibold">Duration :</span>{" "}
                <span className="capitalize">{currentRecord?.duration}</span>
              </p>
            )}
            <p className="text-sm sm:text-sm lg:text-base mt-1">
              <span className="font-semibold">Status :</span>{" "}
              <span className="capitalize font-semibold text-secondary-color">
                {currentRecord?.status}
              </span>
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
              className="rounded-full h-7 w-7 object-cover border border-secondary-color"
            />
            <div>
              <p className="font-bold text-base">
                {currentRecord?.serviceProviderId?.name}
              </p>
            </div>
          </div>
        </div>

        {/* Billing Info */}
        {(currentRecord?.streetAddress || currentRecord?.town || currentRecord?.zipCode || currentRecord?.country) && (
          <div className="mb-4">
            <h4 className="text-base sm:text-lg lg:text-xl xl:text-2xl text-secondary-color font-bold">
              Billing Information
            </h4>
            <div className="mt-2 flex flex-col gap-1">

              {currentRecord?.streetAddress && (
                <p className="text-sm font-semibold">
                  Street Address :{" "}
                  <span className="text-secondary-color">{currentRecord?.streetAddress}</span>
                </p>
              )}
              {currentRecord?.town && (
                <p className="text-sm font-semibold">
                  Town :{" "}
                  <span className="text-secondary-color">{currentRecord?.town}</span>
                </p>
              )}
              {currentRecord?.zipCode && (
                <p className="text-sm font-semibold">
                  ZIP Code :{" "}
                  <span className="text-secondary-color">{currentRecord?.zipCode}</span>
                </p>
              )}
              {currentRecord?.country && (
                <p className="text-sm font-semibold">
                  Country :{" "}
                  <span className="text-secondary-color">{currentRecord?.country}</span>
                </p>
              )}
              {currentRecord?.ICO && (
                <p className="text-sm font-semibold">
                  ICO :{" "}
                  <span className="text-secondary-color">{currentRecord?.ICO}</span>
                </p>
              )}
              {currentRecord?.DIC && (
                <p className="text-sm font-semibold">
                  DIC :{" "}
                  <span className="text-secondary-color">{currentRecord?.DIC}</span>
                </p>
              )}
              {currentRecord?.IC_DPH && (
                <p className="text-sm font-semibold">
                  IC DPH :{" "}
                  <span className="text-secondary-color">{currentRecord?.IC_DPH}</span>
                </p>
              )}
            </div>
          </div>
        )}

        {/* Event Details */}
        <div className="mb-4">
          <h4 className="text-base sm:text-lg lg:text-xl xl:text-2xl text-secondary-color font-bold mb-2">
            Event Details
          </h4>
          <p className="text-sm sm:text-sm lg:text-base flex items-start gap-2 mb-2">
            <div className="flex items-center gap-2 text-nowrap">
              <FaMapMarkerAlt className="shrink-0" /> <span>Location : </span>
            </div>
            {currentRecord?.location}
          </p>
          <p className="text-sm sm:text-sm lg:text-base flex items-center gap-2 mb-2">
            <FaCalendarAlt className="shrink-0" /> <span>Date : </span> {formatDate(currentRecord?.date)}
          </p>
          <p className="text-sm sm:text-sm lg:text-base flex items-center gap-2 mb-2">
            <FaClock className="shrink-0" /> <span>Time : </span>
            {formetTime(currentRecord?.time)}
          </p>
        </div>

        {/* Payment Details */}
        <div className="mb-4">
          <h4 className="text-base sm:text-lg lg:text-xl xl:text-2xl text-secondary-color font-bold">
            Payment Details
          </h4>
          {currentRecord?.vatAmount ? (
            <p className="text-sm sm:text-sm lg:text-base xl:text-lg mt-2">
              <span className="font-semibold">VAT Amount :</span>{" "}
              {currentRecord?.vatAmount}
            </p>
          ) : null}
          <p className="text-sm sm:text-sm lg:text-base xl:text-lg mt-2">
            <span className="font-semibold">
              {currentRecord?.totalPrice ? "Total Amount" : "Budget Range"} :
            </span>{" "}
            {currentRecord?.totalPrice ||
              budgetLabels[currentRecord?.budget_range as string] ||
              currentRecord?.budget_range}
          </p>
          {currentRecord?.paymentStatus && (
            <p className="text-sm sm:text-sm lg:text-base xl:text-lg mt-2">
              <span className="font-semibold">Payment Status :</span>{" "}
              <span className="capitalize font-semibold text-secondary-color">
                {currentRecord?.paymentStatus}
              </span>
            </p>
          )}
        </div>

        {activeModal === "cancelled" && (
          <div className="mb-4">
            <h4 className="text-base sm:text-lg lg:text-xl xl:text-2xl text-secondary-color font-bold">
              Cancel Reason
            </h4>
            <div className="mt-2">
              <p className="text-sm sm:text-sm lg:text-base">
                <span className="font-semibold">Reason :</span>{" "}
                {currentRecord?.cancelReason}
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
