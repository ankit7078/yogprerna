"use client";

import React from 'react';

type Props = {
  id: string;
};

const heroImageUrl = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1820&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function HeroSection({ id }: Props) {
  return (
    <div
      id={id}
      className="relative bg-cover bg-center shadow-custom rounded-custom p-12 md:p-20 text-center text-[var(--text-color-primary)] overflow-hidden"
      style={{ backgroundImage: `url('${heroImageUrl}')` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10">
        <h1 className="text-4xl mb-3">
          Find Your Transformative Experience
        </h1>
        <p className="sub-heading">
          Discover top-rated yoga retreats, meditation courses, and wellness trainings around the world.
        </p>
      </div>
    </div>
  );
}