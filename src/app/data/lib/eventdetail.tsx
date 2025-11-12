// This object holds all your event data.
// In a real app, this would come from a database or CMS.
const allEvents = [
  {
    id: 1,
    title: "Advanced Hatha Yoga Workshop",
    description: `Join us for a full-day Advanced Hatha Yoga Workshop where you'll deepen your practice and explore advanced poses, pranayama techniques, and meditation. Suitable for intermediate practitioners, this workshop offers hands-on guidance from Yoga Guru Ram and a certificate upon completion.`,
    date: "15 Jan, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "New Delhi, India",
    venue: "Yoga Wellness Center, Connaught Place",
    image:
      "/img/blog-img/blog-1.png",
    category: "Workshop",
    price: "₹2,500",
    attendees: 45,
    maxAttendees: 60,
    rating: 4.8,
    reviews: 124,
    language: ["Hindi", "English"],
    entranceType: "Paid",
    host: "Yoga Guru Ram",
    ticketBooking: {
      startDate: "01 Jan, 2024",
      endDate: "14 Jan, 2024",
    },
    ageLimit: "18+",
    partners: [
      {
        id: 1,
        name: "Partner One",
        image: "/img/events-img/partner-1.jpg",
      },
      {
        id: 2,
        name: "Partner Two",
        image: "/img/events-img/partner-1.jpg",
      },
      {
        id: 3,
        name: "Partner Three",
        image: "/img/events-img/partner-1.jpg",
      },
      {
        id: 4,
        name: "Partner Four",
        image: "/img/events-img/partner-1.jpg",
      },
    ],
    highlights: [
      "Traditional Hatha Yoga sequences Traditional Hatha Yoga sequences",
      "Pranayama breathing techniques",
      "Meditation and mindfulness practices",
      "Proper alignment and posture correction",
      "Take-home practice guide",
      "Certificate of completion",
    ],
    requirements: [
      "Suitable for intermediate level practitioners Suitable for intermediate level practitioners",
      "Bring your own yoga mat",
      "Comfortable clothing recommended",
      "Water bottle and towel",
    ],
  },
  // You could add more events here, e.g., { id: 2, ... }
];

// Simulate an async data fetch function
export const getEventById = async (id) => {
  // Find the event in our "database"
  // We use parseInt because the 'id' from params will be a string
  const event = allEvents.find((e) => e.id === parseInt(id, 10));
  return event;
};