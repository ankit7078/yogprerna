// app/retreats/page.js
'use client'; // Keep this if you plan to add client-side interactions

import Image from 'next/image';
import Link from 'next/link';
// Import the icons
import { FaCalendarAlt, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

// --- Updated Mock Data ---
// I've added 'slug' for the URL and 'location' for the new icon
const retreatsData = [
  {
    id: 1,
    name: 'Mountain Meditation',
    slug: 'mountain-meditation', // For the URL
    duration: '7 Days',
    type: 'Yoga & Meditation',
    location: 'Himalayas',
    description: 'Find inner peace in the serene mountains. This extended retreat focuses on deep meditation techniques and mindful living, surrounded by breathtaking peaks.',
    image: '/img/courses/courses-3.jpeg' // Assuming you have this in /public/img/courses/
  },
  {
    id: 2,
    name: 'Coastal Wellness',
    slug: 'coastal-wellness',
    duration: '5 Days',
    type: 'Wellness & Spa',
    location: 'Goa Coast',
    description: 'Relax and rejuvenate by the ocean. Our program combines daily yoga, spa treatments, and healthy cuisine to reset your body and mind.',
    image: '/img/courses/courses-3.jpeg'
  },
  {
    id: 3,
    name: 'Jungle Adventure',
    slug: 'jungle-adventure',
    duration: '10 Days',
    type: 'Adventure & Yoga',
    location: 'Amazon',
    description: 'Explore the jungle and deepen your practice. This is an active retreat for those who love nature, hiking, and dynamic yoga sessions.',
    image: '/img/courses/courses-3.jpeg'
  },
  {
    id: 4,
    name: 'Desert Detox',
    slug: 'desert-detox',
    duration: '3 Days',
    type: 'Detox & Health',
    location: 'Nevada Desert',
    description: 'A short, intensive detox program. Perfect for a quick reset, featuring juice fasting, guided meditation, and digital detoxing in a calm environment.',
    image: '/img/courses/courses-3.jpeg'
  }
];

// --- The Page Component ---
export default function RetreatsPage() {
  return (
    <main className="min-h-screen p-5">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {retreatsData.map((retreat) => (
            <Link 
              href={`/retreats/${retreat.slug}`} 
              key={retreat.id} 
              className="group block rounded-lg overflow-hidden shadow-custom bg-[var(--secondary-bg)] "
            >
              <div className="relative w-full aspect-video">
                <Image
                  src={retreat.image}
                  alt={retreat.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 hover:scale-105"
                />
                    <div className="absolute bottom-3 left-3 bg-[var(--text-hover-color)] text-[var(--text-color-primary)] text-xs px-3 py-1 rounded-full shadow-custom">
                {retreat.type}
              </div>
              </div>
              
              {/* --- Card Content --- */}
              <div className="p-5">                
                {/* Title */}
                <h3 className="heading font-semibold text-gray-900 mb-1 transition-colors duration-200 group-hover:text-[var(--text-hover-color)]">
                  {retreat.name}
                </h3>
                {/* Description with 3-line clamp */}
                <p className="text-gray-600 text-base  line-clamp-3">
                  {retreat.description}
                </p>
                
                {/* Divider */}
                <div className="border-t border-gray-100 pt-4 mt-4">
                  {/* Icons Section */}
                  <div className="flex items-center justify-between text-gray-600 text-sm">
                    <div className="flex items-center space-x-4">
                      {/* Duration Icon */}
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-1.5 text-[var(--text-hover-color)]" />
                        <span>{retreat.duration}</span>
                      </div>
                      
                      {/* Location Icon */}
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-1.5 text-[var(--text-hover-color)]" />
                        <span>{retreat.location}</span>
                      </div>
                    </div>
                    
                    {/* View Details Arrow */}
                    <span className="flex items-center text-[var(--text-hover-color)] font-medium">
                      View Details
                      <FaArrowRight className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>

                  </div>
                </div>
              </div>
            </Link>
          ))}
          
        </div>
      </div>
    </main>
  );
}