// data/lib/data.ts

// --- UPDATED EVENT TYPE ---
export type Event = {
  id: string;
  title: string;
  description: string;
  date: string; // User-facing display date
  category: string;
  location: string;
  attendees: number;
  image: string;
  dateFilter?: 'today' | 'tomorrow' | 'weekend'; // Property for date filtering
  price: number;
  tags: string[]; // <-- ADDED: For "More Filters"
};

export type Filter = {
  id: string;
  label: string;
  count: number;
};

// --- UPDATED DUMMY DATA ---

export const allEvents: Event[] = [
  {
    id: '1',
    title: 'Sunrise Yoga Session',
    description: 'Start your day with a revitalizing yoga session as the sun rises.',
    date: 'Today, 6:00 AM',
    category: 'Yoga',
    location: 'Marina Beach',
    attendees: 45,
    image: '/images/events/event-1.jpg',
    dateFilter: 'today',
    price: 499,
    tags: ['Outdoor Events', 'Must Attend'], // <-- ADDED
  },
  {
    id: '2',
    title: 'Advanced Meditation Workshop',
    description: 'Explore deep meditation techniques with our guest guru.',
    date: 'Tomorrow, 10:00 AM',
    category: 'Workshop',
    location: 'Peaceful Mind Center',
    attendees: 20,
    image: '/images/events/event-2.jpg',
    dateFilter: 'tomorrow',
    price: 1500,
    tags: ['Masterclass', 'Unmissable Events'], // <-- ADDED
  },
  {
    id: '3',
    title: 'Community Laughing Yoga',
    description: 'Join us for a fun-filled session of laughing yoga for all ages.',
    date: 'This Saturday, 5:00 PM',
    category: 'Yoga',
    location: 'Central Park',
    attendees: 120,
    image: '/images/events/event-3.jpg',
    dateFilter: 'weekend',
    price: 0,
    tags: ['Outdoor Events', 'Kids Allowed'], // <-- ADDED
  },
  {
    id: '4',
    title: 'Wellness & Nutrition Fair',
    description: 'Discover local wellness brands and healthy food stalls.',
    date: 'This Sunday, 11:00 AM',
    category: 'Exhibition',
    location: 'City Convention Hall',
    attendees: 300,
    image: '/images/events/event-4.jpg',
    dateFilter: 'weekend',
    price: 2500,
    tags: ['Fast Filling', 'Unmissable Events'], // <-- ADDED
  },
  {
    id: '5',
    title: 'Silent Retreat Opening',
    description: 'Begin your journey of silence and self-discovery.',
    date: 'Next Friday, 7:00 PM',
    category: 'Retreat',
    location: 'Silent Valley Institute',
    attendees: 30,
    image: '/images/events/event-5.jpg',
    price: 5000,
    tags: ['Must Attend'], // <-- ADDED
  },
  {
    id: '6',
    title: 'Kids Yoga & Crafts',
    description: 'A playful and creative yoga session for children aged 5-10.',
    date: 'This Saturday, 10:00 AM',
    category: 'Kids',
    location: 'Little Sprouts Studio',
    attendees: 25,
    image: '/images/events/event-6.jpg',
    dateFilter: 'weekend',
    price: 350,
    tags: ['Kids Activities', 'Kids Allowed'], // <-- ADDED
  },
  {
    id: '7',
    title: 'Stand-up Comedy Night',
    description: 'Laugh your heart out with the best comedians in town.',
    date: 'Tomorrow, 8:00 PM',
    category: 'Comedy',
    location: 'The Comedy Club',
    attendees: 75,
    image: '/images/events/event-7.jpg',
    dateFilter: 'tomorrow',
    price: 799,
    tags: ['Must Attend'], // <-- ADDED
  },
  {
    id: '8',
    title: 'Classical Music Concert',
    description: 'An evening of mesmerizing classical music performances.',
    date: 'Today, 7:30 PM',
    category: 'Music',
    location: 'Grand Symphony Hall',
    attendees: 150,
    image: '/images/events/event-8.jpg',
    dateFilter: 'today',
    price: 2200,
    tags: ['Unmissable Events'], // <-- ADDED
  },
  {
    id: '9',
    title: 'New Year Eve Party',
    description: 'Ring in the new year with music, dance, and celebration.',
    date: 'Dec 31, 9:00 PM',
    category: 'Music',
    location: 'The Grand Hotel',
    attendees: 500,
    image: '/images/events/event-9.jpg',
    price: 4500,
    tags: ['New Year Parties', 'Fast Filling'], // <-- ADDED
  },
  {
    id: '10',
    title: 'Online Streaming: Yoga Basics',
    description: 'Learn the fundamentals of yoga from the comfort of your home.',
    date: 'Starts Today',
    category: 'workplace',
    location: 'Online',
    attendees: 1500,
    image: '/images/events/event-10.jpg',
    price: 999,
    tags: ['Online Streaming', 'Masterclass'], // <-- ADDED
  },
];

// --- DUMMY FILTERS (CATEGORIES) ---
// (This logic remains the same)
const categoryCounts = allEvents.reduce((acc, event) => {
  const cat = event.category.toLowerCase();
  acc[cat] = (acc[cat] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

export const allFilters: Filter[] = [
  { id: 'all', label: 'All Events', count: allEvents.length },
  ...Object.entries(categoryCounts).map(([id, count]) => ({
    id,
    label: id.charAt(0).toUpperCase() + id.slice(1), // Capitalize
    count,
  })),
];