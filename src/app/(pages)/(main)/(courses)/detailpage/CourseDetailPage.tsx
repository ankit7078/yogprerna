"use client";

import React from 'react';
import { ChevronLeft } from '../courses/_components/icons';
import { CourseHeader } from './_components/CourseHeader'; 
import { CourseContent } from './_components/CourseContent';
import { StickyBookingCard } from './_components/StickyBookingCard';
import { RelatedCourses } from './_components/RelatedCourses'; 

type Course = {
  id: string;
  slug: string;
  title: string;
  imageUrl: string;
  instructorName: string;
  };

type Props = {
  course: Course;
  relatedCourses: Course[];
  onGoBack: () => void;
};

export default function CourseDetailPage({
  course,
  relatedCourses, 
  onGoBack,
}: Props) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="container mx-auto max-w-7xl p-4 lg:p-8">
        {/* --- BACK BUTTON --- */}
        <button
          onClick={onGoBack}
          className="flex items-center gap-2 text-teal-600 hover:text-teal-800 font-medium mb-4 group"
        >
          <ChevronLeft
            size={20}
            className="transition-transform group-hover:-translate-x-1"
          />
          Back to all courses
        </button>

        {/* --- MOBILE BOOKING CARD --- */}
        <div className="block lg:hidden my-6">
          <StickyBookingCard course={course} />
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* --- LEFT COLUMN (Content) --- */}
          <div className="lg:col-span-2">
            <CourseContent course={course} />
          </div>

          {/* --- RIGHT COLUMN (Sidebar) --- */}
          <div className="hidden lg:block lg:col-span-1">
            {/* 3. WRAPPER FOR SIDEBAR ITEMS */}
            <div className="flex flex-col gap-8">
              <StickyBookingCard course={course} />
              <RelatedCourses courses={relatedCourses} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}