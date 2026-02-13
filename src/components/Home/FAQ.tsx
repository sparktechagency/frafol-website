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


  const clientsAccordions = [
    {
      title: "How does ordering a photographer or videographer work?",
      content:
        "First, you select a category or specific professional. On their profile, you can view their portfolio and estimated prices. Ordering works in two ways: by selecting a ready-made package, or by sending a non-binding request via a form. After agreeing on the price quote, payment is made in advance. The money is held by the platform throughout the collaboration and is released only after the service is delivered and confirmed.",
    },
    {
      title: "How much does photography or video cost?",
      content:
        "The price varies depending on the scope of service, the professional's experience, and the location of the shoot or filming. An estimated price is listed on the profile. The exact amount is agreed upon after sending the request. The price also includes a service fee, which covers support, problem resolution, and secure payment processing.",
    },
    {
      title: "What should I do if there's a problem with my order?",
      content:
        "In case of questions or uncertainties, support is available at cvak@frafol.sk.",
    },
    {
      title: "What if the result doesn't meet my expectations?",
      content:
        "If the result does not match the agreed scope of service, simply contact support at cvak@frafol.sk. The payment remains held until the situation is clarified. The platform helps mediate a solution between the client and the professional.",
    },
  ];

  const professionalsAccordions = [
    {
      title: "How does registration and profile setup work?",
      content:
        "During registration, you fill in basic information, add a short description, and select service categories along with an estimated price range. The profile then goes through verification. After approval, you can add your portfolio and bank details for payment disbursement. The portfolio is used to showcase your work and style. It includes an introductory video (introduction or work montage), sample works visible before opening the profile, and a complete portfolio available directly on the profile. This allows clients to get an idea before the first contact.",
    },
    {
      title: "What if my category isn't on the platform or another problem arises?",
      content:
        "If the requested category is not currently on the platform, you can contact support at cvak@frafol.sk. Categories are continuously added based on needs and demand. You can also write to this email in case of any questions, uncertainties, or problems with a client.",
    },
    {
      title: "When does the payment disbursement occur?",
      content:
        "The client pays for the service in advance. The payment is held by the platform during the collaboration. After the service is delivered and approved, the money is paid out within 15 calendar days. The platform does not take a commission from the professional's fee. The client pays a separate service fee, which covers platform operation, support, and secure payment processing.",
    },
    {
      title: "How are photos or videos delivered?",
      content:
        "Finished work is sent via messages. It is recommended to use external storage services that do not reduce file quality (e.g., uschovna.sk, mab.to).",
    },
  ];

  const accordionsData = activeButton === "Clients" ? clientsAccordions : professionalsAccordions;

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
                className={`cursor-pointer text-sm sm:text-base lg:text-lg text-base-color ${activeButton === "Clients" && "font-semibold"
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
                className={`cursor-pointer text-sm sm:text-base lg:text-lg text-base-color ${activeButton === "Photographer/Videographer" &&
                  "font-semibold"
                  }`}
              >
                Photographer/Videographer
              </h3>
            </div>
          </div>
          <div className="col-span-2">
            <FAQGenerate accordionsData={accordionsData} />
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export default FAQ;
