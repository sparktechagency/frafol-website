import React from "react";
import SectionBanner from "../ui/SectionBanner";
import Container from "../ui/Container";
import ProductCard from "../shared/ProductCard";
import { AllImages } from "../../../public/assets/AllImages";
import MarketPlaceTab from "./MarketPlaceTab";
import SectionHeader from "../ui/SectionHeader";
import MarketPlaceSeacrhFiltre from "./MarketPlaceSeacrhFiltre";
import { fetchWithAuth } from "@/lib/fetchWraper";
import TagTypes from "@/helpers/config/TagTypes";
import { IGear } from "@/types";

// Let's generate 12 dummy entries (mock data like a boss 😎)

const MarketPlace = async () => {
  const res = await fetchWithAuth(`/marketPlace?limit=4`, {
    next: {
      tags: [TagTypes.gear],
    },
  });
  const data = await res.json();
  const gear: IGear[] = data?.data?.result;
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
            <MarketPlaceTab />
          </div>
          <div className="mt-10 flex justify-end">
            <MarketPlaceSeacrhFiltre />
          </div>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {gear.map((item, index) => (
              <ProductCard key={index} product={item} />
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
};

export default MarketPlace;
