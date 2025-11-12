"use client";

import React from 'react';
import { Course } from '@/types';

type Props = {
  course: Course;
};

export function CourseHeader({ course }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-6">
      {/* --- Image --- */}
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-64 md:h-96 object-cover"
      />
    </div>
  );
}