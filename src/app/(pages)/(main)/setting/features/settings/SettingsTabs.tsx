"use client";
import React, { useRef, useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

const SettingsTabs: React.FC = () => {
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

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get('tab') || 'Account';

  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const handleTabClick = (tab: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('tab', tab);
    router.push(`${pathname}?${params.toString()}`);
  };

  const checkScroll = () => {
    const el = scrollRef.current;
    if (el) {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
   
    const el = scrollRef.current;
    if (el) {
      checkScroll();
      window.addEventListener('resize', checkScroll);
      el.addEventListener('scroll', checkScroll);
      return () => {
        window.removeEventListener('resize', checkScroll);
        el.removeEventListener('scroll', checkScroll); 
      }
    }
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      const activeTabElement = el.querySelector(`[data-tab="${activeTab}"]`) as HTMLElement;
      if (activeTabElement) {
        activeTabElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [activeTab]);

  const scrollBy = (amount: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <div className="sm:mb-12">
      <div className="relative">
        {canScrollLeft && (
          <button
            onClick={() => scrollBy(-200)}
            className="absolute left-0 top-0 bottom-0 z-10 w-8 bg-gradient-to-r from-gray-950 to-transparent flex items-center justify-start text-white hover:text-gray-300"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>
        )}
        <div
          className="overflow-x-auto hide-scrollbar"
          ref={scrollRef}
        >
          <div className="flex items-center gap-2 whitespace-nowrap px-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                data-tab={tab}
                // Use the new URL-based click handler
                onClick={() => handleTabClick(tab)}
                className={`px-4 py-2 my-1 text-xs cursor-pointer rounded-full shrink-0
                  ${activeTab === tab
                    ? 'bg-[var(--secondary-text)] text-[var(--secondary-bg)]'
                    : 'text-[var(--secondary-text)] bg-[var(--primary-bg)] shadow-sm backdrop-blur-md hover:text-[var(--secondary-text)] hover:bg-[var(--icon-not-found)]'
                  }
                `}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
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