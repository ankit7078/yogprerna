// app/institutes/[detail]/_detail_property_component/Enquiry.tsx
'use client';
import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaUsers,
  FaCity,
  FaCalendarAlt,
  FaPaperPlane,
} from "react-icons/fa";

const EnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    people: "",
    date: "",
    city: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Your enquiry has been submitted!");
  };

  return (
    <div
      className="my-4 bg-[var(--primary-color)] text-[var(--primary-color-2)] border border-[var(--link-color)] sm:rounded-2xl sm:shadow-sm p-6 max-w-4xl mx-auto"
      id="enquiry"
    >
      <h2 className="text-xl font-semibold mb-4 border-b border-[var(--subprimary-color)] pb-2">
        Enquiry Form
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="relative">
          <FaUser className="absolute left-3 top-4 " />
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full pl-10 pr-4 py-3 shadow-sm rounded-xl"
          />
        </div>

        <div className="relative">
          <FaEnvelope className="absolute left-3 top-4 text-gray-400" />
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full pl-10 pr-4 py-3 shadow-sm rounded-xl "
          />
        </div>

        <div className="relative">
          <FaPhone className="absolute left-3 top-4 text-gray-400" />
          <input
            type="tel"
            name="contact"
            placeholder="+91 9876543210"
            value={formData.contact}
            onChange={handleChange}
            required
            className="w-full pl-10 pr-4 py-3 shadow-sm  rounded-xl "
          />
        </div>

        <div className="relative">
          <FaUsers className="absolute left-3 top-4 text-gray-400" />
          <input
            type="number"
            name="people"
            placeholder="e.g., 2"
            value={formData.people}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 shadow-sm  rounded-xl "
          />
        </div>

        <div className="relative">
          <FaCalendarAlt className="absolute left-3 top-4 text-gray-400" />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 shadow-sm  rounded-xl "
          />
        </div>

        <div className="relative">
          <FaCity className="absolute left-3 top-4 text-gray-400" />
          <input
            type="text"
            name="city"
            placeholder="e.g., Delhi"
            value={formData.city}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 shadow-sm  rounded-xl "
          />
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold hover:opacity-90 transition"
          >
            <FaPaperPlane /> Send Enquiry
          </button>
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm;