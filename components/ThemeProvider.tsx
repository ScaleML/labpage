'use client';

import { createContext, useContext, useEffect, useRef, useState } from 'react';

type ThemeMode = 'auto' | 'manual';
type ThemeValue = 'light' | 'dark';

interface ThemeContextValue {
  theme: ThemeValue;
  mode: ThemeMode;
  cycleTheme: () => void;
  enableAuto: () => void;
  ready: boolean;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const getThemeByTime = (): ThemeValue => {
  const hour = new Date().getHours();
  return hour >= 7 && hour < 19 ? 'light' : 'dark';
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeValue>('light');
  const [mode, setMode] = useState<ThemeMode>('auto');
  const [ready, setReady] = useState(false);
  const autoSwitchRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const storedMode = window.localStorage.getItem('theme-mode');
    const storedTheme = window.localStorage.getItem('theme-preference') as ThemeValue | null;

    if (storedMode === 'manual' && (storedTheme === 'light' || storedTheme === 'dark')) {
      setTheme(storedTheme);
      setMode('manual');
    } else {
      const autoTheme = getThemeByTime();
      setTheme(autoTheme);
      setMode('auto');
    }

    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready || typeof document === 'undefined') return;

    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);

    if (mode === 'manual') {
      localStorage.setItem('theme-mode', 'manual');
      localStorage.setItem('theme-preference', theme);
    } else {
      localStorage.setItem('theme-mode', 'auto');
      localStorage.removeItem('theme-preference');
    }
  }, [theme, mode, ready]);

  useEffect(() => {
    if (!ready) return;

    if (autoSwitchRef.current) {
      clearTimeout(autoSwitchRef.current);
      autoSwitchRef.current = null;
    }

    if (mode !== 'auto') {
      return;
    }

    const scheduleNextSwitch = () => {
      if (autoSwitchRef.current) {
        clearTimeout(autoSwitchRef.current);
        autoSwitchRef.current = null;
      }

      const now = new Date();
      const hour = now.getHours();
      const nextBoundary = new Date(now);
      const isDay = hour >= 7 && hour < 19;

      if (isDay) {
        nextBoundary.setHours(19, 0, 0, 0);
      } else {
        if (hour >= 19) {
          nextBoundary.setDate(nextBoundary.getDate() + 1);
        }
        nextBoundary.setHours(7, 0, 0, 0);
      }

      const delay = Math.max(nextBoundary.getTime() - now.getTime(), 60 * 1000);

      autoSwitchRef.current = setTimeout(() => {
        setTheme(getThemeByTime());
        scheduleNextSwitch();
      }, delay);
    };

    setTheme(getThemeByTime());
    scheduleNextSwitch();

    return () => {
      if (autoSwitchRef.current) {
        clearTimeout(autoSwitchRef.current);
        autoSwitchRef.current = null;
      }
    };
  }, [mode, ready]);

  const cycleTheme = () => {
    if (!ready) return;
    if (mode === 'auto') {
      setMode('manual');
      setTheme('light');
      return;
    }

    if (theme === 'light') {
      setTheme('dark');
      return;
    }

    setMode('auto');
    setTheme(getThemeByTime());
  };

  const enableAuto = () => {
    if (!ready) return;
    setMode('auto');
    setTheme(getThemeByTime());
  };

  return (
    <ThemeContext.Provider value={{ theme, mode, cycleTheme, enableAuto, ready }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
