"use client";
import React, { useState } from "react";
import Accordion from "../ui/Accordion";

const FAQGenerate = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const accordionsData = [
    {
      title: "How does this platform work?",
      content:
        "The platform connects you with photographers and videographers in your area. You choose someone you like, fill out a simple request form, and wait for them to confirm. Once the service is done and you confirm it, we send the money to the professional",
    },
    {
      title: "Do I need to register to use the platform?",
      content:
        "Yes, of course! Please use the ‘Contact Us’ page on the website. A member of the team will then reach out and schedule your trip with one of our drivers.",
    },
    {
      title: "How does the payment work?",
      content: "Your cancellation details here...",
    },
    {
      title: "Do I need to agree to the rámcová zmluva?",
      content: "Your invoice details here...",
    },
  ];

  return (
    <div>
      {accordionsData.map((item, index) => (
        <Accordion
          key={index}
          index={index}
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
