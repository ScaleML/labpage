'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun, Clock } from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface ThemeToggleProps {
  variant?: 'default' | 'compact' | 'menu';
  className?: string;
}

export default function ThemeToggle({ variant = 'default', className }: ThemeToggleProps) {
  const { theme, mode, cycleTheme, ready } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !ready) {
    return null;
  }

  const isCompact = variant === 'compact' || variant === 'menu';
  const iconSize = isCompact ? 16 : 18;
  const paddingClass = isCompact ? 'p-1.5' : 'p-2';
  const icon =
    mode === 'auto' ? (
      <Clock size={iconSize} />
    ) : theme === 'light' ? (
      <Sun size={iconSize} />
    ) : (
      <Moon size={iconSize} />
    );
  const autoBadgeSize = isCompact ? 'text-[9px] px-1' : 'text-[10px] px-1.5';
  const autoBadgePosition = isCompact ? '-top-1 -right-1' : '-top-1 -right-1';
  const description =
    mode === 'auto'
      ? `Auto (${theme === 'light' ? 'day' : 'night'})`
      : theme === 'light'
      ? 'Day mode'
      : 'Night mode';

  return (
    <button
      type="button"
      onClick={cycleTheme}
      className={`relative inline-flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 bg-white/85 dark:bg-slate-900/70 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 shadow-sm ${paddingClass} ${className ?? ''}`}
      aria-label={`Switch theme • ${description}`}
      title={`Theme: ${description} (click to cycle)`}
    >
      {icon}
      {mode === 'auto' && (
        <span
          className={`absolute ${autoBadgePosition} rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold leading-none py-0.5 ${autoBadgeSize} shadow`}
        >
          A
        </span>
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
