"use client";

import React from "react";
import { FaTimes } from "react-icons/fa";
import FiltersContent from "./FiltersContent";

const MobileFilters = ({ isOpen, onClose, filters, setFilters, yogaInstitutes, clearFilters }) => {
  // If the menu is not set to be open, render nothing.
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
      {/* Background overlay with fade animation */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out"
        onClick={onClose}
        aria-label="Close filters"
      ></div>

      {/* Sliding panel with slide animation */}
      <div className="fixed inset-y-0 left-0 w-full max-w-full bg-white shadow-xl overflow-y-auto p-6 transition-transform duration-300 ease-in-out transform translate-x-0">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Filters</h3>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600"
          >
            <span className="sr-only">Close filters</span>
            <FaTimes className="w-6 h-6" />
          </button>
        </div>
        <FiltersContent
          filters={filters}
          setFilters={setFilters}
          yogaInstitutes={yogaInstitutes}
          clearFilters={clearFilters}
        />
      </div>
    </div>
  );
};

export default MobileFilters;