"use client";

import { useState } from "react";

export default function FAQAccordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-accordion">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        return (
          <div key={index} className={`faq-item ${isOpen ? "active" : ""}`}>
            <button
              className="faq-header"
              onClick={() => toggleAccordion(index)}
              aria-expanded={isOpen}
              suppressHydrationWarning={true}
            >
              <h4 className="font-title-lg">{item.question}</h4>
              <svg
                className="faq-toggle-icon"
                viewBox="0 0 24 24"
                style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                aria-hidden="true"
              >
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              </svg>
            </button>
            <div
              className="faq-body"
              style={{
                maxHeight: isOpen ? "300px" : "0px",
                overflow: "hidden",
                transition: "max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <div className="faq-content font-body-md">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
