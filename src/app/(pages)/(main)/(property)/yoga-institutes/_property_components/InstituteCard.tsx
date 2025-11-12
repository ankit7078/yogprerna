import React from "react";
import Link from "next/link";
import { FaMapPin, FaStar, FaAward, FaUser, FaGraduationCap } from "react-icons/fa";
import { ButtonGroup } from "@/common/ButtonGroup";

const InstituteCard = ({ institute, isListView }) => {
  if (!institute) {
    return null;
  }

  return (
    <div
      className={`bg-[var(--primary-bg)] rounded-custom shadow-custom transition-all duration-300 overflow-hidden group cursor-pointer ${isListView ? "flex flex-col md:flex-row" : ""
        }`}
    >
      <div
        className={`overflow-hidden ${isListView ? "w-full md:w-80 lg:w-96 flex-shrink-0" : ""
          }`}
      >
        <div className={`${isListView ? "h-56 md:h-full" : "h-48 sm:h-56"}`}>
          <img
            src={institute?.image || '/placeholder-image.jpg'}
            alt={institute?.name || 'Yoga Institute'}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
      <div className="p-5 md:p-6 flex-1 flex flex-col">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-1 gap-2">
          <div className="flex-1 min-w-0">
            <h2 className="sub-heading font-semibold mb-2 hover:text-[var(--text-hover-color)] line-clamp-2">
              {institute?.name || "Unnamed Institute"}
            </h2>
            <div className="flex items-center space-x-1">
              <FaMapPin className="w-4 h-4  flex-shrink-0 text-[var(--text-hover-color)]" />
              <p>
                {institute?.location || "Location not specified"}
              </p>
            </div>
            <div className="flex items-center space-x-1 ">
              <FaGraduationCap className="w-4 h-4  flex-shrink-0 text-[var(--text-hover-color)]" />
              <p>{institute?.academicType || "N/A"}</p>
            </div>
          </div>
          <div className="flex items-center bg-[var(--warning-color-l)] px-3 py-1 space-x-1 rounded-custom self-start">
            <FaStar className="w-4 h-4 text-[var(--warning-color)]" />
            <p className="font-medium">
              {institute?.rating || "N/A"}/5
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 leading-relaxed flex-grow">
          <div className="flex items-center space-x-1">
            <FaAward className="w-4 h-4 mr-2 flex-shrink-0 text-[var(--text-hover-color)]" />
            <p>{institute?.accreditation || "N/A"}</p>
          </div>
          <div className="flex items-center space-x-1">
            <FaUser className="w-4 h-4 flex-shrink-0 text-[var(--text-hover-color)]" />
            <p>{institute?.students || 0} students</p>
          </div>
        </div>
        <div className="pt-4 mt-auto">
          <ButtonGroup
            label="View Details"
            href={`/yoga-institutes/${institute?.id}` || "#"}
            className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default InstituteCard;