'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { MapPin, Users, SearchX, X, Timer, Filter as FilterIcon, Search } from 'lucide-react';
import Breadcrumb from '@/components/breadcrumbs/breadcrumbs';
import { LuSearch } from 'react-icons/lu';
import EventSidebar from './EventSidebar';
import Pagination from '../../../../../ui/pagination/Pagination';
import { EventListProps } from '@/types/types';
import { ButtonGroup } from '@/common/ButtonGroup';
const EVENTS_PER_PAGE = 6;

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

const EventList = ({
  events,
  filters: categoryFilters,
  initialQuery,
  initialPage,
}: EventListProps) => {
  // --- NEW: State for mobile off-canvas ---
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // --- Get active filters from URL ---
  const currentPage = Number(searchParams.get('page')) || initialPage;
  const activeCategories = useMemo(() => {
    const cats = searchParams.get('categories');
    return new Set(cats ? cats.split(',').filter(Boolean) : []);
  }, [searchParams]);

  const activeDate = searchParams.get('date') || '';
  const activePrice = searchParams.get('price') || '';

  const activeTags = useMemo(() => {
    const tags = searchParams.get('tags');
    return new Set(tags ? tags.split(',').filter(Boolean) : []);
  }, [searchParams]);

  const activeQuery = searchParams.get('q') || '';

  useEffect(() => {
    setSearchQuery(searchParams.get('q') || '');
  }, [searchParams]);

  // --- URL Update Handlers ---
  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('q', term);
    } else {
      params.delete('q');
    }
    params.set('page', '1');
    router.push(`${pathname}?${params.toString()}`);
  }, 300);

  const handleDateChange = (dateId: string) => {
    const params = new URLSearchParams(searchParams);
    if (activeDate === dateId) {
      params.delete('date');
    } else {
      params.set('date', dateId);
    }
    params.set('page', '1');
    router.push(`${pathname}?${params.toString()}`);
  };

  const handlePriceChange = (priceId: string) => {
    const params = new URLSearchParams(searchParams);
    if (activePrice === priceId) {
      params.delete('price');
    } else {
      params.set('price', priceId);
    }
    params.set('page', '1');
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleCategoryChange = (categoryId: string) => {
    const params = new URLSearchParams(searchParams);
    const newActiveCategories = new Set(activeCategories);

    if (categoryId === 'all') {
      newActiveCategories.clear();
    } else if (newActiveCategories.has(categoryId)) {
      newActiveCategories.delete(categoryId);
    } else {
      newActiveCategories.add(categoryId);
    }

    const newCategories = Array.from(newActiveCategories).join(',');

    if (newCategories) {
      params.set('categories', newCategories);
    } else {
      params.delete('categories');
    }

    params.set('page', '1');
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleTagsChange = (tagId: string) => {
    const params = new URLSearchParams(searchParams);
    const newActiveTags = new Set(activeTags);

    if (newActiveTags.has(tagId)) {
      newActiveTags.delete(tagId);
    } else {
      newActiveTags.add(tagId);
    }

    const newTags = Array.from(newActiveTags).join(',');

    if (newTags) {
      params.set('tags', newTags);
    } else {
      params.delete('tags');
    }

    params.set('page', '1');
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleClearAll = () => {
    const params = new URLSearchParams(searchParams);
    params.delete('categories');
    params.delete('date');
    params.delete('price');
    params.delete('tags');
    params.delete('q');
    params.set('page', '1');
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleClearQuery = () => {
    const params = new URLSearchParams(searchParams);
    params.delete('q');
    params.set('page', '1');
    router.push(`${pathname}?${params.toString()}`);
  };

  // --- THIS FUNCTION IS USED BY THE NEW COMPONENT ---
  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', String(page));
    router.push(`${pathname}?${params.toString()}`);
  };

  // --- Active Filter Logic ---
  const selectedFilters = [];

  if (activeQuery) {
    selectedFilters.push({ type: 'query', id: 'query', label: `Search: "${activeQuery}"` });
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
        handleClearQuery();
        break;
      case 'date':
        handleDateChange(id)
        break;
      case 'price':
        handlePriceChange(id);
        break;
      case 'category':
        handleCategoryChange(id);
        break;
      case 'tag':
        handleTagsChange(id);
        break;
    }
  };

  const activeFilterCount = selectedFilters.length;

  // --- Filtering and Pagination Logic ---
  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      // ... (filtering logic is unchanged) ...
      const matchesSearch =
        event.title.toLowerCase().includes(activeQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(activeQuery.toLowerCase());
      const matchesCategories =
        activeCategories.size === 0 ||
        activeCategories.has(event.category.toLowerCase());
      const matchesDate = !activeDate || event.dateFilter === activeDate;
      const matchesPrice = !activePrice || (() => {
        if (activePrice === 'free') return event.price === 0;
        if (activePrice === '0-500') return event.price > 0 && event.price <= 500;
        if (activePrice === '501-2000') return event.price > 500 && event.price <= 2000;
        if (activePrice === '2000+') return event.price > 2000;
        return true;
      })();
      const matchesTags =
        activeTags.size === 0 ||
        Array.from(activeTags).every(activeTag => event.tags.includes(activeTag));

      return matchesSearch && matchesCategories && matchesDate && matchesPrice && matchesTags;
    });
  }, [events, activeQuery, activeCategories, activeDate, activePrice, activeTags]);



  const totalPages = Math.ceil(filteredEvents.length / EVENTS_PER_PAGE);
  const paginatedEvents = useMemo(() => {
    return filteredEvents.slice(
      (currentPage - 1) * EVENTS_PER_PAGE,
      currentPage * EVENTS_PER_PAGE
    );
  }, [filteredEvents, currentPage]);


  return (
    <div className='bg-[var(--secondary-bg)] text-[var(--primary-text)] max-w-7xl mx-auto px-2 sm:px-8'>
      <div className='py-6'>
        <div>
          <Breadcrumb items={[{ label: "Events", href: "/events" }]} />
        </div>
      </div>
      <div>
        {/* Search Bar */}
        <div className="max-w-2xl">
          <div className="relative">
            <LuSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[var(--text-hover-color)] w-4 h-4" />
            <input
              type="text"
              placeholder="Search events by name or location..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                handleSearch(e.target.value);
              }}
              className="w-full pl-10 pr-4 py-2 paragraph text-[var(--primary-text)] border-1 border-[var(--primary-border)] focus:border-[var(--primary-border)] rounded-custom outline-none transition-colors"
            />
          </div>
        </div>

        {/* --- NEW: Mobile Filter Button --- */}
        <div className="mt-6 lg:hidden">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--primary-border)] rounded-custom sub-heading font-medium bg-[var(--primary-bg)] shadow-custom hover:bg-[var(--secondary-bg)]"
          >
            <FilterIcon className="w-4 h-4 text-[var(--text-hover-color)]" />
            <span>Filters</span>
            {activeFilterCount > 0 && (
              <span className="ml-1 bg-[var(--text-hover-color)] text-[var(--text-color-primary)] rounded-full px-2 py-0.5 text-xs font-semibold">
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 py-6">
          {/* --- Desktop Sidebar --- */}
          <div className="hidden lg:block">
            <div className="sticky top-24 ">
              <EventSidebar
                categoryFilters={categoryFilters}
                dateFilters={dateFilters}
                priceFilters={priceFilters}
                tagFilters={tagFilters}
                activeCategories={activeCategories}
                activeDate={activeDate}
                activePrice={activePrice}
                activeTags={activeTags}
                activeQuery={activeQuery}
                onCategoryChange={handleCategoryChange}
                onDateChange={handleDateChange}
                onPriceChange={handlePriceChange}
                onTagsChange={handleTagsChange}
                onClearAll={handleClearAll}
                onClearQuery={handleClearQuery}
              />
            </div>
          </div>

          {/* --- Main Content (col-span-3) --- */}
          <main className="lg:col-span-3">

            {/* --- Active Filter Chips --- */}
            {selectedFilters.length > 0 && (
              <div className="pb-2 bg-[var(--primary-bg)] p-5 rounded-custom shadow-custom mb-6">
                <div className='w-full flex justify-between items-center mb-2'>
                  <h4 className='font-semibold sub-heading text-[var(--primary-text)]'>
                    Active Filters ({activeFilterCount})
                  </h4>
                </div>
                <div className="flex flex-nowrap overflow-x-auto hide-scrollbar gap-2 py-1">
                  {selectedFilters.map(filter => (
                    <button
                      key={`${filter.type}-${filter.id}`}
                      onClick={() => handleRemoveFilter(filter.type, filter.id)}
                      className="flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium hover:bg-[var(--primary-bg)] shadow-custom text-[var(--text-hover-color)] cursor-pointer rounded-custom transition-colors bg-[var(--secondary-icon-l)]"
                    >
                      <span>{filter.label}</span>
                      <X className="w-3 h-3" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {filteredEvents.length > 0 ? (
              <>
                {/* --- NEW: Total Events Count --- */}
                <div className='text-[var(--primary-text)] bg-[var(--primary-bg)] mb-6 p-5 rounded-custom shadow-custom'>
                  <h1 className="heading font-semibold text-[var(--secondary-text)]">
                    <span className='text-[var(--text-hover-color)]'> {filteredEvents.length}</span> {filteredEvents.length === 1 ? 'Event' : 'Events'} Found
                  </h1>
                  <p>showing 1-10 of  {filteredEvents.length} results</p>
                </div>

                {/* Event Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
                  {paginatedEvents.map(event => (
                    <Link href={`/events/${event.id}`} key={event.id} className="block bg-[var(--primary-bg)] rounded-custom shadow-custom hover:-translate-y-1 overflow-hidden group transition-all duration-300">
                      <div className="relative aspect-[2/1]">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                        />
                        <div className="absolute top-4 right-4 paragraph px-2 py-1 rounded-custom text-[var(--text-color-primary)] bg-[var(--text-hover-color)]">{event.category}</div>
                      </div>
                      <div className="p-5">
                        <h2 className="heading font-semibold text-[var(--secondary-text)] group-hover:text-[var(--text-hover-color)] pb-1 transition-colors">{event.title}</h2>
                        <p className="pb-3 line-clamp-2">{event.description}..</p>
                        <div className='flex justify-between'>
                          <div className="flex items-center paragraph text-[var(--primary-text)] space-x-1  mb-1">
                            <MapPin className="w-4 h-4 text-[var(--text-hover-color)] flex-shrink-0" />
                            <span>{event.location}</span>
                          </div>
                          <div className='flex items-center paragraph text-[var(--primary-text)] space-x-1 '>
                            <Timer className="w-4 h-4 text-[var(--text-hover-color)] flex-shrink-0" />
                            <span>{event.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center paragraph text-[var(--primary-text)] space-x-1 mb-1">
                          <Users className="w-4 h-4 text-[var(--text-hover-color)] flex-shrink-0" />
                          <span>{event.attendees} participants</span>
                        </div>
                        <ButtonGroup
                        label='View Details'
                        href="/event-details/events/1"
                        className='w-full mt-2'
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              // --- If no events are found ---
              <div className="text-center py-16 text-[var(--found-text)] bg-[var(--primary-bg)] rounded-custom shadow-custom">
                <Search className="w-20 h-20 mx-auto mb-4" />
                <p className="font-medium mb-2">No events found</p>
                <h2 className='font-semibold text-[var(--primary-text)]'>Try adjusting your search or filters.</h2>
              </div>
            )}

            {/* --- UPDATED PAGINATION BLOCK --- */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-16">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            )}
          </main>
        </div>
      </div>

      {/* --- Mobile Off-Canvas Filter (Unchanged) --- */}
      <div className={`lg:hidden ${!isFilterOpen && 'pointer-events-none'}`}>

        <div
          className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${isFilterOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={() => setIsFilterOpen(false)}
        />
        <div
          className={`fixed top-0 left-0 z-100 h-full w-80 max-w-[calc(100%-3rem)] bg-[var(--primary-bg)] shadow-custom transition-transform duration-300 ease-in-out ${isFilterOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
          <div className="flex justify-between items-center p-4 border-b border-[var(--primary-border)]">
            <h3 className="font-semibold sub-heading text-[var(--secondary-text)]">Filters</h3>
            <button
              onClick={() => setIsFilterOpen(false)}
              className="text-[var(--primary-text)] hover:text-[var(--text-hover-color)]"
              aria-label="Close filters"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="overflow-y-auto h-[calc(100%-57px)]">
            <EventSidebar
              categoryFilters={categoryFilters}
              dateFilters={dateFilters}
              priceFilters={priceFilters}
              tagFilters={tagFilters}
              activeCategories={activeCategories}
              activeDate={activeDate}
              activePrice={activePrice}
              activeTags={activeTags}
              activeQuery={activeQuery}
              onCategoryChange={handleCategoryChange}
              onDateChange={handleDateChange}
              onPriceChange={handlePriceChange}
              onTagsChange={handleTagsChange}
              onClearAll={handleClearAll}
              onClearQuery={handleClearQuery}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventList;