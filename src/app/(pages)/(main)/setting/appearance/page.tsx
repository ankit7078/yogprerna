"use client";
import { useState, useEffect } from "react";

export default function AppearanceSettings() {
  const [theme, setTheme] = useState("system");

  useEffect(() => {
    if (theme === "system") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", isDark);
    } else {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl w-full max-w-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Appearance</h2>

        <div className="space-y-4">
          <label className="block">
            <span className="text-gray-700 dark:text-gray-300 font-medium">Theme</span>
            <div className="mt-2 relative">
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="w-full appearance-none bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="system">System</option>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
              </select>
              <svg
                className="w-5 h-5 absolute right-3 top-3 text-gray-500 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
