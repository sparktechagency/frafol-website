/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import SearchInput from "@/components/ui/Form/ReuseSearchInput";
import TransactionTable from "@/components/ui/Table/TransactionTable";
import TransactionViewModal from "./TransactionViewModal";

const EarningsPage = ({ earning, totalData }: any) => {
  console.log(earning);

  const limit = 12;

  const [isViewModalVisible, setIsViewModalVisible] = useState(false);
  const [currentRecord, setCurrentRecord] = useState(null);

  const showViewUserModal = (record: any) => {
    setCurrentRecord(record);
    setIsViewModalVisible(true);
  };

  const handleCancel = () => {
    setIsViewModalVisible(false);
    setCurrentRecord(null);
  };

  return (
    <div className=" bg-primary-color rounded-xl p-4 min-h-[90vh]">
      <div className="flex justify-between items-center mx-3 py-2 mb-5">
        <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl  font-bold mb-10">
          Earning
        </h1>
        <div className="h-fit">
          <SearchInput placeholder="Search ..." />
        </div>
      </div>

      <TransactionTable
        data={earning}
        loading={false}
        showViewModal={showViewUserModal}
        page={1}
        total={totalData}
        limit={limit}
      />
      <TransactionViewModal
        isViewModalVisible={isViewModalVisible}
        handleCancel={handleCancel}
        currentRecord={currentRecord}
      />
    </div>
  );
};

export default EarningsPage;
