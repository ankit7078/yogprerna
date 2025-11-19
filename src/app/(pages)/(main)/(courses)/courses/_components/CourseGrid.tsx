"use client";

import React from 'react';
import { Course } from '@/types';
import CourseCard from './CourseCard';
import { Search } from 'lucide-react';

type Props = {
  courses: Course[];
  onSelectCourse: (slug: string) => void;
};

export default function CourseGrid({ courses, onSelectCourse }: Props) {
  if (courses.length === 0) {
    return (
      <div className="text-center py-10 bg-[var(--primary-bg)] rounded-custom shadow-custom">
        <div className="w-24 h-24 bg-[var(--secondary-bg)] rounded-full flex items-center justify-center mx-auto mb-4">
          <Search className="h-12 w-12 text-[var(--text-hover-color)]" />
        </div>
        <h3 className="heading font-medium">No courses found</h3>
        <p className="text-[var(--primary-text)] mt-1">Try adjusting your filters or search term.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 pb-10">
      {courses.map(course => (
        <CourseCard
          key={course.id}
          course={course}
          onSelectCourse={onSelectCourse}
        />
      ))}
    </div>
  );
}