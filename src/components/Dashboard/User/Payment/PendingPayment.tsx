import React from "react";
import { IEventOrder } from "@/types";
import UserOrderCard from "../Orders/UserOrderCard";
import PaginationSection from "@/components/shared/PaginationSection";
import UserOrderViewModal from "../Orders/UserOrderViewModal";

const PendingPayment = ({
  activeTab,
  page,
  totalData,
  myEventData,
  limit,
}: {
  activeTab: string;
  page: number;
  totalData: number;
  myEventData: IEventOrder[];
  limit: number;
}) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [currentRecord, setCurrentRecord] = React.useState<IEventOrder | null>(
    null
  );
  const openModal = (record: IEventOrder) => {
    setIsModalOpen(true);
    setCurrentRecord(record);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setCurrentRecord(null);
  };
  return (
    <div>
      <div className="flex flex-col gap-5">
        {myEventData?.map((item) => (
          <UserOrderCard
            data={item}
            activeTab={activeTab}
            key={item?._id}
            openModal={openModal}
          />
        ))}
      </div>
      <div className="mt-10 flex justify-center items-center">
        <PaginationSection page={page} totalData={totalData} limit={limit} />
      </div>
      <UserOrderViewModal
        isViewModalVisible={isModalOpen}
        handleCancel={handleCancel}
        currentRecord={currentRecord}
        activeModal={activeTab}
      />
    </div>
  );
};

export default PendingPayment;
