/* eslint-disable @typescript-eslint/no-explicit-any */
import ReuseButton from "@/components/ui/Button/ReuseButton";
import React from "react";
import { Image as AntdImage } from "antd";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { AllImages } from "../../../../../public/assets/AllImages";
import { MdDelete } from "react-icons/md";

const PortfolioPage = ({
  showDeleteModal,
}: {
  showDeleteModal: any; // Function to handle deleting an item
}) => {
  const columnsCountBreakPoints = { 350: 1, 600: 2, 1024: 3 };

  return (
    <div>
      <div className="flex items-center justify-end mb-4">
        <ReuseButton
          variant="secondary"
          className="mb-4 !w-fit"
          onClick={() => alert("Add New Portfolio Item")}
        >
          Upload New Photo
        </ReuseButton>
      </div>
      <div>
        <AntdImage.PreviewGroup>
          <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
            <Masonry gutter="10px">
              {Array.from({ length: 12 })?.map((item, index) => (
                <div key={index} className="relative group w-full ">
                  <AntdImage
                    src={AllImages?.categoryimg2?.src}
                    alt={"gallery Image"}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="hidden group-hover:flex items-center justify-end gap-2 absolute top-2  w-full px-2">
                    <div
                      onClick={showDeleteModal}
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
    </div>
  );
};

export default PortfolioPage;
