"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const institutes = [
  {
    category: "Academic Degrees",
    name: "Master's Degree in Yoga",
    level: "Advanced",
    duration: "2 years",
    type: "Degree",
    image:
      "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    category: "Professional Certification Courses",
    name: "200 Hour Yoga Teacher Training",
    level: "Intermediate",
    duration: "200 hours",
    type: "Certificate",
    image:
      "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    category: "Academic Degrees",
    name: "Bachelor's Degree in Yoga Science",
    level: "Beginner",
    duration: "3 years",
    type: "Degree",
    image:
      "https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    category: "Professional Certification Courses",
    name: "Yoga Therapy & Wellness Certification",
    level: "Advanced",
    duration: "6 months",
    type: "Certificate",
    image:
      "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    category: "Professional Certification Courses",
    name: "Prenatal Yoga Instructor Program",
    level: "Intermediate",
    duration: "3 months",
    type: "Certificate",
    image:
      "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const RelatedInstitutes: React.FC = () => {
  return (
    <section className="relative p-5 bg-[var(--primary-bg)] text-[var(--primary-text)] rounded-custom overflow-hidden shadow-custom">
      <div className="absolute bg-[var(--primary-bg)] text-[var(--primary-text)] pointer-events-none"></div>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="sub-heading text-[var(--secondary-text)] font-bold mb-5"
      >
        Explore Related Yoga Institutes
      </motion.h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={40}
        slidesPerView={1.2}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={5000}
        freeMode={true}
        grabCursor={true}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3 },
        }}
        className="cursor-grab"
      >
        {institutes.map((institute, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative aspect-[2/1] h-25 bg-[var(--secondary-bg)] shadow-custom my-2 backdrop-blur-xl rounded-custom transition-all duration-500 flex overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={institute.image}
                  alt={institute.name}
                  className="h-25 w-full object-cover  aspect-[2/1]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="py-3 px-1 text-center relative z-10">
                <h4 className="text-xs text-[var(--secondary-text)] mb-1">
                  {institute.name}
                </h4>
                <p className="mb-4">{institute.level}</p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default RelatedInstitutes;
