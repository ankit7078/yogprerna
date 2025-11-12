"use client";

import React from 'react';
// We only need CheckCircle2 here now
import { Award, BookOpen, Zap, CheckCircle2 } from 'lucide-react';
// Import the new component
import { ReadMore } from '../../../../../../ui/ReadMore'; // <-- Adjust this path as needed

// type Course = { ... };

type Props = {
  course: any; // Using 'any' for this example
};


export function CourseContent({ course }: Props) {

  return (
    <div>
      <div>
        <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-6">
          {/* --- Image --- */}
          <img
            src={course.image || 'https://placehold.co/1200x480/E0E7FF/4338CA?text=Course+Image'}
            alt={course.title}
            onError={(e) => (e.currentTarget.src = 'https://placehold.co/1200x480/E0E7FF/4338CA?text=Image+Error')}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-xl overflow-hidden p-6 md:p-10">
        {/* --- About Section --- */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About this training</h2>

        {/* --- REPLACED SECTION --- */}
        {/* Just use the ReadMore component here */}
        {/* You can optionally pass the maxLength prop */}
        <ReadMore text={course.description} maxLength={350} />
        {/* --- END REPLACED SECTION --- */}


        {/* --- Highlights Section --- */}
        <div className="mt-8 border-t border-gray-200 pt-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">What Will You Achieve</h3>
          <ul className="space-y-3">
            {course.features.map((feature: string, i: number) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-teal-600 flex-shrink-0" />
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
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-teal-600 flex-shrink-0" />
                <span className="text-gray-700">{requirement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}