'use client';

import React from 'react';
import FilterAccordion from './FilterAccordion';
import { Filter } from '../../../../data/lib/date';
import { X, Circle, CircleDot, CheckSquare, Square } from 'lucide-react';

const dateFilters = [
    { id: 'today', label: 'Today' },
    { id: 'tomorrow', label: 'Tomorrow' },
    { id: 'weekend', label: 'This Weekend' },
];

const priceFilters = [
    { id: 'free', label: 'Free' },
    { id: '0-500', label: '0 - 500' },
    { id: '501-2000', label: '501 - 2000' },
    { id: '2000+', label: 'Above 2000' },
];

const tagFilters = [
    { id: 'Outdoor Events', label: 'Outdoor Events' },
    { id: 'Fast Filling', label: 'Fast Filling' },
    { id: 'Must Attend', label: 'Must Attend' },
    { id: 'Unmissable Events', label: 'Unmissable Events' },
    { id: 'Kids Activities', label: 'Kids Activities' },
    { id: 'Kids Allowed', label: 'Kids Allowed' },
    { id: 'Masterclass', label: 'Masterclass' },
    { id: 'New Year Parties', label: 'New Year Parties' },
    { id: 'Online Streaming', label: 'Online Streaming' },
];

type EventSidebarProps = {
    categoryFilters: Filter[];
    activeCategories: Set<string>;
    activeDate: string;
    activePrice: string;
    activeTags: Set<string>;
    activeQuery: string;
    onCategoryChange: (categoryId: string) => void;
    onDateChange: (dateId: string) => void;
    onPriceChange: (priceId: string) => void;
    onTagsChange: (tagId: string) => void;
    onClearAll: () => void;
    onClearQuery: () => void;
};

const EventSidebar = ({
    categoryFilters,
    activeCategories,
    activeDate,
    activePrice,
    activeTags,
    activeQuery,
    onCategoryChange,
    onDateChange,
    onPriceChange,
    onTagsChange,
    onClearAll,
    onClearQuery,
}: EventSidebarProps) => {

    const isCategoryActive = (id: string) => activeCategories.has(id);
    const isTagActive = (id: string) => activeTags.has(id);

    const selectedFilters = [];

    if (activeQuery) {
        selectedFilters.push({
            type: 'query',
            id: 'query',
            label: `Search: "${activeQuery}"`,
        });
    }

    if (activeDate) {
        const dateLabel = dateFilters.find(d => d.id === activeDate)?.label;
        if (dateLabel) {
            selectedFilters.push({ type: 'date', id: activeDate, label: dateLabel });
        }
    }
    if (activePrice) {
        const priceLabel = priceFilters.find(p => p.id === activePrice)?.label;
        if (priceLabel) {
            selectedFilters.push({ type: 'price', id: activePrice, label: priceLabel });
        }
    }
    activeCategories.forEach(catId => {
        const catLabel = categoryFilters.find(c => c.id === catId)?.label;
        if (catLabel) {
            selectedFilters.push({ type: 'category', id: catId, label: catLabel });
        }
    });
    activeTags.forEach(tagId => {
        selectedFilters.push({ type: 'tag', id: tagId, label: tagId });
    });

    const handleRemoveFilter = (type: string, id: string) => {
        switch (type) {
            case 'query':
                onClearQuery();
                break;
            case 'date':
                onDateChange(id);
                break;
            case 'price':
                onPriceChange(id);
                break;
            case 'category':
                onCategoryChange(id);
                break;
            case 'tag':
                onTagsChange(id);
                break;
        }
    };

    const activeFilterCount = selectedFilters.length;

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

                <FilterAccordion title="Date" startOpen>
                    <div className="flex flex-col gap-1">
                        {dateFilters.map(date => {
                            const isActive = activeDate === date.id;
                            return (
                                <button
                                    key={date.id}
                                    onClick={() => onDateChange(date.id)}
                                    className="flex items-center gap-3 w-full cursor-pointer text-left px-2 py-1.5 paragraph rounded-custom transition-colors hover:bg-[var(--secondary-bg)] "
                                >
                                    {isActive ? (
                                        <CircleDot className="w-3 h-3 text-[var(--text-hover-color)] flex-shrink-0" />
                                    ) : (
                                        <Circle className="w-3 h-3 text-[var(--primary-text)] flex-shrink-0" />
                                    )}
                                    <span className={`transition-colors ${isActive ? 'font-medium text-[var(--text-hover-color)]' : 'text-[var(--primary-text)]'}`}>
                                        {date.label}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </FilterAccordion>

                <FilterAccordion title="Price" startOpen>
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
                </FilterAccordion>

                <FilterAccordion title="Categories" startOpen>
                    <div className="flex flex-col gap-1">
                        {categoryFilters.filter(f => f.id !== 'all').map(filter => {
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

                <FilterAccordion title="More Filters">
                    <div className="flex flex-col gap-1">
                        {tagFilters.map(tag => {
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

