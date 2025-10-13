"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LuCalendar, LuClock, LuArrowRight } from "react-icons/lu";
import { stripHtmlAndLimit, generateSlug } from "@/contexts/Callbacks";
import { BlogsProps } from "@/types/types";

const FeaturedBlog = ({ blog }: { blog: BlogsProps }) => {
  const slug = generateSlug(blog.title);

  // ✅ Handle missing or invalid image URLs
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
    <section className="relative rounded-3xl overflow-hidden shadow-sm mb-16 bg-black/90">
      {/* ===== Background Image ===== */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={blog.title}
          fill
          priority
          className="sm:aspect-[2/1] brightness-[0.45] "
        />
        <div className="absolute inset-0 bg-purple-800/50 "></div>
      </div>

      {/* ===== CONTENT SECTION ===== */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-8 gap-10 text-white">
        {/* LEFT CONTENT */}
        <div className="flex-1 max-w-2xl">
          {/* Category */}
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            {blog.category?.[0] || "Yoga"}
          </span>

          {/* Title */}
          <Link href={`/yoga-blog/${slug}`}>
            <h1 className="text-3xl lg:text-4xl font-bold text-white hover:text-purple-100 mb-3 leading-tight">
              {blog.title}
            </h1>
          </Link>

          {/* Description */}
          <p className="text-white/90 text-base mb-6 leading-relaxed">
            {stripHtmlAndLimit(blog.blog, 230)}
          </p>

          {/* Author Info */}
          <div className="flex flex-wrap items-center gap-5 text-sm mb-6">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={authorImage}
                  alt={blog.author_name}
                  fill
                />
              </div>
              <div>
                <p className="font-medium">{blog.author_name || "Admin"}</p>
              </div>
            </div>

            {/* Date */}
            <div className="flex items-center space-x-2">
              <LuCalendar className="h-4 w-4 text-fuchsia-300" />
              <span>
                {new Date(blog.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>

            {/* Time Ago */}
            <div className="flex items-center space-x-2">
              <LuClock className="h-4 w-4 text-fuchsia-300" />
              <span>3 months ago</span>
            </div>
          </div>

          {/* Read Button */}
          <Link
            href={`/yoga-blog/${slug}`}
            className="inline-flex items-center space-x-3 bg-white text-purple-700 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300"
          >
            <span>Read Full Article</span>
            <LuArrowRight className="h-5 w-5" />
          </Link>
        </div>

        {/* RIGHT IMAGE PREVIEW (only on desktop) */}
        <div className="hidden lg:block relative flex-1 aspect-[2/1] rotate-3 hover:rotate-0 transition-transform duration-500 rounded-3xl overflow-hidden shadow-xl ">
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
