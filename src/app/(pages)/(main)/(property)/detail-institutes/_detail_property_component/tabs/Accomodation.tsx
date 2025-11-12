// app/institutes/[detail]/_detail_property_component/tabs/Accomodation.tsx
'use client';
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const accommodations = [
  {
    name: "Luxury Hotel",
    price: "₹6,500 / night",
    description: "A premium stay with spa, swimming pool, and fine dining.",
    images: [
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    name: "Budget Hostel",
    price: "₹800 / night",
    description: "Affordable dorm-style rooms with Wi-Fi and shared kitchen.",
    images: [
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    name: "Yoga Retreat",
    price: "₹2,500 / night",
    description: "Stay close to nature with yoga sessions and healthy meals.",
    images: [
      "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
];

export default function AccommodationPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentAccIndex, setCurrentAccIndex] = useState<number | null>(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  return (
    <div className="space-y-6 p-5 text-[var(--primary-text)]">
      <h2 className="heading font-bold">
        Accommodation Options
      </h2>
      <div className="space-y-6 max-w-6xl mx-auto">
        {accommodations.map((acc, accIndex) => (
          <div
            key={accIndex}
            className="bg-[var(--secondary-bg)] p-5 rounded-custom shadow-custom transition"
          >
            <h3 className="sub-heading font-semibold text-[var(--text-hover-color)]">
              {acc.name}
            </h3>
            <p className="mt-2 font-medium">{acc.price}</p>
            <p>{acc.description}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
              {acc.images.slice(0, 8).map((img, imgIndex) => (
                <img
                  key={imgIndex}
                  src={img}
                  alt={`${acc.name} ${imgIndex + 1}`}
                  className="w-full h-32 object-cover rounded-custom cursor-pointer hover:scale-105 transition"
                  onClick={() => {
                    setCurrentAccIndex(accIndex);
                    setCurrentImgIndex(imgIndex);
                    setLightboxOpen(true);
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {currentAccIndex !== null && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={currentImgIndex}
          slides={accommodations[currentAccIndex].images.map((src) => ({
            src,
          }))}
        />
      )}
    </div>
  );
}