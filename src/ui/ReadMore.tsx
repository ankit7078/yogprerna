"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

type ReadMoreProps = {
  /** The full text string to be displayed */
  text: string;
  /** The character limit before truncating. Defaults to 350. */
  maxLength?: number;
};

const DEFAULT_MAX_LENGTH = 350;

export function ReadMore({ text, maxLength = DEFAULT_MAX_LENGTH }: ReadMoreProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Check if the text is long enough to need truncation
  const needsTruncation = text.length > maxLength;

  // Determine the text to display
  const displayedText = needsTruncation && !isExpanded
    ? `${text.substring(0, maxLength)}...`
    : text;

  return (
    // This div is relative to position the gradient
    <div className="relative">
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        {/*
          CORRECTION:
          This now correctly uses the 'displayedText' variable
          which is derived from the 'text' and 'maxLength' props.
        */}
        {displayedText}
      </p>

      {/* Gradient overlay when truncated */}
      {needsTruncation && !isExpanded && (
        <div className="absolute bottom-4 left-0 w-full h-16 bg-gradient-to-t from-[var(--primary-bg)] to-transparent pointer-events-none"></div>
      )}

      {/* Show more/less button */}
      {needsTruncation && (
        <button
          onClick={toggleExpanded}
          className="flex items-center gap-1 text-[var(--text-hover-color)] font-semibold mt-1 focus:outline-none hover:text-[var(--primary-text-h)] cursor-pointer"
        >
          {isExpanded ? (
            <Minus size={12} className="flex-shrink-0 mt-1" />
          ) : (
            <Plus size={12} className="flex-shrink-0 mt-1" />
          )}
          <span className="text-sm">{isExpanded ? 'Show less' : 'Show more'}</span>
        </button>
      )}
    </div>
  );
}
