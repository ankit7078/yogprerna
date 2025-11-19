"use client";
import React, { useState } from 'react';
import Sidebar from './_components/Sidebar';
import { Menu } from 'lucide-react';

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
          <button onClick={() => setIsSidebarOpen(true)} className="text-[var(--primary-text)] p-1">
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {children}

      </main>
    </div>
  );
}