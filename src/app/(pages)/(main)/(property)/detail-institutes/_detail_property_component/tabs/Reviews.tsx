// app/institutes/[detail]/_detail_property_component/tabs/Reviews.tsx
'use client';
import { useState } from "react";
import { Star } from "lucide-react";

export default function Reviews() {
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(0);

  const handleRating = (value: number) => {
    setRating(value);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-6">

      {!showForm && (
        <div className=" p-6 flex justify-between items-center">
          <div>
            <h3 className="text-4xl font-bold text-gray-900">0.0</h3>
            <div className="flex mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-gray-300" />
              ))}
            </div>
            <p className="text-gray-500 mt-2">Based on 0 reviews</p>
          </div>

          <div className="space-y-2 w-1/2">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center text-gray-700">
                <span className="w-6">{star}</span>
                <Star className="w-5 h-5 text-yellow-400 ml-1" fill="currentColor" />
                <div className="w-full bg-gray-200 h-2 rounded ml-2">
                  <div className="h-2 bg-yellow-400 rounded w-0"></div>
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
            className="px-6 py-2 rounded-lg bg-white cursor-pointer text-purple-600 font-medium shadow hover:bg-purple-50"
          >
            Cancel Review
          </button>
        ) : (
          <button
            onClick={() => setShowForm(true)}
            className="px-6 py-2 rounded-xl text-white font-medium shadow bg-purple-600 hover:bg-purple-700"
          >
            Write a Review
          </button>
        )}
      </div>

      {showForm && (
        <form className="mt-8 space-y-4">
          <h3 className="text-xl font-bold text-gray-800">
            Share Your Experience
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name *"
              className="shadow-sm rounded-lg p-3 w-full"
              required
            />
            <input
              type="email"
              placeholder="Email Address *"
              className="shadow-sm rounded-lg p-3 w-full"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              placeholder="Phone Number *"
              className="shadow-sm rounded-lg p-3 w-full"
              required
            />
            <div className="flex items-center space-x-2">
              <span className="text-gray-700">Your Rating *</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    onClick={() => handleRating(star)}
                    className={`w-6 h-6 cursor-pointer ${
                      rating >= star
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <textarea
            placeholder="Share your detailed experience..."
            rows={4}
            className="shadow-sm rounded-lg p-3 w-full"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-medium shadow-lg"
          >
            Submit Review
          </button>
        </form>
      )}
    </div>
  );
}