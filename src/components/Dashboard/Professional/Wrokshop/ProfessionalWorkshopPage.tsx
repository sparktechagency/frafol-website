/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import ReuseButton from "@/components/ui/Button/ReuseButton";
import SearchInput from "@/components/ui/Form/ReuseSearchInput";
import DeleteModal from "@/components/ui/Modal/DeleteModal";
import React, { useState } from "react";

import ReusableTabs from "@/components/ui/ReusableTabs";
import ProfessionalWorkshopCard from "./ProfessionalWorkshopCard";
import ProfessionalAddNewWorkshop from "./ProfessionalAddNewWorkshop";
import ProfessionalEditWorkshop from "./ProfessionalEditWorkshop";
import ProfessionalViewParticipentModal from "./ProfessionalViewParticipentModal";

const ProfessionalWorkshopPage = () => {
  const [activeTab, setActiveTab] = useState<"Active" | "Pending">("Active");

  const [page, setPage] = useState(1);

  const [searchText, setSearchText] = useState("");

  const limit = 12;
  console.log("Search Text:", searchText, "Page:", page, "Limit:", limit);

  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isViewParticipantModalVisible, setIsViewParticipantModalVisible] =
    useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [currentRecord, setCurrentRecord] = useState<any | null>(null);

  const showAddModal = () => {
    setIsAddModalVisible(true);
  };
  const showEditModal = (record: any) => {
    setIsEditModalVisible(true);
    setCurrentRecord(record);
  };

  const showViewParticipantModal = (record: any) => {
    setIsViewParticipantModalVisible(true);
    setCurrentRecord(record);
  };

  const showDeleteModal = (record: any) => {
    setIsDeleteModalVisible(true);
    setCurrentRecord(record);
  };

  const handleCancel = () => {
    setIsViewParticipantModalVisible(false);
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
            Workshops
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
          Add New Workshop
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
                <ProfessionalWorkshopCard
                  showDeleteModal={showDeleteModal}
                  showEditModal={showEditModal}
                  showViewParticipantModal={showViewParticipantModal}
                />
              </div>
            ),
          },
          {
            label: "Pending",
            value: "Pending",
            content: (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                <ProfessionalWorkshopCard
                  showDeleteModal={showDeleteModal}
                  showEditModal={showEditModal}
                />
              </div>
            ),
          },
        ]}
      />

      <ProfessionalAddNewWorkshop
        isAddModalVisible={isAddModalVisible}
        handleCancel={handleCancel}
      />
      <ProfessionalEditWorkshop
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
      <ProfessionalViewParticipentModal
        isViewModalVisible={isViewParticipantModalVisible}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default ProfessionalWorkshopPage;
