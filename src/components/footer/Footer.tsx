"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname

import {
  FaHome,
  FaGraduationCap,
  FaSearch,
  FaBuilding,
  FaUser,
} from "react-icons/fa";

// Custom hook to check for mobile screen sizes
const useResponsive = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Set initial state on component mount
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
};


// ---- Sitemap section for the main footer -----
const FooterSitemapSection = () => {
  const sections = [
    {
      title: 'Locations',
      items: [
        { name: 'Rishikesh', href: '#' },
        { name: 'Dehradun', href: '#' },
        { name: 'Bengaluru', href: '#' },
        { name: 'Mysuru', href: '#' },
      ],
    },
    {
      title: 'Events',
      items: [
        { name: 'International Yoga Festival', href: '#' },
        { name: 'Akhanda Yoga Festival 2026', href: '#' },
        { name: 'Himalayan Bliss Yoga Retreat', href: '#' },
      ],
    },
    {
      title: 'Countries',
      items: [
        { name: 'USA', href: '#', image: '/img/footer-img/country-1.png' },
        { name: 'UK', href: '#', image: '/img/footer-img/country-2.png' },
        { name: 'Australia', href: '#', image: '/img/footer-img/country-3.png' },
        { name: 'Canada', href: '#', image: '/img/footer-img/country-4.png' },
      ],
    },
    {
      title: 'YOGA BY CATEGORY',
      items: [
        { name: 'University', href: '#' },
        { name: 'College', href: '#' },
        { name: 'Yoga Studio', href: '#' },
        { name: 'Online Yoga Studio', href: '#' },
      ],
    },
    {
      title: 'RETREAT PROGRAMS',
      items: [
        { name: '4 day yoga retreat', href: '#' },
        { name: '7 day yoga retreat', href: '#' },
        { name: '10 day yoga retreat', href: '#' },
        { name: '14 day yoga retreat', href: '#' },
      ],
    },
    {
      title: 'Company',
      items: [
        { name: 'Mentors', href: '#' },
        { name: 'Success Stories', href: '#' },
        { name: 'Sitemap', href: '#' },
      ],
    },

  ];

  return (
    <div className="bg-[var(--primary-color)] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3 className="text-sm font-semibold text-[var(--primary-color-2)] tracking-wider uppercase mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a
                      href={item.href}
                      className="text-base text-[var(--subprimary-color)] hover:text-[var(--text-color-h)] flex items-center gap-2 transition"
                    >
                      {/* If image exists, show flag image */}
                      {item.image && (
                        <img
                          src={item.image}
                          alt={`${item.name} flag`}
                          className="w-6 h-4 rounded-sm"
                        />
                      )}
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Component for Desktop View ---
const DesktopFooter = () => {
  return (
    <footer className="bg-[var(--primary-color)] text-[var(--primary-color-2)] shadow-lg py-10 px-4">
      <div className="container mx-auto max-w-6xl">
        <FooterSitemapSection />

        <hr className="border-[var(--subprimary-color)] my-10 " />
        <div className="border-b border-[var(--subprimary-color)] mb-6">
          <div className="flex flex-wrap items-center justify-center space-y-4 md:space-y-0    text-center md:text-left mb-6">
            <div className="flex flex-wrap justify-center space-x-6">
              <Link href="/about" className="hover:text-[var(--text-hover-color)] transition-colors">About us</Link>
              <Link href="/blog" className="hover:text-[var(--text-hover-color)] transition-colors">Blog</Link>
              <Link href="/news" className="hover:text-[var(--text-hover-color)] transition-colors">News</Link>
              <Link href="/career-finder" className="hover:text-[var(--text-hover-color)] transition-colors">Career Finder</Link>
              <Link href="/business-associate" className="hover:text-[var(--text-hover-color)] transition-colors">Become Business Associate</Link>
              <Link href="/corporates" className="hover:text-[var(--text-hover-color)] transition-colors">For Corporates</Link>
              <Link href="/sitemap" className="hover:text-[var(--text-hover-color)] transition-colors">Sitemap</Link>
              <Link href="/contact" className="hover:text-[var(--text-hover-color)] transition-colors">Contact us</Link>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center space-y-4 md:space-y-0  text-center md:text-left mb-6 ">
            <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4">
              <Link href="/videos" className="flex items-center hover:text-[var(--text-hover-color)] transition-colors">
                Important Videos(YP TV)
              </Link>
              <Link href="/trust" className="flex items-center hover:text-[var(--text-hover-color)] transition-colors">
                Our Trust
              </Link>
              <Link href="/careers" className="flex items-center hover:text-[var(--text-hover-color)] transition-colors">
                YP Careers
                <span className="bg-[var(--primary-color-2)] text-[var(--primary-color)] text-xs px-2 py-1 rounded-full ml-2">We are Hiring</span>
              </Link>
              <Link href="/ask" className="flex items-center hover:text-[var(--text-hover-color)] transition-colors">
                Ask any Question - YP Panel
                <span className="bg-[var(--primary-color-2)] text-[var(--primary-color)] text-xs px-2 py-1 rounded-full ml-2">New</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center text-sm mb-6 space-x-2">
          <Link href="/disclaimer" className="hover:underline transition-colors">Disclaimer</Link>
          <span>|</span>
          <Link href="/terms" className="hover:underline transition-colors">Terms & Conditions</Link>
          <span>|</span>
          <Link href="/refund" className="hover:underline transition-colors">Refund Policy</Link>
          <span>|</span>
          <Link href="/policy" className="hover:underline transition-colors">Our Policy</Link>
        </div>

        <div className="text-center text-sm leading-relaxed max-w-4xl mx-auto mb-6">
          <p>
            The intent of Yogprerna is to provide unbiased precise information...
            <Link href="/more-info" className="hover:text-[var(--text-hover-color)] hover:underline ml-1">More+</Link>
          </p>
        </div>
        <div className="text-center text-sm">
          <p className="mb-2">© 2025 Yogprerna, Inc. All Rights Reserved.</p>
          <p className="flex items-center justify-center">
            Build with <span className="text-red-500 mx-1">❤️</span> Made in India.
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- Component for Mobile View ---
const MobileNav = () => {
  const pathname = usePathname();
  const navItems = [
    { label: "Home", icon: FaHome, href: "/" },
    { label: "University", icon: FaGraduationCap, href: "/university" },
    { label: "Search", icon: FaSearch, href: "/search" },
    { label: "Universities", icon: FaBuilding, href: "/universities" },
    { label: "Profile", icon: FaUser, href: "/profile" },
  ];
  return (
    <div className="">
      <nav className="bg-[var(--primary-color)]">
        <div className="pb-16">
          <FooterSitemapSection />
        </div>
      </nav>
      <div className="fixed bottom-1 left-0 right-0 mx-auto w-[95%] max-w-md z-50 sm:hidden bg-[var(--primary-color)] text-[var(--primary-color-2)] shadow-lg rounded-full">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link href={item.href} key={item.label} className="flex-1 text-center">
                <div className="flex flex-col items-center justify-center w-full focus:outline-none">
                  <Icon
                    className={`h-5 w-5 mb-1 transition-colors ${isActive ? "text-[var(--text-hover-color)]" : "text-[var(--text-color)]"}`}
                  />
                  <span className={`text-xs transition-colors ${isActive ? "text-[var(--text-hover-color)] font-semibold" : "text-[var(--subprimary-color)]"}`}>
                    {item.label}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// --- The Main Exported Component ---
const ResponsiveFooter = () => {
  const isMobile = useResponsive();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
  return isMobile ? <MobileNav /> : <DesktopFooter />;
};

export default ResponsiveFooter;