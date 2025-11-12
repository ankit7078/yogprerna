'use client';

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { usePagination, DOTS } from '../../../../../../components/pagination/usePagination';

type PaginationProps = {
    onPageChange: (page: number) => void;
    totalPages: number;
    currentPage: number;
};

const Pagination = ({
    onPageChange,
    totalPages,
    currentPage,
}: PaginationProps) => {
    const paginationRange = usePagination({
        currentPage,
        totalPages,
        siblingCount: 1,
    });

    if (currentPage === 0 || totalPages < 2) return null;

    const onNext = () => currentPage < totalPages && onPageChange(currentPage + 1);
    const onPrevious = () => currentPage > 1 && onPageChange(currentPage - 1);

    return (
        <nav aria-label="Pagination" className="flex justify-center">
            <ul className="flex items-center gap-2 text-base font-medium">
                {/* Previous Button */}
                <li>
                    <button
                        onClick={onPrevious}
                        disabled={currentPage === 1}
                        className="flex items-center cursor-pointer gap-1 py-2 sm:py-1 p-2 rounded-custom border border-[var(--text-hover-color)] text-[var(--text-hover-color)]
              bg-[var(--text-color-primary)] hover:bg-[var(--secondary-icon-l)] hover:border-[var(--text-hover-color)] hover:text-[var(--text-hover-color)]
              transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <ChevronLeft size={14} />
                        <span className="hidden sm:inline">Prev</span>
                    </button>
                </li>

                {/* Page Numbers */}
                {paginationRange?.map((pageNumber, index) => {
                    if (pageNumber === DOTS) {
                        return (
                            <li key={index}>
                                <span className="p-2 text-gray-400 select-none">...</span>
                            </li>
                        );
                    }

                    const isActive = pageNumber === currentPage;

                    return (
                        <li key={index}>
                            <button
                                onClick={() => onPageChange(Number(pageNumber))}
                                className={`px-3 py-1 flex items-center cursor-pointer justify-center rounded-custom border border-1
                  transition-all duration-200 ${isActive
                                        ? 'bg-[var(--text-hover-color)] text-[var(--text-color-primary)] border-[var(--text-hover-color)] shadow-custom scale-105'
                                        : 'border-[var(--text-hover-color)] text-[var(--text-muted)] bg-[var(--secondary-icon-l)] hover:bg-purple-50 hover:border-[var(--text-hover-color)] hover:text-[var(--text-hover-color)]'
                                    }`}
                            >
                                {pageNumber}
                            </button>
                        </li>
                    );
                })}

                {/* Next Button */}
                <li>
                    <button
                        onClick={onNext}
                        disabled={currentPage === totalPages}
                        className="flex items-center cursor-pointer gap-1 sm:py-1 py-2 p-2 rounded-custom border border-[var(--text-hover-color)] text-[var(--text-hover-color)]
              bg-[var(--text-color-primary)] hover:bg-[var(--secondary-icon-l)] hover:border-[var(--text-hover-color)] hover:text-[var(--text-hover-color)]
              transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <span className="hidden sm:inline">Next</span>
                        <ChevronRight size={14} />
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
