"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogsProps } from "@/types/types";
import { stripHtmlAndLimit, generateSlug } from "@/contexts/Callbacks";
import { LuArrowRight } from "react-icons/lu";

const BlogCard = ({ blog }: { blog: BlogsProps }) => {
  const slug = generateSlug(blog.title);

  // ✅ Always ensure imageSrc is a valid string
 const imageSrc =
    blog?.featured_image?.[0] || "/img/blog-img/blog-1.png"; // Fallback to a default image if none provided

  return (
    <div className="bg-[var(--primary-color)] text-[var(--text-color)] rounded-2xl shadow-sm hover:shadow-md overflow-hidden group  transition-all duration-300">
      <Link href={`/yoga-blog/${slug}`}>
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <Image
            src={imageSrc}
            alt={blog.title || "Blog Image"}
            fill
            className="aspect-[2/1] w-full h-full"
          />
        </div>
      </Link>

      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-600 transition-colors">
          {blog.title}
        </h3>
        <p className="text-[var(--subprimary-color)] text-sm mb-4 line-clamp-3">
          {stripHtmlAndLimit(blog.blog, 150)}
        </p>

        <Link
          href={`/yoga-blog/${slug}`}
          className="inline-flex items-center font-medium hover:underline"
        >
          Read More
          <LuArrowRight className="ml-1 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
