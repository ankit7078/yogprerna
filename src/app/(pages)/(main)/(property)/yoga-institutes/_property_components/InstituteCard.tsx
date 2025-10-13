import React from "react";
import Link from "next/link";
import { FaMapPin, FaStar, FaAward, FaUser, FaGraduationCap } from "react-icons/fa";

const InstituteCard = ({ institute, isListView }) => {
  // If no institute data is passed, don't render anything.
  if (!institute) {
    return null;
  }

  return (
    <div
      className={`bg-white rounded-2xl shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden border border-purple-100 group cursor-pointer ${
        isListView ? "flex flex-col md:flex-row" : ""
      }`}
    >
      <div
        className={`overflow-hidden ${
          isListView ? "w-full md:w-80 lg:w-96 flex-shrink-0" : ""
        }`}
      >
        <div className={`${isListView ? "h-56 md:h-full" : "h-48 sm:h-56"}`}>
          <img
            src={institute?.image || '/placeholder-image.jpg'} // Fallback image
            alt={institute?.name || 'Yoga Institute'}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
      <div className="p-4 md:p-6 flex-1 flex flex-col">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-3 gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
              {institute?.name || "Unnamed Institute"}
            </h3>
            <div className="flex items-center text-gray-600 text-sm mb-1">
              <FaMapPin className="w-4 h-4 mr-2 flex-shrink-0 text-purple-600" />
              <span className="text-gray-700 leading-relaxed">
                {institute?.location || "Location not specified"}
              </span>
            </div>
            <div className="flex items-center text-gray-700 leading-relaxed text-sm">
              <FaGraduationCap className="w-4 h-4 mr-2 flex-shrink-0 text-purple-600" />
              <span>{institute?.academicType || "N/A"}</span>
            </div>
          </div>
          <div className="flex items-center bg-yellow-50 px-3 py-2 rounded-lg self-start">
            <FaStar className="w-4 h-4 text-yellow-400 mr-1.5" />
            <span className="text-sm font-medium text-gray-700">
              {institute?.rating || "N/A"}/5
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700 leading-relaxed mb-4 flex-grow">
          <div className="flex items-center">
            <FaAward className="w-4 h-4 mr-2 flex-shrink-0 text-purple-600" />
            <span>{institute?.accreditation || "N/A"}</span>
          </div>
          <div className="flex items-center">
            <FaUser className="w-4 h-4 mr-2 flex-shrink-0 text-purple-600" />
            <span>{institute?.students || 0} students</span>
          </div>
        </div>
        <div className="pt-4 mt-auto">
          <Link
            href={`/yoga-institutes/${institute?.id}` || "#"}
            className="w-full block text-center bg-purple-600 text-white py-3 px-4 rounded-xl hover:bg-purple-700 transform hover:scale-[1.02] transition-all duration-200 font-medium text-sm sm:text-base shadow-sm hover:shadow-md"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InstituteCard;