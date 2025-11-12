import React from 'react';
import { getCourseBySlug, getRelatedCourses, coursesData } from '@/lib/data'; // Import data functions
import CourseDetailPage from './_components/CourseDetailPage'; // Import the client component
import { notFound } from 'next/navigation';

// Define the props for the page, which include 'params'
type PageProps = {
  params: {
    slug: string;
  };
};

// This is the main server component for the page
export default function Page({ params }: PageProps) {
  const { slug } = params;

  // 1. Fetch the main course
  const course = getCourseBySlug(slug);

  // 2. If no course is found, show a 404 page
  if (!course) {
    notFound();
  }

  // 3. Fetch related courses
  const relatedCourses = getRelatedCourses(slug);

  // 4. Render the client component and pass the data as props
  return (
    <CourseDetailPage 
      course={course} 
      relatedCourses={relatedCourses} 
    />
  );
}

// (Optional) Generate static pages for all your courses
// This tells Next.js to pre-build a page for each course slug
export async function generateStaticParams() {
  return coursesData.map((course) => ({
    slug: course.slug,
  }));
}