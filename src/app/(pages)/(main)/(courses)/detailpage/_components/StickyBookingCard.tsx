"use client";

import React from "react";
import { Calendar, MapPin, Users, Award } from "lucide-react";
import { Course } from "@/types";

type Props = { course: Course };

export function StickyBookingCard({ course }: Props) {
  const info = [
    { icon: Calendar, label: "Duration", value: `${course.durationDays} days` },
    { icon: Users, label: "Level", value: course.courseLevel },
    { icon: MapPin, label: "Type", value: course.courseType },
    { icon: Award, label: "Certificate", value: course.certificationType },
  ];

  return (
    <div className=" mx-auto w-full bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-500 overflow-hidden">
      {/* Header */}
      <div className=" p-6">
        <h2 className="text-2xl font-semibold">{course.title}</h2>
        <p className="text-sm opacity-90 mt-1">
          Master your skills with this structured {course.courseType} course.
        </p>
      </div>

      {/* Details */}
      <div className="p-6 py-1 space-y-5">
        {info.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="flex items-center justify-between border-b border-gray-100 pb-2"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-blue-50 text-blue-500 flex items-center justify-center rounded-full">
                <Icon className="w-4 h-4" />
              </div>
              <span className="font-medium text-gray-700">{label}</span>
            </div>
            <span className="text-gray-600 text-sm">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
