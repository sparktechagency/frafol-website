/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import ProfessionalEventOrderTable from "@/components/ui/Table/ProfessionalEventOrderTable";
import React, { useState } from "react";
import ProfessionalEventViewModal from "./ProfessionalEventViewModal";
import EventOrdersOverview from "./EventOrdersOverview";
import ReusableTabs from "@/components/ui/ReusableTabs";
import EventCreateOrderModal from "./EventCreateOrderModal";

const EventOrdersPage = () => {
  const [activeTab, setActiveTab] = useState<
    "Delivered" | "InProgress" | "Upcoming" | "Pending" | "Cancelled"
  >("Delivered");

  const ordersData = Array.from({ length: 20 }).map((_, index) => ({
    key: index + 1,
    orderId: 1223,
    clientName: "Lívia Nováková",
    serviceType: "Photo",
    serviceCategory: "Wedding Photography",
    orderType: "Direct",
    price: "$200",
    date: "24 May, 2025",
    location: "Trencin, Slovakia",
    status: "Pending",
  }));

  const [page, setPage] = useState(1);

  const limit = 12;

  const [isViewModalVisible, setIsViewModalVisible] = useState(false);

  const [isCreateOrderModalVisible, setIsCreateOrderModalVisible] =
    useState(false);

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
            onTabChange={setActiveTab}
            align="left"
            tabs={[
              {
                label: "Delivered",
                value: "Delivered",
                content: (
                  <ProfessionalEventOrderTable
                    data={ordersData}
                    loading={false}
                    showViewModal={showViewUserModal}
                    setPage={setPage}
                    page={page}
                    total={ordersData?.length}
                    limit={limit}
                    activeTab={activeTab}
                  />
                ),
              },
              {
                label: "InProgress",
                value: "InProgress",
                content: (
                  <ProfessionalEventOrderTable
                    data={ordersData}
                    loading={false}
                    showViewModal={showViewUserModal}
                    setPage={setPage}
                    page={page}
                    total={ordersData?.length}
                    limit={limit}
                    activeTab={activeTab}
                  />
                ),
              },
              {
                label: "Upcoming",
                value: "Upcoming",
                content: (
                  <ProfessionalEventOrderTable
                    data={ordersData}
                    loading={false}
                    showViewModal={showViewUserModal}
                    setPage={setPage}
                    page={page}
                    total={ordersData?.length}
                    limit={limit}
                    activeTab={activeTab}
                  />
                ),
              },
              {
                label: "Pending",
                value: "Pending",
                content: (
                  <ProfessionalEventOrderTable
                    data={ordersData}
                    loading={false}
                    showViewModal={showViewUserModal}
                    setPage={setPage}
                    page={page}
                    total={ordersData?.length}
                    limit={limit}
                    activeTab={activeTab}
                  />
                ),
              },
              {
                label: "Cancelled",
                value: "Cancelled",
                content: (
                  <ProfessionalEventOrderTable
                    data={ordersData}
                    loading={false}
                    showViewModal={showViewUserModal}
                    setPage={setPage}
                    page={page}
                    total={ordersData?.length}
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
          currentRecord={currentRecord}
          activeTab={activeTab}
        />
        <EventCreateOrderModal
          isViewModalVisible={isCreateOrderModalVisible}
          handleCancel={handleCancel}
          currentRecord={currentRecord}
        />
      </div>
    </div>
  );
};

export default EventOrdersPage;
