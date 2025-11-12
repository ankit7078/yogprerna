'use client';

import React, { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaBars, FaTimes } from "react-icons/fa";
import Overview from "./tabs/Overview";
import Gallery from "./tabs/Gallery";
import Accomodation from "./tabs/Accomodation";
import Amenities from "./tabs/Amenities";
import WorkingHours from "./tabs/WorkingHours";
import Teachers from "./tabs/Teachers";
import Faqs from "./tabs/Faqs";
import Reviews from "./tabs/Reviews";
import EnquiryForm from "./Enquiry";

const tabs = [
  { id: "overview1", label: "Overview" },
  { id: "gallery", label: "Gallery" },
  { id: "accomodation", label: "Accomodation" },
  { id: "amenities", label: "Amenities" },
  { id: "workinghours", label: "Working Hours" },
  { id: "teachers", label: "Teachers" },
  { id: "faqs", label: "Faqs" },
  { id: "reviews", label: "Reviews" },
];

const CourseDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState("overview1");
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const checkForScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    checkForScrollPosition();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkForScrollPosition);
      window.addEventListener("resize", checkForScrollPosition);
    }
    return () => {
      if (el) el.removeEventListener("scroll", checkForScrollPosition);
      window.removeEventListener("resize", checkForScrollPosition);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 180;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto">

      <div className="sticky top-[60px] px-1 sm:rounded-t-lg md:static z-40 bg-[var(--primary-bg)]  border-b border-[var(--primary-border)] shadow-custom">
        <div className="relative flex items-center">
          <button
            onClick={() => setSidebarOpen(true)}
            className="absolute left-0 z-20 bg-[var(--primary-bg)] ps-3 pe-2 transition md:hidden"
          >
            <FaBars className="text-[var(--primary-text)] h-5 w-5" />
          </button>

          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="hidden md:flex absolute cursor-pointer left-0 z-10 p-2 bg-white shadow-md rounded-full hover:bg-gray-100 transition"
            >
              <FaChevronLeft className="text-gray-600" />
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto hide-scrollbar px-14 md:px-16 "
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`relative py-3 px-3 whitespace-nowrap cursor-pointer font-medium sub-heading-1 transition-colors duration-200 ${activeTab === tab.id
                  ? "text-[var(--text-hover-color)] bg-[var(--secondary-bg)] "
                  : "text-[var(--primary-text)] hover:text-[var(--secondary-text)]"
                  }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[var(--text-hover-color)] rounded-custom"></span>
                )}
              </button>
            ))}
          </div>

          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="hidden md:flex absolute cursor-pointer right-0 z-10 p-2 bg-white shadow-md rounded-full hover:bg-gray-100 transition"
            >
              <FaChevronRight className="text-gray-600" />
            </button>
          )}
        </div>
      </div>

      <div className="bg-[var(--primary-bg)] sm:rounded-b-lg sm:shadow-custom overflow-hidden">
        {activeTab === "overview1" && <Overview />}
        {activeTab === "gallery" && <Gallery />}
        {activeTab === "accomodation" && <Accomodation />}
        {activeTab === "amenities" && <Amenities />}
        {activeTab === "workinghours" && <WorkingHours />}
        {activeTab === "teachers" && <Teachers />}
        {activeTab === "faqs" && <Faqs />}
        {activeTab === "reviews" && <Reviews />}
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setSidebarOpen(false)}
          ></div>
          <div className="relative bg-[var(--secondary-bg)] text-[var(--secondary-text)] w-full p-6 overflow-y-auto">
            <button
              onClick={() => setSidebarOpen(false)}
              className="absolute top-3 right-3 p-2 rounded-md text-[var(--text-hover-color)] hover:bg-[var(--primary-icon-l)]"
            >
              <FaTimes />
            </button>

            <h3 className="sub-heading font-semibold mb-4">Menu</h3>
            <nav className="space-y-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`block w-full text-left py-2 px-3 rounded-custom font-medium transition-colors ${activeTab === tab.id
                    ? "bg-[var(--primary-icon-l)] text-[var(--text-hover-color)]"
                    : "text-[var(--primary-text)] hover:bg-[var(--primary-icon-l)]"
                    }`}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setSidebarOpen(false);
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      <div className="mt-6">
        <EnquiryForm />
      </div>
    </div>
  );
};

export default CourseDetails;
