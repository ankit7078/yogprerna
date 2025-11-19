"use client";

import React, { useState, useMemo, useEffect } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { yogaInstitutes } from "../../../../../data/institutes";
import FiltersContent from "./FiltersContent";
import InstituteCard from "./InstituteCard";
import MobileFiltersCanvas from "./MobileFilters";
import { getActiveFilters } from "../utils/filterUtils";
import ResultsHeader from "./ResultsHeader";
import Pagination from "../../../../../../ui/pagination/Pagination";

export default function InstitutesPage() {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const [viewMode, setViewMode] = useState("grid");
  const [filters, setFilters] = useState({
    academicType: [],
    course: [],
    courseLevel: [],
    courseType: [],
    country: [],
    state: [],
    city: [],
  });

  // Pagination state
  const ITEMS_PER_PAGE = 8;
  const [currentPage, setCurrentPage] = useState(1);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  // Filtering Logic
  const filteredInstitutes = useMemo(() => {
    if (!yogaInstitutes || yogaInstitutes.length === 0) return [];

    return yogaInstitutes.filter((institute) => {
      const matchesAcademicType =
        filters.academicType.length === 0 ||
        filters.academicType.includes(institute.academicType);

      const matchesCourse =
        filters.course.length === 0 ||
        filters.course.some((course) => institute.courses.includes(course));

      const matchesCourseLevel =
        filters.courseLevel.length === 0 ||
        filters.courseLevel.includes(institute.courseLevel);

      const matchesCourseType =
        filters.courseType.length === 0 ||
        filters.courseType.includes(institute.courseType);

      const matchesCountry =
        filters.country.length === 0 ||
        filters.country.includes(institute.country);

      const matchesState =
        filters.state.length === 0 || filters.state.includes(institute.state);

      const matchesCity =
        filters.city.length === 0 || filters.city.includes(institute.city);

      return (
        matchesAcademicType &&
        matchesCourse &&
        matchesCourseLevel &&
        matchesCourseType &&
        matchesCountry &&
        matchesState &&
        matchesCity
      );
    });
  }, [filters]);

  // Pagination Slice
  const totalPages = Math.ceil(filteredInstitutes.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedInstitutes = filteredInstitutes.slice(
    start,
    start + ITEMS_PER_PAGE
  );

  const activeFilters = getActiveFilters(filters);
  const clearFilters = () =>
    setFilters({
      academicType: [],
      course: [],
      courseLevel: [],
      courseType: [],
      country: [],
      state: [],
      city: [],
    });

  const removeFilterTag = (type, value) =>
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type].filter((item) => item !== value),
    }));

  return (
    <div className="flex flex-col bg-[var(--secondary-bg)] text-[var(--primary-text)]">
      {/* Mobile Filters */}
      <MobileFiltersCanvas
        isOpen={showMobileFilters}
        onClose={() => setShowMobileFilters(false)}
        filters={filters}
        setFilters={setFilters}
        yogaInstitutes={yogaInstitutes}
        clearFilters={clearFilters}
      />

      {/* Layout */}
      <div className="flex-grow max-w-7xl w-full mx-auto sm:px-8 px-2 pb-8 overflow-hidden">
        <div className="flex lg:flex-row gap-6 h-full">
          {/* Desktop Filters */}
          <div className="bg-[var(--primary-bg)] hidden lg:block rounded-custom shadow-custom">
            <div className="lg:w-80 flex-shrink-0 h-full hide-scrollbar pr-2">
              <div className="p-5">
                <FiltersContent
                  filters={filters}
                  setFilters={setFilters}
                  yogaInstitutes={yogaInstitutes}
                  clearFilters={clearFilters}
                />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 flex flex-col h-full overflow-y-auto hide-scrollbar">
            <ResultsHeader
              count={filteredInstitutes.length}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              onShowMobileFilters={() => setShowMobileFilters(true)}
              activeFilters={activeFilters}
              clearFilters={clearFilters}
              removeFilterTag={removeFilterTag}
            />

            {/* Institutes List */}
            <div className="flex-grow pb-4">
              {displayedInstitutes.length > 0 ? (
                <div
                  className={`${viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 gap-6"
                    : "space-y-6"
                    }`}
                >
                  {displayedInstitutes.map((institute) => (
                    <InstituteCard
                      key={institute.id}
                      institute={institute}
                      isListView={viewMode === "list"}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-[var(--primary-bg)] shadow-custom rounded-2xl">
                  <FaGraduationCap className="w-16 h-16 text-[var(--primary-text)] mx-auto mb-4" />
                  <h3 className="heading font-bold mb-2">
                    No institutes found
                  </h3>
                  <p>Try adjusting your filters</p>
                </div>
              )}
            </div>

            {/* Pagination */}
            {filteredInstitutes.length > ITEMS_PER_PAGE && (
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
