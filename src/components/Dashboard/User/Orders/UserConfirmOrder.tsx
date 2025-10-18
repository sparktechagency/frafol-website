/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import UserOrderCard from "./UserOrderCard";
import UserOrderViewModal from "./UserOrderViewModal";
import { IEventOrder } from "@/types";
import tryCatchWrapper from "@/utils/tryCatchWrapper";
import {
  acceptDeliveryRequest,
  cancelEventOrder,
} from "@/services/EventOrderService/EventOrderServiceApi";
import PaginationSection from "@/components/shared/PaginationSection";
import CancleOrderModal from "@/components/ui/Modal/CancleOrderModal";
import AcceptModal from "@/components/ui/Modal/AcceptModal";

const UserConfirmOrder = ({
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
  const [isCancelModalVisible, setIsCancelModalVisible] = React.useState(false);
  const [isConfirmModalVisible, setIsConfirmModalVisible] =
    React.useState(false);

  const showCancelModal = (record: IEventOrder) => {
    setIsCancelModalVisible(true);
    setCurrentRecord(record);
  };

  const showConfirmModal = (record: IEventOrder) => {
    setIsConfirmModalVisible(true);
    setCurrentRecord(record);
  };

  const openModal = (record: IEventOrder) => {
    setIsModalOpen(true);
    setCurrentRecord(record);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setIsConfirmModalVisible(false);
    setCurrentRecord(null);
  };

  const handleCancelOrder = async (values: any, data: IEventOrder) => {
    console.log({ body: values, params: data?._id });
    const res = await tryCatchWrapper(
      cancelEventOrder,
      { body: values, params: data?._id },
      "Waiting for payment...",
      "Redirecting to Stripe to Complete Payment From Stripe",
      "Something went wrong! Please try again."
    );

    console.log("res", res);

    if (res?.success) {
      setIsCancelModalVisible(false);
      handleCancel();
    }
  };

  const handleConfirmDelivery = async (data: any) => {
    const res = await tryCatchWrapper(
      acceptDeliveryRequest,
      { params: data?._id },
      "Accepting Delivery Request...",
      "Delivery Request Accept Successfully!",
      "Something went wrong! Please try again."
    );

    console.log("res", res);

    if (res?.success) {
      setIsConfirmModalVisible(false);
      setCurrentRecord(null);
      handleCancel();
    }
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
            showConfirmModal={showConfirmModal}
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
        showCancelModal={showCancelModal}
      />
      <CancleOrderModal
        isCancleOrderModalVisible={isCancelModalVisible}
        handleCancel={() => setIsCancelModalVisible(false)}
        currentRecord={currentRecord}
        handleCancelOrder={handleCancelOrder}
      />
      <AcceptModal
        isModalVisible={isConfirmModalVisible}
        handleCancel={() => setIsConfirmModalVisible(false)}
        currentRecord={currentRecord}
        handleConfirm={handleConfirmDelivery}
        description=" Are You Sure You want to Confirm This Delivery ?"
      />
    </div>
  );
};

export default UserConfirmOrder;
