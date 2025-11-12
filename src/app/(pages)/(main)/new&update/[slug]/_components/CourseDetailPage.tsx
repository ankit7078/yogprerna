"use client";

import React from 'react';
import { Course } from '@/lib/types';
import { ChevronLeft } from '@/components/ui/icons';
import { CourseContent } from './CourseContent';
import { StickyBookingCard } from './StickyBookingCard';
import { RelatedCourses } from './RelatedCourses';
import { useRouter } from 'next/navigation'; // Import Next.js router

type Props = {
  course: Course;
  relatedCourses: Course[];
};

export default function CourseDetailPage({ course, relatedCourses }: Props) {
  const router = useRouter();

  // Use the router to navigate back
  const handleGoBack = () => {
    router.push('/courses'); // Or use router.back()
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="container mx-auto max-w-7xl p-4 lg:p-8">
        
        {/* --- BACK BUTTON --- */}
        <button
          onClick={handleGoBack} // Use the new handler
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