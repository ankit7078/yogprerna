"use client";
import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation'; // Import useSearchParams
import { FiLayout, FiSettings, FiX } from 'react-icons/fi';
import { MdSecurity } from 'react-icons/md';

// We add an 'id' to match the search param
const navItems = [
    { id: 'settings', name: 'Settings', icon: FiSettings, href: '?page=settings' },
    { id: 'business', name: 'Business', icon: FiLayout, href: '?page=business' },
    { id: 'security', name: 'Password & Security', icon: MdSecurity, href: '?page=security' },
];

const Sidebar = ({ isMobile = false, isOpen = false, onClose = () => {} }) => {
    // Get the current search parameters
    const searchParams = useSearchParams();
    // Get the value of the 'page' parameter
    const activePage = searchParams.get('page');

    const asideClasses = isMobile
        ? `fixed bottom-0 left-0 w-full z-50 bg-gray-900 text-gray-300 flex flex-col p-4 border-t border-gray-700 rounded-t-lg transition-transform duration-300 ease-in-out md:hidden max-h-[75vh] ${isOpen ? 'translate-y-0' : 'translate-y-full'}`
        : 'w-64 bg-gray-900 text-gray-300 flex flex-col p-4 border-r border-gray-700 hidden md:flex h-screen sticky top-0';

    return (
        <aside className={asideClasses}>
            <div className="flex items-center justify-between pb-2 px-4">
                <h1 className="text-xl font-bold text-white">Yogprerna</h1>
                {isMobile && (
                    <button onClick={onClose} className="text-gray-400 hover:text-white">
                        <FiX className="w-6 h-6" />
                    </button>
                )}
            </div>

            <nav className="flex-1 overflow-y-auto hide-scrollbar">
                <ul>
                    {navItems.map((item) => {
                        // Determine if this item is active
                        // 1. If activePage is null (no param), 'settings' is active.
                        // 2. Otherwise, check if the item's id matches the activePage param.
                        const isActive = (activePage === null && item.id === 'settings') || activePage === item.id;

                        return (
                            <li key={item.name} className="mb-2">
                                <Link
                                    href={item.href}
                                    // Apply active class dynamically
                                    className={`flex items-center text-sm justify-between p-2 rounded-lg ${
                                        isActive
                                            ? 'bg-gray-700 text-white' // Active state
                                            : 'hover:bg-gray-800' // Default state
                                    }`}
                                    onClick={isMobile ? onClose : undefined}
                                >
                                    <div className="flex items-center">
                                        <item.icon className="w-4 h-4 mr-3" />
                                        <span>{item.name}</span>
                                    </div>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;