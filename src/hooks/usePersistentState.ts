'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * A persistent state hook backed by window.localStorage.
 * Safe for SSR and Next.js client hydration.
 *
 * @param key LocalStorage key name
 * @param initialValue Fallback value if nothing exists in storage
 */
export function usePersistentState<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void, boolean] {
  const [state, setState] = useState<T>(initialValue);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const isInitialMount = useRef<boolean>(true);

  // Load from localStorage after mount to prevent hydration mismatch
  useEffect(() => {
    try {
      const item = localStorage.getItem(key);
      if (item !== null) {
        setState(JSON.parse(item));
      }
    } catch (e) {
      console.warn(`[usePersistentState] Error loading key "${key}":`, e);
    } finally {
      setIsLoaded(true);
    }
  }, [key]);

  // Persist to localStorage whenever state changes after initial load
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (!isLoaded) return;

    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (e) {
      console.warn(`[usePersistentState] Error saving key "${key}":`, e);
    }
  }, [key, state, isLoaded]);

  const updateState = useCallback((value: T | ((prev: T) => T)) => {
    setState(value);
  }, []);

  return [state, updateState, isLoaded];
}
