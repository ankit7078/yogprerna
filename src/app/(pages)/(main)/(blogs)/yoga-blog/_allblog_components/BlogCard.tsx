"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogsProps } from "@/types/types";
import { stripHtmlAndLimit, generateSlug } from "@/contexts/Callbacks";
import ReadMoreButton from "@/components/buttons/ReadMoreButton";

const BlogCard = ({ blog }: { blog: BlogsProps }) => {
  const slug = generateSlug(blog.title);

  const imageSrc =
    blog?.featured_image?.[0] || "/img/blog-img/blog-1.png";

  return (
    <div className="bg-[var(--primary-bg)] text-[var(--text-color)] rounded-custom shadow-custom hover:shadow-md overflow-hidden group  transition-all duration-300">
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
        <h3 className="sub-heading font-semibold mb-2 text-[var(--text-hover-color)] group-hover:text-[var(--primary-text-h)] transition-colors">
          {blog.title}
        </h3>
        <p className="text-[var(--primary-text)] mb-2 line-clamp-3">
          {stripHtmlAndLimit(blog.blog, 150)}
        </p>

        <ReadMoreButton href={`/yoga-blog/${slug}`} /></div>
    </div>
  );
};

export default BlogCard;
