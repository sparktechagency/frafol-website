/* eslint-disable @typescript-eslint/no-explicit-any */
import SectionBanner from "../ui/SectionBanner";
import Container from "../ui/Container";
import ReuseButton from "../ui/Button/ReuseButton";
import { FaArrowLeftLong } from "react-icons/fa6";
import PhotographyCategorySeacrhFiltre from "./PhotographyCategorySeacrhFiltre";
import FeaturedProfessionalsCard from "../shared/FeaturedProfessionalsCard";
import { AllImages } from "../../../public/assets/AllImages";
import { getServerUrl } from "@/helpers/config/envConfig";

const professionals = [
  {
    image: AllImages.photographer1,
    name: "Peter Novák",
    price: "200",
    rating: "5.0",
    profession: "Photographer",
    address: "New York, NY",
  },
  {
    image: AllImages.photographer2,
    name: "Lucia Kováčová",
    price: "250",
    rating: "4.7",
    profession: "Photographer",
    address: "New York, NY",
  },
  {
    image: AllImages.photographer3,
    name: "Tomáš Varga",
    price: "180",
    rating: "4.5",
    profession: "Photographer",
    address: "New York, NY",
  },
  {
    image: AllImages.photographer4,
    name: "Veronika Čechová",
    price: "100",
    rating: "4.0",
    profession: "Photographer",
    address: "New York, NY",
  },
  {
    image: AllImages.photographer2,
    name: "Lucia Kováčová",
    price: "250",
    rating: "4.7",
    profession: "Photographer",
    address: "New York, NY",
  },
  {
    image: AllImages.photographer1,
    name: "Peter Novák",
    price: "200",
    rating: "5.0",
    profession: "Photographer",
    address: "New York, NY",
  },
  {
    image: AllImages.photographer3,
    name: "Tomáš Varga",
    price: "180",
    rating: "4.5",
    profession: "Photographer",
    address: "New York, NY",
  },
  {
    image: AllImages.photographer4,
    name: "Veronika Čechová",
    price: "100",
    rating: "4.0",
    profession: "Photographer",
    address: "New York, NY",
  },
  {
    image: AllImages.photographer1,
    name: "Peter Novák",
    price: "200",
    rating: "5.0",
    profession: "Photographer",
    address: "New York, NY",
  },
  {
    image: AllImages.photographer2,
    name: "Lucia Kováčová",
    price: "250",
    rating: "4.7",
    profession: "Photographer",
    address: "New York, NY",
  },
  {
    image: AllImages.photographer3,
    name: "Tomáš Varga",
    price: "180",
    rating: "4.5",
    profession: "Photographer",
    address: "New York, NY",
  },
  {
    image: AllImages.photographer4,
    name: "Veronika Čechová",
    price: "100",
    rating: "4.0",
    profession: "Photographer",
    address: "New York, NY",
  },
  {
    image: AllImages.photographer2,
    name: "Lucia Kováčová",
    price: "250",
    rating: "4.7",
    profession: "Photographer",
    address: "New York, NY",
  },
  {
    image: AllImages.photographer1,
    name: "Peter Novák",
    price: "200",
    rating: "5.0",
    profession: "Photographer",
    address: "New York, NY",
  },
  {
    image: AllImages.photographer3,
    name: "Tomáš Varga",
    price: "180",
    rating: "4.5",
    profession: "Photographer",
    address: "New York, NY",
  },
  {
    image: AllImages.photographer4,
    name: "Veronika Čechová",
    price: "100",
    rating: "4.0",
    profession: "Photographer",
    address: "New York, NY",
  },
];

const PhotographyCategoryDetails = ({
  data,
}: {
  data: { id: string; title: string | string[]; src: string | string[] };
}) => {
  const serverUrl: string = getServerUrl() || "";
  return (
    <main className="pb-20">
      <SectionBanner
        image={data?.src ? serverUrl + data?.src : AllImages.dummyCover?.src}
        title={data?.title as string}
      />

      <Container>
        <div className="mt-10 flex flex-col lg:flex-row justify-between lg:items-center gap-5">
          <ReuseButton
            url="/photography"
            variant="secondary"
            className="w-fit !text-sm sm:!text-base lg:!text-xl  !flex !items-center gap-2"
          >
            <FaArrowLeftLong className="!mt-1" />
            Back To Categories
          </ReuseButton>
          <PhotographyCategorySeacrhFiltre />
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {professionals.map((item, index) => (
            <FeaturedProfessionalsCard key={index} item={item} />
          ))}
        </div>
      </Container>
    </main>
  );
};

export default PhotographyCategoryDetails;
