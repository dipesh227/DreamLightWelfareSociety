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
      className="inline-flex h-10 w-10 items-center justify-center rounded-md border-2 border-input bg-background text-foreground font-medium transition-all duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground hover:border-accent-foreground/20 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:translate-y-0"
    >
      {isDark ? (
        <Moon size={18} className="transition-all duration-200 hover:rotate-12" />
      ) : (
        <Sun size={18} className="transition-all duration-200 hover:rotate-12" />
      )}
    </button>
  );
}