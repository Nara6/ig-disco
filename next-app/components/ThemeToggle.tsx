"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-10 h-10" />;
    }

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative w-10 h-10 rounded-lg bg-secondary/10 hover:bg-secondary/20 border border-border/50 flex items-center justify-center transition-all duration-300 hover:scale-105"
            aria-label="Toggle Theme"
        >
            <Sun
                className="w-5 h-5 absolute transition-all duration-300"
                style={{
                    transform: !isDark ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(90deg)',
                    opacity: !isDark ? 1 : 0
                }}
                color="currentColor"
            />
            <Moon
                className="w-5 h-5 absolute transition-all duration-300"
                style={{
                    transform: isDark ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(-90deg)',
                    opacity: isDark ? 1 : 0
                }}
                color="currentColor"
            />
        </button>
    );
}
