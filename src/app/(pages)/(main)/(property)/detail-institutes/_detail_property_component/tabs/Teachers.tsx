import React from "react";
import { MapPin, Clock } from "lucide-react";

const teachers = [
  {
    name: "Rajeev Kumar Nautiyal",
    role: "Teacher",
    experience: "5 years of experience",
    image:
      "https://yogprerna.com/_next/image?url=https%3A%2F%2Fmedia.yogprerna.com%2F100001%2Fteachers%2Fimg-1746102056312-yogi-rajeev-compressed.webp&w=1920&q=75",
  },
  {
    name: "Ashutosh Mishra",
    role: "Teacher",
    experience: "5 years of experience",
    image:
      "https://yogprerna.com/_next/image?url=https%3A%2F%2Fmedia.yogprerna.com%2F100001%2Fteachers%2Fimg-1746102088416-ashutosh-compressed.webp&w=1920&q=75",
  },
  {
    name: "Ashutosh Mishra",
    role: "Teacher",
    experience: "5 years of experience",
    image:
      "https://yogprerna.com/_next/image?url=https%3A%2F%2Fmedia.yogprerna.com%2F100001%2Fteachers%2Fimg-1746102088416-ashutosh-compressed.webp&w=1920&q=75",
  },
];

export default function TeachersPage() {
  return (
    <section className="p-5 bg-[var(--primary-bg)] text-[var(--primary-text)] w-full ">
      <div className="">
        <h2 className="heading font-bold mb-3">
          Our Expert Teachers
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
        {teachers.map((teacher, index) => (
          <div
            key={index}
            className="bg-[var(--secondary-bg)] rounded-custom shadow-custom overflow-hidden transition-shadow duration-300"
          >
            <img
              src={teacher.image}
              alt={teacher.name}
              className="aspect-[1/1] "
            />

            <div className="p-4">
              <h3 className="sub-heading text-[var(--secondary-text)] font-semibold mb-1">
                {teacher.name}
              </h3>
              <div className="flex items-center paragraph">
                <MapPin className="h-4 w-4 mr-2 text-[var(--text-hover-color)]" />
                {teacher.role}
              </div>
              <div className="flex items-center paragraph">
                <Clock className="h-4 w-4 mr-2 text-[var(--text-hover-color)]" />
                {teacher.experience}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}