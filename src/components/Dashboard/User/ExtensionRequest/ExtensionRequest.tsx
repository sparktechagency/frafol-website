/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { IEventOrder } from "@/types";
import UserOrderCard from "../Orders/UserOrderCard";
import UserOrderViewModal from "../Orders/UserOrderViewModal";
import AcceptModal from "@/components/ui/Modal/AcceptModal";
import DeclineOrderRequestModal from "@/components/ui/Modal/DeclineOrderRequestModal";
import tryCatchWrapper from "@/utils/tryCatchWrapper";
import {
  acceptExtensionRequest,
  declineExtensionRequest,
} from "@/services/EventOrderService/EventOrderServiceApi";

const ExtensionRequest = ({ myEventData }: { myEventData: IEventOrder[] }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isAcceptModalVisible, setIsAcceptModalVisible] = React.useState(false);
  const [isRejectModalVisible, setIsRejectModalVisible] = React.useState(false);
  const [currentRecord, setCurrentRecord] = React.useState<IEventOrder | null>(
    null
  );

  const showOpenModal = (record: IEventOrder) => {
    setIsModalOpen(true);
    setCurrentRecord(record);
  };

  const showAcceptModal = (record: IEventOrder) => {
    setIsAcceptModalVisible(true);
    setCurrentRecord(record);
  };

  const showRejectModal = (record: IEventOrder) => {
    setIsRejectModalVisible(true);
    setCurrentRecord(record);
  };

  const handleCancel = () => {
    setCurrentRecord(null);
    setIsModalOpen(false);
    setIsAcceptModalVisible(false);
    setIsRejectModalVisible(false);
  };

  const handleAcceptExtension = async (record: IEventOrder) => {
    const extensionLength = record?.extensionRequests?.length;

    const res = await tryCatchWrapper(
      acceptExtensionRequest,
      {
        body: {
          extensionRequestId:
            record?.extensionRequests[extensionLength - 1]?._id,
        },
        params: record?._id,
      },
      "Accepting Extension Request...",
      "Extension Request Accept Successfully!",
      "Something went wrong! Please try again."
    );

    if (res?.success) {
      handleCancel();
    }
  };
  const handleRejectExtension = async (values: any, record: IEventOrder) => {
    const extensionLength = record?.extensionRequests?.length;
    const res = await tryCatchWrapper(
      declineExtensionRequest,
      {
        body: {
          extensionRequestId:
            record?.extensionRequests[extensionLength - 1]?._id,
          ...values,
        },
        params: record?._id,
      },
      "Rejecting Extension Request...",
      "Extension Requested Successfully!",
      "Something went wrong! Please try again."
    );

    if (res?.success) {
      handleCancel();
    }
  };

  return (
    <div>
      <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl  font-bold mb-10">
        Extension Requests
      </h1>
      <div className="flex flex-col gap-5">
        {myEventData?.map((item) => (
          <UserOrderCard
            data={item}
            activeTab={"extension"}
            key={item?._id}
            openModal={showOpenModal}
            showAcceptExtensionModal={showAcceptModal}
            showRejectExtensionModal={showRejectModal}
          />
        ))}
      </div>

      <UserOrderViewModal
        isViewModalVisible={isModalOpen}
        handleCancel={handleCancel}
        currentRecord={currentRecord}
        activeModal={""}
      />
      <AcceptModal
        isModalVisible={isAcceptModalVisible}
        handleCancel={handleCancel}
        currentRecord={currentRecord}
        handleConfirm={handleAcceptExtension}
        description="Are you sure you want to accept the extension ? "
      />
      <DeclineOrderRequestModal
        isDeclineOrderRequestModalVisible={isRejectModalVisible}
        handleCancel={handleCancel}
        currentRecord={currentRecord}
        handleDeclineOrder={handleRejectExtension}
        description="Are you sure you reject the extension ? "
      />
    </div>
  );
};

export default ExtensionRequest;
