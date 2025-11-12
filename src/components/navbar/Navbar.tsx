"use client";

import { useTheme } from "@/hooks/useTheme";
import React, { useState } from "react";
import { FiChevronDown, FiChevronRight, FiX, FiMenu, FiArrowLeft, FiSearch } from "react-icons/fi";

const universityMegaMenuData = {
    Engineering: {
        degrees: {
            title: "Colleges By Degrees",
            links: [
                { name: "B.Tech", href: "#" }, { name: "Bca" }, { name: "bsc" }, { name: "M.com" }, { name: "B.com" }, { name: "Bba" }, { name: "Mba" }, { name: "ba" }, { name: "Ma" }, { name: "M.tech" }, { name: "M.Tech", href: "#" }, { name: "B.Arch", href: "#" }, { name: "B.Tech + M.Tech", href: "#" }, { name: "Diploma", href: "#" },
            ],
            viewAll: "/engineering/colleges-in-india/",
        },
        locations: {
            title: "Colleges By Location",
            links: [
                { name: "Maharashtra", href: "#" }, { name: "Tamil Nadu", href: "#" }, { name: "Uttar Pradesh", href: "#" }, { name: "Karnataka", href: "#" }, { name: "Rajasthan", href: "#" },
            ],
            viewAll: "/engineering/colleges-in-india/",
        },
        popular: {
            title: "Popular Colleges",
            links: [
                { name: "ABES Engineering College, Ghaziabad", href: "#" }, { name: "Chandigarh University, Chandigarh", href: "#" }, { name: "Lovely Professional University, Phagwara", href: "#" },
            ],
            viewAll: "/engineering/colleges-in-india/",
        },
        top: {
            title: "Top Colleges",
            links: [
                { name: "IIT Kharagpur", href: "#" }, { name: "IIT Delhi", href: "#" }, { name: "IIT Madras", href: "#" }, { name: "IIT Kanpur", href: "#" }, { name: "IISC Bangalore", href: "#" },
            ],
            viewAll: "/engineering/colleges-in-india/",
        },
    },
    Management: {
        degrees: {
            title: "Colleges By Degrees",
            links: [
                { name: "MBA", href: "#" }, { name: "BBA", href: "#" }, { name: "Diploma", href: "#" }, { name: "PGDM", href: "#" }, { name: "BBM", href: "#" },
            ],
            viewAll: "/mba/colleges-in-india/",
        },
        locations: {
            title: "Colleges By Location",
            links: [
                { name: "Maharashtra", href: "#" }, { name: "Tamil Nadu", href: "#" }, { name: "Delhi NCR", href: "#" }, { name: "Karnataka", href: "#" }, { name: "Rajasthan", href: "#" },
            ],
            viewAll: "/mba/colleges-in-india/",
        },
        popular: {
            title: "Popular Colleges",
            links: [
                { name: "Mitcon Institute of Management, Pune", href: "#" }, { name: "Institute of Insurance and Risk Management, Hyderabad", href: "#" }, { name: "Shanti Business School, Ahmedabad", href: "#" }, { name: "Athena School of Management, Mumbai", href: "#" }, { name: "International School of Management Studies, Pune", href: "#" }, { name: "Asia-Pacific Institute of Management, New Delhi", href: "#" }
            ],
            viewAll: "/mba/colleges-in-india/",
        },
        top: {
            title: "Top Colleges",
            links: [
                { name: "IIM Ahmedabad", href: "#" }, { name: "IIM Bangalore", href: "#" }, { name: "IIM Calcutta", href: "#" }, { name: "ISB Hyderabad", href: "#" }, { name: "IIM Lucknow", href: "#" }, { name: "XLRI", href: "#" }, { name: "FMS Delhi", href: "#" }
            ],
            viewAll: "/mba/colleges-in-india/",
        },
    },
    "Commerce & Banking": {},
    Medical: {},
    Sciences: {},
    "Hotel Management": {},
    "Information Technology": {},
    "Arts & Humanities": {},
    "Design": {},

};

const collegeMegaMenuData = {
    Engineering: {
        degrees: { title: "Colleges By Degrees", links: [{ name: "B.Tech", href: "#" }, { name: "M.Tech", href: "#" }], viewAll: "#" },
        locations: { title: "Colleges By Location", links: [{ name: "Maharashtra", href: "#" }, { name: "Tamil Nadu", href: "#" }], viewAll: "#" },
        popular: { title: "Popular Colleges", links: [{ name: "ABES Engineering College, Ghaziabad", href: "#" }], viewAll: "#" },
        top: { title: "Top Colleges", links: [{ name: "IIT Kharagpur", href: "#" }], viewAll: "#" }
    },
    Management: {
        degrees: {
            title: "Colleges By Degrees",
            links: [
                { name: "MBA", href: "#" }, { name: "BBA", href: "#" }, { name: "Diploma", href: "#" }, { name: "PGDM", href: "#" }, { name: "BBM", href: "#" },
            ],
            viewAll: "/mba/colleges-in-india/",
        },
        locations: {
            title: "Colleges By Location",
            links: [
                { name: "Maharashtra", href: "#" }, { name: "Tamil Nadu", href: "#" }, { name: "Delhi NCR", href: "#" }, { name: "Karnataka", href: "#" }, { name: "Rajasthan", href: "#" },
            ],
            viewAll: "/mba/colleges-in-india/",
        },
        popular: {
            title: "Popular Colleges",
            links: [
                { name: "Mitcon Institute of Management, Pune", href: "#" }, { name: "Institute of Insurance and Risk Management, Hyderabad", href: "#" }, { name: "International School of Management Studies, Pune", href: "#" }, { name: "Asia-Pacific Institute of Management, New Delhi", href: "#" }
            ],
            viewAll: "/mba/colleges-in-india/",
        },
        top: {
            title: "Top Colleges",
            links: [
                { name: "IIM Ahmedabad", href: "#" }, { name: "IIM Bangalore", href: "#" }, { name: "IIM Calcutta", href: "#" }, { name: "ISB Hyderabad", href: "#" }, { name: "IIM Lucknow", href: "#" }, { name: "XLRI", href: "#" }, { name: "FMS Delhi", href: "#" }
            ],
            viewAll: "/mba/colleges-in-india/",
        },
    },
};

const coursesMenuData = {
    "Popular Courses": {
        main: {
            title: "Popular Courses",
            links: [
                { name: "B.Tech", href: "#" }, { name: "Fashion Styling", href: "#" }, { name: "MBA in Media Management", href: "#" }, { name: "Bachelor of Management Studies", href: "#" }, { name: "B.Arch", href: "#" }, { name: "Auto CAD", href: "#" }, { name: "MBA in International Business", href: "#" }, { name: "Bachelor of Mass Communication", href: "#" }, { name: "B.Tech in Mechanical Engineering", href: "#" }, { name: "B.Des", href: "#" },
            ],
            viewAll: "/courses",
        }
    }
};

export default function Navbar() {
    const [hoveredMenu, setHoveredMenu] = useState(null);
    const [activeDesktopSubMenu, setActiveDesktopSubMenu] = useState(null);
    const { theme, setTheme } = useTheme()

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [mobileSubMenu, setMobileSubMenu] = useState(null);
    const [mobileDetailMenu, setMobileDetailMenu] = useState(null);
    const [activeAccordion, setActiveAccordion] = useState(null);

    const menuItems = [
        { name: "University", href: "#", dropdownContent: universityMegaMenuData },
        { name: "Yoga Studio", href: "#", dropdownContent: universityMegaMenuData },
        { name: "College", href: "#", dropdownContent: collegeMegaMenuData },
        { name: "Courses", href: "#", dropdownContent: coursesMenuData },
        { name: "Events", href: "#" },
    ];

    const handleCloseMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setTimeout(() => {
            setMobileSubMenu(null);
            setMobileDetailMenu(null);
        }, 300);
    };

    const handleCloseSearch = () => setIsSearchOpen(false);

    const toggleMobileMenu = () => {
        if (isMobileMenuOpen) {
            handleCloseMobileMenu();
        } else {
            handleCloseSearch();
            setIsMobileMenuOpen(true);
        }
    };

    const toggleSearchMenu = () => {
        if (isSearchOpen) {
            handleCloseSearch();
        } else {
            handleCloseMobileMenu();
            setIsSearchOpen(true);
        }
    };

    const handleSubMenuClick = (e, item) => {
        if (item.dropdownContent) {
            e.preventDefault();
            setMobileSubMenu({ title: item.name, data: item.dropdownContent });
        }
    };

    const handleDetailMenuClick = (e, subItemName, subItemData) => {
        e.preventDefault();
        if (subItemData && Object.keys(subItemData).length > 0) {
            setMobileDetailMenu({ title: subItemName, data: subItemData });
            setActiveAccordion(Object.keys(subItemData)[0]);
        }
    };

    const handleDesktopMouseEnter = (item) => {
        if (item.dropdownContent) {
            setHoveredMenu(item.name);
            if (item.name === "University" || item.name === "College") {
                setActiveDesktopSubMenu(Object.keys(item.dropdownContent)[0]);
            }
        }
    };

    const handleDesktopMouseLeave = () => {
        setHoveredMenu(null);
    };

    return (
        <>
            <header className="bg-[var(--primary-bg)] shadow-sm sticky top-0 z-40 px-4">
                <div className="container mx-auto flex items-center justify-between h-16">
                    {/* --- Mobile Header --- */}
                    <div className="lg:hidden  flex w-full justify-between items-center">
                        <button onClick={toggleMobileMenu} className="p-2 -ml-2">
                            <FiMenu className="w-6 h-6 text-[var(--text-color)] " />
                        </button>
                        <a href="/" className="flex-shrink-0">
                            {theme === "dark" ? (
                                <img
                                    src="img/logo/logo-white.png"
                                    alt="YogPrerna"
                                    className=" h-8 w-auto"
                                />
                            ) : (
                                <img
                                    src="img/logo/logo-white.png"
                                    alt="YogPrerna"
                                    className=" h-8 w-auto"
                                />
                            )}
                        </a>
                        <button onClick={toggleSearchMenu} className="text-[var(--text-color)]  h-9 w-9 flex items-center justify-center rounded-md p-1">
                            <FiSearch className="h-5 w-5" />
                        </button>
                        {/* <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="text-blue-500 h-10 w-10 flex items-center justify-center rounded-md cursor-pointer transition">
                            {theme === "dark" ? (
                                <FaSun className="h-5 w-5" />
                            ) : (
                                <FaMoon className="h-5 w-5" />
                            )}

                        </button> */}
                    </div>

                    {/* --- Desktop Header --- */}
                    <div className="hidden lg:flex w-full items-center justify-between">
                        <a href="/" className="flex-shrink-0 mt-2" >
                            {theme === "dark" ? (
                                <img
                                    src="/img/logo/logo-white.png"
                                    alt="YogPrerna"
                                    className=" h-6 w-auto"
                                />
                            ) : (
                                <img
                                    src="/img/logo/logo-black.png"
                                    alt="YogPrerna"
                                    className=" h-6 w-auto"
                                />
                            )}
                        </a>

                        <nav className="flex flex-grow justify-center">
                            <ul className="flex space-x-6 items-center">
                                {menuItems.map((item) => (
                                    <li key={item.name} className="py-4 static" onMouseEnter={() => handleDesktopMouseEnter(item)} onMouseLeave={handleDesktopMouseLeave}>
                                        <a href={item.href} className="text-[var(--text-color)] hover:text-[var(--primary-page-h)] transition inline-flex items-center">
                                            {item.name}
                                            {item.dropdownContent && (<FiChevronDown className="ml-1 mt-1 h-4 w-4" />)}
                                        </a>
                                        {hoveredMenu === item.name && item.dropdownContent && (
                                            <div className={`absolute top-full left-0 right-0 bg-[var(--primary-bg)] shadow-sm border-t border-[var(--muted-text)] transition-all duration-300 ease-in-out opacity-100 visible translate-y-0`}>
                                                {item.name === 'Courses' && (
                                                    <div className="container mx-auto p-6">
                                                        <h3 className="font-semibold text-[var(--text-color)] mb-4 text-base">Popular Courses</h3>
                                                        <ul className="grid grid-cols-4 gap-x-8 gap-y-3">
                                                            {coursesMenuData['Popular Courses'].main.links.map(link => (<li key={link.name}><a href={link.href} className="text-sm text-[var(--primary-text)] hover:text-[var(--text-hover-color)] ">{link.name}</a></li>))}
                                                        </ul>
                                                        <div className="mt-5 pt-3"><a href={coursesMenuData['Popular Courses'].main.viewAll} className="text-sm text-[var(--text-hover-color)] hover:underline">VIEW ALL COURSES</a></div>
                                                    </div>
                                                )}
                                                {(item.name === 'University' || item.name === 'College') && (
                                                    <div className="container mx-auto flex">
                                                        <div className="w-1/4 bg-[var(--blue-bg)] text-[var(--text-color-primary)]">
                                                            <ul className="py-4">
                                                                {Object.keys(item.dropdownContent).map((subMenuName) => (
                                                                    <li
                                                                        key={subMenuName}
                                                                        onMouseEnter={() => setActiveDesktopSubMenu(subMenuName)}
                                                                        className={`px-5 py-3 cursor-pointer text-sm font-medium transition-colors duration-200 ${activeDesktopSubMenu === subMenuName
                                                                            ? "relative bg-[var(--blue-bg)] text-white font-semibold after:content-[''] after:block after:absolute after:top-1/2 after:-translate-y-1/2 after:left-full after:w-0 after:h-0 after:border-y-[8px] after:border-l-[8px] after:border-y-transparent after:border-l-[var(--blue-bg)]"
                                                                            : "hover:bg-[var(--blue-bg)]"
                                                                            }`}
                                                                    >
                                                                        {subMenuName}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div className="w-3/4 p-8 max-h-[450px] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-500 [&::-webkit-scrollbar-thumb]:rounded-full">
                                                            {activeDesktopSubMenu && item.dropdownContent[activeDesktopSubMenu] && Object.keys(item.dropdownContent[activeDesktopSubMenu]).length > 0 ? (
                                                                <div className="grid grid-cols-4 gap-x-8">
                                                                    {Object.values(item.dropdownContent[activeDesktopSubMenu]).map(section => (
                                                                        <div key={section.title}>
                                                                            <h3 className="font-semibold text-[var(--text-color)] mb-3">{section.title}</h3>
                                                                            <ul className="space-y-2">
                                                                                {section.links.slice(0, 16).map(link => (<li key={link.name}><a href={link.href} className="text-sm text-[var(--primary-text))]  hover:text-[var(--text-hover-color)]">{link.name}</a></li>))}
                                                                            </ul>
                                                                            {section.viewAll && <a href={section.viewAll} className="text-sm text-[var(--text-hover-color)] hover:underline mt-4 inline-block">VIEW ALL</a>}
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            ) : <div className="text-center text-gray-500">No details available.</div>}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="flex items-center space-x-4 flex-shrink-0">
                            <button onClick={toggleSearchMenu} className="text-[var(--primary-text)] h-10 w-10 flex items-center justify-center rounded-md cursor-pointer transition">
                                <FiSearch className="h-5 w-5" />
                            </button>

                            {/* <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="text-blue-500 h-10 w-10 flex items-center justify-center rounded-md cursor-pointer transition">
                                {theme === "dark" ? (
                                    <FaSun className="h-5 w-5" />
                                ) : (
                                    <FaMoon className="h-5 w-5" />
                                )}
                            </button> */}

                        </div>
                    </div>
                </div>
            </header>

            {/* --- MOBILE NAVIGATION OFF-CANVAS --- */}
            <div className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300  ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="absolute inset-0 bg-[var(--blue-bg)]  bg-opacity-50" onClick={handleCloseMobileMenu}></div>
                <div className={`fixed top-0 left-0 h-full w-full max-w-sm bg-[var(--primary-bg)] text-[var(--text-color-primary)] shadow-xl transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="relative w-full h-full overflow-hidden">
                        <div className={`absolute inset-0 transition-transform duration-300 ease-in-out ${mobileSubMenu ? '-translate-x-full' : 'translate-x-0'}`}>
                            <div className="h-full flex flex-col">
                                <div className="p-4 bg-[var(--blue-bg)] text-[var(--text-color-primary)] flex items-center justify-between"><div className="flex items-center gap-3"><img src="https://placehold.co/40x40/FFFFFF/3B82F6?text=U" alt="User Avatar" className="w-10 h-10 rounded-full border-2 border-white" /><div><p className="font-semibold">Username</p><p className="text-xs opacity-80">Email@gmail.com</p></div></div><button onClick={handleCloseMobileMenu} className="p-1"><FiX className="w-5 h-5" /></button></div>
                                <div className="p-4"><button className="w-full bg-[var(--primary-bg)] text-[var(--text-hover-color)] border border-[var(--text-hover-color)] px-4 py-2 rounded-md font-semibold text-sm">Login/Signup</button></div>
                                <nav className="flex-grow overflow-y-auto"><ul className="flex flex-col">{menuItems.map((item) => (<li key={item.name} className="border-b border-gray-300"><a href={item.href} onClick={(e) => handleSubMenuClick(e, item)} className="flex justify-between items-center text-[var(--secondary-text)] p-4 transition-colors"><span>{item.name}</span>{item.dropdownContent && <FiChevronRight className="w-5 h-5 text-gray-400" />}</a></li>))}</ul></nav>
                            </div>
                        </div>
                        <div className={`absolute inset-0 transition-transform duration-300 ease-in-out bg-[var(--primary-bg)] ${!mobileSubMenu ? 'translate-x-full' : 'translate-x-0'} ${mobileDetailMenu ? '-translate-x-full' : ''}`}>{mobileSubMenu && (<div className="h-full flex flex-col"><div className="p-4 bg-[var(--blue-bg)] text-[var(--text-color-primary)] flex items-center gap-4 flex-shrink-0"><button onClick={() => setMobileSubMenu(null)} className="p-1"><FiArrowLeft className="w-5 h-5" /></button><h3 className="font-semibold text-lg">{mobileSubMenu.title}</h3></div><nav className="flex-grow overflow-y-auto"><ul className="flex flex-col">{Object.entries(mobileSubMenu.data).map(([subItemName, subItemData]) => (<li key={subItemName} className="border-b border-gray-200"><a href="#" onClick={(e) => handleDetailMenuClick(e, subItemName, subItemData)} className="flex justify-between items-center text-[var(--secondary-text)] hover:bg-gray-100 p-4 transition-colors"><span>{subItemName}</span><FiChevronRight className="w-5 h-5 text-gray-400" /></a></li>))}</ul></nav></div>)}</div>
                        <div className={`absolute inset-0 transition-transform duration-300 ease-in-out bg-[var(--primary-bg)] text-[var(--secondary-text)] ${!mobileDetailMenu ? 'translate-x-full' : 'translate-x-0'}`}>{mobileDetailMenu && (<div className="h-full flex flex-col"><div className="p-4 bg-[var(--blue-bg)] text-[var(--text-color-primary)] flex items-center gap-4 flex-shrink-0"><button onClick={() => setMobileDetailMenu(null)} className="p-1"><FiArrowLeft className="w-5 h-5" /></button><h3 className="font-semibold text-lg">{mobileDetailMenu.title}</h3></div><nav className="flex-grow overflow-y-auto p-2">{Object.entries(mobileDetailMenu.data).map(([accordionTitle, accordionContent]) => {
                            const isAccordionOpen = activeAccordion === accordionTitle; return (<div key={accordionTitle} className="border-b border-gray-300"><button onClick={() => setActiveAccordion(isAccordionOpen ? null : accordionTitle)} className="w-full flex justify-between items-center p-3 font-semibold text-left">
                                <span>{accordionContent.title}</span><FiChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isAccordionOpen ? 'rotate-180' : ''}`} /></button>{isAccordionOpen && (<div className="p-3"><ul className="space-y-2">{accordionContent.links.map(link => (<li key={link.name}><a href={link.href} className="text-sm hover:text-[var(--text-hover-color)] text-[var(--primary-text)]">{link.name}</a></li>))}{accordionContent.viewAll && (<li><a href={accordionContent.viewAll} className="text-sm text-blue-600 hover:underline mt-2 inline-block font-semibold">VIEW ALL</a></li>)}</ul></div>)}</div>)
                        })} </nav></div>)}</div>
                    </div>
                </div>
            </div>

            {/* --- SEARCH OFF-CANVAS (FOR ALL SIZES) --- */}
            <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isSearchOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="absolute inset-0 bg-black bg-opacity-50" onClick={handleCloseSearch}></div>
                <div className={`fixed top-0 right-0 h-full w-full md:w-1/3 md:max-w-md bg-white shadow-xl transition-transform duration-300 ease-in-out ${isSearchOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="h-full flex flex-col">
                        <div className="flex-shrink-0 p-4 border-b flex items-center gap-4">
                            <button onClick={handleCloseSearch} className="p-1"><FiArrowLeft className="w-6 h-6 text-gray-600" /></button>
                            <h3 className="font-semibold text-lg text-gray-800">Search</h3>
                        </div>
                        <div className="p-4 border-b bg-gray-50">
                            <div className="relative">
                                <input type="text" placeholder="Search for Colleges, Exams, Courses..." className="w-full h-12 pl-4 pr-12 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
                                <button className="absolute inset-y-0 right-0 flex items-center justify-center w-12 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
                                    <FiSearch className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                        <nav className="p-4 border-b">
                            <h4 className="text-sm font-semibold text-gray-500 mb-3">Quick Links</h4>
                            <ul className="flex flex-wrap gap-2">
                                {menuItems.map(item => (
                                    <li key={item.name}><a href={item.href} className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-200">{item.name}</a></li>
                                ))}
                            </ul>
                        </nav>
                        <div className="p-4 flex-grow">
                            <h4 className="text-sm font-semibold text-gray-500 mb-3">Popular Searches</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="flex items-center text-gray-600 hover:text-blue-500"><FiChevronRight className="w-4 h-4 mr-2 text-gray-400" /> Top MBA Colleges</a></li>
                                <li><a href="#" className="flex items-center text-gray-600 hover:text-blue-500"><FiChevronRight className="w-4 h-4 mr-2 text-gray-400" /> B.Tech in Computer Science</a></li>
                                <li><a href="#" className="flex items-center text-gray-600 hover:text-blue-500"><FiChevronRight className="w-4 h-4 mr-2 text-gray-400" /> Medical Entrance Exams</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}