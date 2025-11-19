// This file contains all data and filter logic

// --- MOCK DATA ---
export const retreatsData = [
    {
        "id": 1,
        "slug": "mountain-meditation-1",
        "name": "Mountain Meditation Retreat #1",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Yoga & Meditation",
        "description": "Find inner peace in the serene mountains. This 7-day extended retreat focuses on deep meditation techniques...",
        "duration": 7,
        "durationType": "Days",
        "location": "Himalayas",
        "price": 1304,
        "difficulty": "Beginner",
        "bestFor": [
            "Stress Relief",
            "Beginners",
            "Digital Detox"
        ],
        "startDate": "2025-12-20"
    },
    {
        "id": 2,
        "slug": "coastal-wellness-2",
        "name": "Coastal Wellness & Spa Retreat #2",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Wellness & Spa",
        "description": "Relax and rejuvenate by the ocean. Our 5-day program combines daily Vinyasa yoga, luxury spa treatments...",
        "duration": 5,
        "durationType": "Days",
        "location": "Goa Coast",
        "price": 1827,
        "difficulty": "All Levels",
        "bestFor": [
            "Rejuvenation",
            "Spa Lovers",
            "Luxury"
        ],
        "startDate": "2025-12-15"
    },
    {
        "id": 3,
        "slug": "jungle-adventure-3",
        "name": "Jungle Adventure Yoga #3",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Adventure & Yoga",
        "description": "Explore the jungle and deepen your practice. This is an active retreat for those who love nature...",
        "duration": 10,
        "durationType": "Days",
        "location": "Amazon",
        "price": 2414,
        "difficulty": "Intermediate",
        "bestFor": [
            "Adventure",
            "Fitness",
            "Nature"
        ],
        "startDate": "2026-01-10"
    },
    {
        "id": 4,
        "slug": "desert-detox-4",
        "name": "Desert Detox #4",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Detox & Health",
        "description": "A short, intensive detox program. Perfect for a quick reset, featuring juice fasting, guided meditation...",
        "duration": 3,
        "durationType": "Days",
        "location": "Nevada Desert",
        "price": 873,
        "difficulty": "All Levels",
        "bestFor": [
            "Detox",
            "Quick Reset",
            "Digital Detox"
        ],
        "startDate": "2025-11-30"
    },
    {
        "id": 5,
        "slug": "mountain-meditation-5",
        "name": "Mountain Meditation Retreat #5",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Yoga & Meditation",
        "description": "Find inner peace in the serene mountains. This 7-day extended retreat focuses on deep meditation techniques...",
        "duration": 7,
        "durationType": "Days",
        "location": "Himalayas",
        "price": 1096,
        "difficulty": "Beginner",
        "bestFor": [
            "Stress Relief",
            "Beginners",
            "Digital Detox"
        ],
        "startDate": "2025-12-20"
    },
    {
        "id": 6,
        "slug": "coastal-wellness-6",
        "name": "Coastal Wellness & Spa Retreat #6",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Wellness & Spa",
        "description": "Relax and rejuvenate by the ocean. Our 5-day program combines daily Vinyasa yoga, luxury spa treatments...",
        "duration": 5,
        "durationType": "Days",
        "location": "Goa Coast",
        "price": 1907,
        "difficulty": "All Levels",
        "bestFor": [
            "Rejuvenation",
            "Spa Lovers",
            "Luxury"
        ],
        "startDate": "2025-12-15"
    },
    {
        "id": 7,
        "slug": "jungle-adventure-7",
        "name": "Jungle Adventure Yoga #7",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Adventure & Yoga",
        "description": "Explore the jungle and deepen your practice. This is an active retreat for those who love nature...",
        "duration": 10,
        "durationType": "Days",
        "location": "Amazon",
        "price": 2416,
        "difficulty": "Intermediate",
        "bestFor": [
            "Adventure",
            "Fitness",
            "Nature"
        ],
        "startDate": "2026-01-10"
    },
    {
        "id": 8,
        "slug": "desert-detox-8",
        "name": "Desert Detox #8",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Detox & Health",
        "description": "A short, intensive detox program. Perfect for a quick reset, featuring juice fasting, guided meditation...",
        "duration": 3,
        "durationType": "Days",
        "location": "Nevada Desert",
        "price": 1011,
        "difficulty": "All Levels",
        "bestFor": [
            "Detox",
            "Quick Reset",
            "Digital Detox"
        ],
        "startDate": "2025-11-30"
    },
    {
        "id": 9,
        "slug": "mountain-meditation-9",
        "name": "Mountain Meditation Retreat #9",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Yoga & Meditation",
        "description": "Find inner peace in the serene mountains. This 7-day extended retreat focuses on deep meditation techniques...",
        "duration": 7,
        "durationType": "Days",
        "location": "Himalayas",
        "price": 1123,
        "difficulty": "Beginner",
        "bestFor": [
            "Stress Relief",
            "Beginners",
            "Digital Detox"
        ],
        "startDate": "2025-12-20"
    },
    {
        "id": 10,
        "slug": "coastal-wellness-10",
        "name": "Coastal Wellness & Spa Retreat #10",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Wellness & Spa",
        "description": "Relax and rejuvenate by the ocean. Our 5-day program combines daily Vinyasa yoga, luxury spa treatments...",
        "duration": 5,
        "durationType": "Days",
        "location": "Goa Coast",
        "price": 1682,
        "difficulty": "All Levels",
        "bestFor": [
            "Rejuvenation",
            "Spa Lovers",
            "Luxury"
        ],
        "startDate": "2025-12-15"
    },
    {
        "id": 11,
        "slug": "jungle-adventure-11",
        "name": "Jungle Adventure Yoga #11",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Adventure & Yoga",
        "description": "Explore the jungle and deepen your practice. This is an active retreat for those who love nature...",
        "duration": 10,
        "durationType": "Days",
        "location": "Amazon",
        "price": 2553,
        "difficulty": "Intermediate",
        "bestFor": [
            "Adventure",
            "Fitness",
            "Nature"
        ],
        "startDate": "2026-01-10"
    },
    {
        "id": 12,
        "slug": "desert-detox-12",
        "name": "Desert Detox #12",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Detox & Health",
        "description": "A short, intensive detox program. Perfect for a quick reset, featuring juice fasting, guided meditation...",
        "duration": 3,
        "durationType": "Days",
        "location": "Nevada Desert",
        "price": 750,
        "difficulty": "All Levels",
        "bestFor": [
            "Detox",
            "Quick Reset",
            "Digital Detox"
        ],
        "startDate": "2025-11-30"
    },
    {
        "id": 13,
        "slug": "mountain-meditation-13",
        "name": "Mountain Meditation Retreat #13",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Yoga & Meditation",
        "description": "Find inner peace in the serene mountains. This 7-day extended retreat focuses on deep meditation techniques...",
        "duration": 7,
        "durationType": "Days",
        "location": "Himalayas",
        "price": 1252,
        "difficulty": "Beginner",
        "bestFor": [
            "Stress Relief",
            "Beginners",
            "Digital Detox"
        ],
        "startDate": "2025-12-20"
    },
    {
        "id": 14,
        "slug": "coastal-wellness-14",
        "name": "Coastal Wellness & Spa Retreat #14",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Wellness & Spa",
        "description": "Relax and rejuvenate by the ocean. Our 5-day program combines daily Vinyasa yoga, luxury spa treatments...",
        "duration": 5,
        "durationType": "Days",
        "location": "Goa Coast",
        "price": 1788,
        "difficulty": "All Levels",
        "bestFor": [
            "Rejuvenation",
            "Spa Lovers",
            "Luxury"
        ],
        "startDate": "2025-12-15"
    },
    {
        "id": 15,
        "slug": "jungle-adventure-15",
        "name": "Jungle Adventure Yoga #15",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Adventure & Yoga",
        "description": "Explore the jungle and deepen your practice. This is an active retreat for those who love nature...",
        "duration": 10,
        "durationType": "Days",
        "location": "Amazon",
        "price": 2496,
        "difficulty": "Intermediate",
        "bestFor": [
            "Adventure",
            "Fitness",
            "Nature"
        ],
        "startDate": "2026-01-10"
    },
    {
        "id": 16,
        "slug": "desert-detox-16",
        "name": "Desert Detox #16",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Detox & Health",
        "description": "A short, intensive detox program. Perfect for a quick reset, featuring juice fasting, guided meditation...",
        "duration": 3,
        "durationType": "Days",
        "location": "Nevada Desert",
        "price": 788,
        "difficulty": "All Levels",
        "bestFor": [
            "Detox",
            "Quick Reset",
            "Digital Detox"
        ],
        "startDate": "2025-11-30"
    },
    {
        "id": 17,
        "slug": "mountain-meditation-17",
        "name": "Mountain Meditation Retreat #17",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Yoga & Meditation",
        "description": "Find inner peace in the serene mountains. This 7-day extended retreat focuses on deep meditation techniques...",
        "duration": 7,
        "durationType": "Days",
        "location": "Himalayas",
        "price": 1345,
        "difficulty": "Beginner",
        "bestFor": [
            "Stress Relief",
            "Beginners",
            "Digital Detox"
        ],
        "startDate": "2025-12-20"
    },
    {
        "id": 18,
        "slug": "coastal-wellness-18",
        "name": "Coastal Wellness & Spa Retreat #18",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Wellness & Spa",
        "description": "Relax and rejuvenate by the ocean. Our 5-day program combines daily Vinyasa yoga, luxury spa treatments...",
        "duration": 5,
        "durationType": "Days",
        "location": "Goa Coast",
        "price": 1775,
        "difficulty": "All Levels",
        "bestFor": [
            "Rejuvenation",
            "Spa Lovers",
            "Luxury"
        ],
        "startDate": "2025-12-15"
    },
    {
        "id": 19,
        "slug": "jungle-adventure-19",
        "name": "Jungle Adventure Yoga #19",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Adventure & Yoga",
        "description": "Explore the jungle and deepen your practice. This is an active retreat for those who love nature...",
        "duration": 10,
        "durationType": "Days",
        "location": "Amazon",
        "price": 2604,
        "difficulty": "Intermediate",
        "bestFor": [
            "Adventure",
            "Fitness",
            "Nature"
        ],
        "startDate": "2026-01-10"
    },
    {
        "id": 20,
        "slug": "desert-detox-20",
        "name": "Desert Detox #20",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Detox & Health",
        "description": "A short, intensive detox program. Perfect for a quick reset, featuring juice fasting, guided meditation...",
        "duration": 3,
        "durationType": "Days",
        "location": "Nevada Desert",
        "price": 1029,
        "difficulty": "All Levels",
        "bestFor": [
            "Detox",
            "Quick Reset",
            "Digital Detox"
        ],
        "startDate": "2025-11-30"
    },
    {
        "id": 21,
        "slug": "mountain-meditation-21",
        "name": "Mountain Meditation Retreat #21",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Yoga & Meditation",
        "description": "Find inner peace in the serene mountains. This 7-day extended retreat focuses on deep meditation techniques...",
        "duration": 7,
        "durationType": "Days",
        "location": "Himalayas",
        "price": 1189,
        "difficulty": "Beginner",
        "bestFor": [
            "Stress Relief",
            "Beginners",
            "Digital Detox"
        ],
        "startDate": "2025-12-20"
    },
    {
        "id": 22,
        "slug": "coastal-wellness-22",
        "name": "Coastal Wellness & Spa Retreat #22",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Wellness & Spa",
        "description": "Relax and rejuvenate by the ocean. Our 5-day program combines daily Vinyasa yoga, luxury spa treatments...",
        "duration": 5,
        "durationType": "Days",
        "location": "Goa Coast",
        "price": 1698,
        "difficulty": "All Levels",
        "bestFor": [
            "Rejuvenation",
            "Spa Lovers",
            "Luxury"
        ],
        "startDate": "2025-12-15"
    },
    {
        "id": 23,
        "slug": "jungle-adventure-23",
        "name": "Jungle Adventure Yoga #23",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Adventure & Yoga",
        "description": "Explore the jungle and deepen your practice. This is an active retreat for those who love nature...",
        "duration": 10,
        "durationType": "Days",
        "location": "Amazon",
        "price": 2358,
        "difficulty": "Intermediate",
        "bestFor": [
            "Adventure",
            "Fitness",
            "Nature"
        ],
        "startDate": "2026-01-10"
    },
    {
        "id": 24,
        "slug": "desert-detox-24",
        "name": "Desert Detox #24",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Detox & Health",
        "description": "A short, intensive detox program. Perfect for a quick reset, featuring juice fasting, guided meditation...",
        "duration": 3,
        "durationType": "Days",
        "location": "Nevada Desert",
        "price": 901,
        "difficulty": "All Levels",
        "bestFor": [
            "Detox",
            "Quick Reset",
            "Digital Detox"
        ],
        "startDate": "2025-11-30"
    },
    {
        "id": 25,
        "slug": "mountain-meditation-25",
        "name": "Mountain Meditation Retreat #25",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Yoga & Meditation",
        "description": "Find inner peace in the serene mountains. This 7-day extended retreat focuses on deep meditation techniques...",
        "duration": 7,
        "durationType": "Days",
        "location": "Himalayas",
        "price": 1340,
        "difficulty": "Beginner",
        "bestFor": [
            "Stress Relief",
            "Beginners",
            "Digital Detox"
        ],
        "startDate": "2025-12-20"
    },
    {
        "id": 26,
        "slug": "coastal-wellness-26",
        "name": "Coastal Wellness & Spa Retreat #26",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Wellness & Spa",
        "description": "Relax and rejuvenate by the ocean. Our 5-day program combines daily Vinyasa yoga, luxury spa treatments...",
        "duration": 5,
        "durationType": "Days",
        "location": "Goa Coast",
        "price": 1766,
        "difficulty": "All Levels",
        "bestFor": [
            "Rejuvenation",
            "Spa Lovers",
            "Luxury"
        ],
        "startDate": "2025-12-15"
    },
    {
        "id": 27,
        "slug": "jungle-adventure-27",
        "name": "Jungle Adventure Yoga #27",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Adventure & Yoga",
        "description": "Explore the jungle and deepen your practice. This is an active retreat for those who love nature...",
        "duration": 10,
        "durationType": "Days",
        "location": "Amazon",
        "price": 2594,
        "difficulty": "Intermediate",
        "bestFor": [
            "Adventure",
            "Fitness",
            "Nature"
        ],
        "startDate": "2026-01-10"
    },
    {
        "id": 28,
        "slug": "desert-detox-28",
        "name": "Desert Detox #28",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Detox & Health",
        "description": "A short, intensive detox program. Perfect for a quick reset, featuring juice fasting, guided meditation...",
        "duration": 3,
        "durationType": "Days",
        "location": "Nevada Desert",
        "price": 903,
        "difficulty": "All Levels",
        "bestFor": [
            "Detox",
            "Quick Reset",
            "Digital Detox"
        ],
        "startDate": "2025-11-30"
    },
    {
        "id": 29,
        "slug": "mountain-meditation-29",
        "name": "Mountain Meditation Retreat #29",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Yoga & Meditation",
        "description": "Find inner peace in the serene mountains. This 7-day extended retreat focuses on deep meditation techniques...",
        "duration": 7,
        "durationType": "Days",
        "location": "Himalayas",
        "price": 1285,
        "difficulty": "Beginner",
        "bestFor": [
            "Stress Relief",
            "Beginners",
            "Digital Detox"
        ],
        "startDate": "2025-12-20"
    },
    {
        "id": 30,
        "slug": "coastal-wellness-30",
        "name": "Coastal Wellness & Spa Retreat #30",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Wellness & Spa",
        "description": "Relax and rejuvenate by the ocean. Our 5-day program combines daily Vinyasa yoga, luxury spa treatments...",
        "duration": 5,
        "durationType": "Days",
        "location": "Goa Coast",
        "price": 1915,
        "difficulty": "All Levels",
        "bestFor": [
            "Rejuvenation",
            "Spa Lovers",
            "Luxury"
        ],
        "startDate": "2025-12-15"
    },
    {
        "id": 31,
        "slug": "jungle-adventure-31",
        "name": "Jungle Adventure Yoga #31",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Adventure & Yoga",
        "description": "Explore the jungle and deepen your practice. This is an active retreat for those who love nature...",
        "duration": 10,
        "durationType": "Days",
        "location": "Amazon",
        "price": 2394,
        "difficulty": "Intermediate",
        "bestFor": [
            "Adventure",
            "Fitness",
            "Nature"
        ],
        "startDate": "2026-01-10"
    },
    {
        "id": 32,
        "slug": "desert-detox-32",
        "name": "Desert Detox #32",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Detox & Health",
        "description": "A short, intensive detox program. Perfect for a quick reset, featuring juice fasting, guided meditation...",
        "duration": 3,
        "durationType": "Days",
        "location": "Nevada Desert",
        "price": 926,
        "difficulty": "All Levels",
        "bestFor": [
            "Detox",
            "Quick Reset",
            "Digital Detox"
        ],
        "startDate": "2025-11-30"
    },
    {
        "id": 33,
        "slug": "mountain-meditation-33",
        "name": "Mountain Meditation Retreat #33",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Yoga & Meditation",
        "description": "Find inner peace in the serene mountains. This 7-day extended retreat focuses on deep meditation techniques...",
        "duration": 7,
        "durationType": "Days",
        "location": "Himalayas",
        "price": 1229,
        "difficulty": "Beginner",
        "bestFor": [
            "Stress Relief",
            "Beginners",
            "Digital Detox"
        ],
        "startDate": "2025-12-20"
    },
    {
        "id": 34,
        "slug": "coastal-wellness-34",
        "name": "Coastal Wellness & Spa Retreat #34",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Wellness & Spa",
        "description": "Relax and rejuvenate by the ocean. Our 5-day program combines daily Vinyasa yoga, luxury spa treatments...",
        "duration": 5,
        "durationType": "Days",
        "location": "Goa Coast",
        "price": 1830,
        "difficulty": "All Levels",
        "bestFor": [
            "Rejuvenation",
            "Spa Lovers",
            "Luxury"
        ],
        "startDate": "2025-12-15"
    },
    {
        "id": 35,
        "slug": "jungle-adventure-35",
        "name": "Jungle Adventure Yoga #35",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Adventure & Yoga",
        "description": "Explore the jungle and deepen your practice. This is an active retreat for those who love nature...",
        "duration": 10,
        "durationType": "Days",
        "location": "Amazon",
        "price": 2418,
        "difficulty": "Intermediate",
        "bestFor": [
            "Adventure",
            "Fitness",
            "Nature"
        ],
        "startDate": "2026-01-10"
    },
    {
        "id": 36,
        "slug": "desert-detox-36",
        "name": "Desert Detox #36",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Detox & Health",
        "description": "A short, intensive detox program. Perfect for a quick reset, featuring juice fasting, guided meditation...",
        "duration": 3,
        "durationType": "Days",
        "location": "Nevada Desert",
        "price": 1026,
        "difficulty": "All Levels",
        "bestFor": [
            "Detox",
            "Quick Reset",
            "Digital Detox"
        ],
        "startDate": "2025-11-30"
    },
    {
        "id": 37,
        "slug": "mountain-meditation-37",
        "name": "Mountain Meditation Retreat #37",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Yoga & Meditation",
        "description": "Find inner peace in the serene mountains. This 7-day extended retreat focuses on deep meditation techniques...",
        "duration": 7,
        "durationType": "Days",
        "location": "Himalayas",
        "price": 1152,
        "difficulty": "Beginner",
        "bestFor": [
            "Stress Relief",
            "Beginners",
            "Digital Detox"
        ],
        "startDate": "2025-12-20"
    },
    {
        "id": 38,
        "slug": "coastal-wellness-38",
        "name": "Coastal Wellness & Spa Retreat #38",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Wellness & Spa",
        "description": "Relax and rejuvenate by the ocean. Our 5-day program combines daily Vinyasa yoga, luxury spa treatments...",
        "duration": 5,
        "durationType": "Days",
        "location": "Goa Coast",
        "price": 1806,
        "difficulty": "All Levels",
        "bestFor": [
            "Rejuvenation",
            "Spa Lovers",
            "Luxury"
        ],
        "startDate": "2025-12-15"
    },
    {
        "id": 39,
        "slug": "jungle-adventure-39",
        "name": "Jungle Adventure Yoga #39",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Adventure & Yoga",
        "description": "Explore the jungle and deepen your practice. This is an active retreat for those who love nature...",
        "duration": 10,
        "durationType": "Days",
        "location": "Amazon",
        "price": 2360,
        "difficulty": "Intermediate",
        "bestFor": [
            "Adventure",
            "Fitness",
            "Nature"
        ],
        "startDate": "2026-01-10"
    },
    {
        "id": 40,
        "slug": "desert-detox-40",
        "name": "Desert Detox #40",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Detox & Health",
        "description": "A short, intensive detox program. Perfect for a quick reset, featuring juice fasting, guided meditation...",
        "duration": 3,
        "durationType": "Days",
        "location": "Nevada Desert",
        "price": 895,
        "difficulty": "All Levels",
        "bestFor": [
            "Detox",
            "Quick Reset",
            "Digital Detox"
        ],
        "startDate": "2025-11-30"
    },
    {
        "id": 41,
        "slug": "mountain-meditation-41",
        "name": "Mountain Meditation Retreat #41",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Yoga & Meditation",
        "description": "Find inner peace in the serene mountains. This 7-day extended retreat focuses on deep meditation techniques...",
        "duration": 7,
        "durationType": "Days",
        "location": "Himalayas",
        "price": 1130,
        "difficulty": "Beginner",
        "bestFor": [
            "Stress Relief",
            "Beginners",
            "Digital Detox"
        ],
        "startDate": "2025-12-20"
    },
    {
        "id": 42,
        "slug": "coastal-wellness-42",
        "name": "Coastal Wellness & Spa Retreat #42",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Wellness & Spa",
        "description": "Relax and rejuvenate by the ocean. Our 5-day program combines daily Vinyasa yoga, luxury spa treatments...",
        "duration": 5,
        "durationType": "Days",
        "location": "Goa Coast",
        "price": 1748,
        "difficulty": "All Levels",
        "bestFor": [
            "Rejuvenation",
            "Spa Lovers",
            "Luxury"
        ],
        "startDate": "2025-12-15"
    },
    {
        "id": 43,
        "slug": "jungle-adventure-43",
        "name": "Jungle Adventure Yoga #43",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Adventure & Yoga",
        "description": "Explore the jungle and deepen your practice. This is an active retreat for those who love nature...",
        "duration": 10,
        "durationType": "Days",
        "location": "Amazon",
        "price": 2350,
        "difficulty": "Intermediate",
        "bestFor": [
            "Adventure",
            "Fitness",
            "Nature"
        ],
        "startDate": "2026-01-10"
    },
    {
        "id": 44,
        "slug": "desert-detox-44",
        "name": "Desert Detox #44",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Detox & Health",
        "description": "A short, intensive detox program. Perfect for a quick reset, featuring juice fasting, guided meditation...",
        "duration": 3,
        "durationType": "Days",
        "location": "Nevada Desert",
        "price": 927,
        "difficulty": "All Levels",
        "bestFor": [
            "Detox",
            "Quick Reset",
            "Digital Detox"
        ],
        "startDate": "2025-11-30"
    },
    {
        "id": 45,
        "slug": "mountain-meditation-45",
        "name": "Mountain Meditation Retreat #45",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Yoga & Meditation",
        "description": "Find inner peace in the serene mountains. This 7-day extended retreat focuses on deep meditation techniques...",
        "duration": 7,
        "durationType": "Days",
        "location": "Himalayas",
        "price": 1333,
        "difficulty": "Beginner",
        "bestFor": [
            "Stress Relief",
            "Beginners",
            "Digital Detox"
        ],
        "startDate": "2025-12-20"
    },
    {
        "id": 46,
        "slug": "coastal-wellness-46",
        "name": "Coastal Wellness & Spa Retreat #46",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Wellness & Spa",
        "description": "Relax and rejuvenate by the ocean. Our 5-day program combines daily Vinyasa yoga, luxury spa treatments...",
        "duration": 5,
        "durationType": "Days",
        "location": "Goa Coast",
        "price": 1913,
        "difficulty": "All Levels",
        "bestFor": [
            "Rejuvenation",
            "Spa Lovers",
            "Luxury"
        ],
        "startDate": "2025-12-15"
    },
    {
        "id": 47,
        "slug": "jungle-adventure-47",
        "name": "Jungle Adventure Yoga #47",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Adventure & Yoga",
        "description": "Explore the jungle and deepen your practice. This is an active retreat for those who love nature...",
        "duration": 10,
        "durationType": "Days",
        "location": "Amazon",
        "price": 2516,
        "difficulty": "Intermediate",
        "bestFor": [
            "Adventure",
            "Fitness",
            "Nature"
        ],
        "startDate": "2026-01-10"
    },
    {
        "id": 48,
        "slug": "desert-detox-48",
        "name": "Desert Detox #48",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Detox & Health",
        "description": "A short, intensive detox program. Perfect for a quick reset, featuring juice fasting, guided meditation...",
        "duration": 3,
        "durationType": "Days",
        "location": "Nevada Desert",
        "price": 811,
        "difficulty": "All Levels",
        "bestFor": [
            "Detox",
            "Quick Reset",
            "Digital Detox"
        ],
        "startDate": "2025-11-30"
    },
    {
        "id": 49,
        "slug": "mountain-meditation-49",
        "name": "Mountain Meditation Retreat #49",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Yoga & Meditation",
        "description": "Find inner peace in the serene mountains. This 7-day extended retreat focuses on deep meditation techniques...",
        "duration": 7,
        "durationType": "Days",
        "location": "Himalayas",
        "price": 1133,
        "difficulty": "Beginner",
        "bestFor": [
            "Stress Relief",
            "Beginners",
            "Digital Detox"
        ],
        "startDate": "2025-12-20"
    },
    {
        "id": 50,
        "slug": "coastal-wellness-50",
        "name": "Coastal Wellness & Spa Retreat #50",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Wellness & Spa",
        "description": "Relax and rejuvenate by the ocean. Our 5-day program combines daily Vinyasa yoga, luxury spa treatments...",
        "duration": 5,
        "durationType": "Days",
        "location": "Goa Coast",
        "price": 1827,
        "difficulty": "All Levels",
        "bestFor": [
            "Rejuvenation",
            "Spa Lovers",
            "Luxury"
        ],
        "startDate": "2025-12-15"
    },
    {
        "id": 51,
        "slug": "jungle-adventure-51",
        "name": "Jungle Adventure Yoga #51",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Adventure & Yoga",
        "description": "Explore the jungle and deepen your practice. This is an active retreat for those who love nature...",
        "duration": 10,
        "durationType": "Days",
        "location": "Amazon",
        "price": 2420,
        "difficulty": "Intermediate",
        "bestFor": [
            "Adventure",
            "Fitness",
            "Nature"
        ],
        "startDate": "2026-01-10"
    },
    {
        "id": 52,
        "slug": "desert-detox-52",
        "name": "Desert Detox #52",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Detox & Health",
        "description": "A short, intensive detox program. Perfect for a quick reset, featuring juice fasting, guided meditation...",
        "duration": 3,
        "durationType": "Days",
        "location": "Nevada Desert",
        "price": 930,
        "difficulty": "All Levels",
        "bestFor": [
            "Detox",
            "Quick Reset",
            "Digital Detox"
        ],
        "startDate": "2025-11-30"
    },
    {
        "id": 53,
        "slug": "mountain-meditation-53",
        "name": "Mountain Meditation Retreat #53",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Yoga & Meditation",
        "description": "Find inner peace in the serene mountains. This 7-day extended retreat focuses on deep meditation techniques...",
        "duration": 7,
        "durationType": "Days",
        "location": "Himalayas",
        "price": 1076,
        "difficulty": "Beginner",
        "bestFor": [
            "Stress Relief",
            "Beginners",
            "Digital Detox"
        ],
        "startDate": "2025-12-20"
    },
    {
        "id": 54,
        "slug": "coastal-wellness-54",
        "name": "Coastal Wellness & Spa Retreat #54",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Wellness & Spa",
        "description": "Relax and rejuvenate by the ocean. Our 5-day program combines daily Vinyasa yoga, luxury spa treatments...",
        "duration": 5,
        "durationType": "Days",
        "location": "Goa Coast",
        "price": 1782,
        "difficulty": "All Levels",
        "bestFor": [
            "Rejuvenation",
            "Spa Lovers",
            "Luxury"
        ],
        "startDate": "2025-12-15"
    },
    {
        "id": 55,
        "slug": "jungle-adventure-55",
        "name": "Jungle Adventure Yoga #55",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Adventure & Yoga",
        "description": "Explore the jungle and deepen your practice. This is an active retreat for those who love nature...",
        "duration": 10,
        "durationType": "Days",
        "location": "Amazon",
        "price": 2577,
        "difficulty": "Intermediate",
        "bestFor": [
            "Adventure",
            "Fitness",
            "Nature"
        ],
        "startDate": "2026-01-10"
    },
    {
        "id": 56,
        "slug": "desert-detox-56",
        "name": "Desert Detox #56",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Detox & Health",
        "description": "A short, intensive detox program. Perfect for a quick reset, featuring juice fasting, guided meditation...",
        "duration": 3,
        "durationType": "Days",
        "location": "Nevada Desert",
        "price": 792,
        "difficulty": "All Levels",
        "bestFor": [
            "Detox",
            "Quick Reset",
            "Digital Detox"
        ],
        "startDate": "2025-11-30"
    },
    {
        "id": 57,
        "slug": "mountain-meditation-57",
        "name": "Mountain Meditation Retreat #57",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Yoga & Meditation",
        "description": "Find inner peace in the serene mountains. This 7-day extended retreat focuses on deep meditation techniques...",
        "duration": 7,
        "durationType": "Days",
        "location": "Himalayas",
        "price": 1228,
        "difficulty": "Beginner",
        "bestFor": [
            "Stress Relief",
            "Beginners",
            "Digital Detox"
        ],
        "startDate": "2025-12-20"
    },
    {
        "id": 58,
        "slug": "coastal-wellness-58",
        "name": "Coastal Wellness & Spa Retreat #58",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Wellness & Spa",
        "description": "Relax and rejuvenate by the ocean. Our 5-day program combines daily Vinyasa yoga, luxury spa treatments...",
        "duration": 5,
        "durationType": "Days",
        "location": "Goa Coast",
        "price": 1826,
        "difficulty": "All Levels",
        "bestFor": [
            "Rejuvenation",
            "Spa Lovers",
            "Luxury"
        ],
        "startDate": "2025-12-15"
    },
    {
        "id": 59,
        "slug": "jungle-adventure-59",
        "name": "Jungle Adventure Yoga #59",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Adventure & Yoga",
        "description": "Explore the jungle and deepen your practice. This is an active retreat for those who love nature...",
        "duration": 10,
        "durationType": "Days",
        "location": "Amazon",
        "price": 2420,
        "difficulty": "Intermediate",
        "bestFor": [
            "Adventure",
            "Fitness",
            "Nature"
        ],
        "startDate": "2026-01-10"
    },
    {
        "id": 60,
        "slug": "desert-detox-60",
        "name": "Desert Detox #60",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Detox & Health",
        "description": "A short, intensive detox program. Perfect for a quick reset, featuring juice fasting, guided meditation...",
        "duration": 3,
        "durationType": "Days",
        "location": "Nevada Desert",
        "price": 930,
        "difficulty": "All Levels",
        "bestFor": [
            "Detox",
            "Quick Reset",
            "Digital Detox"
        ],
        "startDate": "2025-11-30"
    },
    {
        "id": 61,
        "slug": "mountain-meditation-61",
        "name": "Mountain Meditation Retreat #61",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Yoga & Meditation",
        "description": "Find inner peace in the serene mountains. This 7-day extended retreat focuses on deep meditation techniques...",
        "duration": 7,
        "durationType": "Days",
        "location": "Himalayas",
        "price": 1107,
        "difficulty": "Beginner",
        "bestFor": [
            "Stress Relief",
            "Beginners",
            "Digital Detox"
        ],
        "startDate": "2025-12-20"
    },
    {
        "id": 62,
        "slug": "coastal-wellness-62",
        "name": "Coastal Wellness & Spa Retreat #62",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Wellness & Spa",
        "description": "Relax and rejuvenate by the ocean. Our 5-day program combines daily Vinyasa yoga, luxury spa treatments...",
        "duration": 5,
        "durationType": "Days",
        "location": "Goa Coast",
        "price": 1787,
        "difficulty": "All Levels",
        "bestFor": [
            "Rejuvenation",
            "Spa Lovers",
            "Luxury"
        ],
        "startDate": "2025-12-15"
    },
    {
        "id": 63,
        "slug": "jungle-adventure-63",
        "name": "Jungle Adventure Yoga #63",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Adventure & Yoga",
        "description": "Explore the jungle and deepen your practice. This is an active retreat for those who love nature...",
        "duration": 10,
        "durationType": "Days",
        "location": "Amazon",
        "price": 2603,
        "difficulty": "Intermediate",
        "bestFor": [
            "Adventure",
            "Fitness",
            "Nature"
        ],
        "startDate": "2026-01-10"
    },
    {
        "id": 64,
        "slug": "desert-detox-64",
        "name": "Desert Detox #64",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Detox & Health",
        "description": "A short, intensive detox program. Perfect for a quick reset, featuring juice fasting, guided meditation...",
        "duration": 3,
        "durationType": "Days",
        "location": "Nevada Desert",
        "price": 846,
        "difficulty": "All Levels",
        "bestFor": [
            "Detox",
            "Quick Reset",
            "Digital Detox"
        ],
        "startDate": "2025-11-30"
    },
    {
        "id": 65,
        "slug": "mountain-meditation-65",
        "name": "Mountain Meditation Retreat #65",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Yoga & Meditation",
        "description": "Find inner peace in the serene mountains. This 7-day extended retreat focuses on deep meditation techniques...",
        "duration": 7,
        "durationType": "Days",
        "location": "Himalayas",
        "price": 1084,
        "difficulty": "Beginner",
        "bestFor": [
            "Stress Relief",
            "Beginners",
            "Digital Detox"
        ],
        "startDate": "2025-12-20"
    },
    {
        "id": 66,
        "slug": "coastal-wellness-66",
        "name": "Coastal Wellness & Spa Retreat #66",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Wellness & Spa",
        "description": "Relax and rejuvenate by the ocean. Our 5-day program combines daily Vinyasa yoga, luxury spa treatments...",
        "duration": 5,
        "durationType": "Days",
        "location": "Goa Coast",
        "price": 1947,
        "difficulty": "All Levels",
        "bestFor": [
            "Rejuvenation",
            "Spa Lovers",
            "Luxury"
        ],
        "startDate": "2025-12-15"
    },
    {
        "id": 67,
        "slug": "jungle-adventure-67",
        "name": "Jungle Adventure Yoga #67",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Adventure & Yoga",
        "description": "Explore the jungle and deepen your practice. This is an active retreat for those who love nature...",
        "duration": 10,
        "durationType": "Days",
        "location": "Amazon",
        "price": 2605,
        "difficulty": "Intermediate",
        "bestFor": [
            "Adventure",
            "Fitness",
            "Nature"
        ],
        "startDate": "2026-01-10"
    },
    {
        "id": 68,
        "slug": "desert-detox-68",
        "name": "Desert Detox #68",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Detox & Health",
        "description": "A short, intensive detox program. Perfect for a quick reset, featuring juice fasting, guided meditation...",
        "duration": 3,
        "durationType": "Days",
        "location": "Nevada Desert",
        "price": 932,
        "difficulty": "All Levels",
        "bestFor": [
            "Detox",
            "Quick Reset",
            "Digital Detox"
        ],
        "startDate": "2025-11-30"
    },
    {
        "id": 69,
        "slug": "mountain-meditation-69",
        "name": "Mountain Meditation Retreat #69",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Yoga & Meditation",
        "description": "Find inner peace in the serene mountains. This 7-day extended retreat focuses on deep meditation techniques...",
        "duration": 7,
        "durationType": "Days",
        "location": "Himalayas",
        "price": 1133,
        "difficulty": "Beginner",
        "bestFor": [
            "Stress Relief",
            "Beginners",
            "Digital Detox"
        ],
        "startDate": "2025-12-20"
    },
    {
        "id": 70,
        "slug": "coastal-wellness-70",
        "name": "Coastal Wellness & Spa Retreat #70",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Wellness & Spa",
        "description": "Relax and rejuvenate by the ocean. Our 5-day program combines daily Vinyasa yoga, luxury spa treatments...",
        "duration": 5,
        "durationType": "Days",
        "location": "Goa Coast",
        "price": 1856,
        "difficulty": "All Levels",
        "bestFor": [
            "Rejuvenation",
            "Spa Lovers",
            "Luxury"
        ],
        "startDate": "2025-12-15"
    },
    {
        "id": 71,
        "slug": "jungle-adventure-71",
        "name": "Jungle Adventure Yoga #71",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Adventure & Yoga",
        "description": "Explore the jungle and deepen your practice. This is an active retreat for those who love nature...",
        "duration": 10,
        "durationType": "Days",
        "location": "Amazon",
        "price": 2420,
        "difficulty": "Intermediate",
        "bestFor": [
            "Adventure",
            "Fitness",
            "Nature"
        ],
        "startDate": "2026-01-10"
    },
    {
        "id": 72,
        "slug": "desert-detox-72",
        "name": "Desert Detox #72",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Detox & Health",
        "description": "A short, intensive detox program. Perfect for a quick reset, featuring juice fasting, guided meditation...",
        "duration": 3,
        "durationType": "Days",
        "location": "Nevada Desert",
        "price": 816,
        "difficulty": "All Levels",
        "bestFor": [
            "Detox",
            "Quick Reset",
            "Digital Detox"
        ],
        "startDate": "2025-11-30"
    },
    {
        "id": 73,
        "slug": "mountain-meditation-73",
        "name": "Mountain Meditation Retreat #73",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Yoga & Meditation",
        "description": "Find inner peace in the serene mountains. This 7-day extended retreat focuses on deep meditation techniques...",
        "duration": 7,
        "durationType": "Days",
        "location": "Himalayas",
        "price": 1150,
        "difficulty": "Beginner",
        "bestFor": [
            "Stress Relief",
            "Beginners",
            "Digital Detox"
        ],
        "startDate": "2025-12-20"
    },
    {
        "id": 74,
        "slug": "coastal-wellness-74",
        "name": "Coastal Wellness & Spa Retreat #74",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Wellness & Spa",
        "description": "Relax and rejuvenate by the ocean. Our 5-day program combines daily Vinyasa yoga, luxury spa treatments...",
        "duration": 5,
        "durationType": "Days",
        "location": "Goa Coast",
        "price": 1827,
        "difficulty": "All Levels",
        "bestFor": [
            "Rejuvenation",
            "Spa Lovers",
            "Luxury"
        ],
        "startDate": "2025-12-15"
    },
    {
        "id": 75,
        "slug": "jungle-adventure-75",
        "name": "Jungle Adventure Yoga #75",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Adventure & Yoga",
        "description": "Explore the jungle and deepen your practice. This is an active retreat for those who love nature...",
        "duration": 10,
        "durationType": "Days",
        "location": "Amazon",
        "price": 2623,
        "difficulty": "Intermediate",
        "bestFor": [
            "Adventure",
            "Fitness",
            "Nature"
        ],
        "startDate": "2026-01-10"
    },
    {
        "id": 76,
        "slug": "desert-detox-76",
        "name": "Desert Detox #76",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Detox & Health",
        "description": "A short, intensive detox program. Perfect for a quick reset, featuring juice fasting, guided meditation...",
        "duration": 3,
        "durationType": "Days",
        "location": "Nevada Desert",
        "price": 754,
        "difficulty": "All Levels",
        "bestFor": [
            "Detox",
            "Quick Reset",
            "Digital Detox"
        ],
        "startDate": "2025-11-30"
    },
    {
        "id": 77,
        "slug": "mountain-meditation-77",
        "name": "Mountain Meditation Retreat #77",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Yoga & Meditation",
        "description": "Find inner peace in the serene mountains. This 7-day extended retreat focuses on deep meditation techniques...",
        "duration": 7,
        "durationType": "Days",
        "location": "Himalayas",
        "price": 1335,
        "difficulty": "Beginner",
        "bestFor": [
            "Stress Relief",
            "Beginners",
            "Digital Detox"
        ],
        "startDate": "2025-12-20"
    },
    {
        "id": 78,
        "slug": "coastal-wellness-78",
        "name": "Coastal Wellness & Spa Retreat #78",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Wellness & Spa",
        "description": "Relax and rejuvenate by the ocean. Our 5-day program combines daily Vinyasa yoga, luxury spa treatments...",
        "duration": 5,
        "durationType": "Days",
        "location": "Goa Coast",
        "price": 1789,
        "difficulty": "All Levels",
        "bestFor": [
            "Rejuvenation",
            "Spa Lovers",
            "Luxury"
        ],
        "startDate": "2025-12-15"
    },
    {
        "id": 79,
        "slug": "jungle-adventure-79",
        "name": "Jungle Adventure Yoga #79",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Adventure & Yoga",
        "description": "Explore the jungle and deepen your practice. This is an active retreat for those who love nature...",
        "duration": 10,
        "durationType": "Days",
        "location": "Amazon",
        "price": 2497,
        "difficulty": "Intermediate",
        "bestFor": [
            "Adventure",
            "Fitness",
            "Nature"
        ],
        "startDate": "2026-01-10"
    },
    {
        "id": 80,
        "slug": "desert-detox-80",
        "name": "Desert Detox #80",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Detox & Health",
        "description": "A short, intensive detox program. Perfect for a quick reset, featuring juice fasting, guided meditation...",
        "duration": 3,
        "durationType": "Days",
        "location": "Nevada Desert",
        "price": 894,
        "difficulty": "All Levels",
        "bestFor": [
            "Detox",
            "Quick Reset",
            "Digital Detox"
        ],
        "startDate": "2025-11-30"
    },
    {
        "id": 81,
        "slug": "mountain-meditation-81",
        "name": "Mountain Meditation Retreat #81",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Yoga & Meditation",
        "description": "Find inner peace in the serene mountains. This 7-day extended retreat focuses on deep meditation techniques...",
        "duration": 7,
        "durationType": "Days",
        "location": "Himalayas",
        "price": 1147,
        "difficulty": "Beginner",
        "bestFor": [
            "Stress Relief",
            "Beginners",
            "Digital Detox"
        ],
        "startDate": "2025-12-20"
    },
    {
        "id": 82,
        "slug": "coastal-wellness-82",
        "name": "Coastal Wellness & Spa Retreat #82",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Wellness & Spa",
        "description": "Relax and rejuvenate by the ocean. Our 5-day program combines daily Vinyasa yoga, luxury spa treatments...",
        "duration": 5,
        "durationType": "Days",
        "location": "Goa Coast",
        "price": 1827,
        "difficulty": "All Levels",
        "bestFor": [
            "Rejuvenation",
            "Spa Lovers",
            "Luxury"
        ],
        "startDate": "2025-12-15"
    },
    {
        "id": 83,
        "slug": "jungle-adventure-83",
        "name": "Jungle Adventure Yoga #83",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Adventure & Yoga",
        "description": "Explore the jungle and deepen your practice. This is an active retreat for those who love nature...",
        "duration": 10,
        "durationType": "Days",
        "location": "Amazon",
        "price": 2496,
        "difficulty": "Intermediate",
        "bestFor": [
            "Adventure",
            "Fitness",
            "Nature"
        ],
        "startDate": "2026-01-10"
    },
    {
        "id": 84,
        "slug": "desert-detox-84",
        "name": "Desert Detox #84",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Detox & Health",
        "description": "A short, intensive detox program. Perfect for a quick reset, featuring juice fasting, guided meditation...",
        "duration": 3,
        "durationType": "Days",
        "location": "Nevada Desert",
        "price": 932,
        "difficulty": "All Levels",
        "bestFor": [
            "Detox",
            "Quick Reset",
            "Digital Detox"
        ],
        "startDate": "2025-11-30"
    },
    {
        "id": 85,
        "slug": "mountain-meditation-85",
        "name": "Mountain Meditation Retreat #85",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Yoga & Meditation",
        "description": "Find inner peace in the serene mountains. This 7-day extended retreat focuses on deep meditation techniques...",
        "duration": 7,
        "durationType": "Days",
        "location": "Himalayas",
        "price": 1083,
        "difficulty": "Beginner",
        "bestFor": [
            "Stress Relief",
            "Beginners",
            "Digital Detox"
        ],
        "startDate": "2025-12-20"
    },
    {
        "id": 86,
        "slug": "coastal-wellness-86",
        "name": "Coastal Wellness & Spa Retreat #86",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Wellness & Spa",
        "description": "Relax and rejuvenate by the ocean. Our 5-day program combines daily Vinyasa yoga, luxury spa treatments...",
        "duration": 5,
        "durationType": "Days",
        "location": "Goa Coast",
        "price": 1903,
        "difficulty": "All Levels",
        "bestFor": [
            "Rejuvenation",
            "Spa Lovers",
            "Luxury"
        ],
        "startDate": "2025-12-15"
    },
    {
        "id": 87,
        "slug": "jungle-adventure-87",
        "name": "Jungle Adventure Yoga #87",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Adventure & Yoga",
        "description": "Explore the jungle and deepen your practice. This is an active retreat for those who love nature...",
        "duration": 10,
        "durationType": "Days",
        "location": "Amazon",
        "price": 2521,
        "difficulty": "Intermediate",
        "bestFor": [
            "Adventure",
            "Fitness",
            "Nature"
        ],
        "startDate": "2026-01-10"
    },
    {
        "id": 88,
        "slug": "desert-detox-88",
        "name": "Desert Detox #88",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Detox & Health",
        "description": "A short, intensive detox program. Perfect for a quick reset, featuring juice fasting, guided meditation...",
        "duration": 3,
        "durationType": "Days",
        "location": "Nevada Desert",
        "price": 930,
        "difficulty": "All Levels",
        "bestFor": [
            "Detox",
            "Quick Reset",
            "Digital Detox"
        ],
        "startDate": "2025-11-30"
    },
    {
        "id": 89,
        "slug": "mountain-meditation-89",
        "name": "Mountain Meditation Retreat #89",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Yoga & Meditation",
        "description": "Find inner peace in the serene mountains. This 7-day extended retreat focuses on deep meditation techniques...",
        "duration": 7,
        "durationType": "Days",
        "location": "Himalayas",
        "price": 1285,
        "difficulty": "Beginner",
        "bestFor": [
            "Stress Relief",
            "Beginners",
            "Digital Detox"
        ],
        "startDate": "2025-12-20"
    },
    {
        "id": 90,
        "slug": "coastal-wellness-90",
        "name": "Coastal Wellness & Spa Retreat #90",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Wellness & Spa",
        "description": "Relax and rejuvenate by the ocean. Our 5-day program combines daily Vinyasa yoga, luxury spa treatments...",
        "duration": 5,
        "durationType": "Days",
        "location": "Goa Coast",
        "price": 1787,
        "difficulty": "All Levels",
        "bestFor": [
            "Rejuvenation",
            "Spa Lovers",
            "Luxury"
        ],
        "startDate": "2025-12-15"
    },
    {
        "id": 91,
        "slug": "jungle-adventure-91",
        "name": "Jungle Adventure Yoga #91",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Adventure & Yoga",
        "description": "Explore the jungle and deepen your practice. This is an active retreat for those who love nature...",
        "duration": 10,
        "durationType": "Days",
        "location": "Amazon",
        "price": 2420,
        "difficulty": "Intermediate",
        "bestFor": [
            "Adventure",
            "Fitness",
            "Nature"
        ],
        "startDate": "2026-01-10"
    },
    {
        "id": 92,
        "slug": "desert-detox-92",
        "name": "Desert Detox #92",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Detox & Health",
        "description": "A short, intensive detox program. Perfect for a quick reset, featuring juice fasting, guided meditation...",
        "duration": 3,
        "durationType": "Days",
        "location": "Nevada Desert",
        "price": 894,
        "difficulty": "All Levels",
        "bestFor": [
            "Detox",
            "Quick Reset",
            "Digital Detox"
        ],
        "startDate": "2025-11-30"
    },
    {
        "id": 93,
        "slug": "mountain-meditation-93",
        "name": "Mountain Meditation Retreat #93",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Yoga & Meditation",
        "description": "Find inner peace in the serene mountains. This 7-day extended retreat focuses on deep meditation techniques...",
        "duration": 7,
        "durationType": "Days",
        "location": "Himalayas",
        "price": 1083,
        "difficulty": "Beginner",
        "bestFor": [
            "Stress Relief",
            "Beginners",
            "Digital Detox"
        ],
        "startDate": "2025-12-20"
    },
    {
        "id": 94,
        "slug": "coastal-wellness-94",
        "name": "Coastal Wellness & Spa Retreat #94",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Wellness & Spa",
        "description": "Relax and rejuvenate by the ocean. Our 5-day program combines daily Vinyasa yoga, luxury spa treatments...",
        "duration": 5,
        "durationType": "Days",
        "location": "Goa Coast",
        "price": 1903,
        "difficulty": "All Levels",
        "bestFor": [
            "Rejuvenation",
            "Spa Lovers",
            "Luxury"
        ],
        "startDate": "2025-12-15"
    },
    {
        "id": 95,
        "slug": "jungle-adventure-95",
        "name": "Jungle Adventure Yoga #95",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Adventure & Yoga",
        "description": "Explore the jungle and deepen your practice. This is an active retreat for those who love nature...",
        "duration": 10,
        "durationType": "Days",
        "location": "Amazon",
        "price": 2521,
        "difficulty": "Intermediate",
        "bestFor": [
            "Adventure",
            "Fitness",
            "Nature"
        ],
        "startDate": "2026-01-10"
    },
    {
        "id": 96,
        "slug": "desert-detox-96",
        "name": "Desert Detox #96",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Detox & Health",
        "description": "A short, intensive detox program. Perfect for a quick reset, featuring juice fasting, guided meditation...",
        "duration": 3,
        "durationType": "Days",
        "location": "Nevada Desert",
        "price": 930,
        "difficulty": "All Levels",
        "bestFor": [
            "Detox",
            "Quick Reset",
            "Digital Detox"
        ],
        "startDate": "2025-11-30"
    },
    {
        "id": 97,
        "slug": "mountain-meditation-97",
        "name": "Mountain Meditation Retreat #97",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Yoga & Meditation",
        "description": "Find inner peace in the serene mountains. This 7-day extended retreat focuses on deep meditation techniques...",
        "duration": 7,
        "durationType": "Days",
        "location": "Himalayas",
        "price": 1285,
        "difficulty": "Beginner",
        "bestFor": [
            "Stress Relief",
            "Beginners",
            "Digital Detox"
        ],
        "startDate": "2025-12-20"
    },
    {
        "id": 98,
        "slug": "coastal-wellness-98",
        "name": "Coastal Wellness & Spa Retreat #98",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Wellness & Spa",
        "description": "Relax and rejuvenate by the ocean. Our 5-day program combines daily Vinyasa yoga, luxury spa treatments...",
        "duration": 5,
        "durationType": "Days",
        "location": "Goa Coast",
        "price": 1787,
        "difficulty": "All Levels",
        "bestFor": [
            "Rejuvenation",
            "Spa Lovers",
            "Luxury"
        ],
        "startDate": "2POST-12-15"
    },
    {
        "id": 99,
        "slug": "jungle-adventure-99",
        "name": "Jungle Adventure Yoga #99",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Adventure & Yoga",
        "description": "Explore the jungle and deepen your practice. This is an active retreat for those who love nature...",
        "duration": 10,
        "durationType": "Days",
        "location": "Amazon",
        "price": 2420,
        "difficulty": "Intermediate",
        "bestFor": [
            "Adventure",
            "Fitness",
            "Nature"
        ],
        "startDate": "2026-01-10"
    },
    {
        "id": 100,
        "slug": "desert-detox-100",
        "name": "Desert Detox #100",
        "image": "/img/courses/courses-3.jpeg",
        "type": "Detox & Health",
        "description": "A short, intensive detox program. Perfect for a quick reset, featuring juice fasting, guided meditation...",
        "duration": 3,
        "durationType": "Days",
        "location": "Nevada Desert",
        "price": 894,
        "difficulty": "All Levels",
        "bestFor": [
            "Detox",
            "Quick Reset",
            "Digital Detox"
        ],
        "startDate": "2025-11-30"
    }
];

// --- DYNAMIC FILTER GENERATION ---

/**
 * Creates a unique, sorted list of filters from the data
 * @param {Array} data - The array of retreats
 * @param {string} key - The property key to extract (e.g., 'type')
 * @returns {Array<{id: string, label: string}>}
 */
function createFilter(data, key) {
    const uniqueItems = new Set(data.map(item => item[key]));
    return Array.from(uniqueItems)
        .sort()
        .map(item => ({
            id: item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-'), // 'Yoga & Meditation' -> 'yoga-meditation'
            label: item,
        }));
}

/**
 * Creates a unique, sorted list of tag-style filters from nested arrays
 * @param {Array} data - The array of retreats
 * @param {string} key - The property key holding an array (e.g., 'bestFor')
 * @returns {Array<{id: string, label: string}>}
 */
function createTagFilter(data, key) {
    const allItems = new Set(data.flatMap(item => item[key]));
    return Array.from(allItems)
        .sort()
        .map(item => ({
            id: item.toLowerCase().replace(/ /g, '-'), // 'Stress Relief' -> 'stress-relief'
            label: item,
        }));
}

/**
 * Gets all filters needed for the sidebar
 * @param {Array} retreats - The full list of retreats
 * @returns {Object}
 */
export const getFilters = (retreats) => {
    return {
        categories: createFilter(retreats, 'type'),
        difficulties: createFilter(retreats, 'difficulty'),
        tags: createTagFilter(retreats, 'bestFor'),
    };
};

// --- STATIC FILTERS ---
// These are not derived from data, but are static definitions
export const priceFilters = [
    { id: 'free', label: 'Free', min: 0, max: 0 },
    { id: '0-1000', label: '$0 - $1,000', min: 0, max: 1000 },
    { id: '1001-2000', label: '$1,001 - $2,000', min: 1001, max: 2000 },
    { id: '2000+', label: 'Above $2,000', min: 2001, max: Infinity },
];