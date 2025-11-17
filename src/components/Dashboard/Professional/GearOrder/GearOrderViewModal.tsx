/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from "antd";
import Image from "next/image";
import { AllImages } from "../../../../../public/assets/AllImages";
import { IGearOrder } from "@/types";
import { getServerUrl } from "@/helpers/config/envConfig";
import InvoiceGearFromClientSide from "@/utils/InvoiceGearFromClientSide";
import InvoiceGearFromAdminSide from "@/utils/InvoiceGearFromAdminSide";
import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import { toast } from "sonner";

interface GearOrderViewModalProps {
  isViewModalVisible: boolean;
  handleCancel: () => void;
  currentRecord: IGearOrder | null;
  showCancelModal?: (record: IGearOrder) => void;
  showDeliverModal?: (record: IGearOrder) => void;
}
const GearOrderViewModal: React.FC<GearOrderViewModalProps> = ({
  isViewModalVisible,
  handleCancel,
  currentRecord,
  showCancelModal,
  showDeliverModal,
}) => {
  const serverUrl = getServerUrl();

  console.log(currentRecord);

  const handleClientGearInvoiceDownload = (currentRecord: IGearOrder) => {
    const toastId = toast.loading("Downloading...", {
      duration: 2000,
    });
    // Generate the PDF using @react-pdf/renderer's pdf function
    pdf(
      <InvoiceGearFromClientSide currentRecord={currentRecord as IGearOrder} />
    )
      .toBlob()
      .then((blob: any) => {
        // Use file-saver to trigger the download
        saveAs(blob, `${currentRecord.orderId}-invoice.pdf`);
        toast.success("Downloaded successfully!", { id: toastId });
      })
      .catch((error: any) => {
        console.log(error);
        toast.error("Download failed", { id: toastId });
      });
  };
  const handleAdminGearInvoiceDownload = (currentRecord: IGearOrder) => {
    const toastId = toast.loading("Downloading...", {
      duration: 2000,
    });
    // Generate the PDF using @react-pdf/renderer's pdf function
    pdf(
      <InvoiceGearFromAdminSide currentRecord={currentRecord as IGearOrder} />
    )
      .toBlob()
      .then((blob: any) => {
        // Use file-saver to trigger the download
        saveAs(blob, `${currentRecord.orderId}-invoice.pdf`);
        toast.success("Downloaded successfully!", { id: toastId });
      })
      .catch((error: any) => {
        console.log(error);
        toast.error("Download failed", { id: toastId });
      });
  };
  return (
    <Modal
      open={isViewModalVisible}
      onCancel={handleCancel}
      footer={null}
      className="lg:!w-[1000px]"
    >
      <div className="p-3 space-y-6">
        {/* Product Card */}
        <div className="bg-white rounded-lg border border-[#E1E1E1] p-4 grid grid-cols-2 gap-4 items-center">
          <div className="flex items-center gap-4">
            <Image
              src={
                currentRecord?.gearMarketplaceId?.gallery?.[0]
                  ? serverUrl + currentRecord?.gearMarketplaceId?.gallery?.[0]
                  : AllImages?.product
              }
              alt={currentRecord?.gearMarketplaceId?.name || "Product Image"}
              width={80}
              height={80}
            />
            <div>
              <h2 className="text-lg font-medium">
                {currentRecord?.gearMarketplaceId?.name || "Product Name"}
              </h2>
            </div>
          </div>
          <div className="text-right">
            <span className=" text-sm">Price</span>
            <p className="text-xl font-semibold">
              {currentRecord?.gearMarketplaceId?.mainPrice || 0}€
            </p>
          </div>
        </div>

        {/* Summary & Payment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Order Summary */}
          <div className="bg-white rounded-lg border border-[#E1E1E1] p-4">
            <h3 className="font-semibold mb-4">Order Summary</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Sub Total :</span>
                <span className="text-black font-medium">
                  {currentRecord?.gearMarketplaceId?.mainPrice?.toFixed(2)}€
                </span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Charge :</span>
                <span className="text-black font-medium">
                  {currentRecord?.gearMarketplaceId?.shippingCompany?.price?.toFixed(
                    2
                  )}
                  €
                </span>
              </div>
              <div className="border-t pt-2 flex justify-between font-semibold text-black">
                <span>Total (USD) :</span>
                {(
                  (currentRecord?.gearMarketplaceId?.mainPrice || 0) +
                  (currentRecord?.gearMarketplaceId?.shippingCompany?.price ||
                    0)
                ).toFixed(2)}{" "}
                €
              </div>
            </div>
          </div>

          {/* Payment Details */}
          <div className="bg-white rounded-lg border border-[#E1E1E1] p-4">
            <h3 className="font-semibold mb-4">Payment Details</h3>
            <div className="text-sm ">
              <p>
                <span className="font-semibold">Transaction ID:</span>{" "}
                {currentRecord?.paymentId?.transactionId || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Payment Method:</span>{" "}
                {currentRecord?.paymentId?.paymentMethod || "N/A"}
                Card
              </p>
            </div>
          </div>
        </div>

        {/* Shipping Method */}
        <div className="bg-white rounded-lg border border-[#E1E1E1] p-4">
          <h3 className="font-semibold mb-2">Preferred Shipping Method</h3>
          <p className="text-sm ">
            {currentRecord?.gearMarketplaceId?.shippingCompany?.name} -{" "}
            {currentRecord?.gearMarketplaceId?.shippingCompany?.price}€
          </p>
        </div>

        {/* Shipping Address */}
        <div className="bg-white rounded-lg border border-[#E1E1E1] p-4">
          <h3 className="font-semibold mb-2">Shipping Address</h3>
          <p className="text-sm ">{currentRecord?.shippingAddress}</p>
        </div>

        {/* Delivery Note */}
        <div className="bg-white rounded-lg border border-[#E1E1E1] p-4">
          <h3 className="font-semibold mb-2">Delivery Note</h3>
          <p className="text-sm ">{currentRecord?.deliveryNote || "N/A"}</p>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          {currentRecord?.orderStatus !== "delivered" &&
            currentRecord?.orderStatus !== "deliveryRequest" && (
              <button
                onClick={() => showDeliverModal?.(currentRecord!)}
                className="!bg-success hover:!bg-success text-white px-4 py-2 rounded !cursor-pointer"
              >
                Mark as Shipped
              </button>
            )}
          {currentRecord?.orderStatus !== "delivered" && (
            <button
              onClick={() => showCancelModal?.(currentRecord!)}
              className="!bg-error hover:!bg-error text-white px-4 py-2 rounded !cursor-pointer"
            >
              Cancel Order
            </button>
          )}
        </div>
        <div className="flex gap-4">
          {currentRecord?.orderStatus === "delivered" && (
            <button
              onClick={() =>
                handleClientGearInvoiceDownload(currentRecord as IGearOrder)
              }
              className="!bg-secondary-color hover:!bg-secondary-color text-white px-4 py-2 rounded !cursor-pointer"
            >
              Download Invoice Client
            </button>
          )}
          {currentRecord?.orderStatus === "delivered" && (
            <button
              onClick={() =>
                handleAdminGearInvoiceDownload(currentRecord as IGearOrder)
              }
              className="!bg-secondary-color hover:!bg-secondary-color text-white px-4 py-2 rounded !cursor-pointer"
            >
              Download Invoice Admin
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default GearOrderViewModal;
