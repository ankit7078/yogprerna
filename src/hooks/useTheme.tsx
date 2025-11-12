"use client";
import { Theme, themes } from "@/common/Themes";
import { useEffect, useState } from "react";

export function useTheme(defaultTheme: Theme = themes[0]) {
  const [theme, setTheme] = useState<Theme>(() => {
    // ✅ Try to get the saved theme during initialization (before render)
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") as Theme | null;
      if (storedTheme && themes.includes(storedTheme)) {
        document.documentElement.setAttribute("data-theme", storedTheme);
        return storedTheme;
      }
    }
    document.documentElement.setAttribute("data-theme", defaultTheme);
    return defaultTheme;
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return { theme, setTheme, themes };
}
