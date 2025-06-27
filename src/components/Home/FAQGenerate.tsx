"use client";
import React, { useState } from "react";
import Accordion from "../ui/Accordion";

const FAQGenerate = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const accordionsData = [
    {
      title: "Is there a free trial available?",
      content:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "Can I change my plan later?",
      content:
        "Yes, of course! Please use the ‘Contact Us’ page on the website. A member of the team will then reach out and schedule your trip with one of our drivers.",
    },
    {
      title: "What is your cancellation policy?",
      content: "Your cancellation details here...",
    },
    {
      title: "Can other info be added to an invoice?",
      content: "Your invoice details here...",
    },
    {
      title: "How does billing work?",
      content: "Your billing details here...",
    },
    {
      title: "How do I change my account email?",
      content: "Your account email details here...",
    },
  ];

  return (
    <div>
      {accordionsData.map((item, index) => (
        <Accordion
          key={index}
          title={item.title}
          content={item.content}
          isOpen={activeIndex === index}
          onToggle={() =>
            setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
          }
        />
      ))}
    </div>
  );
};

export default FAQGenerate;
