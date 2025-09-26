/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Suspense } from "react";
import SectionBanner from "../ui/SectionBanner";
import Container from "../ui/Container";
import ProductCard from "../shared/ProductCard";
import { AllImages } from "../../../public/assets/AllImages";
import MarketPlaceTab from "./MarketPlaceTab";
import SectionHeader from "../ui/SectionHeader";
import MarketPlaceSeacrhFiltre from "./MarketPlaceSeacrhFiltre";
import { fetchWithAuth } from "@/lib/fetchWraper";
import TagTypes from "@/helpers/config/TagTypes";
import { ICategory, IGear } from "@/types";
import PaginationSection from "../shared/PaginationSection";

// Let's generate 12 dummy entries (mock data like a boss 😎)

const MarketPlace = async ({ searchParams }: { searchParams: any }) => {
  const params = await searchParams;
  const search = params?.search || "";

  const page = params?.page || 1;
  const category = params?.category === "all" ? "" : params?.category || "";
  const condition =
    params?.condition === "all" ? null : params?.condition || null;
  const minPrice = params?.min || null;
  const maxPrice = params?.max || null;
  const limit = 12;

  const res = await fetchWithAuth(
    `/marketPlace?page=${page}&limit=${limit}&searchTerm=${search}&categoryId=${category}&condition=${condition}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
    {
      next: {
        tags: [TagTypes.gear],
      },
    }
  );
  const data = await res.json();
  const gear: IGear[] = data?.data?.result;
  const totalData = data?.data?.meta?.total;

  const categoryRes = await fetchWithAuth(`/category/type/gear`, {
    next: {
      tags: [TagTypes.category],
    },
  });
  const categoryData = await categoryRes.json();

  const categories: ICategory[] = categoryData?.data || [];
  return (
    <main className="pb-20">
      <SectionBanner
        image={AllImages?.marketBanner?.src}
        title="Market Place"
      />

      <Container>
        <div className="mt-20">
          <SectionHeader
            title="Market Place"
            description="Browse and buy equipment from professionals in the industry."
          />
          <div className="mt-16">
            <MarketPlaceTab categories={categories} />
          </div>
          <div className="mt-10 flex justify-end">
            <MarketPlaceSeacrhFiltre />
          </div>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch gap-5">
            {gear?.length <= 0 ? (
              <h2>No results found</h2>
            ) : (
              gear?.map((item, index) => (
                <ProductCard key={index} product={item} />
              ))
            )}
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
        </div>
      </Container>
    </main>
  );
};

export default MarketPlace;
