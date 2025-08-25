import React, { useContext } from 'react';
import { ThemeContext } from '../../theme/ThemeContext';
import './ThemeToggle.css';
import { DarkIcon, LightIcon } from '../../assets/customSvg/theme';

function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <div className="theme-toggle-container">
      <button className='theme-toggle-button' onClick={toggleTheme} aria-label="Toggle theme">
        {
          theme === 'dark' ? <LightIcon /> : <DarkIcon />  
        }

      </button>
    </div>
  );
}

export default ThemeToggle;
