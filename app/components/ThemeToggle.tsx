"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }


  return (
    <button
      className="transition duration-300 ease-in-out text-3xl hover:bg-black dark:hover:bg-white dark:hover:bg-opacity-20 hover:bg-opacity-20 p-1 pl-4 pr-4 mt-4 h-10 rounded-md dark:text-white"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
    {theme === "light" ? <FontAwesomeIcon icon={faSun} className='w-4'/> : <FontAwesomeIcon icon={faMoon} className='w-4'/>}
    </button>
  );
};        
export default ThemeToggle;