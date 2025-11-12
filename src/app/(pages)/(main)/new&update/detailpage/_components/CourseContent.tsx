"use client";

import React from 'react';
import { Course } from '@/lib/types'; // Path to your types
import { ReadMore } from '@/components/ui/ReadMore'; // Path to your ReadMore component
import { CheckCircle2 } from '@/components/ui/icons'; // Path to your icons

type Props = {
  course: Course;
};

export function CourseContent({ course }: Props) {
  return (
    <div>
      {/* --- Image Header --- */}
      <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-6">
        <img
          src={course.image || 'https://placehold.co/1200x480/E0E7FF/4338CA?text=Course+Image'}
          alt={course.title}
          onError={(e) => (e.currentTarget.src = 'https://placehold.co/1200x480/E0E7FF/4338CA?text=Image+Error')}
          className="w-full h-64 md:h-96 object-cover"
        />
      </div>
      
      {/* --- Content Body --- */}
      <div className="bg-white rounded-lg shadow-xl overflow-hidden p-6 md:p-10">
        {/* --- About Section --- */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About this training</h2>
        
        {/* --- ReadMore Component in action --- */}
        <ReadMore text={course.description} maxLength={350} />

        {/* --- Highlights Section --- */}
        <div className="mt-8 border-t border-gray-200 pt-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">What You Will Achieve</h3>
          <ul className="space-y-3">
            {course.features.map((feature: string, i: number) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-teal-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* --- Requirements Section --- */}
        <div className="mt-8 border-t border-gray-200 pt-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Requirements</h3>
          <ul className="space-y-3">
            {course.requirement.map((requirement: string, i: number) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-teal-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{requirement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}