import React from "react";

interface SectionHeaderProps {
  title?: string;
  subTitle?: string;
  description?: string;
}
const SectionHeader: React.FC<SectionHeaderProps> = ({
  subTitle,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col justify-center items-center text-center mb-10">
      {subTitle && (
        <h2 className="text-sm sm:text-base lg:text-lg text-secondary-color font-semibold mb-3">
          {subTitle}
        </h2>
      )}
      {title && (
        <h1 className="text-lg sm:text-xl lg:text-2xl text-white/75 font-semibold mb-4">
          {title}
        </h1>
      )}
      {description && (
        <p className="text-sm sm:text-base lg:text-lg text-white/75 w-full sm:w-[90%] lg:w-[80%] xl:w-[65%] mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
