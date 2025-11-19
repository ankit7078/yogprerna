'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import {
  CheckCircle2,
  Layers,
  Wifi,
  Utensils,
  Flower2,
  Trees,
  Shield,
  Building2,
  Newspaper,
  Car,
} from "lucide-react";

const amenitiesData: Record<string, string[]> = {
  Mandatory: ["Laundry Service", "Newspaper", "Air Conditioning", "Daily Housekeeping"],
  "Basic Facilities": ["Free Wifi", "Power Backup", "Elevator / Lift", "Wheelchair Accessible"],
  "General Services": ["Room Service", "24/7 Security", "Front Desk", "Concierge"],
  "Yoga Facilities": ["Meditation Hall", "Indoor Yoga Studio", "Outdoor Yoga Deck", "Yoga Props"],
  "Common Area": ["Lounge", "Terrace", "Garden", "Library"],
  "Outdoor & Recreational": ["Nearby Nature Trails", "Cycling", "Bonfire Area"],
  "Food & Drink": ["On-site Restaurant", "Cafeteria", "Room Service Dining"],
  Transportation: ["Indoor Parking", "Airport Pickup & Drop", "Car Rental Service"],
};

const categoryIcons: Record<string, React.ElementType> = {
  Mandatory: Newspaper,
  "Basic Facilities": Wifi,
  "General Services": Shield,
  "Yoga Facilities": Flower2,
  "Common Area": Building2,
  "Outdoor & Recreational": Trees,
  "Food & Drink": Utensils,
  Transportation: Car,
};

export default function AmenitiesPage() {
  const categories = Object.keys(amenitiesData);
  const [activeTab, setActiveTab] = useState(categories[0]);

  const renderCategoryList = (isMobile: boolean = false) => (
    <>
      {categories.map((category) => {

        const isActive = activeTab === category;
        const baseClasses = "flex items-center gap-3 transition-all duration-300 cursor-pointer";
        const mobileClasses = `text-sm font-medium px-4 py-2 rounded-custom whitespace-nowrap ${isActive ? "bg-[var(--text-hover-color)] text-[var(--text-color-primary)] shadow" : "bg-[var(--primary-icon-l)] text-[var(--text-hover-color)] hover:bg-[var(--primary-icon-l)]"
          }`;

        const desktopClasses = `w-full text-left px-6 py-4 paragraph font-semibold border-l-4 ${isActive
          ? "bg-[var(--secondary-icon-l)] text-[var(--text-hover-color)] border-[var(--text-hover-color)]"
          : "border-transparent hover:bg-[var(--secondary-icon-l)] hover:text-[var(--text-hover-color)]"
          }`;

        return (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={clsx(baseClasses, isMobile ? mobileClasses : desktopClasses)}
          >
            {categoryIcons[category] && React.createElement(categoryIcons[category], { className: "text-[var(--text-hover-color)] w-5 h-5 shrink-0" })}
            <span className="flex-grow">{category}</span>
            {!isMobile && (
              <span className={clsx(
                " px-2 py-0.5 rounded-custom paragraph font-bold",
                isActive ? "bg-[var(--text-hover-color)] hover:bg-[var(--text-color-primary)] text-[var(--text-color-primary)]" : "bg-[var(--secondary-icon-l)]"
              )}>
                {amenitiesData[category].length}
              </span>
            )}
          </button>
        );
      })}
    </>
  );

  return (
    <div className="bg-[var(--primary-bg)] text-[var(--primary-text)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr]">
          <div className="md:hidden border-b border-[var(--primary-border)] p-4">
            <div className="flex items-center gap-3 overflow-x-auto pb-2 -mb-2">
              {renderCategoryList(true)}
            </div>
          </div>

          <div className="hidden md:block border-r border-[var(--primary-border)] py-4">
            {renderCategoryList(false)}
          </div>
          <div className="p-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="flex items-baseline justify-between mb-3">
                  <h2 className="sub-heading font-semibold">
                    {activeTab}
                  </h2>
                  <span className="paragraph font-medium">
                    {amenitiesData[activeTab].length} facilities
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-1 gap-4">
                  {(amenitiesData[activeTab] || []).map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 bg-[var(--secondary-bg)] p-3 rounded-custom shadow-custom transition-all duration-300"
                    >
                      <CheckCircle2 className="text-[var(--text-hover-color)] w-5 h-5 shrink-0" />
                      <span className="paragraph" >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}