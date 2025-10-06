/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import SectionHeader from "../ui/SectionHeader";
import ImageGallery from "../ui/ImageGallery";
import ReuseButton from "../ui/Button/ReuseButton";
import NoResultFound from "../shared/NoResultFound";

const columnsCountBreakPoints = { 350: 1, 600: 2, 1024: 3, 1440: 4 };

const ProfessionalPageDetailsMyWork = ({
  gallery,
  professionalId,
}: {
  gallery: string[];
  professionalId: string;
}) => {
  return (
    <div className="mt-16">
      <SectionHeader title="My Work" className="mb-3" />
      {gallery?.length > 0 ? (
        <div>
          <div className="mt-5">
            <ImageGallery<string>
              data={gallery}
              showOnlyImage={true}
              columnsCountBreakPoints={columnsCountBreakPoints}
              arrayOfImages={true}
            />
          </div>
          <div className="mt-10 flex justify-center items-center">
            <ReuseButton
              variant="secondary"
              className="!text-sm sm:!text-base lg:!text-lg !py-4.5 !px-4 !w-fit"
              url={`/professionals/${professionalId}/works`}
            >
              View More
            </ReuseButton>
          </div>
        </div>
      ) : (
        <NoResultFound
          title="No Work Found"
          description="This professional has not uploaded any work"
        />
      )}
    </div>
  );
};

export default ProfessionalPageDetailsMyWork;
