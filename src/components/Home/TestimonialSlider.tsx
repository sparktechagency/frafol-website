"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { ITestimonial } from "@/types/testimonial.type";
import TestimonialCard from "./TestimonialCard";

const TestimonialSlider = ({ data = [] }: { data: ITestimonial[] }) => {
  console.log("data in slider", data);
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={50}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        540: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      modules={[EffectFade, Pagination, Autoplay]}
      className="mySwiper"
    >
      {data?.map((item, index) => (
        <SwiperSlide key={index}>
          <TestimonialCard testimonial={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
