"use client";
import { Theme, themes } from "@/common/Themes";
import { useEffect, useState } from "react"

export function useTheme(defaultTheme: Theme = themes[0]) {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    // Load stored theme on mount
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") as Theme | null;
        if (storedTheme && themes.includes(storedTheme)) {
            setTheme(storedTheme);
            document.documentElement.setAttribute("data-theme", storedTheme);
        } else {
            document.documentElement.setAttribute("data-theme", defaultTheme);
        }
    }, [defaultTheme]);

    // Update localStorage + DOM whenever theme changes
    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return { theme, setTheme, themes };
}
