"use client";
import React, { useState, useRef, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const SettingsTabs = ({ activeTab, setActiveTab }) => {
    const tabs = [
        'Account',
        'Tasks',
        'Dashboard',
        'Notifications',
        'Sharing',
        'Update schedule',
        'Billing',
        'Questions',
    ];

    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const checkScroll = () => {
        const el = scrollRef.current;
        if (el) {
            const { scrollLeft, scrollWidth, clientWidth } = el;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
        }
    };

    // Check scroll on mount and resize
    useEffect(() => {
        const el = scrollRef.current;
        if (el) {
            checkScroll();
            window.addEventListener('resize', checkScroll);
            return () => window.removeEventListener('resize', checkScroll);
        }
    }, []);

    // Scroll active tab into view
    useEffect(() => {
        const el = scrollRef.current;
        if (el) {
            const activeTabElement = el.querySelector(`[data-tab="${activeTab}"]`);
            if (activeTabElement) {
                activeTabElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        }
    }, [activeTab]);

    const scrollBy = (amount) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
        }
    };

    return (
        <div className="mb-12">
            <div className="relative">
                {/* Left Scroll Button */}
                {canScrollLeft && (
                    <button
                        onClick={() => scrollBy(-200)}
                        className="absolute left-0 top-0 bottom-0 z-10 w-8 bg-gradient-to-r from-gray-950 to-transparent flex items-center justify-start text-white hover:text-gray-300"
                    >
                        <FiChevronLeft className="w-5 h-5" />
                    </button>
                )}

                {/* Scrollable Tab Container */}
                <div
                    className="overflow-x-auto"
                    ref={scrollRef}
                    onScroll={checkScroll}
                    style={{
                        // Hide scrollbar cross-browser
                        scrollbarWidth: 'none', // Firefox
                        msOverflowStyle: 'none', // IE/Edge
                    }}
                >
                    {/* Add a style tag to hide scrollbar in Webkit (Chrome, Safari) */}
                    <style>{`
            .overflow-x-auto::-webkit-scrollbar {
              display: none;
            }
          `}</style>

                    <div className="flex items-center gap-2 whitespace-nowrap px-1">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                data-tab={tab} // Add data-tab for scrollIntoView
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2  text-xs cursor-pointer rounded-4xl shrink-0
                  ${activeTab === tab
                                        ? 'bg-gray-100 text-black'
                                        : 'text-gray-300  bg-white/20 backdrop-blur-md hover:text-white hover:bg-gray-700'
                                    }
                `}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Scroll Button */}
                {canScrollRight && (
                    <button
                        onClick={() => scrollBy(200)}
                        className="absolute right-0 top-0 bottom-0 z-10 w-8 bg-gradient-to-l from-gray-950 to-transparent flex items-center justify-end text-white hover:text-gray-300"
                    >
                        <FiChevronRight className="w-5 h-5" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default SettingsTabs;