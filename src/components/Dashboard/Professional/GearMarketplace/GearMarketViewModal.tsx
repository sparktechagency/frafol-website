/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from "antd";
import Image from "next/image";
import { AllImages } from "../../../../../public/assets/AllImages";

interface GearMarketViewModalProps {
  isViewModalVisible: boolean;
  handleCancel: () => void;
  currentRecord: any | null;
}
const GearMarketViewModal: React.FC<GearMarketViewModalProps> = ({
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
      className="lg:!w-[600px]"
    >
      <div className="p-5 text-[#1a1a1a]">
        <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-5">
          Gear Details
        </h3>

        <div>
          <Image
            src={AllImages?.product}
            alt="Item"
            className="rounded h-40 w-auto mb-4"
          />
          <div className="mb-3">
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold mb-2">
              {`${currentRecord?.name} - (${currentRecord?.condition})`}
            </p>
            <p className="text-xs sm:text-sm lg:text-base xl:text-lg font-medium">
              {currentRecord?.category}
            </p>
            <p className="text-xs sm:text-sm lg:text-base xl:text-lg font-medium">
              {currentRecord?.price}
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default GearMarketViewModal;
