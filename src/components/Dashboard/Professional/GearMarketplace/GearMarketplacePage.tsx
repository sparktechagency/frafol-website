/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import SearchInput from "@/components/ui/Form/ReuseSearchInput";
import GearMarketPlaceTable from "../../../ui/Table/GearMarketPlaceTable";
import GearMarketViewModal from "./GearMarketViewModal";
import DeleteModal from "@/components/ui/Modal/DeleteModal";
import ReuseButton from "@/components/ui/Button/ReuseButton";
import GearMarketPlaceAddNewGear from "./GearMarketPlaceAddNewGear";
import GearMarketPlaceEditNewGear from "./GearMarketPlaceEditNewGear";

const GearMarketplacePage = () => {
  const itemData = Array.from({ length: 20 }).map((_, index) => ({
    key: index + 1,
    id: 1223 + index,
    image: "/camera.png", // place a camera image in /public or replace with a URL
    name: "Canon Camera",
    category: index % 3 === 0 ? "Camera" : index % 3 === 1 ? "Tripod" : "Lens",
    price: "$200",
    condition: index % 2 === 0 ? "New" : "Used",
    status: index % 4 === 3 ? "Sold Out" : "In Stock",
    shippingCompany: "DHL",
    shippingPrice: "$40",
    approvalStatus:
      index % 3 === 0 ? "Approved" : index % 3 === 1 ? "Pending" : "Approved",
  }));

  const [page, setPage] = useState(1);

  const [searchText, setSearchText] = useState("");
  console.log("Search Text:", searchText);

  const limit = 12;

  const [isViewModalVisible, setIsViewModalVisible] = useState(false);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [currentRecord, setCurrentRecord] = useState<any | null>(null);

  const showAddModal = () => {
    setIsAddModalVisible(true);
  };
  const showEditModal = (record: any) => {
    setIsEditModalVisible(true);
    setCurrentRecord(record);
  };

  const showDeleteModal = (record: any) => {
    setIsDeleteModalVisible(true);
    setCurrentRecord(record);
  };

  const handleCancel = () => {
    setIsViewModalVisible(false);
    setIsAddModalVisible(false);
    setIsEditModalVisible(false);
    setIsDeleteModalVisible(false);
    setCurrentRecord(null);
  };

  const showViewUserModal = (record: any) => {
    setCurrentRecord(record);
    setIsViewModalVisible(true);
  };

  return (
    <div>
      <div className=" min-h-[80vh] rounded-xl px-4">
        <div className=" w-full p-4   rounded-tl-xl rounded-tr-xl">
          <div className=" flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-5">
              Gear Marketplace
            </h1>
            <SearchInput
              placeholder="Search ..."
              setSearch={setSearchText}
              setPage={setPage}
            />
          </div>
        </div>
        <div className="flex justify-end mb-5">
          <ReuseButton
            variant="secondary"
            className="!w-fit"
            onClick={showAddModal}
          >
            Add Gear
          </ReuseButton>
        </div>
        <GearMarketPlaceTable
          data={itemData}
          loading={false}
          showViewModal={showViewUserModal}
          showEditModal={showEditModal}
          showDeleteModal={showDeleteModal}
          setPage={setPage}
          page={page}
          total={itemData?.length}
          limit={limit}
        />
        <GearMarketViewModal
          isViewModalVisible={isViewModalVisible}
          handleCancel={handleCancel}
          currentRecord={currentRecord}
        />
        <GearMarketPlaceAddNewGear
          isAddModalVisible={isAddModalVisible}
          handleCancel={handleCancel}
        />
        <GearMarketPlaceEditNewGear
          isEditModalVisible={isEditModalVisible}
          handleCancel={handleCancel}
          currentRecord={currentRecord}
        />
        <DeleteModal
          isDeleteModalVisible={isDeleteModalVisible}
          handleCancel={handleCancel}
          currentRecord={currentRecord}
          handleDelete={() => {}}
        />
      </div>
    </div>
  );
};

export default GearMarketplacePage;
