import React from "react";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import { fetchWithAuth } from "@/lib/fetchWraper";
import TagTypes from "@/helpers/config/TagTypes";
import { ITestimonial } from "@/types/testimonial.type";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = async () => {
  const res = await fetchWithAuth(`/feedback`, {
    next: {
      tags: [TagTypes.testimonial],
    },
  });
  const data = await res.json();
  const testimonials: ITestimonial[] = data?.data;

  console.log(testimonials);
  return (
    <section className="pb-28">
      <Container>
        <SectionHeader
          title="Their Experience, In Their Words"
          description="Hear from clients who found their perfect visual professional through our platform"
        />
        <div className="mt-16 relative">
          <TestimonialSlider data={testimonials} />
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
