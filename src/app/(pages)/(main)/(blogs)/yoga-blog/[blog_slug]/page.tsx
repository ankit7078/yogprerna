"use client";

import React, { useEffect, useState } from "react";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { BlogsProps } from "../../../../../../types/types";
import { mockBlogs, mockCategories, mockTags, mockUsers } from "../../../../../data/mock-data";
import { generateSlug } from "../../../../../../contexts/Callbacks";
import Sidebar from "./_blog_detail_components/sidebar";
import Retreat from "./_blog_detail_components/retreat"
import BlogEnquiryForm from "./_blog_detail_components/BlogEnquiryForm";
import { BackLink } from "@/common/BackButton";
import { Calendar, Clock, Tag } from "lucide-react";

// const BlogDetailLoader = () => (
//   <div className="flex justify-center items-center h-screen bg-gray-50">
//     <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
//   </div>
// );

const BlogDetailPage: React.FC = () => {
  const { blog_slug } = useParams();
  const [blog, setBlog] = useState<BlogsProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogData = () => {
      const mainBlog = mockBlogs.find(item => generateSlug(item.title) === blog_slug);

      if (!mainBlog) {
        setBlog(null);
        setLoading(false);
        return;
      }

      const authorData = mockUsers.find(user => user.uniqueId === mainBlog.author);

      const categoryNames = (mainBlog.category as number[]).map(catId =>
        mockCategories.find(c => c.uniqueId === catId)?.blog_category || "Unknown"
      );

      const tagNames = (mainBlog.tags as number[]).map(tagId =>
        mockTags.find(t => t.uniqueId === tagId)?.blog_tag || "Unknown"
      );

      const finalBlog: BlogsProps = {
        ...mainBlog,
        author_name: authorData?.name || "Unknown Author",
        author_profile: authorData?.profile || [],
        category: categoryNames,
        tags: tagNames,
      };

      setTimeout(() => {
        setBlog(finalBlog);
        setLoading(false);
      }, 500);
    };

    getBlogData();
  }, [blog_slug]);

  useEffect(() => {
    if (!loading && !blog) {
      notFound();
    }
  }, [blog, loading]);

  if (!blog) {
    return null;
  }

  const featuredImageUrl = blog.featured_image?.[0] || "/img/blog-img/blog-1.png";
  const authorProfileUrl = blog.author_profile?.[0] || "/img/blog-img/blog-1.png";

  return (
    <div className="bg-[var(--secondary-bg)] py-6">
      <div className="max-w-7xl mx-auto px-2 sm:px-8">
        <div className="mb-4">
          <BackLink href="/yoga-blog" label="Back to Blog" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <article className="bg-[var(--primary-bg)] text-[var(--primary-text)] rounded-custom shadow-custom overflow-hidden">
              <div className="relative w-full aspect-video">
                <Image
                  src={featuredImageUrl}
                  alt={blog.title}
                  fill
                  priority
                  className="aspect-[2/1]"
                />
              </div>

              <div className="p-5">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-4">
                  {(blog.category as string[]).map((category) => (
                    <span key={category} className="bg-[var(--text-hover-color)] text-[var(--text-color-primary)] px-3 py-1 rounded-custom paragraph font-semibold tracking-wide">
                      {category}
                    </span>
                  ))}
                  <div className="flex items-center space-x-1 ml-auto">
                    <Calendar className="h-4 w-4 text-[var(--text-hover-color)]" />
                    <p className="text-sm">{new Date(blog.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4 text-[var(--text-hover-color)]" />
                    <p>{formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })}</p>
                  </div>
                </div>

                <h1 className="heading-lg text-[var(--text-color)] font-extrabold leading-tight mb-3">
                  {blog.title}
                </h1>
                <p
                  className="prose prose-lg max-w-none prose-p:text-[var(--text-primary)] prose-headings:font-bold prose-headings:text-[var(--text-primary)]"
                  dangerouslySetInnerHTML={{ __html: blog.blog }}
                />

                <div className="mt-5 pt-5 border-t border-[var(--primary-border)]">
                  <div className="flex items-center space-x-1 mb-3">
                    <Tag className="h-4 w-4 text-[var(--text-hover-color)]" />
                    <h3 className="font-semibold sub-heading">Tags</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {(blog.tags as string[]).map((tag) => (
                      <span key={tag} className="bg-[var(--text-hover-color)] text-[var(--text-color-primary)] px-3 py-1 rounded-custom paragraph font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            <div className="bg-[var(--primary-bg)] text-[var(--primary-text)] rounded-custom p-5 gap-5 md:flex items-center shadow-custom flex">
              <div className="relative w-20 h-20 rounded-full overflow-hidden mx-auto md:mx-0 flex-shrink-0">
                <Image
                  src={authorProfileUrl}
                  alt={blog.author_name || "Author"}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 space-y-1 ">
                <div className="flex items-center">
                  <h3 className="text-xs sm:text-sm font-bold ">Written By : {blog.author_name}</h3>
                </div>
                <p>Yoga & Wellness Expert</p>
              </div>
            </div>

            <BlogEnquiryForm blog={blog} />
          </div>

          <aside className="lg:col-span-1 space-y-6">
            <Retreat blog={blog} />
            <Sidebar blog={blog} />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;

