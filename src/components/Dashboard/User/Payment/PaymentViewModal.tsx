import { Modal } from "antd";
interface PaymenViewModalProps {
  isViewModalVisible: boolean;
  handleCancel: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  currentRecord: any | null;
}
const PaymenViewModal: React.FC<PaymenViewModalProps> = ({
  isViewModalVisible,
  handleCancel,
  currentRecord,
}) => {
  return (
    <Modal
      open={isViewModalVisible}
      onCancel={handleCancel}
      footer={null}
      centered
      className="lg:!w-[600px]"
    >
      <div className="p-5">
        <div className="text-base-color">
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-secondary-color">
            Transaction Details
          </h3>

          <div className="text-xs sm:text-sm lg:text-base mt-3">
            <div className="flex items-center justify-between border-b border-[#E1E1E1] pb-2 gap-2 mb-2">
              <span className="font-semibold">Date: </span>
              <span className="">March 13, 2023</span>
            </div>

            <div className="flex items-center justify-between border-b border-[#E1E1E1] pb-2 gap-2 mb-2">
              <span className="font-semibold">Method:</span>
              <span>Photography</span>
            </div>
            <div className="flex items-center justify-between border-b border-[#E1E1E1] pb-2 gap-2 mb-2">
              <span className="font-semibold">Transaction ID: </span>
              <span>4646123456789</span>
            </div>
            <div className="flex items-center justify-between border-b border-[#E1E1E1] pb-2 gap-2 mb-2">
              <span className="font-semibold">Payment Method: </span>
              <span>Card</span>
            </div>
            <div className="flex items-center justify-between pb-2 gap-2 mb-2 font-bold">
              <span className=" text-secondary-color">Amount: </span>
              <span className="text-success">{currentRecord?.amount}</span>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PaymenViewModal;
