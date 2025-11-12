"use client"; 

import React from "react";
import { FaChevronDown } from "react-icons/fa";

const FilterSection = ({ title, isExpanded, onToggle, children }) => (
  <div className="border-b border-[var(--primary-border)] pb-2 mb-2">
    <button
      onClick={onToggle}
      className="flex items-center justify-between cursor-pointer w-full text-left font-medium hover:text-[var(--text-hover-color)] transition-colors sub-heading"
      aria-expanded={isExpanded}
      aria-controls={`filter-section-${title.replace(/\s+/g, "-")}`}
    >
      <span>{title}</span>
      <FaChevronDown
        className={`w-3 h-3 transition-transform duration-200 ${
          isExpanded ? "rotate-180" : ""
        }`}
      />
    </button>
    {isExpanded && (
      <div
        id={`filter-section-${title.replace(/\s+/g, "-")}`}
        className="mt-3 space-y-2"
      >
        {children}
      </div>
    )}
  </div>
);

export default FilterSection;