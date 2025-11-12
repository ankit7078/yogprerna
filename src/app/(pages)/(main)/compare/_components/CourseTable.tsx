"use client";

import { PropertyProps } from "@/types/types";
import Image from "next/image";
import { useState, useMemo, useEffect } from "react";
import {
  LuChevronDown,
  LuBookOpen,
  LuGraduationCap,
  LuBook,
  LuPen,
  LuClock,
  LuTarget,
  LuChartBar,
  LuAward,
  LuLaptop,
} from "react-icons/lu";

export default function CourseTable({
  selectedProperties,
}: {
  selectedProperties: PropertyProps[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  const allCourses = useMemo(() => {
    const seen = new Set<string>();
    const courses: { id: string; name: string }[] = [];
    selectedProperties.forEach((prop) => {
      prop.courses?.forEach((course) => {
        if (course?.course_name && !seen.has(course.course_name)) {
          seen.add(course.course_name);
          courses.push({
            id: course.course_name,
            name: course.course_name,
          });
        }
      });
    });
    return courses;
  }, [selectedProperties]);

  const [selectedCourseId, setSelectedCourseId] = useState<string>("");

  useEffect(() => {
    if (!selectedCourseId && allCourses.length > 0) {
      setSelectedCourseId(allCourses[0].id);
    }
  }, [allCourses, selectedCourseId]);

  const courseFields = [
    { key: "Course Name", label: "Course Name", icon: LuBook },
    { key: "Short Name", label: "Short Name", icon: LuPen },
    { key: "Duration", label: "Duration", icon: LuClock },
    { key: "Course Type", label: "Course Type", icon: LuTarget },
    { key: "Course Level", label: "Course Level", icon: LuChartBar },
    { key: "Certification Type", label: "Certification", icon: LuAward },
    { key: "Course Format", label: "Format", icon: LuLaptop },
  ];

  return (
    <div className="bg-[var(--secondary-bg)] shadow-custom border-x border-[var(--primary-border)] overflow-hidden transition-all duration-300">
      <div
        className="text-[var(--primary-text)] bg-[var(--blue-bg)] cursor-pointer sm:px-6 px-2 py-3 transition-all duration-200 relative overflow-hidden"
        onClick={() => setIsOpen(!isOpen)}
      >

        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[var(--secondary-bg)] text-[var(--text-hover-color)] backdrop-blur-sm flex items-center justify-center">
              <LuBookOpen size={16} />
            </div>
            <div className="text-[var(--text-color-primary)]">
              <h2 className="sm:text-lg heading font-bold">
                Course Comparison
              </h2>
              <p>
                Compare courses across {selectedProperties.length} colleges
              </p>
            </div>
          </div>
          <div
            className={`p-2 rounded-full bg-[var(--secondary-bg)] backdrop-blur-sm transition-all duration-300 hover:scale-110 ${isOpen ? "rotate-180" : ""
              }`}
          >
            <LuChevronDown size={16} />
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-500 ease-in-out ${isOpen
          ? "max-h-none opacity-100"
          : "max-h-0 opacity-0 overflow-hidden"
          }`}
      >
        <div className="p-0">
          {allCourses.length > 0 ? (
            <>
              <div className="px-6 py-4 bg-[var(--primary-bg)] text-[var(--secondary-text)] border-b border-[var(--primary-border)]">
                <label className="sub-heading font-semibold mb-1 flex items-center gap-2">
                  <LuGraduationCap size={16} className="text-[var(--text-hover-color)]" />
                  Select Course to Compare:
                </label>

                <div className="relative w-full max-w-md">
                  <select
                    value={selectedCourseId}
                    onChange={(e) => setSelectedCourseId(e.target.value)}
                    className="w-full appearance-none px-4 py-2 text-[var(--primary-text)] border border-[var(--primary-border)] rounded-custom bg-[var(--secondary-bg)] shadow-custom paragraph font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--primary-border)] focus:border-[var(--primary-border)] pr-10"
                  >
                    {allCourses.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.name}
                      </option>
                    ))}
                  </select>
                  <LuChevronDown
                    size={18}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-hover-color)] pointer-events-none"
                  />
                </div>
              </div>

              <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[var(--primary-bg)] text-[var(--primary-text)] border-b border-[var(--primary-border)]">
                      <th className="p-4 font-semibold border-r border-[var(--primary-border)] min-w-[160px] sub-heading">
                        Course Details
                      </th>
                      {selectedProperties.map((prop, idx) => (
                        <th
                          key={idx}
                          className="text-center p-4 font-semibold border-r border-[var(--primary-border)] last:border-r-0 min-w-[200px]"
                        >
                          <div className="flex flex-col items-center">
                            {!prop?.property_logo?.[0] ? (
                              <div className="w-10 h-10 rounded-custom flex items-center justify-center mb-2 shadow-custom">
                                <span className="font-bold paragraph">
                                  {prop.property_name.charAt(0)}
                                </span>
                              </div>
                            ) : (
                              <div className="relative w-14 h-14 rounded-custom shadow-custom transition-all duration-300 group-hover:scale-105 mb-3 overflow-hidden">
                                <Image
                                  src={`${prop.property_logo?.[0]}`}
                                  alt={prop.property_name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            )}
                            <span className="paragraph font-medium break-words text-center leading-tight">
                              {prop.property_name}
                            </span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--primary-border)]">
                    {courseFields.map((field, idx) => (
                      <tr
                        key={idx}
                        className="transition-colors duration-200"
                      >
                        <td className="font-semibold p-4 text-[var(--primary-text)] border-r border-[var(--primary-border)]">
                          <div className="flex items-center gap-3">
                            <div className="w-7 h-7 bg-[var(--primary-icon-l)] text-[var(--text-hover-color)] rounded-custom flex items-center justify-center shadow-custom flex-shrink-0">
                              <span className="paragraph">
                                {<field.icon />}
                              </span>
                            </div>
                            <span className="heading-sm break-words">
                              {field.label}
                            </span>
                          </div>
                        </td>
                        {selectedProperties.map((prop, pIdx) => {
                          const course = prop.courses?.find(
                            (c) => c.course_name === selectedCourseId
                          );
                          let displayValue = "Not Available";
                          if (course) {
                            switch (field.key) {
                              case "Course Name":
                                displayValue = course.course_name || "N/A";
                                break;
                              case "Short Name":
                                displayValue =
                                  course.course_short_name || "N/A";
                                break;
                              case "Duration":
                                displayValue = course.duration || "N/A";
                                break;
                              case "Course Type":
                                displayValue = course.course_type || "N/A";
                                break;
                              case "Course Level":
                                displayValue = course.course_level || "N/A";
                                break;
                              case "Certification Type":
                                displayValue =
                                  course.certification_type || "N/A";
                                break;
                              case "Course Format":
                                displayValue = course.course_format || "N/A";
                                break;
                            }
                          }
                          return (
                            <td
                              key={pIdx}
                              className="p-4 text-center border-r border-[var(--primary-border)] last:border-r-0"
                            >
                              <span
                                className={`inline-block px-3 py-1 rounded-custom paragraph font-medium shadow-custom break-words ${displayValue === "Not Available" ||
                                  displayValue === "N/A"
                                  ? "bg-[var(--primary-icon-l)] text-[var(--text-hover-color)]"
                                  : "bg-[var(--primary-icon-l)] text-[var(--text-hover-color)]"
                                  }`}
                              >
                                {displayValue}
                              </span>
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <div className="text-center py-12 bg-[var(--primary-bg)] text-[var(--primary-text)]">
              <div className="w-16 h-16  rounded-full flex items-center justify-center mx-auto mb-4 shadow-custom">
                <LuBookOpen size={24} />
              </div>
              <h3 className="sub-heading font-semibold mb-2">
                No Courses Available
              </h3>
              <p>
                No courses available for comparison
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}