"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { LuCalendar, LuTrendingUp } from "react-icons/lu";
import { BlogsProps } from "../../../../../../../types/types";
import { generateSlug } from "../../../../../../../contexts/Callbacks";
import { mockBlogs } from "../../../../../../data/mock-data";

const Sidebar = ({ blog }: { blog: BlogsProps | null }) => {
  const [blogs, setBlogs] = useState<BlogsProps[]>([]);

  const getBlogs = useCallback(() => {
    if (!blog) return;

    const allBlogs: BlogsProps[] = mockBlogs;

    const otherBlogs = allBlogs.filter(
      (item) => item.uniqueId !== blog.uniqueId
    );

    const finalBlogs = otherBlogs.sort(() => 0.5 - Math.random()).slice(0, 4);

    setBlogs(finalBlogs);
  }, [blog]);

  useEffect(() => {
    getBlogs();
  }, [getBlogs]);

  const imageSrc =
    blog?.featured_image?.[0] || "/img/blog-img/blog-1.png";


  return (
    <div className="space-y-4 sticky top-15">
      <div className="bg-[var(--primary-bg)] text-[var(--primary-text)] rounded-custom shadow-custom p-5">
        <h3 className="sub-heading font-bold mb-4 flex items-center space-x-2">
          <LuTrendingUp className="h-4 w-4 text-[var(--text-hover-color)]" />
          <span>Other Posts</span>
        </h3>
        <div className="space-y-4">
          {blogs.map((blogItem) => (
            <Link
              key={blogItem.uniqueId}
              href={`/yoga-blog/${generateSlug(blogItem.title)}`}
              className="flex space-x-3 group bg-[var(--secondary-bg)] shadow-custom p-2 rounded-custom transition-colors"
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
                <h4 className="paragraph font-medium group-hover:text-[var(--text-hover-color)] line-clamp-2 transition-colors">
                  {blogItem.title}
                </h4>
                <div className="flex items-center space-x-1 pt-1">
                  <LuCalendar className="h-3 w-3 text-[var(--text-hover-color)]" />
                  <span className="paragraph">
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
