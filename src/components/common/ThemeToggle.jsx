"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "theme";

const getInitialTheme = () => {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem(STORAGE_KEY);
  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const applyTheme = (theme) => {
  if (typeof document === "undefined") {
    return;
  }

  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.setAttribute("data-theme", theme);
};

const ThemeToggle = ({ mobile = false }) => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const initialTheme = getInitialTheme();
    setTheme(initialTheme);
    applyTheme(initialTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }
    applyTheme(theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className={
          mobile
            ? "w-full flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white"
            : "hidden md:inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/5 text-white"
        }
      >
        <span className="text-sm">{mobile ? "Theme" : ""}</span>
        <span className="text-lg">🌙</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      aria-pressed={theme === "dark"}
      className={
        mobile
          ? "w-full flex items-center justify-between rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 px-4 py-3 text-white transition-all"
          : "hidden md:inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white transition-all"
      }
    >
      {mobile ? (
        <>
          <span className="text-sm font-medium">
            {theme === "dark" ? "Dark Mode" : "Light Mode"}
          </span>
          <span className="text-lg" aria-hidden="true">
            {theme === "dark" ? "☀️" : "🌙"}
          </span>
        </>
      ) : (
        <span className="text-lg leading-none" aria-hidden="true">
          {theme === "dark" ? "☀️" : "🌙"}
        </span>
      )}
    </button>
  );
};

export default ThemeToggle;