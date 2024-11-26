import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useScrollPosition } from '../hooks/useScrollPosition';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { isNearFooter } = useScrollPosition();

  return (
    <button
      onClick={toggleTheme}
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 p-2.5 sm:p-3 
                rounded-xl sm:rounded-2xl
                bg-white/60 dark:bg-slate-800/40
                text-slate-700 dark:text-slate-200
                shadow-sm hover:shadow-lg dark:shadow-slate-900/10
                border border-white/20 dark:border-slate-700/30
                backdrop-blur-[2px] hover:backdrop-blur-[8px]
                transition-all duration-300 ease-in-out
                hover:bg-white/80 dark:hover:bg-slate-800/60
                hover:-translate-y-0.5 hover:scale-105
                active:translate-y-0 active:scale-100
                focus:outline-none focus:ring-2 focus:ring-indigo-400/50 dark:focus:ring-indigo-400/30
                group
                z-[100]
                ${isNearFooter ? 'sm:opacity-100 opacity-0 pointer-events-none sm:pointer-events-auto' : 'opacity-100 pointer-events-auto'}`}
      aria-label="Toggle theme"
    >
      <div className="relative">
        {theme === 'light' ? (
          <Moon className="w-[18px] h-[18px] sm:w-5 sm:h-5 
                          text-indigo-600/80 dark:text-indigo-400/80
                          transition-all duration-300 
                          rotate-0 group-hover:rotate-[360deg]
                          group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
        ) : (
          <Sun className="w-[18px] h-[18px] sm:w-5 sm:h-5 
                         text-indigo-500/80 dark:text-indigo-400/80
                         transition-all duration-300 
                         rotate-0 group-hover:rotate-[360deg]
                         group-hover:text-indigo-500 dark:group-hover:text-indigo-400" />
        )}
      </div>
    </button>
  );
}
