"use client";

import React from 'react';
import { Course } from '@/types';
import { MapPin, Clock, Award, BookOpen, Gift, ArrowRight } from './icons';
import { ButtonGroup } from '@/common/ButtonGroup';

type Props = {
  course: Course;
  onSelectCourse: (slug: string) => void;
};

export default function CourseCard({ course, onSelectCourse }: Props) {
  return (
    <div
      className="bg-[var(--primary-bg)] text-[var(--primary-text)] 
    rounded-custom shadow-custom overflow-hidden transition-all duration-300 flex flex-col md:flex-row"
    >

      <div className="relative w-full md:w-2/5 lg:w-1/3 flex-shrink-0">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-56 md:h-full object-cover"
        />
      </div>

      <div className="w-full md:w-3/5 lg:w-2/3 p-5 flex flex-col">
        <div className="flex justify-between items-start">
          <h2
            className="heading font-bold text-[var(--primary-text)] mb-3 hover:text-[var(--text-hover-color)] transition-colors cursor-pointer"
            onClick={() => onSelectCourse(course.slug)}
          >
            {course.title}
          </h2>
          <div className="flex-shrink-0 flex flex-col items-end gap-2 px-2 py-1 rounded-custom text-[var(--text-color-primary)] bg-[var(--text-hover-color)] paragraph mb-2 ml-4">
            <span className="flex items-center gap-1">
              <Clock size={12} className="" />
              {course.durationDays} days
            </span>
          </div>
        </div>

        <div className="flex-grow space-y-2 mb-4">
          <p className="flex items-center gap-1">
            <span className='text-[var(--primary-text-h)]'><MapPin size={14} /></span>
            {course.location}
          </p>
          <p className="flex items-center gap-1 ">
            <span className='text-[var(--primary-text-h)]'><Award size={14} /></span>
            {course.courseLevel}
          </p>
          <p className="flex items-center gap-1">
            <span className='text-[var(--primary-text-h)]'><BookOpen size={14} /></span>
            {course.courseType}
          </p>
          <p className="flex items-center gap-1">
            <span className='text-[var(--primary-text-h)]'><Gift size={14} /></span>
            {course.certificationType}
          </p>
        </div>

        {/* Bottom part: View Details Button */}
        <ButtonGroup
          label='View Details'
          onClick={() => onSelectCourse(course.slug)}
          className='w-full mx-auto'
        />

      </div>
    </div>
  );
}