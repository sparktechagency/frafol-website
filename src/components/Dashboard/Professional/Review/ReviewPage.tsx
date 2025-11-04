/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import reportData from "../../../../../public/data/ReportData";
import ProfessionalReviewTable from "@/components/ui/Table/ProfessionalReviewTable";
import ReportViewModal from "./ReviewViewModal";

const ReviewPage = () => {
  const feedbackData = reportData;

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
    <div>
      <div
        className="mt-5 min-h-[80vh] bg-primary-color rounded-xl px-4"
        style={{ boxShadow: "0px 0px 5px 1px #00000040" }}
      >
        <div className="bg-primary-color w-full p-4   rounded-tl-xl rounded-tr-xl">
          <div className=" flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold  my-5">
              Review
            </h1>
          </div>
        </div>
        <ProfessionalReviewTable
          data={feedbackData}
          loading={false}
          showViewModal={showViewUserModal}
          page={1}
          total={feedbackData?.length}
          limit={limit}
        />
        <ReportViewModal
          isViewModalVisible={isViewModalVisible}
          handleCancel={handleCancel}
          currentRecord={currentRecord}
        />
      </div>
    </div>
  );
};

export default ReviewPage;
