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

  const [currentRecord, setCurrentRecord] = useState(null);

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

  const handleCancel = () => {
    setIsViewModalVisible(false);
    setCurrentRecord(null);
    setIsCreateOrderModalVisible(false);
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
      </div>
    </div>
  );
};

export default EventOrdersPage;
