"use client";

import React, { useState, useMemo, useEffect } from "react";
import { FaFilter, FaTimes, FaGraduationCap, FaTh, FaList } from "react-icons/fa";
import { yogaInstitutes } from "../../../../data/institutes";
import FiltersContent from "./_property_components/FiltersContent";
import InstituteCard from "./_property_components/InstituteCard";
import Pagination from "./_property_components/Pagination";
import MobileFiltersCanvas from "./_property_components/MobileFilters"; // 1. IMPORT the new component
import { getActiveFilters } from "./utils/filterUtils";
import ResultsHeader from "./_property_components/ResultsHeader";
import Breadcrumb from "@/components/breadcrumbs/breadcrumbs";

const ITEMS_PER_PAGE = 6;


export default function InstitutesPage() {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const [viewMode, setViewMode] = useState("grid");
  const [filters, setFilters] = useState({
    academicType: [], course: [], courseLevel: [], courseType: [], country: [], state: [], city: [],
  });
  const [currentPage, setCurrentPage] = useState(1);

  // ... (All your filtering logic and other functions remain the same)
  const filteredInstitutes = useMemo(() => {
    if (!yogaInstitutes || yogaInstitutes.length === 0) return [];
    return yogaInstitutes.filter((institute) => {
      const matchesAcademicType = filters.academicType.length === 0 || filters.academicType.includes(institute.academicType);
      const matchesCourse = filters.course.length === 0 || filters.course.some((course) => institute.courses.includes(course));
      const matchesCourseLevel = filters.courseLevel.length === 0 || filters.courseLevel.includes(institute.courseLevel);
      const matchesCourseType = filters.courseType.length === 0 || filters.courseType.includes(institute.courseType);
      const matchesCountry = filters.country.length === 0 || filters.country.includes(institute.country);
      const matchesState = filters.state.length === 0 || filters.state.includes(institute.state);
      const matchesCity = filters.city.length === 0 || filters.city.includes(institute.city);
      return matchesAcademicType && matchesCourse && matchesCourseLevel && matchesCourseType && matchesCountry && matchesState && matchesCity;
    });
  }, [filters]);

  useEffect(() => { setCurrentPage(1); }, [filters]);

  const totalPages = Math.ceil(filteredInstitutes.length / ITEMS_PER_PAGE);
  const displayedInstitutes = filteredInstitutes.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
  const activeFilters = getActiveFilters(filters);
  const clearFilters = () => setFilters({ academicType: [], course: [], courseLevel: [], courseType: [], country: [], state: [], city: [] });
  const removeFilterTag = (filterType, value) => setFilters(prev => ({ ...prev, [filterType]: prev[filterType].filter(item => item !== value) }));


  return (
    <div className="sm:h-180 flex flex-col ">
      {/* 2. RENDER the new component here */}
      <MobileFiltersCanvas
        isOpen={showMobileFilters}
        onClose={() => setShowMobileFilters(false)}
        filters={filters}
        setFilters={setFilters}
        yogaInstitutes={yogaInstitutes}
        clearFilters={clearFilters}
      />

      {/* 3. The old JSX block for the mobile menu has been REMOVED from here */}

      <div className="flex-grow max-w-7xl w-full mx-auto  sm:px-8 px-2 pb-8 overflow-hidden">
         <div className="mb-4">
        <Breadcrumb items={[{ label: "Courses", href: "/courses" }]} />
      </div>
        <div className="flex lg:flex-row gap-6 h-full">
          {/* Left Column (Desktop Filters) */}
          <div className="bg-[var(--primary-bg)] hidden lg:block rounded-custom shadow-custom">
            <div className=" lg:w-80 flex-shrink-0 h-full overflow-y-auto hide-scrollbar pr-2">
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
          {/* Right Column */}
          <div className="flex-1 flex flex-col h-full overflow-y-auto hide-scrollbar">
            <ResultsHeader
              count={filteredInstitutes.length}
              currentPage={currentPage}
              itemsPerPage={ITEMS_PER_PAGE}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              onShowMobileFilters={() => setShowMobileFilters(true)}
              activeFilters={activeFilters}
              clearFilters={clearFilters}
              removeFilterTag={removeFilterTag}
            />
            {/* Institute Cards */}
            <div className="flex-grow pb-4">
              {displayedInstitutes.length > 0 ? (
                <div className={`${viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "space-y-6"}`}>
                  {displayedInstitutes.map((institute) => (
                    <InstituteCard key={institute.id} institute={institute} isListView={viewMode === "list"} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-[var(--primary-bg)] shadow-custom rounded-2xl">
                  <FaGraduationCap className="w-16 h-16 text-[var(--primary-text)] mx-auto mb-4" />
                  <h3 className="heading font-bold mb-2">No institutes found</h3>
                  <p>Try adjusting your filters</p>
                </div>
              )}
            </div>

            {/* Pagination */}
            <div className="sm:sticky bottom-0 flex-shrink-0">
              {totalPages > 1 && (
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}