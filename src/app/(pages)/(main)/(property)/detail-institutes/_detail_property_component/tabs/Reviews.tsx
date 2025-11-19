'use client';

import { useState } from "react";
import { Star } from "lucide-react";
import { InputGroup, TextareaGroup } from "@/common/FormComponents";
import { ButtonGroup } from "@/common/ButtonGroup";

export default function Reviews() {
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(0);

  const handleRating = (value: number) => {
    setRating(value);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 mt-6 text-[var(--primary-text)]">

      {!showForm && (
        <div className=" p-6 flex justify-between items-center">
          <div>
            <h3 className="text-4xl font-bold">0.0</h3>
            <div className="flex mt-2 ">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-[var(--warning-color)] " />
              ))}
            </div>
            <p className="mt-2">Based on 0 reviews</p>
          </div>

          <div className="space-y-2 w-1/2">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center">
                <span className="w-6">{star}</span>
                <Star className="w-5 h-5 text-[var(--warning-color)] ml-1" fill="currentColor" />
                <div className="w-full bg-[var(--primary-border)] h-2 rounded ml-2">
                  <div className="h-2 bg-[var(--warning-color)] rounded w-10"></div>
                </div>
                <span className="ml-2 text-sm">0%</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-center mt-6">
        {showForm ? (
          <button
            onClick={() => setShowForm(false)}
            className="bg-[var(--text-hover-color)] text-[var(--text-color-primary)] px-4 py-2 rounded-lg cursor-pointer
             hover:shadow-sm hover:scale-105 active:scale-95 
             transition-all duration-300 ease-in-out 
             animate-fadeIn"
          >
            Cancel Review
          </button>
        ) : (
          <button
            onClick={() => setShowForm(true)}
            className="bg-[var(--text-hover-color)] text-[var(--text-color-primary)] px-4 py-2 rounded-lg cursor-pointer
             hover:shadow-sm hover:scale-105 active:scale-95 
             transition-all duration-300 ease-in-out 
             animate-fadeIn"
          >
            Write a Review
          </button>
        )}
      </div>

      {showForm && (
        <form className="mt-8 space-y-4">
          <h3 className="heading font-semibold">
            Share Your Experience
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputGroup
              label="Your Name"
              type="text"
            />
            <InputGroup
              label="email"
              type="text"
            />
            <InputGroup
              label="Phone Number"
              type="tel"
            />
            <div className="space-y-1 ">
              <p>Your Rating</p>
              <div className="flex px-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    onClick={() => handleRating(star)}
                    className={`w-6 h-6  cursor-pointer ${rating >= star
                      ? "text-[var(--warning-color)] fill-[var(--warning-color)]"
                      : "text-[var(--primary-border)]"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <TextareaGroup
            label="Your Review"
            id="review"
          />

          <ButtonGroup
            label="Send Enquiry"
            type="submit"
          />
        </form>
      )}
    </div>
  );
}