import TagTypes from "@/helpers/config/TagTypes";
import { fetchWithAuth } from "@/lib/fetchWraper";
import { IProfessional } from "@/types";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import ReuseButton from "../ui/Button/ReuseButton";
import FeaturedProfessionalSlider from "./FeaturedProfessionalSlider";

const FrafolChoiceProfessional = async () => {
    const res = await fetchWithAuth(`/users/professionals?hasActiveSubscription={true}`, {
        next: {
            tags: [TagTypes.prfessional],
        },
    });
    const data = await res.json();
    const professionals: IProfessional[] = data?.data?.result;

    console.log(professionals)

    return (
        <section className="">
            <Container>
                <SectionHeader
                    title="Frafol Choice Professionals"
                    description="Discover our verified photographers and videographers"
                />

                <FeaturedProfessionalSlider data={professionals} />

                <div className="flex justify-center items-center !mt-10">
                    <ReuseButton
                        url="/professionals?type=verified"
                        className="mt-10 w-fit mx-auto !text-sm sm:!text-base lg:!text-lg !py-4.5"
                        variant="secondary"
                    >
                        See More
                    </ReuseButton>
                </div>
            </Container>
        </section>
    );
};

export default FrafolChoiceProfessional;
