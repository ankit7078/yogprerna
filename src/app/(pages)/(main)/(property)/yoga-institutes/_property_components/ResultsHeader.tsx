"use client";

import React from "react";
// Add FaTimes to the import
import { FaFilter, FaTh, FaList, FaTimes } from "react-icons/fa";

const ResultsHeader = ({
  count,
  currentPage,
  itemsPerPage,
  viewMode,
  onViewModeChange,
  onShowMobileFilters,
  // 1. ADD new props for handling active filters
  activeFilters,
  clearFilters,
  removeFilterTag,
}) => {
  const startItem = count > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0;
  const endItem = Math.min(currentPage * itemsPerPage, count);

  return (
    // Use a Fragment to return multiple elements
    <>
      {/* 2. ADD the Active Filters bar JSX here */}
      {activeFilters && activeFilters.length > 0 && (
        <div className="mb-6 flex-shrink-0">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-purple-100">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-medium text-gray-700">
                Active Filters
              </h4>
              <button
                onClick={clearFilters}
                className="text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center"
              >
                <FaTimes className="w-4 h-4 mr-1" /> Clear All
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {activeFilters.map((filter, index) => (
                <span
                  key={index}
                  className="inline-flex items-center bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium"
                >
                  {filter.label}
                  <button
                    onClick={() => removeFilterTag(filter.type, filter.value)}
                    className="ml-2 text-purple-500 hover:text-purple-700"
                    aria-label={`Remove filter: ${filter.label}`}
                  >
                    <FaTimes className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 3. The original Results Header JSX remains below */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 bg-white p-4 rounded-2xl shadow-sm border border-purple-100 gap-4 flex-shrink-0">
        <div>
          <h3 className="text-lg font-bold text-gray-600">
            {count} Yoga Institutes Found
          </h3>
          {count > 0 && (
            <p className="text-gray-600 leading-relaxed text-sm">
              Showing {startItem}-{endItem} of {count} results
            </p>
          )}
        </div>
        <div className="flex items-center justify-between sm:justify-end gap-4">
          <button
            onClick={onShowMobileFilters}
            className="lg:hidden flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors"
          >
            <FaFilter className="w-4 h-4 mr-2" /> Filters
          </button>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onViewModeChange("grid")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "grid"
                  ? "bg-purple-50 text-purple-600"
                  : "text-gray-500 hover:text-purple-600"
              }`}
              aria-label="Grid View"
            >
              <FaTh className="w-5 h-5" />
            </button>
            <button
              onClick={() => onViewModeChange("list")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "list"
                  ? "bg-purple-50 text-purple-600"
                  : "text-gray-500 hover:text-purple-600"
              }`}
              aria-label="List View"
            >
              <FaList className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultsHeader;