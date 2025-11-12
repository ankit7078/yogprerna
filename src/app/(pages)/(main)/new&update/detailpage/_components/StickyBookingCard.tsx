"use client";

import React from "react";
import { Course } from "@/lib/types"; // Path to your types
import { Calendar, MapPin, Users, Award } from "@/components/ui/icons"; // Path to your icons

type Props = { course: Course };

export function StickyBookingCard({ course }: Props) {
  const info = [
    { icon: Calendar, label: "Duration", value: `${course.durationDays} days` },
    { icon: Users, label: "Level", value: course.courseLevel },
    { icon: MapPin, label: "Type", value: course.courseType },
    { icon: Award, label: "Certificate", value: course.certificationType },
  ];

  return (
    <div className="sticky top-24 mx-auto w-full bg-white rounded-lg border border-gray-100 shadow-xl overflow-hidden">
      {/* Header */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold">{course.title}</h2>
        <p className="text-sm opacity-90 mt-1">
          Master your skills with this structured {course.courseType} course.
        </p>
      </div>

      {/* Details */}
      <div className="p-6 pt-0 space-y-5">
        {info.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="flex items-center justify-between border-b border-gray-100 pb-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-teal-50 text-teal-600 flex items-center justify-center rounded-full">
                <Icon className="w-4 h-4" />
              </div>
              <span className="font-medium text-gray-700">{label}</span>
            </div>
            <span className="text-gray-600 text-sm font-medium">{value}</span>
          </div>
        ))}
      </div>

      {/* Footer Button (Example) */}
      <div className="p-6 bg-gray-50">
          <button className="w-full bg-teal-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-teal-700 transition-colors">
            Book Now
          </button>
      </div>
    </div>
  );
}