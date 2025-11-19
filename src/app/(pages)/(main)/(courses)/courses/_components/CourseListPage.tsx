"use client";

import React, { useState, useEffect } from 'react';
import { Course, ActiveFilters, FilterGroupKey } from '@/types';
import Sidebar from './Sidebar';
import CourseListHeader from './CourseListHeader';
import CourseGrid from './CourseGrid';
import Pagination from './Pagination';
import Breadcrumb from '@/components/breadcrumbs/breadcrumbs';
import { Filter, X } from 'lucide-react';

type Props = {
  filteredCourses: Course[];
  activeFilters: ActiveFilters;
  toggleFilter: (group: FilterGroupKey, filterId: string) => void;
  onClearAllFilters: () => void;
  onSelectCourse: (slug: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
};

export default function CourseListPage({
  filteredCourses,
  activeFilters,
  toggleFilter,
  onClearAllFilters,
  onSelectCourse,
  searchTerm,
  onSearchChange
}: Props) {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 5;

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredCourses.length, activeFilters, searchTerm]);

  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE);
  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="bg-[var(--secondary-bg)] text-[var(--secondary-text)] max-w-7xl mx-auto px-2  sm:px-8 py-6">
      <div className="pb-6">
        <Breadcrumb items={[{ label: "Courses", href: "/courses" }]} />
      </div>
      <div className="space-y-6">
        <div className="flex flex-col lg:flex-row gap-6 relative">
          {/* --- Sidebar (Desktop) --- */}
          <aside className="hidden lg:block w-full lg:w-1/4 self-start">
            <Sidebar
              activeFilters={activeFilters}
              toggleFilter={toggleFilter}
            />
          </aside>

          {/* --- Sidebar (Mobile Offcanvas) --- */}
          <div
            className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out ${showMobileFilters ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setShowMobileFilters(false)}></div>
            <div
              className={`absolute left-0 top-0 bottom-0 w-4/5 max-w-sm bg-white p-6 overflow-y-auto transition-transform duration-300 ease-in-out ${showMobileFilters ? 'translate-x-0' : '-translate-x-full'}`}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Filters</h2>
                <button onClick={() => setShowMobileFilters(false)} className="text-gray-500">
                  <X size={24} />
                </button>
              </div>
              <Sidebar
                activeFilters={activeFilters}
                toggleFilter={toggleFilter}
              />
            </div>
          </div>

          <main className="w-full lg:w-3/4">
            <button
              onClick={() => setShowMobileFilters(true)}
              className="lg:hidden z-30 mb-4 p-3 heading-sm rounded-custom shadow-custom bg-[var(--text-hover-color)] text-white flex items-center justify-center gap-2"
            >
              <Filter size={16} />
              <span>Show Filters</span>
            </button>

            <CourseListHeader
              resultsCount={filteredCourses.length}
              activeFilters={activeFilters}
              onClearFilter={toggleFilter}
              onClearAll={onClearAllFilters}
            />
            <CourseGrid
              courses={paginatedCourses}
              onSelectCourse={onSelectCourse}
            />
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </main>
        </div>
      </div>
    </div>
  );
}