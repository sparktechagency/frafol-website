import React from "react";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import { FiSearch } from "react-icons/fi";
import { IoCalendar } from "react-icons/io5";
import { ImCamera } from "react-icons/im";
import { ImDownload2 } from "react-icons/im";

const data = [
  {
    name: "Search",
    description:
      "Browse through our collection of photographers and videographers or use our search to find the perfect match.",
    icon: <FiSearch className="size-7 text-secondary-color" />,
  },
  {
    name: "Book",
    description:
      "Schedule a meeting, discuss your project details and confirm your booking with your chosen professional.",
    icon: <IoCalendar className="size-7 text-secondary-color" />,
  },
  {
    name: "Shoot",
    description:
      "Meet with your professional and let them capture amazing images or videos for your project.",
    icon: <ImCamera className="size-7 text-secondary-color" />,
  },
  {
    name: "Receive",
    description:
      "Get your edited photos or videos and provide feedback on your experience with the professional.",
    icon: <ImDownload2 className="size-7 text-secondary-color" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="pb-28">
      <Container>
        <SectionHeader
          title="How It Works"
          description="Frafol makes it easy to find and hire the perfect photographer or videographer for your project."
        />

        <div className="mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.map((item, i) => (
              <div
                key={i}
                className="flex flex-col gap-2 items-center justify-center text-center"
              >
                <div className="p-4 rounded-full bg-background-color flex items-center justify-center text-white text-3xl">
                  {item.icon}
                </div>
                <h3 className="text-secondary-color text-base sm:text-lg lg:text-xl font-semibold ">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-base-color">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
