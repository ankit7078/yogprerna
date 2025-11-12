"use client";

import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';

const BusinessPage = () => {
  return (
    <div className="text-[var(--secondary-text)]">
      <div className="mb-8">
        <h1 className="heading font-bold mb-2">
          Profiles
        </h1>
        <p className="text-[var(--primary-text)] mb-1">
          Manage your profile info, and use the same info across Facebook, Instagram and Meta Horizon. Add more profiles by adding your accounts.
          <a href="#" className="text-blue-600 font-medium hover:underline ml-1">
            Learn more
          </a>
        </p>
      </div>

      <div className="rounded-custom border border-[var(--primary-border)] overflow-hidden shadow-custom">
        <button className="w-full flex items-center justify-between p-4 text-left transition-colors duration-150">
          <div className="flex items-center gap-4">
            <FaUserCircle className="w-10 h-10 text-[var(--primary-text)]" />
            <div>
              <h3 className="sub-heading">Ankit Verma</h3>
              <p className="text-[var(--primary-text)]">Facebook, Instagram</p>
            </div>
          </div>
          <FiChevronRight className="w-5 h-5" />
        </button>
        <div className="border-t border-[var(--primary-border)]"></div>
        <button className="heading-sm w-full p-4 text-left text-[var(--text-hover-color)] font-medium transition-colors duration-150">
          Add accounts
        </button>
      </div>

    </div>
  );
};

export default BusinessPage;