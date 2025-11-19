"use client";

import { Theme, themes } from "@/common/Themes";
import { useEffect, useState } from "react";

export function useTheme(defaultTheme: Theme = themes[0]) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  // Load saved theme safely on client
  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedTheme = localStorage.getItem("theme") as Theme | null;

    const initialTheme =
      storedTheme && themes.includes(storedTheme)
        ? storedTheme
        : defaultTheme;

    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  // Update theme on change
  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return { theme, setTheme, themes };
}
