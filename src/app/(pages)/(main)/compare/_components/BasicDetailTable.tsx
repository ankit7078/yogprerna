import { getAverageRating } from "@/contexts/Callbacks";
import { PropertyProps } from "@/types/types";
import Image from "next/image";
import React, { useState } from "react";
import {
  LuX,
  LuPlus,
  LuStar,
  LuMapPin,
  LuCalendar,
  LuGraduationCap,
  LuBuilding2,
  LuChevronDown,
} from "react-icons/lu";

export default function BasicDetailTable({
  selectedProperties,
  removeProperty,
}: {
  selectedProperties: PropertyProps[];
  removeProperty: (property: PropertyProps) => void;
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-[var(--secondary-bg)] rounded-t-xl shadow-custom border border-[var(--primary-border)] overflow-hidden transition-all duration-300">
      <div
        className="text-[var(--primary-text)] bg-[var(--blue-bg)] cursor-pointer sm:px-6 px-2 py-3 transition-all duration-200 relative overflow-hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="relative z-10 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[var(--secondary-bg)] text-[var(--text-hover-color)]      rounded-full flex items-center justify-center backdrop-blur-sm">
              <LuGraduationCap size={16} />
            </div>
            <div className="text-[var(--text-color-primary)]">
              <h1 className="heading font-bold">
                Basic Comparison
              </h1>
              <p>
                Overview of {selectedProperties.length} selected colleges
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {selectedProperties?.length < 3 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (typeof window !== "undefined") {
                    window.dispatchEvent(new CustomEvent("openCompareModal"));
                  }
                }}
                className="flex items-center gap-2 px-3 py-1 bg-[var(--secondary-bg)] cursor-pointer text-[var(--primary-text)] rounded-custom transition-all duration-200 backdrop-blur-xs hover:scale-105 paragraph"
              >
                <LuPlus size={14} />
                <span className="hidden sm:flex">Add Insitute</span>
              </button>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("deselectAll"));
                }
              }}
              className="flex items-center gap-2 px-3 py-1 bg-[var(--danger-button)] text-[var(--text-color-primary)] cursor-pointer rounded-custom transition-all duration-200 backdrop-blur-sm hover:scale-105 paragraph"
            >
              <LuX size={14} />
              <span className="hidden sm:flex">Deselect All</span>
            </button>
            <div
              className={`p-2 rounded-full bg-[var(--secondary-bg)] backdrop-blur-sm transition-all duration-300 hover:scale-110 ${isOpen ? "rotate-180" : ""
                }`}
            >
              <LuChevronDown size={16} />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-500 ease-in-out ${isOpen
          ? "max-h-none opacity-100"
          : "max-h-0 opacity-0 overflow-hidden"
          }`}
      >
        <div className="w-full overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[var(--primary-bg)] border-b border-[var(--primary-border)]">
                <th className="text-left p-4 font-semibold text-[var(--primary-text)] border-r border-[var(--primary-border)] min-w-[160px] heading-sm"></th>
                {selectedProperties.map((p, i) => (
                  <th
                    key={i}
                    className="text-center p-4 font-semibold text-[var(--primary-text)] border-r border-[var(--primary-border)] last:border-r-0 min-w-[200px]"
                  >
                    <div className="flex flex-col items-center relative">
                      {/* Remove button for individual property */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeProperty(p);
                        }}
                        className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--danger-button)] text-[var(--text-color-primary)] rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110 z-10"
                        title={`Remove ${p.property_name}`}
                      >
                        <LuX size={12} />
                      </button>

                      {!p?.property_logo?.[0] ? (
                        <div className="w-10 h-10 rounded-custom flex items-center justify-center mb-2 shadow-custom">
                          <span className="text-[var(--primary-text)] font-bold text-sm">
                            {p.property_name.charAt(0)}
                          </span>
                        </div>
                      ) : (
                        <div className="relative w-14 h-14 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-105 mb-3 overflow-hidden">
                          <Image
                            src={`${p.property_logo?.[0]}`}
                            alt={p.property_name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <span className="paragraph font-medium leading-tight text-center text-[var(--primary-text)] break-words">
                        {p.property_name}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--primary-border)]">
              {/* Featured Image Row */}
              <tr className="transition-colors duration-200">
                <td className="font-semibold p-4 bg-[var(--primary-bg)] border-r border-[var(--primary-border)]"></td>
                {selectedProperties.map((p, i) => (
                  <td
                    key={i}
                    className="text-center p-4 border-r border-[var(--primary-border)]  last:border-r-0"
                  >
                    <div className="flex justify-center">
                      <div className="relative group w-40 h-24">
                        <div className="relative w-full h-full rounded-custom shadow-custom hover:shadow-md transition-all duration-300 group-hover:scale-105 overflow-hidden">
                          <Image
                            src={
                              p?.featured_image?.[0]
                                ? `${p.featured_image?.[0]}`
                                : "/img/course_banner.png"
                            }
                            alt={p.property_name}
                            fill
                            className="object-cover rounded-custom"
                          />
                        </div>
                        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
                      </div>
                    </div>
                  </td>
                ))}
              </tr>

              <tr className="transition-colors duration-200">
                <td className="font-semibold p-4 text-[var(--primary-text)] bg-[var(--primary-bg)] border-r border-[var(--primary-border)]">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-[var(--primary-icon-l)] text-[var(--text-hover-color)] rounded-custom flex items-center justify-center shadow-custom">
                      <LuGraduationCap size={14} />
                    </div>
                    <span className="heading-sm">Academic Type</span>
                  </div>
                </td>
                {selectedProperties.map((p, i) => (
                  <td
                    key={i}
                    className="text-center p-4 border-r border-[var(--primary-border)] last:border-r-0"
                  >
                    <span className="inline-block px-3 py-1 bg-[var(--primary-icon-l)] text-[var(--text-hover-color)] rounded-custom paragraph font-medium shadow-custom">
                      {p.category || "Not Available"}
                    </span>
                  </td>
                ))}
              </tr>

              <tr className="transition-colors duration-200">
                <td className="font-semibold p-4 text-[var(--primary-text)] bg-[var(--primary-bg)] border-r border-[var(--primary-border)]">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-[var(--primary-icon-l)] text-[var(--text-hover-color)] rounded-custom flex items-center justify-center shadow-custom">
                      <LuBuilding2 size={14} />
                    </div>
                    <span className="heading-sm">Institution Type</span>
                  </div>
                </td>
                {selectedProperties.map((p, i) => (
                  <td
                    key={i}
                    className="text-center p-4 border-r border-[var(--primary-border)] last:border-r-0"
                  >
                    <span className="inline-block px-3 py-1 bg-[var(--primary-icon-l)] text-[var(--text-hover-color)] rounded-custom paragraph font-medium shadow-custom">
                      {p.property_type || "Not Available"}
                    </span>
                  </td>
                ))}
              </tr>

              <tr className="transition-colors duration-200">
                <td className="font-semibold p-4 text-[var(--primary-text)] bg-[var(--primary-bg)] border-r border-[var(--primary-border)]">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-[var(--primary-icon-l)] text-[var(--text-hover-color)] rounded-custom flex items-center justify-center shadow-custom">
                      <LuMapPin size={14} />
                    </div>
                    <span className="heading-sm">City</span>
                  </div>
                </td>
                {selectedProperties.map((p, i) => (
                  <td
                    key={i}
                    className="text-center p-4 border-r border-[var(--primary-border)] last:border-r-0"
                  >
                    <span className="inline-block px-3 py-1 bg-[var(--primary-icon-l)] text-[var(--text-hover-color)] rounded-custom paragraph font-medium shadow-custom">
                      {p.city || "Not Available"}
                    </span>
                  </td>
                ))}
              </tr>

              <tr className="transition-colors duration-200">
                <td className="font-semibold p-4 text-[var(--primary-text)] bg-[var(--primary-bg)] border-r border-[var(--primary-border)]">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-[var(--primary-icon-l)] text-[var(--text-hover-color)] rounded-custom flex items-center justify-center shadow-custom">
                      <LuMapPin size={14} />
                    </div>
                    <span className="heading-sm">State</span>
                  </div>
                </td>
                {selectedProperties.map((p, i) => (
                  <td
                    key={i}
                    className="text-center p-4 border-r border-[var(--primary-border)] last:border-r-0"
                  >
                    <span className="inline-block px-3 py-1 bg-[var(--primary-icon-l)] text-[var(--text-hover-color)] rounded-custom paragraph font-medium shadow-custom">
                      {p.state || "Not Available"}
                    </span>
                  </td>
                ))}
              </tr>

              <tr className="transition-colors duration-200">
                <td className="font-semibold p-4 text-[var(--primary-text)] bg-[var(--primary-bg)] border-r border-[var(--primary-border)]">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-[var(--primary-icon-l)] text-[var(--text-hover-color)] rounded-custom flex items-center justify-center shadow-custom">
                      <LuMapPin size={14} />
                    </div>
                    <span className="heading-sm">Country</span>
                  </div>
                </td>
                {selectedProperties.map((p, i) => (
                  <td
                    key={i}
                    className="text-center p-4 border-r border-[var(--primary-border)] last:border-r-0"
                  >
                    <span className="inline-block px-3 py-1 bg-[var(--primary-icon-l)] text-[var(--text-hover-color)] rounded-lg paragraph font-medium shadow-sm">
                      {p.country || "Not Available"}
                    </span>
                  </td>
                ))}
              </tr>

              <tr className="transition-colors duration-200">
                <td className="font-semibold p-4  text-[var(--primary-text)] bg-[var(--primary-bg)] border-r border-[var(--primary-border)]">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-[var(--primary-icon-l)] text-[var(--text-hover-color)] rounded-custom flex items-center justify-center shadow-custom">
                      <LuStar size={14} />
                    </div>
                    <span className="heading-sm">Average Rating</span>
                  </div>
                </td>
                {selectedProperties.map((p, i) => (
                  <td
                    key={i}
                    className="text-center p-4 border-r border-[var(--primary-border)] last:border-r-0"
                  >
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[var(--primary-icon-l)] text-[var(--text-hover-color)] rounded-custom shadow-custom">
                      <LuStar
                        size={14}
                        className="text-[var(--warning-color)] fill-current"
                      />
                      <span className="font-medium paragraph">
                        {getAverageRating(p.reviews)}/5
                      </span>
                    </div>
                  </td>
                ))}
              </tr>

              <tr className="transition-colors duration-200">
                <td className="font-semibold p-4 bg-[var(--primary-bg)] text-[var(--primary-text)] border-r border-[var(--primary-border)]">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-[var(--primary-icon-l)] text-[var(--text-hover-color)] rounded-custom flex items-center justify-center shadow-custom">
                      <LuCalendar size={14} />
                    </div>
                    <span className="heading-sm">Established</span>
                  </div>
                </td>
                {selectedProperties.map((p, i) => (
                  <td
                    key={i}
                    className="text-center p-4 border-r border-[var(--primary-border)] last:border-r-0"
                  >
                    <span className="inline-block px-3 py-1 bg-[var(--primary-icon-l)] text-[var(--text-hover-color)] rounded-custom paragraph font-medium shadow-custom">
                      {p.est_year || "Not Available"}
                    </span>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}