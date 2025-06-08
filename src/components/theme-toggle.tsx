"use client"

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder with the same size to prevent layout shift
    return (
      <div className="h-10 w-10 rounded-md border border-input bg-transparent" />
    );
  }

  const isDark = resolvedTheme === "dark";

  const handleToggle = () => {
    if (theme === "dark") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    } else {
      // If system theme, toggle to opposite of current resolved theme
      setTheme(isDark ? "light" : "dark");
    }
  };

  return (
    <button
      onClick={handleToggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-input bg-transparent text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    >
      {isDark ? (
        <Moon size={16} className="transition-transform duration-200" />
      ) : (
        <Sun size={16} className="transition-transform duration-200" />
      )}
    </button>
  );
}