import React, { useMemo } from "react";
import SectionHeader from "../ui/SectionHeader";
import ImageGallery from "../ui/ImageGallery";
import ReuseButton from "../ui/Button/ReuseButton";
import NoResultFound from "../shared/NoResultFound";
import { getServerUrl } from "@/helpers/config/envConfig";

const columnsCountBreakPoints = { 350: 1, 600: 2, 1024: 3, 1440: 4 };

const ProfessionalPageDetailsMyWork = ({
  gallery,
  professionalId,
}: {
  gallery: string[];
  professionalId: string;
}) => {
  const serverUrl = getServerUrl();

  const { galleryImages, galleryVideos } = useMemo(() => {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.svg', ".avif", ".tiff", ".heic", ".ico"];
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.mkv'];


    const images = gallery?.filter((item) =>
      imageExtensions.some((ext) => item.toLowerCase().endsWith(ext))
    ) || [];


    const videos = gallery?.filter((item) =>
      videoExtensions.some((ext) => item.toLowerCase().endsWith(ext))
    ) || [];


    return { galleryImages: images, galleryVideos: videos };
  }, [gallery]);
  return (
    <div className="mt-16">
      <SectionHeader title="My Work" className="mb-3" />
      {(galleryImages?.length > 0 || galleryVideos?.length > 0) ? (
        <div>
          <div className="mt-5">
            <ImageGallery<string>
              data={galleryImages}
              showOnlyImage={true}
              columnsCountBreakPoints={columnsCountBreakPoints}
              arrayOfImages={true}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryVideos?.slice(0, 1)?.map((item, index) => (
              <div key={index} className="relative group w-full">
                <video
                  src={serverUrl + item}
                  controls
                  className="w-full h-full object-cover rounded-lg"
                  preload="metadata"
                  controlsList="nodownload noplaybackrate"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
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
