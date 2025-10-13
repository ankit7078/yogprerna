"use client";
import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LuCalendar, LuTrendingUp } from "react-icons/lu";
import { BlogsProps } from "../../../../../../../types/types";
import { generateSlug } from "../../../../../../../contexts/Callbacks";
import { mockBlogs } from "../../../../../../data/mock-data";

const Sidebar = ({ blog }: { blog: BlogsProps | null }) => {
  const [blogs, setBlogs] = useState<BlogsProps[]>([]);

  const getBlogs = useCallback(() => {
    if (!blog) return;

    // Use the imported mockBlogs array directly as our data source
    const allBlogs: BlogsProps[] = mockBlogs;

    // Filter out the blog post that is currently being viewed
    const otherBlogs = allBlogs.filter(
      (item) => item.uniqueId !== blog.uniqueId
    );
    
    // For this mock version, we'll just shuffle and take the first 4 posts
    const finalBlogs = otherBlogs.sort(() => 0.5 - Math.random()).slice(0, 4);

    setBlogs(finalBlogs);
  }, [blog]);

  useEffect(() => {
    // Re-fetch the sidebar blogs whenever the main blog prop changes
    getBlogs();
  }, [getBlogs]);

   const imageSrc =
    blog?.featured_image?.[0] || "/img/blog-img/blog-1.png"; 


  return (
    <div className="space-y-8 sticky top-24">
      <div className="bg-[var(--primary-color)] text-[var(--subprimary-color)] rounded-2xl shadow-sm p-6">
        <h3 className="text-xl font-bold mb-6 flex items-center space-x-2">
          <LuTrendingUp className="h-5 w-5 text-purple-600" />
          <span>Other Posts</span>
        </h3>
        <div className="space-y-4">
          {blogs.map((blogItem) => (
            <Link
              key={blogItem.uniqueId}
              href={`/yoga-blog/${generateSlug(blogItem.title)}`}
              className="flex space-x-3 group bg-[var(--text-primary)] shadow-sm p-2 rounded-lg transition-colors"
            >
              <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 relative">
                <Image
                  src={imageSrc}
                  alt={blogItem.title}
                  fill
                  sizes="64px"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium group-hover:text-purple-600 line-clamp-2 transition-colors">
                  {blogItem.title}
                </h4>
                <div className="flex items-center space-x-1 mt-1">
                  <LuCalendar className="h-3 w-3" />
                  <span className="text-xs ">
                    {new Date(blogItem.createdAt).toLocaleDateString("en-US", { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
