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
    <div className="max-w-6xl  mx-auto">
      {/* ✅ Sticky Tab Bar */}
      <div className="sticky top-[60px] px-1 sm:rounded-t-2xl md:static z-40 bg-[var(--primary-color)]  border-b border-[var(--subprimary-color)] shadow-sm">
        <div className="relative flex items-center">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="absolute left-2 z-20 p-2 bg-gray-100  hover:bg-gray-200 transition md:hidden"
          >
            <FaBars className="text-gray-700" />
          </button>

          {/* Scroll Left Button */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="hidden md:flex absolute cursor-pointer left-0 z-10 p-2 bg-white shadow-md rounded-full hover:bg-gray-100 transition"
            >
              <FaChevronLeft className="text-gray-600" />
            </button>
          )}

          {/* Scrollable Tabs */}
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto hide-scrollbar px-14 md:px-16 "
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`relative py-3 px-3 whitespace-nowrap cursor-pointer font-medium transition-colors duration-200 ${activeTab === tab.id
                    ? "text-[var(--primary-color-2)]"
                    : "text-[var(--subprimary-color)] hover:text-[var(--primary-color-2)]"
                  }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[var(--subprimary-color)] rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* Scroll Right Button */}
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

      {/* ✅ Tab Content */}
      <div className="bg-[var(--primary-color)] sm:rounded-b-2xl sm:shadow-sm overflow-hidden">
        {activeTab === "overview1" && <Overview />}
        {activeTab === "gallery" && <Gallery />}
        {activeTab === "accomodation" && <Accomodation />}
        {activeTab === "amenities" && <Amenities />}
        {activeTab === "workinghours" && <WorkingHours />}
        {activeTab === "teachers" && <Teachers />}
        {activeTab === "faqs" && <Faqs />}
        {activeTab === "reviews" && <Reviews />}
      </div>

      {/* ✅ Sidebar for Mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setSidebarOpen(false)}
          ></div>
          <div className="relative bg-white w-64 p-6 overflow-y-auto">
            <button
              onClick={() => setSidebarOpen(false)}
              className="absolute top-3 right-3 p-2 rounded-md bg-gray-100"
            >
              <FaTimes className="text-gray-700" />
            </button>

            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <nav className="space-y-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`block w-full text-left py-2 px-3 rounded-md font-medium transition-colors ${activeTab === tab.id
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-100"
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

      {/* ✅ Enquiry Form Section */}
      <div className="mt-6">
        <EnquiryForm />
      </div>
    </div>
  );
};

export default CourseDetails;
