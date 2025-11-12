"use client";
import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import Sidebar from './layout/Sidebar';

export default function SettingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      <Sidebar
        isMobile={true}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <Sidebar isMobile={false} />

      <main className="flex-1 sm:p-8 p-3 md:p-12 bg-[var(--secondary-bg)] overflow-y-auto">

        <div className="flex justify-between items-center md:hidden mb-6">
          <h1 className="text-xl font-bold text-white">Yogprerna</h1>
          <button onClick={() => setIsSidebarOpen(true)} className="text-gray-300 hover:text-white p-1">
            <FiMenu className="w-6 h-6" />
          </button>
        </div>

        {children}

      </main>
    </div>
  );
}