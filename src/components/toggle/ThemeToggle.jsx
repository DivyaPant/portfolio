import React, { useContext } from 'react';
import { ThemeContext } from '../../theme/ThemeContext';
import './ThemeToggle.css';

function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <div className="theme-toggle-container">
      <label className="theme-switch">
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={toggleTheme}
          aria-label="Toggle theme"
        />
        <span className="slider">
          <span className="icon moon">🌙</span>
          <span className="icon sun">☀️</span>
        </span>
      </label>
    </div>
  );
}

export default ThemeToggle;
