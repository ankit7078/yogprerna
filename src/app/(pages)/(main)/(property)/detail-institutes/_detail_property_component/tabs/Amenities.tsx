// app/institutes/[detail]/_detail_property_component/tabs/Amenities.tsx
'use client';
import React, { useState } from "react";
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
  Mandatory: ["Laundry", "Newspaper", "Air Conditioning"],
  "Basic Facilities": ["Free Wifi", "Power Backup", "Wheelchair Accessible"],
  "General Services": ["Room Service", "Security", "Reception"],
  "Yoga Facilities": ["Meditation Hall", "Indoor Yoga Studio"],
  "Common Area": ["Lounge", "Terrace", "Garden"],
  "Outdoor & Recreational": ["Nearby Nature", "Sports"],
  "Food & Drink": ["Restaurant", "Cafe"],
  Transportation: ["Indoor Parking", "Pickup & Drop Service"],
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

  return (
    <div className="">
      <div className="max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr]">
          <div className="bg-gray-50/80 backdrop-blur-sm">
         
            {categories.map((category) => {
              const Icon = categoryIcons[category] || Layers;
              return (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`w-full text-left px-6 py-4 flex justify-between items-center font-medium text-sm md:text-base transition-all duration-300 ${
                    activeTab === category
                      ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-md rounded-r-full"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    {category}
                  </span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      activeTab === category
                        ? "bg-white text-purple-600"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {amenitiesData[category].length}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-sm font-bold text-gray-600 tracking-wide">
                {activeTab}
              </h2>
              <span className="text-sm text-gray-500">
                {amenitiesData[activeTab].length} items
              </span>
            </div>

            <div className="flex flex-col gap-4">
              {(amenitiesData[activeTab as keyof typeof amenitiesData] || []).map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white shadow-xs hover:shadow-sm p-3 rounded-2xl transition transform hover:-translate-y-1"
                >
                  <CheckCircle2 className="text-purple-600 w-6 h-6" />
                  <span className="text-gray-800 font-medium text-lg">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}