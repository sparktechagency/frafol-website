import MarketPlace from "@/components/MarketPlace/MarketPlacePage";
import React from "react";

const MarketPlacePage = ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  return (
    <main>
      <MarketPlace searchParams={searchParams} />
    </main>
  );
};

export default MarketPlacePage;
