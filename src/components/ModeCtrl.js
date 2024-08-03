import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import './Navbar';

// 버튼 클릭할 때 마다 다크/라이트 모드 변경
const ModeCtrl = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.setProperty('color-scheme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.setProperty('color-scheme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      className="mode_btn dark:bg-neutral-800 dark:text-neutral-300 bg-neutral-300 text-neutral-800 p-1 m-2"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};

export default ModeCtrl;
