import { useState, useEffect } from 'react';

/**
 * Custom hook untuk localStorage dengan React state synchronization
 * @param {string} key - localStorage key
 * @param {any} initialValue - nilai default
 * @returns {[any, Function]} value dan setValue
 */
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error writing to localStorage:', error);
    }
  }, [key, value]);

  return [value, setValue];
}