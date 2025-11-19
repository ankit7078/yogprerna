"use client";
import { ButtonGroup } from "@/common/ButtonGroup";
import { FaGraduationCap, FaClock, FaChartLine } from "react-icons/fa";

const courses = [
  {
    title: "M.Sc. in Yoga",
    category: "Academic Degrees",
    duration: "2 years",
    level: "Intermediate",
    image: "/img/courses/courses-3.jpeg",
  },
  {
    title: "Master's Degree in Yoga",
    category: "Academic Degrees",
    duration: "2 years",
    level: "Advanced",
    image: "/img/courses/courses-3.jpeg",
  },
  {
    title: "Diploma in Yoga Therapy",
    category: "Diploma Courses",
    duration: "1 year",
    level: "Beginner",
    image: "/img/courses/courses-3.jpeg",
  },
  {
    title: "Diploma in Yoga Therapy",
    category: "Diploma Courses",
    duration: "1 year",
    level: "Beginner",
    image: "/img/courses/courses-3.jpeg",
  },
];

export default function YogaCoursesPage() {
  return ( 
    <section className="p-5">
      {/* Course Grid */}
      <div className="max-w-6xl mx-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-2 ">
        {courses.map((course, index) => (
          <div
            key={index}
            className="group bg-white rounded-custom shadow-custom bg-[var(--secondary-bg)] transition-all duration-500 overflow-hidden"
          >
            {/* Image */}
            <div className="relative w-full h-52 overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
              />

              {/* Category Badge */}
              <div className="absolute bottom-3 left-3 bg-[var(--text-hover-color)] text-[var(--text-color-primary)] text-xs px-3 py-1 rounded-full shadow-custom">
                {course.category}
              </div>
            </div>

            {/* Content */}
            <div className="p-5 shadow-custom">
              <h3 className="sub-heading font-semibold group-hover:text-[var(--text-hover-color)] mb-1 transition-colors">
                {course.title}
              </h3>

              <ul className="text-[var(--primary-text)]">
                <li className="flex items-center gap-3">
                  <FaGraduationCap className="text-[var(--text-hover-color)] w-3 h-3" />
                  <span>{course.category}</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaClock className="text-[var(--text-hover-color)] w-3 h-3" />
                  <span>{course.duration}</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaChartLine className="text-[var(--text-hover-color)] w-3 h-3" />
                  <span>{course.level}</span>
                </li>
              </ul>

              {/* Button */}
              <ButtonGroup
              label="View Details"
              className="w-full mt-3"
              />
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
