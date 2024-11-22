import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 p-3 rounded-full
                bg-white dark:bg-slate-800
                text-slate-800 dark:text-white
                shadow-lg dark:shadow-slate-700/20
                border border-slate-200 dark:border-slate-700/50
                transition-all duration-300 ease-in-out
                hover:scale-110 hover:shadow-xl
                focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400
                group"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-6 h-6 transition-transform duration-300 rotate-0 group-hover:rotate-[360deg]" />
      ) : (
        <Sun className="w-6 h-6 transition-transform duration-300 rotate-0 group-hover:rotate-[360deg]" />
      )}
    </button>
  );
}
