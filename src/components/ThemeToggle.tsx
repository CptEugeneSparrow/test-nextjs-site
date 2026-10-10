"use client";

import { useState, useRef, useEffect, useId } from "react";
import { useTheme } from "./ThemeProvider";

const themes = [
  {
    value: "light" as const,
    label: "Светлая",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    value: "dark" as const,
    label: "Тёмная",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
  },
  {
    value: "system" as const,
    label: "Система",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
] as const;

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const dropdownId = useId();

  const currentTheme = themes.find((t) => t.value === theme) || themes[2];

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
          setIsOpen(false);
          setFocusedIndex(-1);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();
          setFocusedIndex((prev) => (prev + 1) % themes.length);
          break;
        case "ArrowUp":
          event.preventDefault();
          setFocusedIndex((prev) => (prev - 1 + themes.length) % themes.length);
          break;
        case "Enter":
        case " ":
          event.preventDefault();
          if (focusedIndex >= 0) {
            setTheme(themes[focusedIndex].value);
            setIsOpen(false);
            setFocusedIndex(-1);
          }
          break;
        case "Escape":
          event.preventDefault();
          setIsOpen(false);
          setFocusedIndex(-1);
          buttonRef.current?.focus();
          break;
        case "Tab":
          event.preventDefault();
          setFocusedIndex((prev) => (prev + 1) % themes.length);
          break;
        case "Home":
          event.preventDefault();
          setFocusedIndex(0);
          break;
        case "End":
          event.preventDefault();
          setFocusedIndex(themes.length - 1);
          break;
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, focusedIndex, setTheme]);

  // Focus the selected item when index changes
  useEffect(() => {
    if (focusedIndex >= 0 && itemRefs.current[focusedIndex]) {
      itemRefs.current[focusedIndex]?.focus();
    }
  }, [focusedIndex]);

  const handleThemeClick = (value: "light" | "dark" | "system") => {
    setTheme(value);
    setIsOpen(false);
    setFocusedIndex(-1);
  };

  const handleButtonClick = () => {
    setIsOpen((prev) => !prev);
    if (!isOpen) setFocusedIndex(themes.findIndex((t) => t.value === theme));
  };

  return (
    <div className="relative inline-block" role="menubar">
      <button
        ref={buttonRef}
        onClick={handleButtonClick}
        className="group relative flex items-center gap-2 px-3 py-2 bg-bg-primary dark:bg-surface-800 rounded-lg border border-border-primary hover:bg-bg-tertiary dark:hover:bg-surface-700 transition-all duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
        aria-label={`Текущая тема: ${currentTheme.label}. Нажмите для смены темы.`}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={dropdownId}
        id={`${dropdownId}-trigger`}
      >
        <span className="sr-only">Тема</span>
        {currentTheme.icon}
        <span className="hidden sm:inline text-sm font-medium text-text-primary dark:text-text-inverse">
          {currentTheme.label}
        </span>
        <svg
          className="w-4 h-4 text-text-tertiary transition-transform duration-fast group-hover:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        ref={menuRef}
        id={dropdownId}
        role="menu"
        aria-labelledby={`${dropdownId}-trigger`}
        className={`absolute right-0 mt-2 w-40 bg-bg-primary dark:bg-surface-800 rounded-lg shadow-xl border border-border-primary py-1 overflow-hidden transition-all duration-fast ${
          isOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95 pointer-events-none"
        }`}
        style={{
          transformOrigin: "top right",
          transition: "opacity 150ms ease, transform 150ms ease, visibility 150ms ease",
        }}
      >
        {themes.map((t, index) => (
          <button
            key={t.value}
            ref={(el) => { itemRefs.current[index] = el; }}
            onClick={() => handleThemeClick(t.value)}
            role="menuitem"
            aria-selected={theme === t.value}
            className={`
              w-full flex items-center gap-3 px-3 py-2.5 text-sm transition-colors duration-fast
              ${
                theme === t.value
                  ? "bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 font-medium"
                  : "text-text-secondary dark:text-text-tertiary hover:bg-bg-tertiary dark:hover:bg-surface-700"
              }
              ${focusedIndex === index ? "bg-brand-50 dark:bg-brand-900/30" : ""}
            `}
            tabIndex={-1}
          >
            {t.icon}
            <span>{t.label}</span>
            {theme === t.value && (
              <svg className="w-4 h-4 ml-auto text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}