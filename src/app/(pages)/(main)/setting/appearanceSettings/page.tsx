"use client";

import React from "react";
import { useTheme } from "@/hooks/useTheme";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

export default function AppearanceSettings() {
  const { theme, setTheme } = useTheme();

  const themes = [
    {
      name: "light",
      label: "Light Mode",
      icon: <FaSun className="text-yellow-400 text-3xl" />,
      description: "Bright and clear appearance for daytime viewing.",
      bg: "bg-yellow-50 text-gray-800",
      selectedBg: "bg-yellow-100 text-gray-900",
      activeBorder: "border-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.6)]",
    },
    {
      name: "dark",
      label: "Dark Mode",
      icon: <FaMoon className="text-blue-400 text-3xl" />,
      description: "Dimmed look for night or low-light environments.",
      bg: "bg-gray-800 text-white",
      selectedBg: "bg-gray-900 text-white",
      activeBorder: "border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.6)]",
    },
  ];

  return (
    <div className="bg-[var(--secondary-bg)] text-[var(--secondary-text)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Header */}
        <h1 className="heading font-semibold mb-1">
          Appearance Settings
        </h1>
        <p className="text-[var(--primary-text)] mb-8">
          Choose between light or dark mode to match your preference.
        </p>

        {/* Theme Cards */}
        <div className="grid sm:grid-cols-2 gap-8">
          {themes.map((t) => {
            const isActive = theme === t.name;

            return (
              <motion.div
                key={t.name}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setTheme(t.name)}
                className={`relative flex flex-col items-center text-center rounded-custom border-2 p-3 cursor-pointer transition-all duration-300 ease-in-out
                  ${isActive ? `${t.selectedBg} ${t.activeBorder}` : `${t.bg} border-[var(--primary-border)] shadow-xs`}
                `}
              >
                <div className="mb-2">{t.icon}</div>
                <h3 className="text-md font-medium">{t.label}</h3>
                {/* <p className="text-sm opacity-80 mt-1">{t.description}</p> */}

                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className={`mt-2 px-5 py-1 rounded-full text-xs font-medium transition-all duration-300
                    ${isActive
                      ? "bg-white text-gray-900"
                      : "bg-[var(--primary-bg)] text-[var(--secondary-text)]"
                    }`}
                >
                  {isActive ? "Selected" : "Select"}
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
