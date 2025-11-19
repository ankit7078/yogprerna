'use client';

import React from 'react';
import FilterAccordion from './FilterAccordion';
import { X, Circle, CircleDot, CheckSquare, Square } from 'lucide-react';

const EventSidebar = ({
  filters,
  // priceFilters,
  activeCategories,
  activeDifficulty,
  activePrice,
  activeTags,
  onCategoryChange,
  onDifficultyChange,
  onPriceChange,
  onTagsChange,
  onClearAll,
}) => {
  const isCategoryActive = (id) => activeCategories.has(id);
  const isDifficultyActive = (id) => activeDifficulty.has(id);
  const isTagActive = (id) => activeTags.has(id);

  const activeFilterCount =
    activeCategories.size + activeDifficulty.size + activeTags.size + (activePrice ? 1 : 0);

  return (
    <aside className="lg:col-span-1">
      <div className="sticky top-24 p-5 bg-[var(--primary-bg)] text-[var(--primary-text)] rounded-custom shadow-custom">
        <div className="flex justify-between items-center">
          <h3 className="sub-heading font-semibold ">
            Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
          </h3>
          {activeFilterCount > 0 && (
            <button
              onClick={onClearAll}
              className="paragraph font-medium text-[var(--text-hover-color)] hover:text-[var(--primary-text-h)] cursor-pointer"
            >
              Clear All
            </button>
          )}
        </div>

        {/* --- Categories (Dynamic) --- */}
        <FilterAccordion title="Categories" startOpen>
          <div className="flex flex-col gap-1">
            {filters.categories.map(filter => {
              const isActive = isCategoryActive(filter.id);
              return (
                <button
                  key={filter.id}
                  onClick={() => onCategoryChange(filter.id)}
                  className="flex items-center gap-2 cursor-pointer w-full text-left px-2 py-1.5 paragraph rounded-custom transition-colors hover:bg-[var(--secondary-bg)]"
                >
                  {isActive ? (
                    <CheckSquare className="w-3 h-3 text-[var(--text-hover-color)] flex-shrink-0" />
                  ) : (
                    <Square className="w-3 h-3 text-[var(--primary-text)] flex-shrink-0" />
                  )}
                  <span className={`transition-colors ${isActive ? 'font-medium text-[var(--text-hover-color)]' : 'text-[var(--primary-text)]'}`}>
                    {filter.label}
                  </span>
                </button>
              );
            })}
          </div>
        </FilterAccordion>

        {/* --- Price (Static) --- */}
        {/* <FilterAccordion title="Price" startOpen>
          <div className="flex flex-col gap-1">
            {priceFilters.map(price => {
              const isActive = activePrice === price.id;
              return (
                <button
                  key={price.id}
                  onClick={() => onPriceChange(price.id)}
                  className="flex items-center gap-2 w-full cursor-pointer text-left px-2 py-1.5 paragraph rounded-custom transition-colors hover:bg-[var(--secondary-bg)]"
                >
                  {isActive ? (
                    <CircleDot className="w-3 h-3 text-[var(--text-hover-color)] flex-shrink-0" />
                  ) : (
                    <Circle className="w-3 h-3 text-[var(--primary-text)] flex-shrink-0" />
                  )}
                  <span className={`transition-colors ${isActive ? 'font-medium text-[var(--text-hover-color)]' : 'text-[var(--primary-text)]'}`}>
                    {price.label}
                  </span>
                </button>
              );
            })}
          </div>
        </FilterAccordion> */}

        {/* --- Difficulty (Dynamic) --- */}
        <FilterAccordion title="Difficulty" startOpen>
          <div className="flex flex-col gap-1">
            {filters.difficulties.map(filter => {
              const isActive = isDifficultyActive(filter.id);
              return (
                <button
                  key={filter.id}
                  onClick={() => onDifficultyChange(filter.id)}
                  className="flex items-center gap-2 cursor-pointer w-full text-left px-2 py-1.5 paragraph rounded-custom transition-colors hover:bg-[var(--secondary-bg)]"
                >
                  {isActive ? (
                    <CheckSquare className="w-3 h-3 text-[var(--text-hover-color)] flex-shrink-0" />
                  ) : (
                    <Square className="w-3 h-3 text-[var(--primary-text)] flex-shrink-0" />
                  )}
                  <span className={`transition-colors ${isActive ? 'font-medium text-[var(--text-hover-color)]' : 'text-[var(--primary-text)]'}`}>
                    {filter.label}
                  </span>
                </button>
              );
            })}
          </div>
        </FilterAccordion>
        
        {/* --- Tags (Dynamic) --- */}
        <FilterAccordion title="Best For" startOpen>
          <div className="flex flex-col gap-1">
            {filters.tags.map(tag => {
              const isActive = isTagActive(tag.id);
              return (
                <button
                  key={tag.id}
                  onClick={() => onTagsChange(tag.id)}
                  className="flex items-center gap-2 cursor-pointer w-full text-left px-2 py-1.5 paragraph rounded-custom transition-colors hover:bg-[var(--secondary-bg)]"
                >
                  {isActive ? (
                    <CheckSquare className="w-3 h-3 text-[var(--text-hover-color)] flex-shrink-0" />
                  ) : (
                    <Square className="w-3 h-3 text-[var(--primary-text)] flex-shrink-0" />
                  )}
                  <span className={`transition-colors ${isActive ? 'font-medium text-[var(--text-hover-color)]' : 'text-[var(--primary-text)]'}`}>
                    {tag.label}
                  </span>
                </button>
              );
            })}
          </div>
        </FilterAccordion>
      </div>
    </aside>
  );
};

export default EventSidebar;