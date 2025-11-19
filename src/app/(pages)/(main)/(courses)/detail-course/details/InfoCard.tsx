'use client'

import React from "react";

const InfoCard = ({ icon, title, value }) => (
  <div className="flex items-center gap-2 p-4  rounded-custom bg-[var(--secondary-bg)] shadow-custom">
    <div className="bg-[var(--primary-heading-bg)] p-2 text-[var(--text-hover-color)] rounded-full">
      {React.cloneElement(icon, { size: 20 })}
    </div>
    <div>
      <p className="text-sm font-medium text-[var(--secondary-text)]">{title}</p>
      <p className="font-semibold">{value}</p>
    </div>
  </div>
);

export default InfoCard;
