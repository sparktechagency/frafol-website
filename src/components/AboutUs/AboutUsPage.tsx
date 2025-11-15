import React from "react";
import SectionHeader from "../ui/SectionHeader";
import { AllImages } from "../../../public/assets/AllImages";
import AboutUsCard from "./AboutUsCard";

const data = [
  {
    image: AllImages.aboutUs1,
    title: "Why do we do this?",
    description:
      "Because we believe in quality, honest work, and a human approach. Because we know not everyone has the time or patience to browse hundreds of websites or write dozens of emails. Our platform connects those who want to create timeless memories together.",
    reverse: true,
    buttonText: null,
  },
  {
    image: AllImages.aboutUs2,
    title: "Our Vision",
    description:
      "We aim to build the largest community of photographers and videographers in Slovakia, so clients can easily find the perfect creator for their needs. We help as many people as possible find a reliable and talented photographer or videographer. Our goal is to foster trust between creators and clients through transparent and personal communication.",
    buttonText: null,
  },
  {
    image: AllImages.aboutUs3,
    title: "For Photographers and Videographers",
    description:
      "This is not just a platform but a community that connects creators, including through a forum for discussions on various topics. We don’t take any commission from your earnings — you receive the full agreed amount Your own professional portfolio Clients who know what they are looking for",
    buttonText: "Join As a Photographer/Videographer",
    reverse: true,
    redirectUrl: "/join",
  },
  {
    image: AllImages.aboutUs4,
    title: "For Clients",
    description:
      "Looking for a photographer or videographer for a wedding, baptism, corporate event, or prom? You’re in the right place. Because: Every profile is verified You communicate directly with the creator You get exactly what you agreed on before ordering",
    buttonText: "Find a Photographer/Videographer",
    redirectUrl: "/photography",
  },
  {
    image: AllImages.aboutUs5,
    title: "What now?",
    description:
      "If you’re a photographer or videographer, join us. If you’re looking for a professional, choose from verified creators.",
    reverse: true,
    buttonText: null,
  },
];

const AboutUsPage = () => {
  return (
    <div>
      <SectionHeader
        title="About Us"
        description="We are not just another ordinary listing website. We are a community and platform where talent meets demand. Photographers and videographers who love their craft — and clients who want to capture what matters most."
      />
      <section className="mt-10 space-y-10">
        {data.map((item, index) => (
          <AboutUsCard key={index} data={item} />
        ))}
      </section>
    </div>
  );
};

export default AboutUsPage;
