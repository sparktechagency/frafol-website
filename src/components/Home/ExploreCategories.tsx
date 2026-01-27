import React, { Suspense } from "react";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
// import ExploreCategoryTab from "./ExploreCategoryTab";
import ExplorePhotographyCategory from "./ExplorePhotographyCategory";
import ExploreVideographyCategory from "./ExploreVideographyCategory";
import ReusableTabs from "../ui/ReusableTabs";
import { fetchWithAuth } from "@/lib/fetchWraper";
import TagTypes from "@/helpers/config/TagTypes";
import { ICategory } from "@/types";
import { FadeLoader } from "react-spinners";

const ExploreCategories = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const params = await searchParams;
  const tab = params?.tab || "photoGraphy";
  const activeTab = (tab === "videoGraphy" ? "videoGraphy" : "photoGraphy") as
    | "photoGraphy"
    | "videoGraphy";

  const res = await fetchWithAuth(`/category/type/${activeTab}`, {
    next: {
      tags: [TagTypes.category],
      revalidate: 30
    },
  });
  const data = await res.json();
  const categories: ICategory[] = data?.data?.slice(0, 4);

  return (
    <section className="py-28">
      <Container>
        <SectionHeader
          title="Explore Categories"
          description="Frafol makes it easy to find and hire the perfect photographer or videographer for your project."
        />
        <div className="mt-16">
          <ReusableTabs<"photoGraphy" | "videoGraphy">
            align="center"
            activeTab={activeTab}
            tabs={[
              {
                label: "Photography",
                value: "photoGraphy",
                content: (
                  <Suspense
                    fallback={
                      <div className="py-40 w-full flex justify-center items-center">
                        <FadeLoader color="#ad2b08" />
                      </div>
                    }
                  >
                    <ExplorePhotographyCategory categories={categories} />
                  </Suspense>
                ),
              },

              {
                label: "Videography",
                value: "videoGraphy",
                content: (
                  <Suspense
                    fallback={
                      <div className="py-40 w-full flex justify-center items-center">
                        <FadeLoader color="#ad2b08" />
                      </div>
                    }
                  >
                    <ExploreVideographyCategory categories={categories} />
                  </Suspense>
                ),
              },
            ]}
            tabContentStyle="mt-5"
          />
          {/* <ExploreCategoryTab /> */}
        </div>
      </Container>
    </section>
  );
};

export default ExploreCategories;
