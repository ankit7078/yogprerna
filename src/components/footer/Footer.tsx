"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaHome,
  FaGraduationCap,
  FaSearch,
  FaBuilding,
  FaUser,
} from "react-icons/fa";
import { LuHeart } from "react-icons/lu";

const useResponsive = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
};

const FooterSitemapSection = () => {
  const sections = [
    {
      title: 'Countries',
      items: [
        { name: 'USA', href: '#', image: '/img/footer-img/country-1.png' },
        { name: 'UK', href: '#', image: '/img/footer-img/country-2.png' },
        { name: 'Australia', href: '#', image: '/img/footer-img/country-3.png' },
        { name: 'Canada', href: '#', image: '/img/footer-img/country-4.png' },
        { name: 'USA', href: '#', image: '/img/footer-img/country-1.png' },
        { name: 'UK', href: '#', image: '/img/footer-img/country-2.png' },
        { name: 'Australia', href: '#', image: '/img/footer-img/country-3.png' },
        { name: 'Canada', href: '#', image: '/img/footer-img/country-4.png' },
      ],
      views: 'View all',
      viewAllLink: '/all-retreats' // <-- Add this
    },
    {
      title: 'Locations',
      items: [
        { name: 'Rishikesh', href: '#' },
        { name: 'Dehradun', href: '#' },
        { name: 'Bengaluru', href: '#' },
        { name: 'Mysuru', href: '#' },
        { name: 'Rishikesh', href: '#' },
        { name: 'Dehradun', href: '#' },
        { name: 'Bengaluru', href: '#' },
        { name: 'Mysuru', href: '#' },
      ],
      views: 'View all',
      viewAllLink: '/all-retreats' // <-- Add this
    },
    {
      title: 'Yoga By Category',
      items: [
        { name: 'University', href: '#' },
        { name: 'College', href: '#' },
        { name: 'Yoga Studio', href: '#' },
        { name: 'Online Yoga Studio', href: '#' },
        { name: 'University', href: '#' },
        { name: 'College', href: '#' },
        { name: 'Yoga Studio', href: '#' },
        { name: 'Online Yoga Studio', href: '#' },
      ],
      views: 'View all',
      viewAllLink: '/all-retreats' // <-- Add this
    },
    {
      title: 'Retreat Programs',
      items: [
        { name: '4 day yoga retreat', href: '#' },
        { name: '7 day yoga retreat', href: '#' },
        { name: '10 day yoga retreat', href: '#' },
        { name: '14 day yoga retreat', href: '#' },
        { name: '4 day yoga retreat', href: '#' },
        { name: '7 day yoga retreat', href: '#' },
        { name: '10 day yoga retreat', href: '#' },
        { name: '14 day yoga retreat', href: '#' },
      ],
      views: 'View all',
      viewAllLink: '/all-retreats' // <-- Add this
    },
    {
      title: 'Company',
      items: [
        { name: 'Mentors', href: '#' },
        { name: 'Success Stories', href: '#' },
        { name: 'Sitemap', href: '#' },
        { name: 'Sitemap', href: '#' },
        { name: 'Mentors', href: '#' },
        { name: 'Success Stories', href: '#' },
        { name: 'Sitemap', href: '#' },
        { name: 'Sitemap', href: '#' },
      ],
      views: 'View all',
      viewAllLink: '/all-retreats' // <-- Add this
    },
    {
      title: 'Events',
      items: [
        { name: 'International Yoga Festival', href: '#' },
        { name: 'Akhanda Yoga Festival 2026', href: '#' },
        { name: 'Himalayan Bliss Yoga Retreat', href: '#' },
        { name: 'Himalayan Bliss Yoga Retreat', href: '#' },
        { name: 'International Yoga Festival', href: '#' },
        { name: 'Akhanda Yoga Festival 2026', href: '#' },
        { name: 'Himalayan Bliss Yoga Retreat', href: '#' },
        // Fixed typo here (was name:T)
        { name: 'Himalayan Bliss Yoga Retreat', href: '#' },
      ],
      views: 'View all',
      viewAllLink: '/all-retreats' // <-- Add this
    },
  ];

  return (
    <div className="bg-[var(--primary-bg)] py-8 ">
      <div className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className={`${sectionIndex === 5 ? "col-span-2" : ""}`}>
              <h3 className="text-xs font-semibold text-[var(--secondary-text)] tracking-wider  mb-3">
                {section.title}
              </h3>
              <ul className="space-y-2 footer-list">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a
                      href={item.href}
                      className="text-[var(--primary-text)] hover:text-[var(--primary-page-h)] flex items-center gap-2 transition"
                    >
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
                {section.views && (
                  <Link
                    href={section.viewAllLink || '#'} // Use the link, or '#' as a fallback
                    className="text-[var(--text-hover-color)] text-xs font-semibold"
                  >
                    {section.views}
                  </Link>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const DesktopFooter = () => {
  return (
    <footer className="bg-[var(--primary-bg)] text-[var(--primary-text)] py-10 px-4">
      <div className="container mx-auto max-w-6xl">
        <FooterSitemapSection />
        <hr className="border-[var(--primary-border)] my-10 " />
        <div className="border-b border-[var(--primary-border)] mb-6">
          <div className="flex flex-wrap items-center justify-center space-y-4 md:space-y-0 text-center md:text-left">
            <div className="flex flex-wrap justify-center heading-sm space-x-6 mb-6 sm:mb-3 gap-y-2 sm:gap-y-0">
              <Link href="/setting" className="hover:text-[var(--text-hover-color)] transition-colors">Profile</Link>
              <Link href="/profile/professional" className="hover:text-[var(--text-hover-color)] transition-colors">Professional</Link>
              <Link href="/yoga-blog" className="hover:text-[var(--text-hover-color)] transition-colors">Blog</Link>
              <Link href="/courses" className="hover:text-[var(--text-hover-color)] transition-colors">Course</Link>
              <Link href="/detail-course" className="hover:text-[var(--text-hover-color)] transition-colors">Detail Course</Link>
              <Link href="/yoga-institutes" className="hover:text-[var(--text-hover-color)] transition-colors">Institutes</Link>
              <Link href="/detail-institutes" className="hover:text-[var(--text-hover-color)] transition-colors">Institutes-detail</Link>
              <Link href="/compare/test" className="hover:text-[var(--text-hover-color)] transition-colors">Compare</Link>
              <Link href="/search/MCA" className="hover:text-[var(--text-hover-color)] transition-colors">Search</Link>
              <Link href="/events" className="hover:text-[var(--text-hover-color)] transition-colors">Events</Link>
              <Link href="/event-details/events/1" className="hover:text-[var(--text-hover-color)] transition-colors">Event-detail</Link>
              <Link href="/retreats" className="hover:text-[var(--text-hover-color)] transition-colors">Retreats</Link>
              <Link href="/retreat-details" className="hover:text-[var(--text-hover-color)] transition-colors">Retreat Detail</Link>
            </div>
            <div className="flex flex-wrap justify-center heading-sm space-x-6 mb-6 sm:mb-3 gap-y-2 sm:gap-y-0">
              <Link href="/about" className="hover:text-[var(--text-hover-color)] transition-colors">About us</Link>
              <Link href="/blog" className="hover:text-[var(--text-hover-color)] transition-colors">Blog</Link>
              <Link href="/news" className="hover:text-[var(--text-hover-color)] transition-colors">News & Update</Link>
              <Link href="/career-finder" className="hover:text-[var(--text-hover-color)] transition-colors">Career</Link>
              <Link href="/corporates" className="hover:text-[var(--text-hover-color)] transition-colors">For Corporates</Link>
              <Link href="/sitemap" className="hover:text-[var(--text-hover-color)] transition-colors">Add Your Property</Link>
              <Link href="/contact" className="hover:text-[var(--text-hover-color)] transition-colors">Contact us</Link>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center  heading-sm text-center md:text-left mb-6 ">
            <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-2">
              <Link href="/videos" className="flex items-center hover:text-[var(--text-hover-color)] transition-colors">
                Ask Community
              </Link>
              <Link href="/trust" className="flex items-center hover:text-[var(--text-hover-color)] transition-colors">
                Compare
              </Link>
              <Link href="/trust" className="flex items-center hover:text-[var(--text-hover-color)] transition-colors">
                Professional
              </Link>
              <Link href="/careers" className="flex items-center hover:text-[var(--text-hover-color)] transition-colors">
                Careers
                <span className="bg-[var(--secondary-text)] text-[var(--primary-bg)] text-xs px-2 py-1 rounded-full ml-2">New Hiring</span>
              </Link>
              <Link href="/ask" className="flex items-center hover:text-[var(--text-hover-color)] transition-colors">
                Ask Prerna (AI)
                <span className="bg-[var(--secondary-text)] text-[var(--primary-bg)] text-xs px-2 py-1 rounded-full ml-2">New</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center text-sm mb-6 space-x-2">
          <Link href="/disclaimer" className="hover:underline transition-colors ">Disclaimer</Link>
          <span>|</span>
          <Link href="/terms" className="hover:underline transition-colors">Terms & Conditions</Link>
          <span>|</span>
          <Link href="/refund" className="hover:underline transition-colors">Cookies</Link>
          <span>|</span>
          <Link href="/policy" className="hover:underline transition-colors">Our Policy</Link>
        </div>

        <div className="text-center text-sm">
          <p className="mb-2">© 2025 Yogprerna, Inc. All Rights Reserved.</p>
          <p className="flex items-center justify-center">
            Build with <span className="text-red-500 mx-1"><LuHeart /></span> Made in India.
          </p>
        </div>
      </div>
    </footer>
  );
};


// --- mobile view show sticky bottom ---
const MobileBottomBar = () => {
  const pathname = usePathname();
  const navItems = [
    { label: "Home", icon: FaHome, href: "/" },
    { label: "University", icon: FaGraduationCap, href: "/university" },
    { label: "Search", icon: FaSearch, href: "/search" },
    { label: "Universities", icon: FaBuilding, href: "/universities" },
    { label: "Profile", icon: FaUser, href: "/profile" },
  ];
  return (
    <div className="fixed bottom-1 left-0 right-0 mx-auto w-[95%] max-w-md z-50 sm:hidden bg-[var(--primary-bg)] text-[var(--secondary-text)] shadow-lg rounded-full">
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
                <span className={`text-xs transition-colors ${isActive ? "text-[var(--text-hover-color)] font-semibold" : "text-[var(--primary-text)]"}`}>
                  {item.label}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

// --- UPDATED COMPONENT ---
const ResponsiveFooter = () => {
  const isMobile = useResponsive();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <DesktopFooter />
      {isMobile && <MobileBottomBar />}
    </>
  );
};

export default ResponsiveFooter;