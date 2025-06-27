import { AllImages } from "../../../public/assets/AllImages";
import Container from "../ui/Container";
import Revel from "../ui/Animation/Revel";

export default function Banner() {
  return (
    <section
      className="h-screen w-full z-10 text-secondary-color flex justify-start items-center mx-auto"
      style={{
        backgroundImage: ` url(${AllImages.herobanner1.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Container>
        <div className="w-full lg:w-1/2">
          <Revel>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
              Discover Your Next Investment
            </h1>
          </Revel>
          <Revel delay={0.5}>
            <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#585981] font-semibold mb-6">
              With access to over 140+ million properties{" "}
            </h4>
          </Revel>
        </div>
      </Container>
    </section>
  );
}
