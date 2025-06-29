import Container from "../ui/Container";
import Revel from "../ui/Animation/Revel";
import BannerSearch from "./BannerSearch";

export default function Banner() {
  return (
    <section className="h-screen w-full z-10 text-secondary-color flex justify-start items-center mx-auto bg-third-color">
      <Container>
        <div className="w-full flex flex-col justify-center items-center">
          <Revel>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 w-[70%] text-center mx-auto leading-14">
              Capture Your Moments with the Best in the Industry
            </h1>
          </Revel>
          <Revel delay={0.5}>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-8 text-base-color">
              Find skilled photographers and videographers, check their
              portfolios, and book your next shoot easily
            </p>
          </Revel>
          <Revel delay={0.75}>
            <BannerSearch />
          </Revel>
        </div>
      </Container>
    </section>
  );
}
