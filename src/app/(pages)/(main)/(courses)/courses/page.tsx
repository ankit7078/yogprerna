"use client";

import React, { useState, useMemo } from 'react';
import { coursesData } from '../../../../data/lib/coursesdata';
import { Course, ActiveFilters } from '../../../../../types/types';
import CourseListPage from './_components/CourseListPage';
import CourseDetailPage from "../detailpage/CourseDetailPage"
export default function CourseBrowser() {
  const [selectedCourseSlug, setSelectedCourseSlug] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // State for active filters
  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({
    experienceType: [],
    locationType: [],
    certificationType: [],
    courseLevel: [],
    courseType: [],
    duration: [],
  });

  // Function to toggle a filter
  const toggleFilter = (group: keyof ActiveFilters, filterId: string) => {
    setActiveFilters(prev => {
      const currentFilters = prev[group] || [];
      const newFilters = currentFilters.includes(filterId)
        ? currentFilters.filter(f => f !== filterId)
        : [...currentFilters, filterId];
      return { ...prev, [group]: newFilters };
    });
  };

  // Function to clear all filters
  const onClearAllFilters = () => {
    setActiveFilters({
      experienceType: [],
      locationType: [],
      certificationType: [],
      courseLevel: [],
      courseType: [],
      duration: [],
    });
  };

  // Memoized calculation of filtered courses
  const filteredCourses = useMemo(() => {
    return (coursesData as Course[]).filter(course => {
      // Experience Type (e.g., Yoga, Meditation)
      const experienceMatch = activeFilters.experienceType.length === 0 ||
        activeFilters.experienceType.some(filter =>
          course.category.toLowerCase().includes(filter) ||
          course.tags.some(tag => tag.toLowerCase().includes(filter.replace('-', ' ')))
        );

      // Location Type (Online vs. In-Person)
      const locationMatch = activeFilters.locationType.length === 0 ||
        activeFilters.locationType.some(filter =>
          (filter === 'online' && course.isOnline) ||
          (filter === 'in-person' && !course.isOnline)
        );

      // Certification Type (Diploma, Degree, etc.)
      const certificationMatch = activeFilters.certificationType.length === 0 ||
        activeFilters.certificationType.includes(course.certificationType);

      // Course Level (Beginner, etc.)
      const levelMatch = activeFilters.courseLevel.length === 0 ||
        activeFilters.courseLevel.includes(course.courseLevel);

      // Course Type (Certification, etc.)
      const typeMatch = activeFilters.courseType.length === 0 ||
        activeFilters.courseType.includes(course.courseType);

      // Duration
      const durationMatch = activeFilters.duration.length === 0 ||
        activeFilters.duration.includes(course.durationCategory);

      // Search term
      const searchMatch = !searchTerm ||
        course.title.toLowerCase().includes(searchTerm.toLowerCase());

      return experienceMatch && locationMatch && certificationMatch && levelMatch && typeMatch && durationMatch && searchMatch;
    });
  }, [activeFilters, searchTerm]);

  const selectedCourse = selectedCourseSlug
    ? (coursesData as Course[]).find(c => c.slug === selectedCourseSlug)
    : null;

  // --- Render Logic ---
  if (selectedCourse) {
    return (
      <CourseDetailPage
        course={selectedCourse}
        onGoBack={() => setSelectedCourseSlug(null)}
      />
    );
  } else {
    return (
      <CourseListPage
        filteredCourses={filteredCourses}
        activeFilters={activeFilters}
        toggleFilter={toggleFilter}
        onClearAllFilters={onClearAllFilters}
        onSelectCourse={(slug: string) => setSelectedCourseSlug(slug)}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
    );
  }
}