// app/institutes/[detail]/_detail_property_component/tabs/Faqs.tsx
'use client';
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What makes your yoga teacher training program unique in Rishikesh?",
    answer:
      "Our program combines traditional yoga practices with modern teaching methods, guided by experienced yoga teachers in the heart of Rishikesh.",
  },
  {
    question: "What qualifications do your yoga teachers have?",
    answer:
      "All our teachers are certified yoga instructors with years of teaching and personal practice experience.",
  },
  {
    question: "What is the daily schedule like during the yoga teacher training program?",
    answer:
      "A typical day includes morning yoga practice, theory classes, meditation sessions, and workshops on teaching methodology.",
  },
  {
    question: "How long does the yoga teacher training program last?",
    answer:
      "Our standard Yoga Teacher Training Course lasts 28 days, with options for shorter retreats as well.",
  },
  {
    question: "What types of yoga are taught in the program?",
    answer:
      "We primarily focus on Hatha Yoga and Ashtanga Vinyasa, along with Pranayama, Meditation, and Yoga Philosophy.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" ">
      <div className=" w-full bg-white  rounded-2xl p-6">
        <h2 className="text-xl font-bold text-left text-gray-800 mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-left text-gray-500 mb-6">
          Find answers to common questions about our institute
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl shadow-xs"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full p-4 text-left font-medium text-gray-800 hover:bg-purple-50 rounded-xl"
              >
                {faq.question}
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-purple-600" />
                ) : (
                  <Plus className="w-5 h-5 text-purple-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600 animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}