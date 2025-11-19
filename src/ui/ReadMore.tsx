"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

type ReadMoreProps = {
  text: string;
  maxLength?: number;
};

const DEFAULT_MAX_LENGTH = 350;

export function ReadMore({ text, maxLength = DEFAULT_MAX_LENGTH }: ReadMoreProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const needsTruncation = text.length > maxLength;
  const displayedText = needsTruncation && !isExpanded
    ? `${text.substring(0, maxLength)}...`
    : text;

  return (
    <div className="relative">
      <p className="text-[var(--primary-text)] leading-relaxed whitespace-pre-line">
        {displayedText}
      </p>

      {needsTruncation && !isExpanded && (
        <div className="absolute bottom-4 left-0 w-full h-16 bg-gradient-to-t from-[var(--primary-bg)] to-transparent pointer-events-none"></div>
      )}

      {needsTruncation && (
        <button
          onClick={toggleExpanded}
          className="flex items-center gap-1 text-[var(--text-hover-color)] font-semibold mt-1 focus:outline-none hover:text-[var(--primary-text-h)] cursor-pointer"
        >
          {isExpanded ? (
            <Minus size={12} className="flex-shrink-0" />
          ) : (
            <Plus size={12} className="flex-shrink-0" />
          )}
          <span className="paragraph">{isExpanded ? 'Show less' : 'Show more'}</span>
        </button>
      )}
    </div>
  );
}
