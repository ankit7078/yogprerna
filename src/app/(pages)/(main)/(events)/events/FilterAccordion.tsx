'use client';

import React, { useState, ReactNode } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type Props = {
  title: string;
  children: ReactNode;
  startOpen?: boolean;
};

const FilterAccordion = ({ title, children, startOpen = false }: Props) => {
  const [isOpen, setIsOpen] = useState(startOpen);

  return (
    <div className="border-b border-[var(--primary-border)] py-2">

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center cursor-pointer py-2 px-2 rounded-custom hover:bg-[var(--secondary-bg)] w-full"
      >
        <h3 className="sub-heading font-semibold text-[var(--primary-text)]">{title}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 " />
        ) : (
          <ChevronDown className="w-5 h-5 " />
        )}
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen pt-1' : 'max-h-0'
          }`}
      >
        {children}
      </div>
    </div>
  );
};

export default FilterAccordion;