"use client";

import { CircleX, Filter, LayoutGrid, LayoutList } from "lucide-react";

const ResultsHeader = ({
  count,
  currentPage,
  itemsPerPage,
  viewMode,
  onViewModeChange,
  onShowMobileFilters,
  activeFilters,
  clearFilters,
  removeFilterTag,
}) => {
  const startItem = count > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0;
  const endItem = Math.min(currentPage * itemsPerPage, count);

  return (
    <>
      {activeFilters && activeFilters.length > 0 && (
        <div className="mb-6 flex-shrink-0">
          <div className="bg-[var(--primary-bg)] p-5 rounded-custom shadow-custom">
            <div className="flex items-center justify-between mb-3">
              <h3 className="sub-heading font-medium">
                Active Filters
              </h3>
              <button
                onClick={clearFilters}
                className="text-[var(--text-hover-color)] cursor-pointer paragraph font-medium flex items-center"
              >
                Clear All
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {activeFilters.map((filter, index) => (
                <span
                  key={index}
                  className="inline-flex items-center bg-[var(--primary-icon-l)] text-[var(--text-hover-color)] px-3 py-1 rounded-custom  text-xs font-medium"
                >
                  {filter.label}
                  <button
                    onClick={() => removeFilterTag(filter.type, filter.value)}
                    className="ml-2 cursor-pointer"
                    aria-label={`Remove filter: ${filter.label}`}
                  >
                    <CircleX className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 bg-[var(--primary-bg)] p-5 rounded-custom shadow-custom gap-4 flex-shrink-0">
        <div>
          <h1 className="heading font-bold text-[var(--secondary-text)]">
            {count} Yoga Institutes Found
          </h1>
          {count > 0 && (
            <p className="leading-relaxed">
              Showing {startItem}-{endItem} of {count} results
            </p>
          )}
        </div>
        <div className="flex items-center justify-between sm:justify-end gap-4">
          <button
            onClick={onShowMobileFilters}
            className="lg:hidden flex items-center px-4 py-2 bg-[var(--primary-icon-l)] text-[var(--text-hover-color)] rounded-custom transition-colors"
          >
            <Filter className="w-4 h-4 mr-2" /> Filters
          </button>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onViewModeChange("grid")}
              className={`p-2 rounded-custom transition-colors cursor-pointer ${viewMode === "grid"
                  ? "bg-[var(--primary-icon-l)] text-[var(--blue-bg)]"
                  : "bg-[var(--primary-icon-l)] text-[var(--text-hover-color)]"
                }`}
              aria-label="Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => onViewModeChange("list")}
              className={`p-2 rounded-custom transition-colors cursor-pointer ${viewMode === "list"
                  ? "bg-[var(--primary-icon-l)] text-[var(--blue-bg)]"
                  : "bg-[var(--primary-icon-l)] text-[var(--text-hover-color)]"
                }`}
              aria-label="List View"
            >
              <LayoutList className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultsHeader;