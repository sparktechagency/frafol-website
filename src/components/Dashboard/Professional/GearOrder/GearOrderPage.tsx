/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import SearchInput from "@/components/ui/Form/ReuseSearchInput";
import GearOrderTable from "@/components/ui/Table/GearOrderTable";
import React, { useState } from "react";
import GearOrderViewModal from "./GearOrderViewModal";

const GearOrderPage = () => {
  const orderData = Array.from({ length: 20 }).map((_, index) => ({
    key: (index + 1).toString(),
    orderId: (1223 + index).toString(),
    clientName: "Lívia Nováková",
    email: "livianova@example.com",
    itemName: "Canon Camera",
    date: "24 May, 2025",
    orderStatus:
      index % 5 === 0 ? "Shipped" : index % 5 === 1 ? "Cancelled" : "Pending",
    amount: "$200",
    paymentStatus:
      index % 5 === 0 ? "Received" : index % 5 === 1 ? "-" : "Pending",
  }));

  const [page, setPage] = useState(1);

  const [searchText, setSearchText] = useState("");
  console.log("Search Text:", searchText);

  const limit = 12;

  const [isViewModalVisible, setIsViewModalVisible] = useState(false);
  const [currentRecord, setCurrentRecord] = useState<any | null>(null);

  const showViewUserModal = (record: any) => {
    setIsViewModalVisible(true);
    setCurrentRecord(record);
  };

  const handleCancel = () => {
    setIsViewModalVisible(false);
    setCurrentRecord(null);
  };

  return (
    <div>
      <div className=" min-h-[80vh] rounded-xl px-4">
        <div className=" w-full p-4   rounded-tl-xl rounded-tr-xl">
          <div className=" flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-5">
              Gear Orders
            </h1>
            <SearchInput
              placeholder="Search ..."
              setSearch={setSearchText}
              setPage={setPage}
            />
          </div>
        </div>

        <GearOrderTable
          data={orderData}
          loading={false}
          showViewModal={showViewUserModal}
          setPage={setPage}
          page={page}
          total={orderData?.length}
          limit={limit}
        />

        <GearOrderViewModal
          isViewModalVisible={isViewModalVisible}
          handleCancel={handleCancel}
          currentRecord={currentRecord}
        />
      </div>
    </div>
  );
};

export default GearOrderPage;
