import Container from "@/components/ui/Container";
import SectionBanner from "@/components/ui/SectionBanner";
import WorkshopsPage from "@/components/Workshops/WorkshopsPage";
import React from "react";
import { AllImages } from "../../../../public/assets/AllImages";
import TagTypes from "@/helpers/config/TagTypes";
import { IWorkshop } from "@/types";
import { fetchWithAuth } from "@/lib/fetchWraper";

export const metadata = {
  title: "Frafol - Workshops",
};

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const params = await searchParams;

  const page = Number(params?.page) || 1;
  const searchText = params?.search || "";
  const limit = 12;

  const res = await fetchWithAuth(
    `/workshop?page=${page}&limit=${limit}&searchTerm=${searchText}`,
    {
      next: {
        tags: [TagTypes.workshop],
      },
    }
  );

  const data = await res.json();

  const totalData = data?.data?.meta?.total;

  const workshops: IWorkshop[] = data?.data?.result || [];

  return (
    <main>
      <SectionBanner image={AllImages.workspaceBanner?.src} title="Workshops" />
      <Container>
        <WorkshopsPage
          workshops={workshops}
          totalData={totalData}
          page={page}
          limit={limit}
        />
      </Container>
    </main>
  );
};

export default page;
