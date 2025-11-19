'use client'
import { useState, useMemo } from "react";
import FilterSection from "./FilterSection";
import CheckboxFilter from "./CheckboxFilter";
import { Filter } from "lucide-react";

const FiltersContent = ({ filters, setFilters, yogaInstitutes, clearFilters }) => {
  const [expandedFilters, setExpandedFilters] = useState({
    academicType: true,
    course: true,
    courseLevel: true,
    courseType: true,
    location: true,
    price: true,
  });

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

  // 2. New handler for Price Inputs
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value === "" ? "" : Number(value),
    }));
  };

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
      <div className="flex items-center justify-between bg-[var(--primary-bg)] z-20 ">
        <span className="font-semibold flex items-center">
          <Filter className="w-4 h-4 mr-2 text-[var(--text-hover-color)]" /> Filters
        </span>
        <button
          onClick={clearFilters}
          className="text-[var(--text-hover-color)] font-medium flex items-center cursor-pointer hover:underline"
        >
          Clear All
        </button>
      </div>

      {/* 3. New Price Range Section */}
      <FilterSection title="Price Range" isExpanded={expandedFilters.price} onToggle={() => toggleFilter("price")}>
        <div className="flex items-center gap-2 p-1">
          <div className="flex-1">
            <label className="text-xs text-[var(--secondary-text)] mb-1 block">Min Price</label>
            <input
              type="number"
              name="minPrice"
              placeholder="min"
              value={filters.minPrice || ""}
              onChange={handlePriceChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-1 focus:ring-[var(--border-primary)] text-xs bg-white text-black"
            />
          </div>
          <div className="pt-5 text-gray-400">-</div>
          <div className="flex-1">
            <label className="text-xs text-[var(--secondary-text)] mb-1 block">Max Price</label>
            <input
              type="number"
              name="maxPrice"
              placeholder="Max"
              value={filters.maxPrice || ""}
              onChange={handlePriceChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-1 focus:ring-[var(--border-primary)] text-xs bg-white text-black"
            />
          </div>
        </div>
      </FilterSection>

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
            <label className="block text-sm font-medium mb-2">Country</label>
            <CheckboxFilter
              items={dynamicFilterOptions.countries}
              filterType="country"
              selectedItems={filters.country}
              onFilterChange={handleCheckboxFilter}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">State/Province</label>
            <CheckboxFilter
              items={dynamicFilterOptions.states}
              filterType="state"
              selectedItems={filters.state}
              onFilterChange={handleCheckboxFilter}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">City</label>
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