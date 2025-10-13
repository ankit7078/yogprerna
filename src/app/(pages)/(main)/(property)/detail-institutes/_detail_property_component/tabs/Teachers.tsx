// app/institutes/[detail]/_detail_property_component/tabs/Teachers.tsx
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
];

export default function TeachersPage() {
  return (
    <section className=" p-6 bg-gray-50 w-full min-h-screen">
      <div className="">
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Our Expert Teachers
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mx-auto">
        {teachers.map((teacher, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-xs overflow-hidden hover:shadow-sm transition-shadow duration-300"
          >
            <img
              src={teacher.image}
              alt={teacher.name}
              className="w-full h-72 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                {teacher.name}
              </h3>
              <div className="flex items-center text-gray-600 mt-3 text-sm">
                <MapPin className="h-4 w-4 mr-2 text-purple-500" />
                {teacher.role}
              </div>
              <div className="flex items-center text-gray-600 mt-3 text-sm">
                <Clock className="h-4 w-4 mr-2 text-purple-500" />
                {teacher.experience}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}