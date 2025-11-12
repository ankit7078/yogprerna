"use client";

import React, { useRef, useState, useEffect } from 'react';
// Import new icons and use cleaner path aliases
import { ActiveFilters, FilterGroupKey } from '../../../../../../types/types';
import { X, ChevronLeft, ChevronRight } from './icons';
import {
    experienceTypeFilters,
    locationTypeFilters,
    certificationTypeFilters,
    courseLevelFilters,
    courseTypeFilters,
    durationFilters,
} from '../../../../../data/lib/coursesdata'; // Use cleaner path alias

type Props = {
    resultsCount: number;
    activeFilters: ActiveFilters;
    onClearFilter: (group: FilterGroupKey, filterId: string) => void;
    onClearAll: () => void;
};

const allFilterDefinitions = [
    ...experienceTypeFilters,
    ...locationTypeFilters,
    ...certificationTypeFilters,
    ...courseLevelFilters,
    ...courseTypeFilters,
    ...durationFilters,
];

export default function CourseListHeader({
    resultsCount,
    activeFilters,
    onClearFilter,
    onClearAll,
}: Props) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [showScrollButtons, setShowScrollButtons] = useState(false);

    const allActiveFilters = Object.entries(activeFilters).flatMap(([group, ids]) =>
        ids.map(id => ({ id, group: group as FilterGroupKey }))
    );

    const getFilterName = (id: string) => {
        const filter = allFilterDefinitions.find(f => f.id === id);
        return filter ? filter.name : id;
    };

    useEffect(() => {
        const checkScrollability = () => {
            const container = scrollContainerRef.current;
            if (container) {
                const isScrollable = container.scrollWidth > container.clientWidth;
                setShowScrollButtons(isScrollable);
            } else {
                setShowScrollButtons(false);
            }
        };
        checkScrollability();

        window.addEventListener('resize', checkScrollability);
        return () => window.removeEventListener('resize', checkScrollability);
    }, [allActiveFilters.length]);

    // Handler to scroll the container
    const scroll = (direction: 'left' | 'right') => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = direction === 'left' ? -container.clientWidth * 0.5 : container.clientWidth * 0.5;
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="mb-6">
            <div className="bg-[var(--primary-bg)] shadow-custom rounded-custom p-5 mb-3">
                <h2 className="heading font-bold">
                    <span className='text-[var(--text-hover-color)]'>{resultsCount}</span> Course Found
                </h2>
                <p>showing 1-10 of 60 results</p>
            </div>

            <div className="relative flex items-center gap-2 bg-[var(--primary-bg)]  shadow-custom rounded-custom">
                {/* Left Arrow Button */}
                {showScrollButtons && (
                    <button
                        onClick={() => scroll('left')}
                        className="flex-shrink-0 p-1 ms-2 rounded-full bg-[var(--primary-icon-l)] shadow-custom hover:bg-[var(--secondary-bg)] z-10 transition-colors cursor-pointer"
                        aria-label="Scroll filters left"
                    >
                        <ChevronLeft size={20} className="text-[var(--primary-text)] hover:text-[var(--secondary-text)]"/>
                    </button>
                )}
                <div
                    ref={scrollContainerRef}
                    className="flex flex-1 items-center gap-2 overflow-x-auto whitespace-nowrap hide-scrollbar scroll-smooth"
                >
                    {allActiveFilters.map(filterItem => (
                        <span
                            key={`${filterItem.group}-${filterItem.id}`}
                            className="flex-shrink-0 flex items-center bg-[var(--primary-icon-l)] my-5 mx-1 text-[var(--text-hover-color)] text-xs font-medium px-3 py-1 rounded-full"
                        >
                            {getFilterName(filterItem.id)}
                            <button onClick={() => onClearFilter(filterItem.group, filterItem.id)} className="ml-1 cursor-pointer">
                                <X size={12} />
                            </button>
                        </span>
                    ))}

                    {allActiveFilters.length > 0 && (
                        <button
                            onClick={onClearAll}
                            className="flex-shrink-0 paragraph cursor-pointer text-[var(--text-hover-color)] "
                        >
                            Clear all
                        </button>
                    )}
                </div>

                {/* Right Arrow Button */}
                {showScrollButtons && (
                    <button
                        onClick={() => scroll('right')}
                        className="flex-shrink-0 p-1 me-2 cursor-pointer rounded-full bg-[var(--primary-icon-l)] shadow-custom hover:bg-[var(--secondary-bg)] z-10 transition-colors"
                        aria-label="Scroll filters right"
                    >
                        <ChevronRight size={20} className="text-[var(--primary-text)] hover:text-[var(--secondary-text)]" />
                    </button>
                )}
            </div>

        </div>
    );
}