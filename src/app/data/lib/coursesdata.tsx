// --- New Mock Data with More Fields ---
export const coursesData = [
    {
        id: 1,
        slug: '200-hour-ashtanga-rishikesh',
        title: 'Advanced Diploma in Yoga', // Kept your title change
        location: 'Rishikesh, India',
        requirement: ['Full academic curriculum', 'Live online lectures', 'University accredited'],
        country: 'India',
        image: '/img/courses/courses-2.jpeg', // Placeholder
        price: 59351,
        originalPrice: 76029,
        discount: '25% off',
        rating: 4.65,
        reviews: 32,
        durationDays: 28,
        skillLevel: 'Beginner, Intermediate, Advanced',
        category: 'Yoga', // For "Travel Experiences"
        tags: ['Yoga', 'Wellness & Transformation'],
        features: ['Airport transfer included', 'All meals included', 'Instructed in English'],
        description: "Turn your yoga love into a teaching toolkit with this Diploma in Yoga Education, a one-year dive into the art of guiding others. You'll start with polished asana breakdowns and pranayama drills, then shift to education basics—crafting 60-minute flows for beginners, sequencing for teens, or gentle series for elders. Classes cover classroom management, inclusive language to build trust, and how to weave stories from the Yoga Sutras into fun sessions. Hands-on is key: run trial classes, film your cues for self-review, and learn props for accessibility. Electives like yoga for schools or online delivery add flexibility, all grounded in ethics",
        interested: 6,
        gifts: 2,
        startingDates: 'Multiple starting dates',
        // --- New Fields ---
        courseLevel: 'Intermediate',
        courseType: 'Professional Certification',
        durationCategory: '20-100 Hours', // New duration category
        isOnline: false,
        certificationType: 'Diploma', // <-- NEW FIELD
    },
    {
        id: 2,
        slug: '10-day-vipassana-meditation-goa',
        title: '10 Day Silent Vipassana Meditation Retreat in Goa, India',
        location: 'Goa, India',
        requirement: ['Full academic curriculum', 'Live online lectures', 'University accredited'],
        country: 'India',
        image: '/img/courses/courses-1.jpeg', // Placeholder
        price: 35000,
        originalPrice: 40000,
        discount: '12% off',
        rating: 4.8,
        reviews: 45,
        durationDays: 10,
        skillLevel: 'All levels',
        category: 'Meditation',
        tags: ['Meditation', 'Wellness & Transformation'],
        features: ['Blend yoga science with practical teaching methods', 'Earn dual degrees for therapy or academic paths', 'Conduct lab-based research on wellness impacts'],
        description: " Turn your yoga love into a teaching toolkit with this Diploma in Yoga Education, a one-year dive into the art of guiding others. You'll start with polished asana breakdowns and pranayama drills, then shift to education basics—crafting 60-minute flows for beginners, sequencing for teens, or gentle series for elders. Classes cover classroom management, inclusive language to build trust, and how to weave stories from the Yoga Sutras into fun sessions. Hands-on is key: run trial classes, film your cues for self-review, and learn props for accessibility. Electives like yoga for schools or online delivery add flexibility, all grounded in ethics.",
        interested: 12,
        gifts: null,
        startingDates: 'Monthly start dates',
        // --- New Fields ---
        courseLevel: 'Beginner',
        courseType: 'Wellness Retreat',
        durationCategory: '1-4 Weeks',
        isOnline: false,
        certificationType: 'Certificate', // <-- NEW FIELD
    },
    {
        id: 3,
        slug: '5-day-ayurveda-healing-kerala',
        title: '5 Day Rejuvenating Ayurveda and Healing Retreat in Kerala',
        location: 'Kerala, India',
        requirement: ['Full academic curriculum', 'Live online lectures', 'University accredited'],
        country: 'India',
        image: '/img/courses/courses-2.jpeg', // Placeholder
        price: 28000,
        originalPrice: null,
        discount: null,
        rating: 4.7,
        reviews: 18,
        durationDays: 5,
        skillLevel: 'All levels',
        category: 'Healing',
        tags: ['Healing', 'Wellness & Transformation'],
        features: ['Daily Ayurvedic treatments', 'Yoga and meditation sessions', 'Personalized wellness consultation'],
        description: "Turn your yoga love into a teaching toolkit with this Diploma in Yoga Education, a one-year dive into the art of guiding others. You'll start with polished asana breakdowns and pranayama drills, then shift to education basics—crafting 60-minute flows for beginners, sequencing for teens, or gentle series for elders. Classes cover classroom management, inclusive language to build trust, and how to weave stories from the Yoga Sutras into fun sessions. Hands-on is key: run trial classes, film your cues for self-review, and learn props for accessibility. Electives like yoga for schools or online delivery add flexibility, all grounded in ethics",
        interested: 8,
        gifts: 1,
        startingDates: 'See available dates',
        // --- New Fields ---
        courseLevel: 'Beginner',
        courseType: 'Wellness Retreat',
        durationCategory: '1-4 Weeks',
        isOnline: false,
        certificationType: 'Certificate', // <-- NEW FIELD
    },
    {
        id: 4,
        slug: '7-day-yoga-therapy-himalayas',
        title: '7 Day Therapeutic Yoga Retreat in the Himalayas',
        location: 'Himalayas, India',
        requirement: ['Full academic curriculum', 'Live online lectures', 'University accredited'],
        country: 'India',
        image: '/img/courses/courses-1.jpeg', // Placeholder
        price: 42000, // <-- Fixed missing price
        originalPrice: 45000,
        discount: '7% off',
        rating: 4.9,
        reviews: 22,
        durationDays: 7,
        skillLevel: 'All levels',
        category: 'Yoga Therapy',
        tags: ['Yoga Therapy', 'Wellness & Transformation'],
        features: ['Mountain view accommodation', 'Daily therapeutic yoga', 'Nature walks and trekking'],
        description: 'Heal your body and mind amidst the majestic beauty of the Himalayas...',
        interested: 10,
        gifts: null,
        startingDates: 'Multiple starting dates',
        // --- New Fields ---
        courseLevel: 'Intermediate',
        AscourseType: 'Wellness Retreat',
        durationCategory: '1-4 Weeks',
        isOnline: false,
        certificationType: 'Certificate', // <-- NEW FIELD
    },
    {
        id: 5,
        slug: 'online-mindfulness-course',
        title: 'Online Mindfulness & Transformation Program (New)',
        location: 'Online Experience',
        requirement: ['Full academic curriculum', 'Live online lectures', 'University accredited'],
        country: 'Online',
        image: '/img/courses/courses-2.jpeg', // Placeholder
        price: 15000,
        originalPrice: null,
        discount: null,
        rating: 4.5,
        reviews: 50,
        durationDays: 30,
        skillLevel: 'Beginner',
        category: 'Online Experiences',
        tags: ['Online Experiences', 'Meditation'],
        features: ['Flexible self-paced learning', 'Live guided sessions', 'Community support group'],
        description: 'Join our new Day & Online Experience to cultivate mindfulness...',
        interested: 25,
        gifts: null,
        startingDates: 'Self-paced',
        // --- New Fields ---
        courseLevel: 'Beginner',
        courseType: 'Diploma Course',
        durationCategory: '1-4 Weeks',
        isOnline: true,
        certificationType: 'Diploma', // <-- NEW FIELD
    },
    {
        id: 6,
        slug: '14-day-advanced-vinyasa-bali',
        title: '14 Day Advanced Vinyasa Flow Intensive in Bali, Indonesia',
        location: 'Bali, Indonesia',
        requirement: ['Full academic curriculum', 'Live online lectures', 'University accredited'],
        country: 'Indonesia',
        image: '/img/courses/courses-1.jpeg', // Placeholder
        price: 85000,
        originalPrice: 90000,
        discount: '5% off',
        rating: 4.9,
        reviews: 30,
        durationDays: 14,
        skillLevel: 'Advanced',
        category: 'Yoga',
        tags: ['Yoga', 'Wellness & Transformation'],
        _features: ['Luxury villa accommodation', 'Daily 3-hour masterclass', 'Vegan gourmet meals'],
        description: "Turn your yoga love into a teaching toolkit with this Diploma in Yoga Education, a one-year dive into the art of guiding others. You'll start with polished asana breakdowns and pranayama drills, then shift to education basics—crafting 60-minute flows for beginners, sequencing for teens, or gentle series for elders. Classes cover classroom management, inclusive language to build trust, and how to weave stories from the Yoga Sutras into fun sessions. Hands-on is key: run trial classes, film your cues for self-review, and learn props for accessibility. Electives like yoga for schools or online delivery add flexibility, all grounded in ethics.",
        interested: 15,
        gifts: 3,
        startingDates: 'See available dates',
        // --- New Fields ---
        courseLevel: 'Advanced',
        courseType: 'Professional Certification',
        durationCategory: '1-4 Weeks',
        isOnline: false,
        certificationType: 'Certificate', // <-- NEW FIELD
    },
    {
        id: 7,
        slug: '3-year-academic-degree-yoga-philosophy',
        title: '3 Year Academic Degree in Yoga Philosophy (Online)',
        location: 'Online Experience',
        requirement: ['Full academic curriculum', 'Live online lectures', 'University accredited'],
        country: 'Online',
        image: '/img/courses/courses-2.jpeg', // Placeholder
        price: 350000,
        originalPrice: null,
        discount: null,
        rating: 4.9,
        reviews: 15,
        durationDays: 1095, // 3 years
        skillLevel: 'All levels',
        category: 'Online Experiences',
        tags: ['Online Experiences', 'Yoga', 'Academic'],
        features: ['Full academic curriculum', 'Live online lectures', 'University accredited'],
        description: 'A comprehensive 3-year online degree program covering the depths of yoga philosophy, history, and texts...',
        interested: 20,
        gifts: null,
        startingDates: 'Yearly intake',
        // --- New Fields ---
        courseLevel: 'Beginner', // As it's open to all levels to start
        courseType: 'Academic Degree',
        tAdurationCategory: '1+ Years',
        isOnline: true,
        certificationType: 'Degree', // <-- NEW FIELD
    },
];

// --- Filter Definitions ---
export const experienceTypeFilters = [
    { id: 'yoga', name: 'Yoga', count: 3 },
    { id: 'wellness', name: 'Wellness & Transformation', count: 5 },
    { id: 'meditation', name: 'Meditation', count: 2 },
    { id: 'healing', name: 'Healing', count: 1 },
    { id: 'yoga-therapy', name: 'Yoga Therapy', count: 1 },
];

export const certificationTypeFilters = [
    { id: 'Diploma', name: 'Diploma', count: 2 },
    { id: 'Degree', name: 'Degree', count: 1 },
    { id: 'Certificate', name: 'Certificate', count: 4 },
];

export const courseLevelFilters = [
    { id: 'Beginner', name: 'Beginner', count: 4 },
    { id: 'Intermediate', name: 'Intermediate', count: 2 },
    { id: 'Advanced', name: 'Advanced', count: 1 },
    { id: 'Expert', name: 'Expert', count: 0 },
];

export const courseTypeFilters = [
    { id: 'Professional Certification', name: 'Professional Certification', count: 2 },
    { id: 'Diploma Course', name: 'Diploma Course', count: 1 },
    { id: 'Academic Degree', name: 'Academic Degree', count: 1 },
    { id: 'Wellness Retreat', name: 'Wellness Retreat', count: 3 },
];

export const durationFilters = [
    { id: '1-19 Hours', name: '1-19 Hours', count: 0 },
    { id: '20-100 Hours', name: '20-100 Hours', count: 1 },
    { id: '1-4 Weeks', name: '1-4 Weeks', count: 5 },
    { id: '1+ Years', name: '1+ Years', count: 1 },
];

export const locationTypeFilters = [
    { id: 'online', name: 'Online Experiences', count: 2 },
    { id: 'in-person', name: 'In-Person Experiences', count: 5 },
];