"use client";
import React from "react";
import Container from "../ui/Container";
import * as motion from "motion/react-client";
import FAQGenerate from "./FAQGenerate";

const FAQ = () => {
  return (
    <motion.section
      id="faq"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      className="py-14 sm:py-16 lg:py-20 overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-5 text-secondary-color">
              Frequently Asked Questions
            </h3>
            <p className="mb-5 text-base lg:text-lg">
              Everything you need to know about the product and billing. Can’t
              find the answer you’re looking for? Please chat to our friendly
              team.
            </p>
          </div>
          <div className="">
            <FAQGenerate />
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export default FAQ;
