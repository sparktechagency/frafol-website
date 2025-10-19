/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import ProfessionalEventOrderTable from "@/components/ui/Table/ProfessionalEventOrderTable";
import React, { useState } from "react";
import ProfessionalEventViewModal from "./ProfessionalEventViewModal";
import EventOrdersOverview from "./EventOrdersOverview";
import ReusableTabs from "@/components/ui/ReusableTabs";
import EventCreateOrderModal from "./EventCreateOrderModal";
import { IEventOrder } from "@/types";
import SendDeliveryRequestModal from "@/components/ui/Modal/Event/SendDeliveryRequestModal";
import CancleOrderModal from "@/components/ui/Modal/CancleOrderModal";
import tryCatchWrapper from "@/utils/tryCatchWrapper";
import {
  cancelEventOrder,
  declineEventOrder,
  sendExtensionRequest,
} from "@/services/EventOrderService/EventOrderServiceApi";
import DeclineOrderRequestModal from "@/components/ui/Modal/DeclineOrderRequestModal";
import ExtenstionRequestModal from "@/components/ui/Modal/ExtenstionRequestModal";

const EventOrdersPage = ({
  activeTab,
  myEventData,
  totalData,
  page,
  serviceCharge,
}: {
  activeTab:
    | "delivered"
    | "inProgress"
    | "upcoming"
    | "pending"
    | "accepted"
    | "cancelled";
  myEventData: IEventOrder[];
  totalData: number;
  page: number;
  serviceCharge: number;
}) => {
  const limit = 12;

  const [isViewModalVisible, setIsViewModalVisible] = useState(false);

  const [isCreateOrderModalVisible, setIsCreateOrderModalVisible] =
    useState(false);

  const [
    isSendDeliveryRequestModalVisible,
    setIsSendDeliveryRequestModalVisible,
  ] = useState(false);

  const [isCancelModalVisible, setIsCancelModalVisible] = React.useState(false);

  const [
    isDeclineOrderRequestModalVisible,
    setIsDeclineOrderRequestModalVisible,
  ] = React.useState(false);

  const [isExtenstionRequestModalVisible, setIsExtenstionRequestModalVisible] =
    React.useState(false);

  const [currentRecord, setCurrentRecord] = useState<IEventOrder | null>(null);

  const showViewUserModal = (record: any) => {
    setCurrentRecord(record);
    setIsViewModalVisible(true);
  };

  const showCreateOrderModal = ({ record }: { record: any }) => {
    console.log("Accept Order Record:", record);
    setCurrentRecord(record);
    setIsViewModalVisible(false);
    setIsCreateOrderModalVisible(true);
  };

  const showSendDeliveryRequestModal = () => {
    setIsSendDeliveryRequestModalVisible(true);
  };
  const showCancelModal = (record: IEventOrder) => {
    setIsCancelModalVisible(true);
    setCurrentRecord(record);
  };

  const showDeclineModal = (record: IEventOrder) => {
    setIsDeclineOrderRequestModalVisible(true);
    setCurrentRecord(record);
  };

  const showExtenstionRequestModal = (record: IEventOrder) => {
    setIsExtenstionRequestModalVisible(true);
    setCurrentRecord(record);
  };

  const handleCancel = () => {
    setIsViewModalVisible(false);
    setCurrentRecord(null);
    setIsCreateOrderModalVisible(false);
  };

  const handleCancelOrder = async (values: any, data: IEventOrder) => {
    console.log({ body: values, params: data?._id });
    const res = await tryCatchWrapper(
      cancelEventOrder,
      { body: values, params: data?._id },
      "Sending request...",
      "Request Sent Successfully!",
      "Something went wrong! Please try again."
    );

    console.log("res", res);

    if (res?.success) {
      setIsCancelModalVisible(false);
      handleCancel();
    }
  };

  const handleDeclineOrder = async (values: any, data: IEventOrder) => {
    console.log({ body: values, params: data?._id });
    const res = await tryCatchWrapper(
      declineEventOrder,
      {
        body: { ...values, status: "declined" },
        params: data?._id,
      },
      "Sending request...",
      "Request Sent Successfully!",
      "Something went wrong! Please try again."
    );

    console.log("res", res);

    if (res?.success) {
      setIsDeclineOrderRequestModalVisible(false);
      handleCancel();
    }
  };
  const handleExtenstion = async (
    values: any,
    data: IEventOrder,
    form: any
  ) => {
    console.log({ body: values, params: data?._id });
    const res = await tryCatchWrapper(
      sendExtensionRequest,
      {
        body: { ...values },
        params: data?._id,
      },
      "Sending request...",
      "Request Sent Successfully!",
      "Something went wrong! Please try again."
    );

    console.log("res", res);

    if (res?.success) {
      setIsExtenstionRequestModalVisible(false);
      handleCancel();
      form.resetFields();
    }
  };

  return (
    <div>
      <div className=" min-h-[80vh] rounded-xl px-4">
        <div className=" w-full p-4   rounded-tl-xl rounded-tr-xl">
          <div className=" flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-5">
              Event Orders
            </h1>
          </div>
        </div>
        <EventOrdersOverview />
        <div className="mt-10">
          <ReusableTabs
            activeTab={activeTab}
            align="left"
            tabs={[
              {
                label: "Delivered",
                value: "delivered",
                content: (
                  <ProfessionalEventOrderTable
                    data={myEventData}
                    loading={false}
                    showViewModal={showViewUserModal}
                    page={page}
                    total={totalData}
                    limit={limit}
                    activeTab={activeTab}
                  />
                ),
              },
              {
                label: "In Progress",
                value: "inProgress",
                content: (
                  <ProfessionalEventOrderTable
                    data={myEventData}
                    loading={false}
                    showViewModal={showViewUserModal}
                    page={page}
                    total={totalData}
                    limit={limit}
                    activeTab={activeTab}
                  />
                ),
              },
              {
                label: "Upcoming Event",
                value: "upcoming",
                content: (
                  <ProfessionalEventOrderTable
                    data={myEventData}
                    loading={false}
                    showViewModal={showViewUserModal}
                    page={page}
                    total={totalData}
                    limit={limit}
                    activeTab={activeTab}
                  />
                ),
              },
              {
                label: "Pending Request",
                value: "pending",
                content: (
                  <ProfessionalEventOrderTable
                    data={myEventData}
                    loading={false}
                    showViewModal={showViewUserModal}
                    page={page}
                    total={totalData}
                    limit={limit}
                    activeTab={activeTab}
                  />
                ),
              },
              {
                label: "Waiting for Payment",
                value: "accepted",
                content: (
                  <ProfessionalEventOrderTable
                    data={myEventData}
                    loading={false}
                    showViewModal={showViewUserModal}
                    page={page}
                    total={totalData}
                    limit={limit}
                    activeTab={activeTab}
                  />
                ),
              },
              {
                label: "Cancelled",
                value: "cancelled",
                content: (
                  <ProfessionalEventOrderTable
                    data={myEventData}
                    loading={false}
                    showViewModal={showViewUserModal}
                    page={page}
                    total={totalData}
                    limit={limit}
                    activeTab={activeTab}
                  />
                ),
              },
            ]}
          />
        </div>
        <ProfessionalEventViewModal
          showCreateOrderModal={showCreateOrderModal}
          showCancelModal={showCancelModal}
          showDeclineModal={showDeclineModal}
          showExtenstionRequestModal={showExtenstionRequestModal}
          isViewModalVisible={isViewModalVisible}
          handleCancel={handleCancel}
          showSendDeliveryRequestModal={showSendDeliveryRequestModal}
          currentRecord={currentRecord}
          activeTab={activeTab}
        />
        <EventCreateOrderModal
          isViewModalVisible={isCreateOrderModalVisible}
          handleCancel={handleCancel}
          currentRecord={currentRecord}
          serviceCharge={serviceCharge}
        />
        <SendDeliveryRequestModal
          isSendDeliveryRequestModalVisible={isSendDeliveryRequestModalVisible}
          handleCancel={handleCancel}
          currentRecord={currentRecord}
          setIsSendDeliveryRequestModalVisible={
            setIsSendDeliveryRequestModalVisible
          }
        />
        <CancleOrderModal
          isCancleOrderModalVisible={isCancelModalVisible}
          handleCancel={() => setIsCancelModalVisible(false)}
          currentRecord={currentRecord}
          handleCancelOrder={handleCancelOrder}
        />

        <DeclineOrderRequestModal
          isDeclineOrderRequestModalVisible={isDeclineOrderRequestModalVisible}
          handleCancel={() => setIsDeclineOrderRequestModalVisible(false)}
          currentRecord={currentRecord}
          handleDeclineOrder={handleDeclineOrder}
        />
        <ExtenstionRequestModal
          isExtenstionRequestModalVisible={isExtenstionRequestModalVisible}
          handleCancel={() => setIsExtenstionRequestModalVisible(false)}
          currentRecord={currentRecord}
          handleExtenstion={handleExtenstion}
        />
      </div>
    </div>
  );
};

export default EventOrdersPage;
