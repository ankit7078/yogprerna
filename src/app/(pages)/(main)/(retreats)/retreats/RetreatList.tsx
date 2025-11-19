'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { MapPin, Search, Filter as FilterIcon, X, Calendar, DollarSign, BarChart, Tag } from 'lucide-react';
import { FaCalendarAlt, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import { LuSearch } from 'react-icons/lu';
import RetreatSidebar from './RetreatSidebar';
import Pagination from '../../../../../ui/pagination/Pagination';
import Breadcrumb from '@/components/breadcrumbs/breadcrumbs';
import { priceFilters } from '../../../../data/lib/retreatsData';
import { ButtonGroup } from '@/common/ButtonGroup';

const RETREATS_PER_PAGE = 6;

const RetreatList = ({
  retreats,
  filters: allFilters,
  initialQuery,
  initialPage,
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // --- Get active filters from URL ---
  const currentPage = Number(searchParams.get('page')) || initialPage;
  const activeQuery = searchParams.get('q') || '';

  const activeCategories = useMemo(() => {
    const cats = searchParams.get('categories');
    return new Set(cats ? cats.split(',').filter(Boolean) : []);
  }, [searchParams]);

  const activeDifficulty = useMemo(() => {
    const diffs = searchParams.get('difficulty');
    return new Set(diffs ? diffs.split(',').filter(Boolean) : []);
  }, [searchParams]);

  const activePrice = searchParams.get('price') || '';

  const activeTags = useMemo(() => {
    const tags = searchParams.get('tags');
    return new Set(tags ? tags.split(',').filter(Boolean) : []);
  }, [searchParams]);

  useEffect(() => {
    setSearchQuery(searchParams.get('q') || '');
  }, [searchParams]);

  // --- URL Update Handlers ---
  const updateParams = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    params.set('page', '1');
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleSearch = useDebouncedCallback((term) => {
    updateParams('q', term);
  }, 300);

  const handleMultiSelectChange = (key, id, currentSet) => {
    const newActiveSet = new Set(currentSet);
    if (newActiveSet.has(id)) {
      newActiveSet.delete(id);
    } else {
      newActiveSet.add(id);
    }
    const newValue = Array.from(newActiveSet).join(',');
    updateParams(key, newValue);
  };

  const handleCategoryChange = (categoryId) => handleMultiSelectChange('categories', categoryId, activeCategories);
  const handleDifficultyChange = (difficultyId) => handleMultiSelectChange('difficulty', difficultyId, activeDifficulty);
  const handleTagsChange = (tagId) => handleMultiSelectChange('tags', tagId, activeTags);

  const handlePriceChange = (priceId) => {
    updateParams('price', activePrice === priceId ? '' : priceId);
  };

  const handleClearAll = () => {
    const params = new URLSearchParams();
    params.set('page', '1');
    router.push(`${pathname}?${params.toString()}`);
  };

  const handlePageChange = (page) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', String(page));
    router.push(`${pathname}?${params.toString()}`);
  };

  // --- Active Filter Logic ---
  const selectedFilters = [];
  if (activeQuery) selectedFilters.push({ type: 'query', id: 'query', label: `Search: "${activeQuery}"` });
  if (activePrice) selectedFilters.push({ type: 'price', id: activePrice, label: priceFilters.find(p => p.id === activePrice)?.label });
  activeCategories.forEach(catId => selectedFilters.push({ type: 'category', id: catId, label: allFilters.categories.find(c => c.id === catId)?.label }));
  activeDifficulty.forEach(diffId => selectedFilters.push({ type: 'difficulty', id: diffId, label: allFilters.difficulties.find(d => d.id === diffId)?.label }));
  activeTags.forEach(tagId => selectedFilters.push({ type: 'tag', id: tagId, label: allFilters.tags.find(t => t.id === tagId)?.label }));

  const handleRemoveFilter = (type, id) => {
    switch (type) {
      case 'query': return updateParams('q', '');
      case 'price': return handlePriceChange(id);
      case 'category': return handleCategoryChange(id);
      case 'difficulty': return handleDifficultyChange(id);
      case 'tag': return handleTagsChange(id);
    }
  };

  const activeFilterCount = selectedFilters.filter(Boolean).length;

  // --- Filtering and Pagination Logic ---
  const filteredRetreats = useMemo(() => {
    return retreats.filter(retreat => {
      const matchesSearch =
        retreat.name.toLowerCase().includes(activeQuery.toLowerCase()) ||
        retreat.location.toLowerCase().includes(activeQuery.toLowerCase()) ||
        retreat.description.toLowerCase().includes(activeQuery.toLowerCase());

      const matchesCategories =
        activeCategories.size === 0 ||
        activeCategories.has(allFilters.categories.find(c => c.label === retreat.type)?.id);

      const matchesDifficulty =
        activeDifficulty.size === 0 ||
        activeDifficulty.has(allFilters.difficulties.find(d => d.label === retreat.difficulty)?.id);

      const matchesPrice = !activePrice || (() => {
        const priceRange = priceFilters.find(p => p.id === activePrice);
        if (!priceRange) return true;
        return retreat.price >= priceRange.min && retreat.price <= priceRange.max;
      })();

      const retreatTags = new Set(retreat.bestFor.map(t => t.toLowerCase().replace(/ /g, '-')));
      const matchesTags =
        activeTags.size === 0 ||
        Array.from(activeTags).every(activeTag => retreatTags.has(activeTag));

      return matchesSearch && matchesCategories && matchesDifficulty && matchesPrice && matchesTags;
    });
  }, [retreats, activeQuery, activeCategories, activeDifficulty, activePrice, activeTags, allFilters]);

  const totalPages = Math.ceil(filteredRetreats.length / RETREATS_PER_PAGE);
  const paginatedRetreats = useMemo(() => {
    return filteredRetreats.slice(
      (currentPage - 1) * RETREATS_PER_PAGE,
      currentPage * RETREATS_PER_PAGE
    );
  }, [filteredRetreats, currentPage]);

  return (
    <div className='bg-[var(--secondary-bg)] text-[var(--primary-text)] max-w-7xl mx-auto px-2 sm:px-8 py-6'>
      <div>
        <Breadcrumb items={[{ label: "Retreats", href: "/retreats" }]} />
      </div>
      <div>
        {/* Search Bar */}
        {/* <div className="max-w-2xl">
          <div className="relative">
            <LuSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[var(--text-hover-color)] w-4 h-4" />
            <input
              type="text"
              placeholder="Search retreats by name, location, or keyword..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                handleSearch(e.target.value);
              }}
              className="w-full pl-10 pr-4 py-2 paragraph text-[var(--primary-text)] border-1 border-[var(--primary-border)] focus:border-[var(--primary-border)] rounded-custom outline-none transition-colors"
            />
          </div>
        </div> */}

        {/* Mobile Filter Button */}
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
              <RetreatSidebar
                filters={allFilters}
                priceFilters={priceFilters}
                activeCategories={activeCategories}
                activeDifficulty={activeDifficulty}
                activePrice={activePrice}
                activeTags={activeTags}
                onCategoryChange={handleCategoryChange}
                onDifficultyChange={handleDifficultyChange}
                onPriceChange={handlePriceChange}
                onTagsChange={handleTagsChange}
                onClearAll={handleClearAll}
              />
            </div>
          </div>

          {/* --- Main Content (col-span-3) --- */}
          <main className="lg:col-span-3">
            {/* --- Active Filter Chips --- */}
            {selectedFilters.length > 0 && (
              <div className="pb-2 bg-[var(--primary-bg)] p-5 rounded-custom shadow-custom mb-6">
                <h4 className='font-semibold sub-heading text-[var(--primary-text)] mb-2'>
                  Active Filters ({activeFilterCount})
                </h4>
                <div className="flex flex-wrap gap-2 py-1">
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

            {filteredRetreats.length > 0 ? (
              <>
                <div className='text-[var(--primary-text)] bg-[var(--primary-bg)] mb-6 p-5 rounded-custom shadow-custom'>
                  <h1 className="heading font-semibold text-[var(--secondary-text)]">
                    <span className='text-[var(--text-hover-color)]'> {filteredRetreats.length}</span> {filteredRetreats.length === 1 ? 'Retreat' : 'Retreats'} Found
                  </h1>
                </div>

                {/* ---
                CHANGE 1: Updated Grid Layout
                This now shows 2 cards per row on medium screens and up.
                ---
                */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {paginatedRetreats.map((retreat) => (

                    // ---
                    // CHANGE 2: Swapped to Vertical Card Design
                    // This card fits much better in a 2-column layout.
                    // ---
                    <Link
                      href={`/retreats/${retreat.slug}`}
                      key={retreat.id}
                      className="group block rounded-lg overflow-hidden bg-[var(--primary-bg)] shadow-custom transition-all duration-300 hover:shadow-xl flex flex-col h-full"
                    >
                      {/* Card Image */}
                      <div className="relative w-full aspect-[2/1]">
                        <Image
                          src={retreat.image}
                          alt={retreat.name}
                          fill
                          style={{ objectFit: 'cover' }}
                          className="transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute bottom-3 left-3 bg-[var(--text-hover-color)] text-[var(--text-color-primary)] text-xs px-3 py-1 rounded-full shadow-custom">
                          {retreat.type}
                        </div>
                      </div>

                      {/* Card Content: flex-grow makes it fill space */}
                      <div className="p-5 flex flex-col flex-grow">
                        <div>
                          <h3 className="text-xl font-semibold text-[var(--secondary-text)] mb-1 transition-colors duration-200 group-hover:text-[var(--text-hover-color)] line-clamp-2">
                            {retreat.name}
                          </h3>
                          <p className="text-[var(--primary-text)] text-sm line-clamp-4 mt-2">
                            {retreat.description}
                          </p>
                        </div>

                        {/* Divider & Icons Section: mt-auto pushes it to the bottom */}
                        <div className="pt-3 mt-auto">
                          <div className="flex items-center justify-between text-[var(--primary-text)] text-sm">
                            <div className="flex items-center">
                              <FaCalendarAlt className="mr-1.5 text-[var(--text-hover-color)]" />
                              <span>{`${retreat.duration} ${retreat.durationType}`}</span>
                            </div>
                            <div className="flex items-center">
                              <FaMapMarkerAlt className="mr-1.5 text-[var(--text-hover-color)]" />
                              <span>{retreat.location}</span>
                            </div>
                          </div>
                          <ButtonGroup
                            label='View Details'
                            className='mt-3 w-full ' />
                        </div>

                      </div>
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              // --- If no events are found ---
              <div className="text-center py-16 text-[var(--found-text)] bg-[var(--primary-bg)] rounded-custom shadow-custom">
                <Search className="w-20 h-20 mx-auto mb-4" />
                <p className="font-medium mb-2">No retreats found</p>
                <h2 className='font-semibold text-[var(--primary-text)]'>Try adjusting your search or filters.</h2>
              </div>
            )}

            {/* --- PAGINATION --- */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-6">
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

      {/* --- Mobile Off-Canvas Filter --- */}
      <div className={`lg:hidden ${!isFilterOpen && 'pointer-events-none'}`}>
        <div
          className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${isFilterOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsFilterOpen(false)}
        />
        <div
          className={`fixed top-0 left-0 z-50 h-full w-80 max-w-[calc(100%-3rem)] bg-[var(--primary-bg)] shadow-custom transition-transform duration-300 ease-in-out ${isFilterOpen ? 'translate-x-0' : '-translate-x-full'}`}
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
            <RetreatSidebar
              filters={allFilters}
              // priceFilters={priceFilters}
              activeCategories={activeCategories}
              activeDifficulty={activeDifficulty}
              activePrice={activePrice}
              activeTags={activeTags}
              onCategoryChange={handleCategoryChange}
              onDifficultyChange={handleDifficultyChange}
              onPriceChange={handlePriceChange}
              onTagsChange={handleTagsChange}
              onClearAll={handleClearAll}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetreatList;