// lib/data.ts

// 1. Define the types for your data
export type Event = {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
  category: string;
  description: string;
  attendees: number;
};

export type Filter = {
  id: string;
  label: string;
  count: number;
};

// 2. Store your static event data
export const allEvents: Event[] = [
  {
    id: 1,
    title: "Advanced Hatha Yoga Workshop",
    date: "15 Jan, 2024",
    location: "New Delhi",
    image: "/img/events-img/partner-1.jpg",
    category: "Workshop",
    description: "Master the fundamentals of Hatha Yoga with experienced instructors in this comprehensive workshop.",
    attendees: 45
  },
  {
    id: 2,
    title: "Mindfulness Meditation Retreat",
    date: "22 Jan, 2024",
    location: "Rishikesh",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "A transformative 3-day retreat focusing on mindfulness practices and inner peace.",
    attendees: 30
  },
  {
    id: 3,
    title: "Yoga Philosophy Seminar",
    date: "28 Jan, 2024",
    location: "Mumbai",
    image: "/img/events-img/partner-1.jpg",
    category: "Seminar",
    description: "Explore the ancient wisdom and philosophical foundations of yoga practice.",
    attendees: 60
  },
  {
    id: 4,
    title: "Pranayama Breathing Workshop",
    date: "05 Feb, 2024",
    location: "Bangalore",
    image: "/img/events-img/partner-1.jpg",
    category: "Workshop",
    description: "Learn powerful breathing techniques to enhance your yoga practice and daily life.",
    attendees: 25
  },
  {
    id: 5,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  },
  {
    id: 6,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  },
  {
    id: 7,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 8,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  },
  {
    id: 9,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  },
  {
    id: 10,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  },
  {
    id: 11,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  },
  {
    id: 12,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  },
  {
    id: 13,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 14,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 14,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 15,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 16,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 17,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 18,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 19,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 20,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 21,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 22,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 23,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 24,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 25,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 26,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 27,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 28,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 29,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 30,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  },
   {
    id: 32,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 33,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 34,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 35,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 36,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 37,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 38,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 39,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 40,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 41,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 42,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 43,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 44,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 45,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 46,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 47,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 48,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 49,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 50,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 51,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 52,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 53,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 54,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 55,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 56,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 57,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 58,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 59,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  }, {
    id: 60,
    title: "Yoga Teacher Training",
    date: "10 Mar, 2024",
    location: "Dharamshala",
    image: "/img/events-img/partner-1.jpg",
    category: "Retreat",
    description: "Comprehensive 200-hour yoga teacher training certification program.",
    attendees: 15
  },
];

// 3. Helper function to dynamically generate filter counts
export const getFilters = (events: Event[]): Filter[] => {
  const categories = {
    Workshop: 0,
    Retreat: 0,
    Seminar: 0,
  };

  for (const event of events) {
    if (event.category in categories) {
      categories[event.category]++;
    }
  }

  return [
    { id: 'all', label: 'All Events', count: events.length },
    { id: 'workshop', label: 'Workshops', count: categories.Workshop },
    { id: 'retreat', label: 'Retreats', count: categories.Retreat },
    { id: 'seminar', label: 'Seminars', count: categories.Seminar },
  ];
};