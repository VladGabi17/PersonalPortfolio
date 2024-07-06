import React from "react";
import { Accordion } from "@components";
const FAQ = () => {
  const faqs = [
    {
      question: "What tools and technologies do you use?",
      answer:
        "I primarily use Tailwind and React for front-end development, and I have experience with design tools like Figma, Frame and WordPress.",
    },
    {
      question:
        "Can you work with existing websites or do you only create new ones?",
      answer:
        "I can do both! I can help improve and update existing websites, as well as create new ones from scratch.",
    },
    {
      question: "How do you ensure the websites you design are user-friendly?",
      answer:
        "I focus on UI/UX design principles to create intuitive navigation and engaging user interfaces.",
    },
    {
      question: "How do you handle feedback and revisions?",
      answer:
        "I welcome feedback throughout the design and development process. Revisions are an essential part of my workflow.",
    },
  ];

  return (
    <div className="container lg:px-36 py-10 ">
      <h1 className="text-5xl text-slate-700 font-extrabold md:text-6xl">
        FAQ's
      </h1>
      <hr className="my-6 border-gray-200" />
      <div>
        {faqs.map((faq, index) => (
          <Accordion key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
