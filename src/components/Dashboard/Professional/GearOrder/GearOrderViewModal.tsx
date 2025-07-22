/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from "antd";
import Image from "next/image";
import { AllImages } from "../../../../../public/assets/AllImages";

interface GearOrderViewModalProps {
  isViewModalVisible: boolean;
  handleCancel: () => void;
  currentRecord: any | null;
}
const GearOrderViewModal: React.FC<GearOrderViewModalProps> = ({
  isViewModalVisible,
  handleCancel,
  currentRecord,
}) => {
  console.log(`Current Record in Modal:`, currentRecord);
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
              src={AllImages?.product}
              alt="Canon Camera"
              width={80}
              height={80}
            />
            <div>
              <h2 className="text-lg font-medium">Canon Camera</h2>
            </div>
          </div>
          <div className="text-right">
            <span className=" text-sm">Price</span>
            <p className="text-xl font-semibold">$200</p>
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
                <span className="text-black font-medium">$11488.96</span>
              </div>
              <div className="flex justify-between">
                <span>Service Charge :</span>
                <span className="text-black font-medium">$40</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Charge :</span>
                <span className="text-black font-medium">$15.00</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-semibold text-black">
                <span>Total (USD) :</span>
                <span>$1443.96</span>
              </div>
            </div>
          </div>

          {/* Payment Details */}
          <div className="bg-white rounded-lg border border-[#E1E1E1] p-4">
            <h3 className="font-semibold mb-4">Payment Details</h3>
            <div className="text-sm ">
              <p>
                <span className="font-semibold">Transactions:</span>{" "}
                #AME123461272341
              </p>
              <p>
                <span className="font-semibold">Payment Method:</span> Debit
                Card
              </p>
            </div>
          </div>
        </div>

        {/* Shipping Method */}
        <div className="bg-white rounded-lg border border-[#E1E1E1] p-4">
          <h3 className="font-semibold mb-2">Preferred Shipping Method</h3>
          <p className="text-sm ">DHL</p>
        </div>

        {/* Shipping Address */}
        <div className="bg-white rounded-lg border border-[#E1E1E1] p-4">
          <h3 className="font-semibold mb-2">Shipping Address</h3>
          <p className="text-sm ">3517 W. Gray St. Utica, Pennsylvania 57867</p>
        </div>

        {/* Delivery Note */}
        <div className="bg-white rounded-lg border border-[#E1E1E1] p-4">
          <h3 className="font-semibold mb-2">Delivery Note</h3>
          <p className="text-sm ">N/A</p>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <button className="!bg-success hover:!bg-success text-white px-4 py-2 rounded">
            Mark as Shipped
          </button>
          <button className="!bg-error hover:!bg-error text-white px-4 py-2 rounded">
            Cancel Order
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default GearOrderViewModal;
