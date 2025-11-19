'use client'
import RetreatDetails from "./retreat/RetreatDetails";
import InstitutesPage from "./retreatrelated/page";

const sampleRetreat = {
  id: 1,
  name: "Mindfulness & Digital Detox in the Swiss Alps",
  description: "A deeply restorative retreat designed to disconnect from technology and reconnect with nature and inner peace. Spend 7 days in a secluded chalet practicing daily meditation, gentle yoga, and mindful hiking7 days in a secluded chalet practicing daily meditation, gentle yoga, and mindful hiking7 days in a secluded chalet practicing daily meditation, gentle yoga, and mindful hiking7 days in a secluded chalet practicing daily meditation, gentle yoga, and mindful hiking7 days in a secluded chalet practicing daily meditation, gentle yoga, and mindful hiking7 days in a secluded chalet practicing daily meditation, gentle yoga, and mindful hiking.",
  image: "/img/retreat-img/retreat-1.jpg",
  type: "Meditation & Wellness",
  location: "Zermatt, Swiss Alps, Switzerland",
  accommodation: "Private mountain chalet with single and shared room options.",
  priceMin: 1800,
  priceMax: 2500,
  startDate: "Oct 15, 2026",
  endDate: "Oct 22, 2026",
  duration: 7,
  durationType: "Days",
  bookingDeadline: "Sep 1, 2026",
  difficulty: "Beginner/Intermediate",
  certification: "No (Personal Growth)",
  format: "In-person immersion",
  bestFor: ["Stress Reduction", "Inner Peace", "Nature Lovers"],
  languages: ["English", "German"],
  capacity: 15,
  keyOutcomes: [
    "Mastering basic mindfulness techniques for daily life.",
    "Improved sleep quality and reduced anxiety levels.",
    "A personalized digital detox plan to maintain balance post-retreat.",
    "Deeper connection to the body through gentle movement.",
  ],
  requirements: [
    "No prior experience required.",
    "Ability to hike 1-2 hours per day.",
    "Commitment to storing digital devices.",
  ],
  inclusion: [
    "7 nights accommodation in the chalet.",
    "All organic, vegetarian meals (breakfast, lunch, dinner).",
    "Daily guided meditation and yoga sessions.",
    "Guided mindful hikes and nature walks.",
    "Workshop materials and personalized journal.",
  ],
  exclusion: [
    "Flights and airport transfers.",
    "Travel insurance.",
    "Optional massage treatments.",
  ],
};

export default function App() {
  return (
    <>
      <RetreatDetails retreat={sampleRetreat} />
      <InstitutesPage />
    </>
  );
}
