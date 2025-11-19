"use client";

import React, { useEffect, useMemo, useState } from "react";
import { LuSearch } from "react-icons/lu";
import BlogCard from "./_allblog_components/BlogCard";
import { stripHtmlAndLimit } from "@/contexts/Callbacks";
import { BlogsProps, BlogCategoryProps, UserProps } from "@/types/types";
import FeaturedBlog from "./_allblog_components/FeaturedBlog";
import Breadcrumb from "@/components/breadcrumbs/breadcrumbs";
import BlogLoader from "@/components/Loader/Blog/BlogLoader";
import Pagination from "../../../../../ui/pagination/Pagination";
import {
  mockBlogs,
  mockUsers,
  mockCategories,
} from "../../../../data/mock-data";
import { ButtonGroup } from "@/common/ButtonGroup";
import { Search } from "lucide-react";

// Helper function to enrich blogs with author + category details
const getEnrichedBlogs = (
  blogs: any[],
  users: UserProps[],
  categories: BlogCategoryProps[]
): BlogsProps[] => {
  return blogs.map((blog) => {
    const author = users.find((user) => user.uniqueId === blog.author);
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

// Blog Page Component
const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  // Prepare enriched blogs
  const allEnrichedBlogs = useMemo(
    () => getEnrichedBlogs(mockBlogs, mockUsers, mockCategories),
    []
  );

  const featuredBlog = allEnrichedBlogs[0];
  const regularBlogs = useMemo(
    () => allEnrichedBlogs.filter((_, index) => index !== 0),
    [allEnrichedBlogs]
  );

  const [filteredBlogs, setFilteredBlogs] = useState<BlogsProps[]>(regularBlogs);

  // Loader effect
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // Filter blogs by search term
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
    setCurrentPage(1); // reset to first page on search
  }, [searchTerm, regularBlogs]);

  // Pagination logic
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + blogsPerPage
  );

  // ========================================================================
  // Render
  // ========================================================================
  return (
    <div>
      {loading ? (
        <BlogLoader />
      ) : (
        <div className="bg-[var(--secondary-bg)] max-w-7xl mx-auto px-2 sm:px-8 py-6">
          <div className="mb-4">
            <Breadcrumb items={[{ label: "Blog", href: "/yoga-blog" }]} />
          </div>

          <div className="space-y-6">
            {/* Featured Blog */}
            {featuredBlog && !searchTerm && (
              <FeaturedBlog blog={featuredBlog} />
            )}

            {/* Search + Count Bar */}
            <div className="bg-[var(--primary-bg)] text-[var(--text-color)] p-5 rounded-custom shadow-custom">
              <div className="flex flex-col lg:flex-row gap-4 sm:items-center  justify-between">
                <div className="relative flex-1 max-w-md w-full">
                  <Search className="absolute left-3  top-1/2 transform -translate-y-1/2 text-[var(--primary-text-h)] h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search blogs, tags, or topics..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full paragraph px-4 ps-8 py-2 border border-[var(--primary-border)] rounded-lg focus:ring-1 focus:ring-[var(--primary-border)] focus:outline-none text-[var(--secondary-text)] bg-transparent"
                  />
                </div>

                <div>
                  <p className="flex items-center space-x-4">
                    <span>
                      {filteredBlogs.length === regularBlogs.length &&
                        !searchTerm ? (
                        <>
                          Showing all{" "}
                          <span className="font-bold text-[var(--primary-text-h)]">
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
                      <ButtonGroup
                        label="Clear search"
                        onClick={() => setSearchTerm("")}
                      />
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Blog Cards Grid */}
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}
            >
              {currentBlogs.map((blog, index) => (
                <BlogCard key={blog.uniqueId} blog={blog} index={index} />
              ))}
            </div>

            {/* Empty State */}
            {filteredBlogs.length === 0 && (
              <div className="text-center py-16 bg-[var(--primary-bg)] rounded-custom shadow-custom">
                <div className="max-w-md mx-auto">
                  <div className="w-24 h-24 bg-[var(--secondary-bg)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-12 w-12 text-[var(--text-hover-color)]" />
                  </div>
                  <h3 className="heading font-semibold text-[var(--primary-text)] mb-2">
                    No blogs found
                  </h3>
                  <p className="text-[var(--found-text)] mb-4">
                    Try adjusting your search terms to discover great content.
                  </p>
                </div>
              </div>
            )}

            {/* ✅ Pagination */}
            {filteredBlogs.length > blogsPerPage && (
              <div>
                <Pagination
                  totalPages={totalPages}
                  currentPage={currentPage}
                  onPageChange={(page) => setCurrentPage(page)}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
