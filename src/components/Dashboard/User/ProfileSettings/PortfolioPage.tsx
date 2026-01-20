"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import ReuseButton from "@/components/ui/Button/ReuseButton";
import React, { useState } from "react";
import { Image as AntdImage } from "antd";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { AllImages } from "../../../../../public/assets/AllImages";
import { MdDelete } from "react-icons/md";
import DeleteModal from "@/components/ui/Modal/DeleteModal";
import { IProfile } from "@/types";
import { getServerUrl } from "@/helpers/config/envConfig";
import { updateGallery } from "@/services/ProfileService/ProfileServiceApi";
import tryCatchWrapper from "@/utils/tryCatchWrapper";
import ProfileProtfolioUploadImageModal from "@/components/ui/Modal/Profile/ProfileProtfolioUploadImageModal";

const PortfolioPage = ({ myData }: { myData: IProfile }) => {
  const serverUrl = getServerUrl();
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isUploadModalVisible, setIsUploadModalVisible] = useState(false);
  const [currentRecord, setCurrentRecord] = useState<any>(null);

  const showUploadModal = () => {
    setIsUploadModalVisible(true);
  };

  const showDeleteModal = (record: string) => {
    setIsDeleteModalVisible(true);
    setCurrentRecord(record);
  };

  const handleCancel = () => {
    setIsDeleteModalVisible(false);
    setIsUploadModalVisible(false);
    setCurrentRecord(null);
  };

  const columnsCountBreakPoints = { 350: 1, 600: 2, 1024: 3, 1440: 4 };

  const handleDelete = async (record: string) => {
    const formData = new FormData();

    formData.append(
      "data",
      JSON.stringify({
        deleteGallery: [record],
      })
    );

    const res = await tryCatchWrapper(
      updateGallery,
      { body: formData },
      {
        toastLoadingMessage: "Deleting Image...",
        toastSuccessMessage: "Gallery updated successfully!",
        toastErrorMessage: "Something went wrong! Please try again.",
      }
    );

    if (res?.success) {
      handleCancel();
    }
  };

  return (
    <div>
      <div className="flex items-center justify-end mb-4">
        <ReuseButton
          variant="secondary"
          className="mb-4 !w-fit"
          onClick={showUploadModal}
        >
          Upload New Photo
        </ReuseButton>
      </div>
      <div>
        <AntdImage.PreviewGroup>
          <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
            <Masonry gutter="10px">
              {myData?.gallery?.map((item, index) => (
                <div key={index} className="relative group w-full ">
                  <AntdImage
                    src={serverUrl + item || AllImages?.dummyCover?.src}
                    alt={"gallery Image"}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="hidden group-hover:flex items-center justify-end gap-2 absolute top-2  w-full px-2">
                    <div
                      onClick={() => showDeleteModal(item)}
                      className="flex items-center p-1 bg-secondary-color rounded-full"
                    >
                      <MdDelete className="text-2xl text-primary-color cursor-pointer" />
                    </div>
                  </div>
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </AntdImage.PreviewGroup>
      </div>
      <DeleteModal
        handleDelete={handleDelete}
        currentRecord={currentRecord}
        isDeleteModalVisible={isDeleteModalVisible}
        handleCancel={handleCancel}
      />
      <ProfileProtfolioUploadImageModal
        isModalVisible={isUploadModalVisible}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default PortfolioPage;
