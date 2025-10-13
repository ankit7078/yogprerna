"use client"; 

import React from "react";
import { FaChevronDown } from "react-icons/fa";

const FilterSection = ({ title, isExpanded, onToggle, children }) => (
  <div className="border-b border-gray-200 pb-4 mb-4">
    <button
      onClick={onToggle}
      className="flex items-center justify-between w-full text-left font-medium text-gray-800 hover:text-purple-600 transition-colors"
      aria-expanded={isExpanded}
      aria-controls={`filter-section-${title.replace(/\s+/g, "-")}`}
    >
      <span>{title}</span>
      <FaChevronDown
        className={`w-4 h-4 transition-transform duration-200 ${
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