import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../context/themeSlice';

export const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="relative p-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <Sun 
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            theme === 'light' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'
          }`}
        />
        <Moon 
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            theme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'
          }`}
        />
      </div>
    </button>
  );
};