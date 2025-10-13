"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { LuSearch } from "react-icons/lu";
import BlogCard from "./_allblog_components/BlogCard";
import Pagination from "./_allblog_components/Pagination";
import { stripHtmlAndLimit } from "@/contexts/Callbacks";
import { BlogsProps, BlogCategoryProps, UserProps } from "@/types/types";
import FeaturedBlog from "./_allblog_components/FeaturedBlog";
import Breadcrumb from "@/components/breadcrumbs/breadcrumbs";
import BlogLoader from "@/components/Loader/Blog/BlogLoader";
import {  mockBlogs, mockUsers,  mockCategories } from "../../../../data/mock-data";

// Helper function to process the mock data
const getEnrichedBlogs = (blogs: any[], users: UserProps[], categories: BlogCategoryProps[]): BlogsProps[] => {
  return blogs.map((blog) => {
    const author = users.find(
      (user) => user.uniqueId === blog.author
    );

    const blogCategories = blog.category.map((catId: number) => {
      const cat = categories.find((c) => c.uniqueId === catId);
      return cat?.blog_category || "Unknown Category";
    });

    return {
      ...blog,
      author_name: author?.name || "Unknown Author",
      author_profile: author?.avatar || "",
      category: blogCategories,
    };
  });
};


const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // Enriched blogs are memoized to prevent recalculation on every render
  const allEnrichedBlogs = useMemo(() => getEnrichedBlogs(mockBlogs, mockUsers, mockCategories), []);

  const [filteredBlogs, setFilteredBlogs] = useState<BlogsProps[]>(allEnrichedBlogs.slice(1));

  const blogsPerPage = 6;

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const featuredBlog = allEnrichedBlogs[0];
  const regularBlogs = useMemo(
    () => allEnrichedBlogs.filter((_, index) => index !== 0),
    [allEnrichedBlogs]
  );

  useEffect(() => {
    let filtered = regularBlogs;

    if (searchTerm) {
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          stripHtmlAndLimit(blog?.blog)
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase())
      );
    }

    setFilteredBlogs(filtered);
    setCurrentPage(1);
  }, [searchTerm, regularBlogs]);

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + blogsPerPage
  );

  return (
    <div>
      {loading ? (
        <BlogLoader />
      ) : (
        <div className="bg-[var(--text-primary)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="py-3 p-4 bg-[var(--primary-color)] rounded-md shadow-sm">
              <Breadcrumb items={[{ label: "Blog", href: "/yoga-blog" }]} />
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            {featuredBlog && currentPage === 1 && !searchTerm && (
              <FeaturedBlog blog={featuredBlog} />
            )}
            <div className="mb-6 bg-[var(--primary-color)] text-[var(--text-color)] p-4 rounded-2xl shadow-sm">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 max-w-md w-full">
                  <LuSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search blogs, tags, or topics..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-[var(--text-primary)] rounded-2xl border border-transparent transition-all duration-200 shadow-sm focus:outline-none focus:border-[var(--subprimary-color)]"
                  />
                </div>

                <div>
                  <p className="flex items-center space-x-2">
                    <span>
                      {filteredBlogs.length === regularBlogs.length && !searchTerm ? (
                        <>
                          Showing all{" "}
                          <span className="font-bold text-purple-600">
                            {regularBlogs.length}
                          </span>{" "}
                          blogs
                        </>
                      ) : (
                        `Found ${filteredBlogs.length} blog${filteredBlogs.length !== 1 ? "s" : ""
                        }`
                      )}
                    </span>
                    {searchTerm && (
                      <button
                        onClick={() => setSearchTerm("")}
                        className="text-purple-600 bg-purple-100 px-3 py-2 rounded-xl hover:bg-purple-200 text-sm font-medium flex items-center cursor-pointer"
                      >
                        Clear search
                      </button>
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`}
            >
              {currentBlogs.map((blog, index) => (
                <BlogCard key={blog.uniqueId} blog={blog} index={index} />
              ))}
            </div>

            {filteredBlogs.length === 0 && (
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <LuSearch className="h-12 w-12 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No blogs found
                  </h3>
                  <p className="text-gray-500 mb-4">
                    Try adjusting your search terms to discover great content.
                  </p>
                </div>
              </div>
            )}

            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
