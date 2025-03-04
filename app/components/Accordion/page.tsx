'use client'

import React, { useState } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordions = [
    { title: "Accordion 1", content: "This is the content of Accordion 1." },
    { title: "Accordion 2", content: "This is the content of Accordion 2." },
    { title: "Accordion 3", content: "This is the content of Accordion 3." },
  ];

  return (
    <div className=" w-full mt-8">
      {accordions.map((accordion, index) => (
        <div
          key={index}
          className="border-b border-gray-300 pb-4 mb-4"
        >
          {/* Header */}
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <h2 className="text-lg font-medium">{accordion.title}</h2>
            <div className="text-xl">
              {activeIndex === index ? <IoIosRemove /> : <IoIosAdd />}
            </div>
          </div>

          {/* Content */}
          {activeIndex === index && (
            <div className="mt-4 text-gray-700">
              {accordion.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
