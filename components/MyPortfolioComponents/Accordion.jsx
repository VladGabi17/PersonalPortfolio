import React, { useState } from "react";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="flex items-center focus:outline-none"
        onClick={toggleAccordion}
      >
        {isOpen ? (
          <i className="text-amber-500 text-lg fa-solid fa-minus"></i>
        ) : (
          <i className="text-amber-500 text-lg fa-solid fa-plus"></i>
        )}

        <h1 className="mx-4 text-slate-700 text-2xl">{question}</h1>
      </button>
      {isOpen && (
        <div className="flex mt-4 md:mx-10">
          <span className="border border-amber-500"></span>
          <p className="max-w-3xl py-3 px-4 text-slate-500 text-lg font-base">
            {answer}
          </p>
        </div>
      )}
      <hr className="my-8 border-gray-200" />
    </div>
  );
};

export default Accordion;