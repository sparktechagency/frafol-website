import React from "react";
import SectionHeader from "../ui/SectionHeader";
import CategoryCard from "../shared/CategoryCard";
import Container from "../ui/Container";
import ReuseInput from "../ui/Form/ReuseInput";
import { FiSearch } from "react-icons/fi";
import videographyData from "../../../public/data/videographyData";
import Link from "next/link";

const VideographeyPage = () => {
  return (
    <div className="">
      <Container>
        <SectionHeader
          title="Browse All Videography Categories"
          description="Explore our complete range of specialized videography services to match your specific project needs."
        />
        <div className="mt-16">
          <div className="flex justify-end mb-3">
            <ReuseInput
              prefix={<FiSearch className="text-base-color size-4.5" />}
              name="search"
              inputClassName="!bg-background-color !rounded-lg !text-base-color !border-none !shadow-none text-lg font-semibold !w-96 !py-2.5"
              placeholder="Search"
              type="text"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 items-stretch gap-5">
            {videographyData.map((item, index) => (
              <Link key={index} href={`/videography/${item?.id}`}>
                <CategoryCard item={item} />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default VideographeyPage;
