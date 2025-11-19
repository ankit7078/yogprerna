"use client";

import { CiSearch } from 'react-icons/ci';
import React from 'react';

type Props = {
  searchTerm: string;
  onSearchChange: (term: string) => void;
};

export default function SearchBar({ searchTerm, onSearchChange }: Props) {
  return (
    <div className="flex justify-center items-start">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search courses by title..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="border border-[var(--primary-border)] paragraph rounded-custom py-2 pl-10 pr-6 w-full focus:outline-none focus:ring-2 focus:ring-[var(--primary-border)] shadow-custom"
        />
        <CiSearch size={16} className="absolute left-4 top-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
}