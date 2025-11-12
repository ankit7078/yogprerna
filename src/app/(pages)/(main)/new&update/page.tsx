"use client";

import React from "react";
import {
  ChevronLeft as ChevronLeftIcon,
  Calendar,
  MapPin,
  Users,
  Award,
} from "lucide-react";

//=================================================================
// 1. DATA AND TYPES
//=================================================================

type Course = {
  id: string;
  slug: string;
  title: string;
  image: string;
  instructorName: string;
  durationDays: number;
  courseLevel: "Beginner" | "Intermediate" | "Advanced";
  courseType: "Online" | "In-Person";
  certificationType: "Certified" | "Completion";
  description: string;
  features: string[];
  requirement: string[];
};

export const coursesData: Course[] = [
  {
    id: "1",
    slug: "200-hour-yoga-ttc",
    title: "200 Hour Yoga Teacher Training",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
    instructorName: "Swami Anand",
    durationDays: 28,
    courseLevel: "Beginner",
    courseType: "In-Person",
    certificationType: "Certified",
    description:
      "Embark on a transformative journey with our 200-Hour Yoga Teacher Training. This comprehensive program is designed for aspiring yoga teachers and dedicated practitioners seeking to deepen their understanding of yoga. Our curriculum covers asana, pranayama, meditation, philosophy, anatomy, and teaching methodology. You will learn to guide students safely and effectively, finding your unique voice as a teacher in a supportive, immersive environment. Join us to build a solid foundation for a lifetime of practice and teaching.",
    features: [
      "Master fundamental yoga asanas and alignment.",
      "Understand yoga philosophy and its modern application.",
      "Learn sequencing, cueing, and classroom management.",
      "Receive a Yoga Alliance accredited certification.",
    ],
    requirement: [
      "A minimum of 6 months of consistent yoga practice.",
      "A genuine interest in yoga philosophy and lifestyle.",
      "An open mind and willingness to learn.",
    ],
  },
  {
    id: "2",
    slug: "meditation-mindfulness-course",
    title: "Meditation & Mindfulness Course",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07568e761?auto=format&fit=crop&w=1200&q=80",
    instructorName: "Anjali Sharma",
    durationDays: 7,
    courseLevel: "Beginner",
    courseType: "Online",
    certificationType: "Completion",
    description:
      "Discover the power of stillness. This 7-day online course will guide you through various meditation and mindfulness techniques to help reduce stress, improve focus, and cultivate inner peace. Each day introduces a new practice, from breath awareness to loving-kindness meditation, suitable for all levels.",
    features: [
      "Learn 5+ meditation techniques.",
      "Develop a consistent daily practice.",
      "Reduce stress and anxiety.",
    ],
    requirement: ["No prior experience needed."],
  },
  {
    id: "3",
    slug: "advanced-asana-workshop",
    title: "Advanced Asana Workshop",
    image:
      "https://images.unsplash.com/photo-1593164632555-96f6a85813af?auto=format&fit=crop&w=1200&q=80",
    instructorName: "Rohan Gupta",
    durationDays: 3,
    courseLevel: "Advanced",
    courseType: "In-Person",
    certificationType: "Completion",
    description:
      "Take your practice to the next level. This 3-day intensive workshop focuses on advanced asanas, including inversions, arm balances, and deep backbends. We will explore preparatory drills, alignment, and safe transitions to help you achieve new heights in your practice.",
    features: [
      "Breakdown of complex poses.",
      "Safe inversion and arm balance techniques.",
      "Personalized feedback.",
    ],
    requirement: [
      "At least 2 years of regular yoga practice.",
      "Comfortable with intermediate poses.",
    ],
  },
];

//=================================================================
// 2. COMPONENTS
//=================================================================

const ChevronLeft = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

function StickyBookingCard({ course }: { course: Course }) {
  const info = [
    { icon: Calendar, label: "Duration", value: `${course.durationDays} days` },
    { icon: Users, label: "Level", value: course.courseLevel },
    { icon: MapPin, label: "Type", value: course.courseType },
    { icon: Award, label: "Certificate", value: course.certificationType },
  ];

  return (
    <div className="sticky top-24 mx-auto w-full bg-[var(--primary-bg)] text-[var(--primary-text)] rounded-lg shadow-sm overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-semibold">{course.title}</h2>
        <p className="text-sm opacity-90 mt-1">
          Master your skills with this structured {course.courseType} course.
        </p>
      </div>

      <div className="p-6 pt-0 space-y-5">
        {info.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="flex items-center justify-between border-b border-[var(--primary-border)] pb-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-teal-50 text-teal-600 flex items-center justify-center rounded-full">
                <Icon className="w-4 h-4" />
              </div>
              <span className="font-medium">{label}</span>
            </div>
            <span className="text-sm font-medium">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CourseContent({ course }: { course: Course }) {
  return (
    <div>
      <div className="bg-[var(--primary-bg)] rounded-lg shadow-sm overflow-hidden mb-6">
        <img
          src={
            course.image ||
            "https://placehold.co/1200x480/E0E7FF/4338CA?text=Course+Image"
          }
          alt={course.title}
          onError={(e) =>
          (e.currentTarget.src =
            "https://placehold.co/1200x480/E0E7FF/4338CA?text=Image+Error")
          }
          className="w-full h-64 md:h-99 object-cover"
        />
      </div>

      <div className="bg-[var(--primary-bg)] text-[var(--primary-text)] rounded-lg shadow-sm overflow-hidden p-6 md:p-10">
        <h2 className="text-2xl text-[var(--secondary-text)] font-semibold mb-4">
          About this training
        </h2>

        {/* ✅ Directly show full text here */}
        <p>
          {course.description}
        </p>
      </div>
    </div>
  );
}

function CourseDetailPage({
  course,
  relatedCourses,
  onGoBack,
}: {
  course: Course;
  relatedCourses: Course[];
  onGoBack: () => void;
}) {
  return (
    <div className="min-h-screen bg-[var(--secondary-bg)]  text-[var(--primary-text)]">
      <div className="container mx-auto max-w-7xl p-4 lg:p-8">
        <button
          onClick={onGoBack}
          className="flex items-center gap-1 text-[var(--text-hover-color)] hover:text-[var(--primary-text-h)] font-medium mb-4 group"
        >
          <ChevronLeft
            size={16}
            className="transition-transform mt-1 group-hover:-translate-x-1"
          />
          Back to all courses
        </button>

        <div className="block lg:hidden my-6">
          <StickyBookingCard course={course} />
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
            <CourseContent course={course} />
          </div>

          <div className="hidden lg:block lg:col-span-1">
            <div className="flex flex-col gap-8">
              <StickyBookingCard course={course} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//=================================================================
// 4. MAIN APP COMPONENT
//=================================================================

export default function App() {
  const mainCourse = coursesData[0];
  const relatedCourses = coursesData.slice(1);

  const handleGoBack = () => {
    alert("Going back to all courses!");
  };

  return (
    <CourseDetailPage
      course={mainCourse}
      relatedCourses={relatedCourses}
      onGoBack={handleGoBack}
    />
  );
}
