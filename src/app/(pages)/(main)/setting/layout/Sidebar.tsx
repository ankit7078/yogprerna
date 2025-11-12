"use client";
import React from 'react';
import { FiSettings, FiX } from 'react-icons/fi';
import { IoIosColorPalette } from "react-icons/io";
import { SiGnuprivacyguard } from "react-icons/si";
import { MdManageAccounts } from "react-icons/md";
import { MdSecurity } from 'react-icons/md';
import { usePathname } from 'next/navigation';
import { LiaBusinessTimeSolid } from "react-icons/lia";
import Link from 'next/link';

interface SidebarProps {
  isMobile?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isMobile = false,
  isOpen = false,
  onClose = () => { },
}) => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Settings', icon: FiSettings, href: '/setting' },
    { name: 'Password & Security', icon: MdSecurity, href: '/setting/security' },
    { name: 'Business', icon: LiaBusinessTimeSolid, href: '/setting/business' },
    // { name: 'account', icon: FiLayout, href: '/setting/account' },
    { name: 'Data & privacy', icon: SiGnuprivacyguard, href: '/setting/data&privacy' },
    { name: 'AppearanceSettings', icon: IoIosColorPalette, href: '/setting/appearanceSettings' },
  ];

  const asideClasses = isMobile
    ? `fixed bottom-0 left-0 w-full z-100 bg-[var(--primary-bg)] text-gray-300 flex flex-col p-4 border-t border-gray-700 rounded-t-lg transition-transform duration-300 ease-in-out md:hidden max-h-[75vh] ${isOpen ? 'translate-y-0' : 'translate-y-full'}`
    : "w-64 bg-[var(--primary-bg)] text-gray-300 border-b flex flex-col p-4 border-r border-[var(--primary-border)] hidden md:flex h-screen sticky top-0";

  const handleNavClick = () => {
    if (isMobile) {
      onClose();
    }
  };

  return (
    <aside className={asideClasses}>
      <div className="flex items-center justify-between pb-3 px-4">
        {/* <h1 className="text-xl font-bold text-[var(--primary-text)]">Yogprerna</h1> */} 
        {isMobile && (
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <FiX className="w-6 h-6" />
          </button>
        )}
      </div>
      <nav className="flex-1 overflow-y-auto hide-scrollbar">
        <ul>
          {navItems.map((item) => {
            const isActive = item.href === '/setting'
              ? pathname === item.href
              : pathname.startsWith(item.href);

            return (
              <li key={item.name} className="mb-2">
                <Link
                  href={item.href}
                  onClick={handleNavClick}
                  className={`flex items-center text-sm justify-between p-2 shadow-xs rounded-lg ${isActive
                    ? 'bg-[var(--secondary-bg)] text-[var(--primary-text-h)]'
                    : 'hover:bg-[var(--secondary-bg)] text-[var(--primary-text)] '
                    }`}
                >
                  <div className="flex items-center">
                    <item.icon className="w-4 h-4 mr-3" />
                    <span>{item.name}</span>
                  </div>
                  {(item as any).count && (
                    <span className="px-2 py-0.5 text-xs font-semibold text-white bg-red-600 rounded-full">
                      {(item as any).count}
                    </span>
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;