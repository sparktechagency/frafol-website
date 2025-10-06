/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ImageGallery from "@/components/ui/ImageGallery";
import Container from "@/components/ui/Container";
import ReuseButton from "../ui/Button/ReuseButton";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { IProfessionalUser } from "@/types";

const columnsCountBreakPoints = { 350: 1, 600: 2, 1024: 3 };

const ProfessionalAllImages = ({
  id,
  professionalUser,
}: {
  id: string;
  professionalUser: IProfessionalUser;
}) => {
  return (
    <main className="pb-20 pt-10">
      <Container>
        <div className="my-16">
          <ReuseButton
            variant="outline"
            className="!px-0 !py-0 flex items-center w-fit !border-none !border-transparent !text-secondary-color"
            url={`/professionals/${id}`}
          >
            <MdOutlineArrowBackIosNew className="mr-2" /> Back
          </ReuseButton>
        </div>
        <ImageGallery<any>
          data={professionalUser?.gallery}
          showOnlyImage={true}
          columnsCountBreakPoints={columnsCountBreakPoints}
          arrayOfImages={true}
          photoView={true}
        />
      </Container>
    </main>
  );
};

export default ProfessionalAllImages;
