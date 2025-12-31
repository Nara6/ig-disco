"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="theme-toggle-btn" />;
    }

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="theme-toggle-btn"
            aria-label="Toggle Theme"
        >
            <Sun
                className="w-6 h-6 theme-icon"
                style={{
                    transform: !isDark ? 'scale(1) rotate(0deg)' : 'scale(0.5) rotate(90deg)',
                    opacity: !isDark ? 1 : 0
                }}
                color="currentColor"
            />
            <Moon
                className="w-6 h-6 theme-icon"
                style={{
                    transform: isDark ? 'scale(1) rotate(0deg)' : 'scale(0.5) rotate(-90deg)',
                    opacity: isDark ? 1 : 0
                }}
                color="currentColor"
            />
        </button>
    );
}
