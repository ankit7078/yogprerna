"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import { Course } from '@/types'; // Make sure to import your real type

// --- Placeholder Type ---
// Use your actual 'Course' type from '@/types'
type Course = {
    id: string;
    slug: string;
    title: string;
    imageUrl: string;
    instructorName: string;
    // ... other properties
};
// --- End Placeholder ---

// --- 1. MOCK DATA ADDED ---
// I've added this mock data based on your "Yogprerna" project context.
const MOCK_COURSES: Course[] = [
    {
        id: 'rc-1',
        slug: 'hatha-yoga-foundations',
        title: 'Hatha Yoga Foundations for Beginners',
        // Using placeholder images from unsplash. Replace with your actual paths or URLs.
        imageUrl:
            '/img/courses/courses-1.jpeg',
        instructorName: 'Anjali Sharma',
    },
    {
        id: 'rc-2',
        slug: 'vinyasa-flow-intermediate',
        title: 'Dynamic Vinyasa Flow (Intermediate)',
        imageUrl:
            '/img/courses/courses-1.jpeg',
        instructorName: 'Rohan Gupta',
    },
    {
        id: 'rc-3',
        slug: 'pranayama-meditation',
        title: 'Pranayama & Meditation Techniques',
        imageUrl:
            '/img/courses/courses-1.jpeg',
        instructorName: 'Priya Kulkarni',
    },
    {
        id: 'rc-3',
        slug: 'pranayama-meditation',
        title: 'Pranayama & Meditation Techniques',
        imageUrl:
            '/img/courses/courses-1.jpeg',
        instructorName: 'Priya Kulkarni',
    },
    {
        id: 'rc-3',
        slug: 'pranayama-meditation',
        title: 'Pranayama & Meditation Techniques',
        imageUrl:
            '/img/courses/courses-1.jpeg',
        instructorName: 'Priya Kulkarni',
    },
];
// --- End Mock Data ---

/**
 * A small card item for each related course.
 */
function RelatedCourseItem({ course }: { course: Course }) {
    return (
        <Link
            href={`/courses/${course.slug}`} // Or your correct path
            className="flex items-center gap-4 group p-3 -m-3 hover:bg-gray-100 rounded-lg transition-colors"
        >
            <div className="flex-shrink-0">
                <Image
                    src={course.imageUrl}
                    alt={course.title}
                    width={80}
                    height={60}
                    className="rounded-md object-cover w-20 h-[60px]"
                />
            </div>
            <div className="flex-1">
                <h4 className="font-semibold text-gray-800 group-hover:text-teal-700 text-sm line-clamp-2 leading-snug">
                    {course.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                    {course.instructorName}
                </p>
            </div>
        </Link>
    );
}

/**
 * The main component to display the list of related courses.
 * --- 2. UPDATED TO USE MOCK DATA ---
 * It now uses MOCK_COURSES as a fallback if no 'courses' prop is passed.
 */
export function RelatedCourses({ courses = MOCK_COURSES }: { courses?: Course[] }) {
    // Don't render anything if there are no courses
    if (!courses || courses.length === 0) {
        return null;
    }

    return (
        <div className="bg-white sticky top-10 rounded-xl shadow-lg border border-gray-200/80 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-5">
                Related Courses
            </h3>
            <div className="flex flex-col gap-3">
                {courses.map((course) => (
                    <RelatedCourseItem key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
}