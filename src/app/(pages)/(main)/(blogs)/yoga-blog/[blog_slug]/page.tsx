"use client";
import React, { useEffect, useState } from "react";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { LuArrowLeft, LuCalendar, LuClock, LuTag } from "react-icons/lu";
import { BlogsProps } from "../../../../../../types/types";
import { mockBlogs, mockCategories, mockTags, mockUsers } from "../../../../../data/mock-data";
import { generateSlug } from "../../../../../../contexts/Callbacks";
import Sidebar from "./_blog_detail_components/sidebar";
import BlogEnquiryForm from "./_blog_detail_components/BlogEnquiryForm";

const BlogDetailLoader = () => (
  <div className="flex justify-center items-center h-screen bg-gray-50">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
  </div>
);

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

  if (loading) {
    return <BlogDetailLoader />;
  }

  if (!blog) {
    return null;
  }

  const featuredImageUrl = blog.featured_image?.[0] || "/img/blog-img/blog-1.png";
  const authorProfileUrl = blog.author_profile?.[0] || "/img/blog-img/blog-1.png";

  return (
    <div className="bg-[var(--text-primary)] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/yoga-blog" className="inline-flex items-center space-x-2 text-[var(--text-hover-color)] transition-colors group">
            <LuArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span>Back to All Posts</span>
          </Link>
        </div>
 
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <article className="bg-[var(--primary-color)] text-[var(--subprimary-color)] rounded-2xl shadow-sm overflow-hidden">
              <div className="relative w-full aspect-video">
                <Image
                  src={featuredImageUrl}
                  alt={blog.title}
                  fill
                  priority
                  className="aspect-[2/1]"
                />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
                  {(blog.category as string[]).map((category) => (
                    <span key={category} className="bg-[var(--secondary-color)] text-[var(--text-color-primary)] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                      {category}
                    </span>
                  ))}
                  <div className="flex items-center space-x-2 ml-auto">
                    <LuCalendar className="h-4 w-4" />
                    <span className="text-sm">{new Date(blog.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <LuClock className="h-4 w-4" />
                    <span className="text-sm">{formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })}</span>
                  </div>
                </div>

                <h1 className="text-3xl lg:text-3xl text-[var(--text-color)] font-extrabold mb-6 leading-tight">
                  {blog.title}
                </h1>

                <div
                  className="prose prose-lg max-w-none prose-p:text-gray-700 prose-headings:font-bold prose-headings:text-gray-800"
                  dangerouslySetInnerHTML={{ __html: blog.blog }}
                />

                <div className="mt-8 pt-6 border-t border-[var(--text-color)]">
                  <div className="flex items-center space-x-3 mb-4">
                    <LuTag className="h-5 w-5 text-[var(--text-hover-color)]" />
                    <h3 className="font-semibold">Tags</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">  
                    {(blog.tags as string[]).map((tag) => (
                      <span key={tag} className="bg-[var(--secondary-color)] text-[var(--text-color-primary)] px-3 py-1 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            <div className="bg-[var(--primary-color)] text-[var(--subprimary-color)] rounded-2xl p-6 gap-5 md:p-8 md:flex items-center space-x-6 mt-8 shadow-sm">
              <div className="relative w-20 h-20 rounded-full overflow-hidden mx-auto md:mx-0 flex-shrink-0">
                <Image
                  src={authorProfileUrl}
                  alt={blog.author_name || "Author"}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4 md:mt-0 text-center md:text-left flex-1">
                <p className="text-sm font-bold uppercase tracking-wider">Written By</p>
                <p className="font-bold text-xl">{blog.author_name}</p>
                <p className="text-sm">Yoga & Wellness Expert</p>
              </div>
            </div>

            <BlogEnquiryForm blog={blog} />
          </div>

          <aside className="lg:col-span-1">
            <Sidebar blog={blog} />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;

