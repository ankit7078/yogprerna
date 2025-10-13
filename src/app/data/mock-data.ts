import {
  AdminProps,
  BlogCategoryProps,
  BlogsProps,
  BlogTagProps,
} from "../../types/types";

// --- MOCK AUTHORS ---
export const mockUsers: AdminProps[] = [
  {
    uniqueId: 101,
    name: "Aarav Sharma",
    profile: ["/img/blog-img/blog-1.png"],
  },
];

// --- MOCK CATEGORIES ---
export const mockCategories: BlogCategoryProps[] = [
  { uniqueId: 1, blog_category: "Yoga Poses" },
  { uniqueId: 2, blog_category: "Meditation" },
  { uniqueId: 3, blog_category: "Wellness" },
  { uniqueId: 4, blog_category: "Pranayama" },
];

// --- MOCK TAGS ---
export const mockTags: BlogTagProps[] = [
  { uniqueId: 11, blog_tag: "Dhyana" },
  { uniqueId: 12, blog_tag: "Vinyasa" },
  { uniqueId: 13, blog_tag: "Warrior Pose" },
  { uniqueId: 14, blog_tag: "Breathing Exercises" },
  { uniqueId: 15, blog_tag: "Home Practice" },
  { uniqueId: 16, blog_tag: "Restorative" },
  { uniqueId: 17, blog_tag: "Mindfulness" },
];

// --- MOCK BLOG POSTS ---
// CORRECTED: Image paths now correctly start from the root, omitting "".
export const mockBlogs: BlogsProps[] = [
  {
    uniqueId: 1,
    title: "Dhyana Yoga – The Ultimate Guide To Dhyana Benefits",
    blog: "<p>Meditation is a practice for training attention and awareness. <strong>Discover how even a few minutes a day can transform your mindset.</strong></p><p>We'll explore simple techniques like focusing on your breath and observing your thoughts without judgment. This practice can reduce stress, improve focus, and promote emotional health.</p>",
    featured_image: ["/img/blog-img/blog-1.png"],
    author: 101, // Aarav Sharma
    category: [2, 3], // Meditation, Wellness
    tags: [11, 17], // Dhyana, Mindfulness
    createdAt: "2025-10-09T10:00:00Z",
  },
  {
    uniqueId: 2,
    title: "The Power of Vinyasa: Flowing with Breath",
    blog: "<p>Vinyasa yoga is a dynamic practice that links movement and breath. <em>This post breaks down the foundational principles.</em></p><p>Learn how to transition smoothly between poses like Downward-Facing Dog, Plank, and Chaturanga Dandasana, creating a dance-like sequence that builds strength and flexibility.</p>",
    featured_image: ["/img/blog-img/blog-2.png"],
    author: 102, // Diya Mehta
    category: [1, 4], // Yoga Poses, Pranayama
    tags: [12, 14], // Vinyasa, Breathing Exercises
    createdAt: "2025-10-08T14:30:00Z",
  },
  {
    uniqueId: 3,
    title: "Mastering the Warrior Pose (Virabhadrasana II)",
    blog: "<p>The Warrior II pose embodies strength and stability. Let's delve into the proper alignment to maximize its benefits.</p><p>Focus on grounding through your feet, engaging your core, and extending your arms with intention. This pose strengthens the legs, opens the hips, and builds confidence.</p>",
    featured_image: ["/img/blog-img/blog-3.png"],
    author: 101, // Aarav Sharma
    category: [1], // Yoga Poses
    tags: [13], // Warrior Pose
    createdAt: "2025-10-07T11:20:00Z",
  },
  {
    uniqueId: 4,
    title: "Simple Breathing Exercises for a Calm Mind",
    blog: "<p>Pranayama, the practice of breath regulation, is a cornerstone of yoga. Here are three simple exercises you can do anywhere.</p><p>We'll cover Belly Breathing (Diaphragmatic Breathing), Alternate Nostril Breathing (Nadi Shodhana), and the 4-7-8 Breath to help you quickly reduce anxiety and find your center.</p>",
    featured_image: ["/img/blog-img/blog-4.png"],
    author: 102, // Diya Mehta
    category: [4, 2], // Pranayama, Meditation
    tags: [14, 17], // Breathing Exercises, Mindfulness
    createdAt: "2025-10-06T09:00:00Z",
  },
  {
    uniqueId: 5,
    title: "Creating Your Own At-Home Yoga Sanctuary",
    blog: "<p>You don't need a fancy studio to practice yoga. Learn how to create a peaceful and inspiring space in your own home.</p><p>Find tips on choosing the right spot, gathering essential props like a mat and blocks, and setting the mood with lighting and sound to enhance your personal practice.</p>",
    featured_image: ["/img/blog-img/blog-1.png"],
    author: 101, // Aarav Sharma
    category: [3], // Wellness
    tags: [15], // Home Practice
    createdAt: "2025-10-05T18:00:00Z",
  },
  {
    uniqueId: 6,
    title: "The Health Benefits of a Daily Yoga Routine",
    blog: "<p>Consistency is key in yoga. Discover the long-term physical and mental benefits of a regular practice.</p><p>From increased flexibility and muscle strength to improved respiratory health and reduced stress, a daily yoga routine can profoundly impact your overall well-being.</p>",
    featured_image: [ "/img/blog-img/blog-2.png",
    ],
    author: 102, // Diya Mehta
    category: [3, 1], // Wellness, Yoga Poses
    tags: [15, 17], // Home Practice, Mindfulness
    createdAt: "2025-10-04T12:00:00Z",
  },
  {
    uniqueId: 7,
    title: "Introduction to Restorative Yoga for Deep Relaxation",
    blog: "<p>Restorative yoga is a gentle practice that uses props to support the body, allowing for deep relaxation and healing.</p><p>Explore poses like Supported Child's Pose and Legs-Up-The-Wall Pose to release tension, calm the nervous system, and rejuvenate your body and mind.</p>",
    featured_image: ["/img/blog-img/blog-3.png"],
    author: 101, // Aarav Sharma
    category: [1, 3], // Yoga Poses, Wellness
    tags: [16, 15], // Restorative, Home Practice
    createdAt: "2025-10-03T16:45:00Z",
  },
  {
    uniqueId: 8,
    title: "Introduction to Restorative Yoga for Deep Relaxation",
    blog: "<p>Restorative yoga is a gentle practice that uses props to support the body, allowing for deep relaxation and healing.</p><p>Explore poses like Supported Child's Pose and Legs-Up-The-Wall Pose to release tension, calm the nervous system, and rejuvenate your body and mind.</p>",
    featured_image: ["/img/blog-img/blog-4.png"],
    author: 101, // Aarav Sharma
    category: [1, 3], // Yoga Poses, Wellness
    tags: [16, 15], // Restorative, Home Practice
    createdAt: "2025-10-03T16:45:00Z",
  },
];
