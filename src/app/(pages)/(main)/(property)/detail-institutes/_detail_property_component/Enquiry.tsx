'use client';

import { ButtonGroup } from "@/common/ButtonGroup";
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
import { InputGroup } from "../../../../../../common/FormComponents";

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
      className="m-2 sm:m-0 bg-[var(--primary-bg)] text-[var(--primary-text)] rounded-custom shadow-custom p-6 "
      id="enquiry"
    >
      <h2 className="heading font-semibold mb-4 border-b border-[var(--primary-border)] pb-2">
        Enquiry Form
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-3"
      >
        <div className="relative">
          <InputGroup
            label="Enter Your Name"
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="relative">
          <InputGroup
            label="Email"
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="relative">
          <label className="text-xs">Phone</label>
          <input
            type="tel"
            name="contact"
            placeholder="+91 9876543210"
            value={formData.contact}
            onChange={handleChange}
            required
            className="w-full px-4 text-xs py-2 border border-[var(--primary-border)] rounded-xl "
          />
        </div>

        <div className="relative">
          <InputGroup
            label="People"
            type="number"
            name="people"
            placeholder="e.g., 2"
            value={formData.people}
            onChange={handleChange}
          />
        </div>

        <div className="relative">
          <InputGroup
            id="date"
            label="Date"
            type="date"
            value={formData.date}
            onChange={handleChange}
          />

        </div>

        <div className="relative">
          <InputGroup
            label="City"
            type="text"
            name="city"
            placeholder="e.g., Delhi"
            value={formData.city}
            onChange={handleChange}
          />

        </div>
        <div className="md:col-span-2">
          <ButtonGroup
            label="Send Enquiry"
            type="submit"
            className="w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm;