/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Suspense } from "react";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import FeaturedProfessionalsCard from "../shared/FeaturedProfessionalsCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { fetchWithAuth } from "@/lib/fetchWraper";
import TagTypes from "@/helpers/config/TagTypes";
import { IProfessional } from "@/types";
import PhotographyPageSearch from "../Photography/PhotographyPageSearch";
import PaginationSection from "../shared/PaginationSection";

const AllProfessionals = async ({ searchParams }: { searchParams: any }) => {
  const params = await searchParams;
  const search = params?.search;
  const role =
    params?.role === "videographer"
      ? "videographer"
      : params?.role === "photographer"
      ? "photographer"
      : "";

  const page = params?.page || 1;
  const limit = 12;

  const res = await fetchWithAuth(
    `/users/professionals?page=${page}&limit=${limit}&role=${role}&searchTerm=${search}`,
    {
      next: {
        tags: [TagTypes.prfessional],
      },
    }
  );
  const data = await res.json();
  const totalData = data?.data?.meta?.total;
  const professionals: IProfessional[] = data?.data?.result;

  console.log("Professionals:", professionals);
  return (
    <section className="py-16">
      <Container>
        <SectionHeader
          title="Our Professionals"
          description="Discover our top-rated Professionals"
        />
        <div className="mt-16">
          <PhotographyPageSearch />
        </div>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {professionals?.map((item, index) => (
            <FeaturedProfessionalsCard key={index} item={item} />
          ))}
        </div>

        <div className="mt-16 flex justify-center items-center">
          <Suspense fallback={<div>Loading...</div>}>
            <PaginationSection
              page={page}
              limit={limit}
              totalData={totalData}
            />
          </Suspense>
        </div>
      </Container>
    </section>
  );
};

export default AllProfessionals;
