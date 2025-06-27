"use client";
import React from "react";
import Container from "../ui/Container";
import * as motion from "motion/react-client";
import FAQGenerate from "./FAQGenerate";
import SectionHeader from "../ui/SectionHeader";

const FAQ = () => {
  const [activeButton, setActiveButton] = React.useState<
    "Clients" | "Photographer/Videographer"
  >("Clients");
  return (
    <motion.section
      // id="faq"
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1 }}
      // transition={{ duration: 0.1 }}
      className="pb-28"
    >
      <Container>
        <SectionHeader
          title="Frequently asked questions"
          description="Everything you need to know about the product and billing."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-16">
          <div className="flex flex-col gap-2 mt-10">
            <div
              className="flex items-center gap-2"
              onClick={() => setActiveButton("Clients")}
            >
              {activeButton === "Clients" ? (
                <div className="h-1 w-10 rounded-full bg-secondary-color"></div>
              ) : (
                <div className="h-1 w-10 rounded-full bg-transparent"></div>
              )}
              <h3
                className={`cursor-pointer text-sm sm:text-base lg:text-lg text-base-color ${
                  activeButton === "Clients" && "font-semibold"
                }`}
              >
                Clients
              </h3>
            </div>
            <div
              className="flex items-center gap-2"
              onClick={() => setActiveButton("Photographer/Videographer")}
            >
              {activeButton === "Photographer/Videographer" ? (
                <div className="h-1 w-10 rounded-full bg-secondary-color"></div>
              ) : (
                <div className="h-1 w-10 rounded-full bg-transparent"></div>
              )}
              <h3
                className={`cursor-pointer text-sm sm:text-base lg:text-lg text-base-color ${
                  activeButton === "Photographer/Videographer" &&
                  "font-semibold"
                }`}
              >
                Photographer/Videographer
              </h3>
            </div>
          </div>
          <div className="col-span-2">
            <FAQGenerate />
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export default FAQ;
