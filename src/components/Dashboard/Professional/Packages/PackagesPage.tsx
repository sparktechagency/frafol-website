/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import ReuseButton from "@/components/ui/Button/ReuseButton";
import SearchInput from "@/components/ui/Form/ReuseSearchInput";
import DeleteModal from "@/components/ui/Modal/DeleteModal";
import React, { useState } from "react";
import ProfessionalAddNewPackageModal from "./ProfessionalAddNewPackageModal";
import ProfessionalEditPackageModal from "./ProfessionalEditPackageModal";
import ProfessionalPackageCard from "./ProfessionalPackageCard";
import ReusableTabs from "@/components/ui/ReusableTabs";

const PackagesPage = () => {
  const [activeTab, setActiveTab] = useState<"Active" | "Pending">("Active");

  const [page, setPage] = useState(1);

  const [searchText, setSearchText] = useState("");

  const limit = 12;
  console.log("Search Text:", searchText, "Page:", page, "Limit:", limit);

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
    setIsAddModalVisible(false);
    setIsEditModalVisible(false);
    setIsDeleteModalVisible(false);
    setCurrentRecord(null);
  };

  return (
    <div>
      <div className=" w-full p-4   rounded-tl-xl rounded-tr-xl">
        <div className=" flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-5">
            Packages
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
          Add New Package
        </ReuseButton>
      </div>
      <ReusableTabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
        align="left"
        tabs={[
          {
            label: "Active",
            value: "Active",
            content: (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                <ProfessionalPackageCard
                  showDeleteModal={showDeleteModal}
                  showEditModal={showEditModal}
                />
              </div>
            ),
          },
          {
            label: "Pending",
            value: "Pending",
            content: (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                <ProfessionalPackageCard
                  showDeleteModal={showDeleteModal}
                  showEditModal={showEditModal}
                />
              </div>
            ),
          },
        ]}
      />

      <ProfessionalAddNewPackageModal
        isAddModalVisible={isAddModalVisible}
        handleCancel={handleCancel}
      />
      <ProfessionalEditPackageModal
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
  );
};

export default PackagesPage;
