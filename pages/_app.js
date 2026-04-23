import { useState, useEffect } from 'react';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  // Initialize as undefined to avoid hydration mismatch;
  // actual value is set client-side from localStorage / system preference
  const [darkMode, setDarkMode] = useState(undefined);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      setDarkMode(saved === 'dark');
    } else {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    if (darkMode === undefined) return;
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  // Render nothing until client-side hydration resolves the theme
  // to avoid a flash of wrong theme
  if (darkMode === undefined) {
    return null;
  }

  return (
    <Component {...pageProps} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
  );
}
