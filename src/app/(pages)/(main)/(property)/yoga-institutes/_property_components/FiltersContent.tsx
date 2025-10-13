import React, { useState, useMemo } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";
import FilterSection from "./FilterSection";
import CheckboxFilter from "./CheckboxFilter";

const FiltersContent = ({ filters, setFilters, yogaInstitutes, clearFilters }) => {
  const [expandedFilters, setExpandedFilters] = useState({
    academicType: true,
    course: true,
    courseLevel: true,
    courseType: true,
    location: true,
  });

  // This logic correctly calculates all available filter options from the main data
  const dynamicFilterOptions = useMemo(() => {
    if (!yogaInstitutes) return {};
    const academicTypes = [...new Set(yogaInstitutes.map((inst) => inst.academicType))];
    const courses = [...new Set(yogaInstitutes.flatMap((inst) => inst.courses))];
    const courseLevels = [...new Set(yogaInstitutes.map((inst) => inst.courseLevel))];
    const courseTypes = [...new Set(yogaInstitutes.map((inst) => inst.courseType))];
    const countries = [...new Set(yogaInstitutes.map((inst) => inst.country))];
    const states = [...new Set(yogaInstitutes.map((inst) => inst.state))];
    const cities = [...new Set(yogaInstitutes.map((inst) => inst.city))];

    return {
      academicTypes: academicTypes.map((type) => ({ name: type, count: yogaInstitutes.filter((inst) => inst.academicType === type).length })),
      courses: courses.map((course) => ({ name: course, count: yogaInstitutes.filter((inst) => inst.courses.includes(course)).length })),
      courseLevels: courseLevels.map((level) => ({ name: level, count: yogaInstitutes.filter((inst) => inst.courseLevel === level).length })),
      courseTypes: courseTypes.map((type) => ({ name: type, count: yogaInstitutes.filter((inst) => inst.courseType === type).length })),
      countries: countries.map((country) => ({ name: country, count: yogaInstitutes.filter((inst) => inst.country === country).length })),
      states: states.map((state) => ({ name: state, count: yogaInstitutes.filter((inst) => inst.state === state).length })),
      cities: cities.map((city) => ({ name: city, count: yogaInstitutes.filter((inst) => inst.city === city).length })),
    };
  }, [yogaInstitutes]);

  const toggleFilter = (filterType) => {
    setExpandedFilters((prev) => ({ ...prev, [filterType]: !prev[filterType] }));
  };

  // This function is passed down to each checkbox filter
  const handleCheckboxFilter = (filterType, value) => {
    setFilters((prev) => {
      const currentValues = prev[filterType] || [];
      const newValues = currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value];
      return { ...prev, [filterType]: newValues };
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between sticky sm:top-0 -top-6 bg-white z-20 p-4">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <FaFilter className="w-5 h-5 mr-2 text-purple-600" /> Filters
        </h3>
        <button
          onClick={clearFilters}
          className="text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center cursor-pointer"
        >
          <FaTimes className="w-4 h-4 mr-1" /> Clear All
        </button>
      </div>

      <FilterSection title="Academic Type" isExpanded={expandedFilters.academicType} onToggle={() => toggleFilter("academicType")}>
        <CheckboxFilter
          items={dynamicFilterOptions.academicTypes}
          filterType="academicType"
          selectedItems={filters.academicType}
          onFilterChange={handleCheckboxFilter}
        />
      </FilterSection>

      <FilterSection title="Courses" isExpanded={expandedFilters.course} onToggle={() => toggleFilter("course")}>
        <CheckboxFilter
          items={dynamicFilterOptions.courses}
          filterType="course"
          selectedItems={filters.course}
          onFilterChange={handleCheckboxFilter}
        />
      </FilterSection>

      <FilterSection title="Course Level" isExpanded={expandedFilters.courseLevel} onToggle={() => toggleFilter("courseLevel")}>
        <CheckboxFilter
          items={dynamicFilterOptions.courseLevels}
          filterType="courseLevel"
          selectedItems={filters.courseLevel}
          onFilterChange={handleCheckboxFilter}
        />
      </FilterSection>

      <FilterSection title="Course Type" isExpanded={expandedFilters.courseType} onToggle={() => toggleFilter("courseType")}>
        <CheckboxFilter
          items={dynamicFilterOptions.courseTypes}
          filterType="courseType"
          selectedItems={filters.courseType}
          onFilterChange={handleCheckboxFilter}
        />
      </FilterSection>

      <FilterSection title="Location" isExpanded={expandedFilters.location} onToggle={() => toggleFilter("location")}>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
            <CheckboxFilter
              items={dynamicFilterOptions.countries}
              filterType="country"
              selectedItems={filters.country}
              onFilterChange={handleCheckboxFilter}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">State/Province</label>
            <CheckboxFilter
              items={dynamicFilterOptions.states}
              filterType="state"
              selectedItems={filters.state}
              onFilterChange={handleCheckboxFilter}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
            <CheckboxFilter
              items={dynamicFilterOptions.cities}
              filterType="city"
              selectedItems={filters.city}
              onFilterChange={handleCheckboxFilter}
            />
          </div>
        </div>
      </FilterSection>
    </div>
  );
};

export default FiltersContent;