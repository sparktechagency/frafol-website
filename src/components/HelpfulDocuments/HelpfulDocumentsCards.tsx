import React from "react";
import ReuseButton from "../ui/Button/ReuseButton";
import { FaRegFileAlt } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";

const HelpfulDocumentsCards = () => {
  return (
    <div className="flex items-start gap-2 p-4  outline  outline-offset-[-1px] outline-neutral-200 w-full sm:w-[600px] lg:w-[800px] rounded-lg">
      <div className="p-2 rounded-lg bg-[#FFF6EC]">
        <FaRegFileAlt className="text-secondary-color text-2xl" />
      </div>
      <div className="w-full">
        <p className="text-base-color text-base sm:text-lg lg:text-xl  font-bold ">
          Storyboard Template{" "}
        </p>
        <p className="text-[#4B5563] text-xs sm:text-sm lg:text-base font-medium">
          A professional storyboard template for planning video shoots.
        </p>
        <p className="text-[#4B5563] text-xs sm:text-sm lg:text-base font-medium">
          1.2 MB PDF
        </p>
        <ReuseButton
          className="mt-2 !text-base !py-4 !w-fit"
          variant="secondary"
        >
          <MdFileDownload className="mr-2" /> Download
        </ReuseButton>
      </div>
    </div>
  );
};

export default HelpfulDocumentsCards;
