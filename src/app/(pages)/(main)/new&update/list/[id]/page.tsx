"use client";
import React from "react";
import { useParams } from "next/navigation";
import Breadcrumb from "@/components/breadcrumbs/breadcrumbs";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

// --- (You can import or fetch the same data here)
const mainArticlesData = [
  {
    id: 1,
    title: "New York mayoral polls: When is voting and where Mamdani, competitors stand",
    summary:
      "Early voting has begun in New York City’s mayoral race, with Zohran Mamdani leading against Andrew Cuomo and Curtis Sliwa; the mayoral elections will decide if the city gets its first...",
    timestamp: "Updated On : 03 Nov 2025 | 4:07 PM IST",
    imageUrl: "/img/newandupdate/new-1.jpg",
  },
  {
    id: 2,
    title:
      "Japan to invest $300 mn in Pakistan's copper mine amid supply crunch",
    summary:
      "Situated in Pakistan’s Balochistan province, the Reko Diq copper-gold mine is poised to become one of the world’s five largest copper reserves, drawing Japanese financing and...",
    timestamp: "Updated On : 03 Nov 2025 | 2:56 PM IST",
    imageUrl: "/img/newandupdate/new-2.jpg",
  },
  // add more...
];

export default function NewsDetailPage() {
  const { id } = useParams();
  const article = mainArticlesData.find((item) => item.id === Number(id));

  if (!article) {
    return (
      <div className="max-w-5xl mx-auto py-10 text-center">
        <h1 className="text-2xl font-semibold">Article Not Found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-[var(--primary-text)]">
      <Breadcrumb
        items={[
          { label: "New & Update", href: "/" },
          { label: "World News", href: "/news" },
          { label: article.title, href: `/news/${id}` },
        ]}
      />

      <div className="mt-6">
        <h1 className="heading-xl font-bold mb-4">{article.title}</h1>

        <p className="text-sm font-semibold mb-4 text-[var(--text-hover-color)]">
          {article.timestamp}
        </p>

        <div className="w-full mb-6 rounded-md overflow-hidden border border-[var(--primary-border)]">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-lg leading-relaxed">
          {article.summary}
        </p>

        <p className="mt-6 text-base leading-relaxed">
          {/* You can add full article text here */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Vivamus sodales ipsum id urna pharetra, ut lacinia est finibus. 
          In dignissim eros vel justo aliquam, et feugiat purus interdum.
        </p>
      </div>
    </div>
  );
}
