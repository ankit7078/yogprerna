"use client";

import { generateSlug } from "@/contexts/Callbacks";
import {
  BlogsProps,
  CourseProps,
  PropertyProps,
} from "../../../../../types/types";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState, useMemo } from "react";
import {
  LuBookOpen,
  LuBuilding,
  LuGraduationCap,
  LuSearch,
  LuX,
} from "react-icons/lu";
import BlogCard from "../search_components/BlogCard";
import CourseCard from "../search_components/CourseCard";
import PropertyCard from "../search_components/PropertyCard";
import Breadcrumb from "@/components/breadcrumbs/breadcrumbs";
import dynamic from "next/dynamic";
import { mockProperties, mockCourses, mockBlogs } from "../../../../data/lib/mockdata";
import { ButtonGroup } from "@/common/ButtonGroup";
import Pagination from "../../../../../ui/pagination/Pagination"; // ✅ import pagination

const SearchLoader = dynamic(
  () => import("@/components/Loader/Search/SearchLoader"),
  { ssr: false }
);

type SearchResult =
  | (PropertyProps & { type: "property" })
  | (CourseProps & { type: "course" })
  | (BlogsProps & { type: "blog" });

const SearchResults = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");
  const { query } = useParams();
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [courses, setCourses] = useState<CourseProps[]>([]);
  const [blogs, setBlogs] = useState<BlogsProps[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<PropertyProps[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<CourseProps[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<BlogsProps[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [finalFilteredProperties, setFinalFilteredProperties] = useState<PropertyProps[]>([]);
  const [finalFilteredCourses, setFinalFilteredCourses] = useState<CourseProps[]>([]);
  const [finalFilteredBlogs, setFinalFilteredBlogs] = useState<BlogsProps[]>([]);

  // ✅ Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // ✅ Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);


  // Load mock data
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setProperties(mockProperties);
      setCourses(mockCourses);
      setBlogs(mockBlogs);
      setIsLoading(false);
    }, 500);
  }, []);

  // Filter data based on query from URL
  useEffect(() => {
    if (query) {
      setIsLoading(true);
      const safeQuery = Array.isArray(query) ? query[0] : query || "";
      const lowerQuery = generateSlug(safeQuery);

      const filteredProps = properties.filter(
        (prop) =>
          generateSlug(prop.property_name || "").includes(lowerQuery) ||
          generateSlug(prop.category || "").includes(lowerQuery) ||
          generateSlug(prop.property_city || "").includes(lowerQuery)
      );

      const filteredCrs = courses.filter(
        (course) =>
          generateSlug(course.course_name || "").includes(lowerQuery) ||
          generateSlug(course.course_type || "").includes(lowerQuery)
      );

      const filteredBlgs = blogs.filter(
        (blog) =>
          generateSlug(blog.title || "").includes(lowerQuery) ||
          blog.category.some((cat) => generateSlug(cat || "").includes(lowerQuery)) ||
          blog.tags.some((tag) => generateSlug(tag || "").includes(lowerQuery))
      );

      setFilteredProperties(filteredProps);
      setFilteredCourses(filteredCrs);
      setFilteredBlogs(filteredBlgs);
      setIsLoading(false);
    } else {
      setFilteredProperties(properties);
      setFilteredCourses(courses);
      setFilteredBlogs(blogs);
      setIsLoading(false);
    }
  }, [query, properties, courses, blogs]);

  // Local search filter
  useEffect(() => {
    if (!searchInput.trim()) {
      setFinalFilteredProperties(filteredProperties);
      setFinalFilteredCourses(filteredCourses);
      setFinalFilteredBlogs(filteredBlogs);
      return;
    }

    const searchQuery = generateSlug(searchInput);

    const searchFilteredProps = filteredProperties.filter(
      (prop) =>
        generateSlug(prop.property_name || "").includes(searchQuery) ||
        generateSlug(prop.category || "").includes(searchQuery)
    );

    const searchFilteredCourses = filteredCourses.filter(
      (course) =>
        generateSlug(course.course_name || "").includes(searchQuery) ||
        generateSlug(course.course_type || "").includes(searchQuery)
    );

    const searchFilteredBlogs = filteredBlogs.filter(
      (blog) =>
        generateSlug(blog.title || "").includes(searchQuery) ||
        blog.category.some((cat) => generateSlug(cat || "").includes(searchQuery)) ||
        blog.tags.some((tag) => generateSlug(tag || "").includes(searchQuery))
    );

    setFinalFilteredProperties(searchFilteredProps);
    setFinalFilteredCourses(searchFilteredCourses);
    setFinalFilteredBlogs(searchFilteredBlogs);
    setCurrentPage(1); // ✅ reset pagination on search
  }, [searchInput, filteredProperties, filteredCourses, filteredBlogs]);

  const getTotalResults = useCallback(() => {
    return (
      (finalFilteredProperties?.length || 0) +
      (finalFilteredCourses?.length || 0) +
      (finalFilteredBlogs?.length || 0)
    );
  }, [finalFilteredBlogs, finalFilteredCourses, finalFilteredProperties]);

  // ✅ Combined results before pagination
  const allResults = useMemo(() => {
    let results: SearchResult[] = [];
    if (activeTab === "all") {
      results = [
        ...finalFilteredProperties.map((item) => ({ ...item, type: "property" as const })),
        ...finalFilteredCourses.map((item) => ({ ...item, type: "course" as const })),
        ...finalFilteredBlogs.map((item) => ({ ...item, type: "blog" as const })),
      ];
    } else if (activeTab === "institutes") {
      results = finalFilteredProperties.map((item) => ({ ...item, type: "property" as const }));
    } else if (activeTab === "courses") {
      results = finalFilteredCourses.map((item) => ({ ...item, type: "course" as const }));
    } else if (activeTab === "blogs") {
      results = finalFilteredBlogs.map((item) => ({ ...item, type: "blog" as const }));
    }
    return results;
  }, [activeTab, finalFilteredProperties, finalFilteredCourses, finalFilteredBlogs]);

  // ✅ Pagination logic
  const totalPages = Math.ceil(allResults.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedResults = allResults.slice(startIndex, startIndex + itemsPerPage);

  const clearSearch = () => setSearchInput("");

  return (
    <div className="min-h-screen bg-[var(--secondary-bg)] text-[var(--primary-text)] max-w-7xl mx-auto px-2 sm:px-8 py-6 space-y-6">
      <div>
        <Breadcrumb items={[{ label: "Search" }, { label: `${query}` }]} />
      </div>

      <div className="container">
        {/* Search input */}
        <div className="relative flex-1 max-w-2xl mb-2">
          <LuSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--text-hover-color)] h-4 w-4" />
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search courses, properties, institutes, blogs..."
            className="w-full pl-10 pr-12 py-2 paragraph rounded-custom shadow-custom border border-[var(--primary-border)] focus:outline-none focus:ring-1 focus:ring-[var(--primary-border)] transition bg-[var(--primary-bg)]"
          />
          {searchInput && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--text-hover-color)] cursor-pointer"
            >
              <LuX className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Tabs and count */}
        {(finalFilteredBlogs.length > 0 ||
          finalFilteredCourses.length > 0 ||
          finalFilteredProperties.length > 0) && (
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4 mt-4">
              <div className="flex gap-2 flex-wrap">
                {[{ key: "all", label: "All", icon: LuSearch, count: getTotalResults() },
                { key: "institutes", label: "Institutes", icon: LuBuilding, count: finalFilteredProperties.length },
                { key: "courses", label: "Courses", icon: LuGraduationCap, count: finalFilteredCourses.length },
                { key: "blogs", label: "Blogs", icon: LuBookOpen, count: finalFilteredBlogs.length }
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => { setActiveTab(tab.key); setCurrentPage(1); }}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-custom shadow-custom transition-all ${activeTab === tab.key
                        ? "bg-[var(--text-hover-color)] text-[var(--text-color-primary)] scale-95"
                        : "bg-[var(--primary-bg)] text-[var(--text-hover-color)] hover:scale-105"
                      }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                    <span className="bg-[var(--secondary-icon-l)] text-[var(--text-hover-color)] text-xs px-2 py-1 rounded-full ml-1">
                      {tab.count}
                    </span>
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                <h1 className="heading font-medium">
                  Found{" "}
                  <span className="font-bold text-[var(--text-hover-color)]">
                    {getTotalResults()}
                  </span>{" "}
                  results
                </h1>
                {searchInput && (
                  <p>
                    Filtered by: &quot;<span className="font-medium">{searchInput}</span>&quot;
                  </p>
                )}
              </div>
            </div>
          )}

        {/* Loader */}
        {isLoading && <SearchLoader />}

        {/* Results */}
        <div className="space-y-6">
          {paginatedResults.map((item, index) => {
            if (item.type === "property") return <PropertyCard key={index} property={item} />;
            if (item.type === "course") return <CourseCard key={index} course={item} />;
            if (item.type === "blog") return <BlogCard key={index} blog={item} />;
            return null;
          })}

          {/* No results */}
          {getTotalResults() === 0 && !isLoading && (
            <div className="text-center bg-[var(--primary-bg)] mt-6 rounded-custom shadow-custom py-10">
              <LuSearch className="w-16 h-16 mx-auto mb-4 text-[var(--icon-not-found)]" />
              <h2 className="sub-heading text-[var(--primary-text)] font-medium">
                No results found for &quot;
                <span className="font-bold">{query}</span>&quot;
              </h2>
              {searchInput && (
                <ButtonGroup label="Clear Search Filter" onClick={clearSearch} />
              )}
            </div>
          )}

          {/* ✅ Pagination Section */}
          {totalPages > 1 && (
            <div className="mt-10">
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
