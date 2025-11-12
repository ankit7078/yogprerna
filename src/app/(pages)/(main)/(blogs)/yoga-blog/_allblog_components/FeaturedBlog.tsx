"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LuCalendar, LuClock, LuArrowRight } from "react-icons/lu";
import { stripHtmlAndLimit, generateSlug } from "@/contexts/Callbacks";
import { BlogsProps } from "@/types/types";

const FeaturedBlog = ({ blog }: { blog: BlogsProps }) => {
  const slug = generateSlug(blog.title);

  const imageSrc =
    typeof blog?.featured_image?.[0] === "string" &&
      blog.featured_image[0].startsWith("http")
      ? blog.featured_image[0]
      : "/img/blog-img/blog-1.png";

  const authorImage =
    blog?.author_profile && blog.author_profile.startsWith("http")
      ? blog.author_profile
      : "/img/blog-img/blog-1.png";

  return (
    <section className="relative rounded-custom overflow-hidden shadow-custom mb-10 bg-black/90">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={blog.title}
          fill
          priority
          className="sm:aspect-[2/1] brightness-[0.45] "
        />
        <div className="absolute inset-0 bg-gray-800/30 "></div>
      </div>

      {/* ===== CONTENT SECTION ===== */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-5 gap-10 text-[var(--text-color-primary)]">
        <div className="flex-1 max-w-2xl">
          <span className="hidden lg:block w-max bg-white/20 backdrop-blur-sm font-semibold px-4 py-1.5 heading-sm rounded-custom mb-4">
            {blog.category?.[0] || "Yoga"}
          </span>

          <Link href={`/yoga-blog/${slug}`}>
            <h1 className="text-md lg:text-4xl font-bold text-white hover:text-purple-100 mb-1 sm:mb-3 leading-tight">
              {blog.title}
            </h1>
          </Link>

          <p className="text-[--var(--text-color-primary)] text-base mb-2 sm:mb-6 leading-relaxed line-clamp-2 sm:line-clamp-3">
            {stripHtmlAndLimit(blog.blog, 230)}
          </p>

          <div className="flex flex-wrap  items-center gap-5  text-sm sm:mb-6 mb-2">
            <div className="flex items-center space-x-3 ">
              <div className="relative w-10 h-10 rounded-full overflow-hidden hidden lg:block">
                <Image
                  src={authorImage}
                  alt={blog.author_name}
                  fill
                />
              </div>
              <div>
                <p className="font-medium hidden lg:block">{blog.author_name || "Admin"}</p>
              </div>
            </div>

            <div className="flex items-center space-x-2 ">
              <LuCalendar className="h-4 w-4 text-[var(--text-hover-color)]" />
              <span>
                {new Date(blog.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <LuClock className="h-4 w-4 text-[var(--text-hover-color)]" />
              <span>3 months ago</span>
            </div>
          </div>

          <Link
            href={`/yoga-blog/${slug}`}
            className="inline-flex items-center space-x-2 bg-[var(--text-color-primary)] text-[var(--primary-text-h)] px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300"
          >
            <span>Read Full Article</span>
            <LuArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="hidden lg:block relative flex-1 aspect-[2/1] rotate-3 hover:rotate-0 transition-transform duration-500 rounded-custom overflow-hidden shadow-custom ">
          <Image
            src={imageSrc}
            alt={blog.title}
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlog;
