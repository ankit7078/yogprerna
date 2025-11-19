"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { BlogsProps } from "../../../../../../../types/types";
import { generateSlug } from "../../../../../../../contexts/Callbacks";
import { mockBlogs } from "../../../../../../data/mock-data";
import { TrendingUp } from "lucide-react";

const Retreat = ({ blog }: { blog: BlogsProps | null }) => {
    const [blogs, setBlogs] = useState<BlogsProps[]>([]);

    const getBlogs = useCallback(() => {
        if (!blog) return;

        const otherBlogs = mockBlogs.filter(
            (item) => item.uniqueId !== blog.uniqueId
        );

        const finalBlogs = [...otherBlogs]
            .sort(() => Math.random() - 0.5)
            .slice(0, 4);

        setBlogs(finalBlogs);
    }, [blog]);

    useEffect(() => {
        getBlogs();
    }, [getBlogs]);

    return (
        <div className="space-y-4">
            <div className="bg-[var(--primary-bg)] text-[var(--primary-text)] rounded-custom shadow-custom p-5">
                <h3 className="sub-heading font-bold mb-4 flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-[var(--text-hover-color)]" />
                    <span>Retreats</span>
                </h3>

                <div className="space-y-4">
                    {blogs.map((blogItem) => {
                        const imageSrc =
                            blogItem.featured_image?.[0] || "/img/blog-img/blog-1.png";

                        return (
                            <Link
                                key={blogItem.uniqueId}
                                href={`/yoga-blog/${generateSlug(blogItem.title)}`}
                                className="flex space-x-3 group bg-[var(--secondary-bg)] shadow-custom p-2 rounded-custom transition-colors items-center"
                            >
                                {/* Image */}
                                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 relative">
                                    <Image
                                        src={imageSrc}
                                        alt={blogItem.title}
                                        fill
                                        sizes="80px"
                                        className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    {/* Retreat Name */}
                                    <h4 className="paragraph font-semibold group-hover:text-[var(--text-hover-color)] line-clamp-2 transition-colors">
                                        {blogItem.title}
                                    </h4>

                                    {/* Retreat Type */}
                                    <p className="text-sm text-[var(--text-hover-color)] font-medium pt-1">
                                        {blogItem.retreat_type || "Yoga Retreat"}
                                    </p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Retreat;
