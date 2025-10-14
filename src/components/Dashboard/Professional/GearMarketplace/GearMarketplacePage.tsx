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
import { ICategory, IGear } from "@/types";
import { FaPlus } from "react-icons/fa6";
import tryCatchWrapper from "@/utils/tryCatchWrapper";
import { deleteGear } from "@/services/GearService/GearServiceApi";

const GearMarketplacePage = ({
  page,
  limit,
  categories,
  myGears,
  totalData,
  serviceCharge,
}: {
  page: number;
  limit: number;
  categories: ICategory[];
  myGears: IGear[];
  totalData: number;
  serviceCharge: number;
}) => {
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

  const handleDelete = async (record: IGear) => {
    // Implement delete functionality here
    if (record) {
      const res = await tryCatchWrapper(
        deleteGear,
        { params: record?._id },
        "Deleting Gear...",
        "Gear deleted successfully!",
        "Something went wrong! Please try again."
      );

      if (res?.success) {
        handleCancel();
      }
    }
  };

  return (
    <div>
      <div className=" min-h-[80vh] rounded-xl px-4">
        <div className=" w-full p-4   rounded-tl-xl rounded-tr-xl">
          <div className=" flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-5">
              Gear Marketplace
            </h1>
            <ReuseButton
              variant="secondary"
              className="!w-fit"
              onClick={showAddModal}
            >
              <FaPlus className="mr-2" />
              Add Gear
            </ReuseButton>
          </div>
        </div>
        <div className="flex justify-end mb-5">
          <SearchInput placeholder="Search ..." />
        </div>
        <GearMarketPlaceTable
          data={myGears}
          loading={false}
          showViewModal={showViewUserModal}
          showEditModal={showEditModal}
          showDeleteModal={showDeleteModal}
          page={page}
          total={totalData}
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
          categories={categories}
          serviceCharge={serviceCharge}
        />
        <GearMarketPlaceEditNewGear
          isEditModalVisible={isEditModalVisible}
          handleCancel={handleCancel}
          currentRecord={currentRecord}
          categories={categories}
          serviceCharge={serviceCharge}
        />
        <DeleteModal
          isDeleteModalVisible={isDeleteModalVisible}
          handleCancel={handleCancel}
          currentRecord={currentRecord}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default GearMarketplacePage;
