import { Course } from './types';

// --- Mock Data ---
export const coursesData: Course[] = [
  {
    id: '1',
    slug: '200-hour-yoga-ttc',
    title: '200 Hour Yoga Teacher Training',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    instructorName: 'Swami Anand',
    durationDays: 28,
    courseLevel: 'Beginner',
    courseType: 'In-Person',
    certificationType: 'Certified',
    description: 'Embark on a transformative journey with our 200-Hour Yoga Teacher Training. This comprehensive program is designed for aspiring yoga teachers and dedicated practitioners seeking to deepen their understanding of yoga. Our curriculum covers asana, pranayama, meditation, philosophy, anatomy, and teaching methodology. You will learn to guide students safely and effectively, finding your unique voice as a teacher in a supportive, immersive environment. Join us to build a solid foundation for a lifetime of practice and teaching.',
    features: [
      'Master fundamental yoga asanas and alignment.',
      'Understand yoga philosophy and its modern application.',
      'Learn sequencing, cueing, and classroom management.',
      'Receive a Yoga Alliance accredited certification.',
    ],
    requirement: [
      'A minimum of 6 months of consistent yoga practice.',
      'A genuine interest in yoga philosophy and lifestyle.',
      'An open mind and willingness to learn.',
    ],
  },
  {
    id: '2',
    slug: 'meditation-mindfulness-course',
    title: 'Meditation & Mindfulness Course',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07568e761?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    instructorName: 'Anjali Sharma',
    durationDays: 7,
    courseLevel: 'Beginner',
    courseType: 'Online',
    certificationType: 'Completion',
    description: 'Discover the power of stillness. This 7-day online course will guide you through various meditation and mindfulness techniques to help reduce stress, improve focus, and cultivate inner peace. Each day introduces a new practice, from breath awareness to loving-kindness meditation, suitable for all levels.',
    features: ['Learn 5+ meditation techniques.', 'Develop a consistent daily practice.', 'Reduce stress and anxiety.'],
    requirement: ['No prior experience needed.'],
  },
  {
    id: '3',
    slug: 'advanced-asana-workshop',
    title: 'Advanced Asana Workshop',
    image: 'https://images.unsplash.com/photo-1593164632555-96f6a85813af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    instructorName: 'Rohan Gupta',
    durationDays: 3,
    courseLevel: 'Advanced',
    courseType: 'In-Person',
    certificationType: 'Completion',
    description: 'Take your practice to the next level. This 3-day intensive workshop focuses on advanced asanas, including inversions, arm balances, and deep backbends. We will explore preparatory drills, alignment, and safe transitions to help you achieve new heights in your practice.',
    features: ['Breakdown of complex poses.', 'Safe inversion and arm balance techniques.', 'Personalized feedback.'],
    requirement: ['At least 2 years of regular yoga practice.', 'Comfortable with intermediate poses.'],
  },
];

// --- Data Fetching Functions ---

/**
 * Simulates fetching a single course by its slug.
 */
export const getCourseBySlug = (slug: string): Course | undefined => {
  return coursesData.find((course) => course.slug === slug);
};

/**
 * Simulates fetching all courses *except* the currently viewed one.
 */
export const getRelatedCourses = (currentSlug: string): Course[] => {
  return coursesData.filter((course) => course.slug !== currentSlug);
};