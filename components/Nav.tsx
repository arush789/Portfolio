"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { BsMoon } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ease-in-out top-5 max-w-[85%] mx-auto lg:px-6  py-2  
        ${
          isScrolled
            ? "rounded-3xl shadow-lg backdrop-blur-md border border-gray-200 dark:border-gray-700"
            : "rounded-none border-transparent"
        }`}
      style={{
        borderWidth: isScrolled ? "1px" : "0px",
        transition: isScrolled ? "all 0.3s ease-in-out" : "none",
      }}
    >
      {/* Desktop Navigation */}
      <nav className="lg:flex hidden justify-between items-center transition-all duration-300 ease-in-out">
        <div>
          <h1 className="text-text dark:text-white text-lg">AK</h1>
        </div>
        <ul className="flex gap-4">
          <li className="transition-all duration-300 ease-in-out hover:font-bold">
            <a href="/" className="text-text dark:text-white">
              Home
            </a>
          </li>
          <li className="transition-all duration-300 ease-in-out hover:font-bold">
            <a href="/about" className="text-text dark:text-white">
              About
            </a>
          </li>
        </ul>
        <div>
          <button
            onClick={toggleDarkMode}
            className="relative w-14 h-8 flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-all duration-300 ease-in-out shadow-md"
          >
            <div className="absolute left-2 text-yellow-400">
              <MdOutlineWbSunny
                className={`${
                  darkMode ? "opacity-100" : "opacity-0"
                } transition-opacity duration-200`}
              />
            </div>
            <div
              className={`absolute w-6 h-6 bg-white dark:bg-gray-900 rounded-full shadow-md transform transition-all duration-300 ease-in-out 
              ${
                darkMode
                  ? "translate-x-6 bg-gray-900"
                  : "translate-x-0 bg-white"
              }`}
            />
            <div className="absolute right-2 text-gray-500 dark:text-gray-300">
              <BsMoon
                className={`${
                  darkMode ? "opacity-0" : "opacity-100"
                } transition-opacity duration-200`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav
        className={`lg:hidden flex justify-between items-center transition-all duration-300 ease-in-out rounded-2xl px-5 `}
      >
        <div>
          <h1 className="text-text dark:text-white text-lg">AK</h1>
        </div>
        <div className="flex gap-4 items-center">
          <div>
            <button
              onClick={toggleDarkMode}
              className="relative w-14 h-8 flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-all duration-300 ease-in-out shadow-md"
            >
              <div className="absolute left-2 text-yellow-400">
                <MdOutlineWbSunny
                  className={`${
                    darkMode ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-200`}
                />
              </div>
              <div
                className={`absolute w-6 h-6 bg-white dark:bg-gray-900 rounded-full shadow-md transform transition-all duration-300 ease-in-out 
              ${
                darkMode
                  ? "translate-x-6 bg-gray-900"
                  : "translate-x-0 bg-white"
              }`}
              />
              <div className="absolute right-2 text-gray-500 dark:text-gray-300">
                <BsMoon
                  className={`${
                    darkMode ? "opacity-0" : "opacity-100"
                  } transition-opacity duration-200`}
                />
              </div>
            </button>
          </div>
          {/* Menu Button */}
          <button onClick={() => setMenu(!menu)}>
            <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
              <div
                className={`w-[50%] h-[2px] bg-gray-200 dark:bg-gray-700 rounded-sm transition-all duration-300 origin-left ${
                  menu
                    ? "rotate-[-45deg] translate-y-[6px]"
                    : "translate-y-[0.45rem]"
                }`}
              ></div>
              <div
                className={`w-[50%] h-[2px] bg-gray-200 dark:bg-gray-700 rounded-md transition-all duration-300 ${
                  menu ? "opacity-0" : "opacity-100"
                }`}
              ></div>
              <div
                className={`w-[50%] h-[2px] bg-gray-200 dark:bg-gray-700 rounded-md transition-all duration-300 origin-left ${
                  menu
                    ? "rotate-[45deg] -translate-y-[6px]"
                    : "-translate-y-[0.45rem]"
                }`}
              ></div>
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-4"
          >
            <ul className="flex flex-col gap-4">
              <li className="transition-all duration-300 ease-in-out hover:font-bold">
                <a href="/" className="text-black dark:text-white ">
                  Home
                </a>
              </li>
              <li className="transition-all duration-300 ease-in-out hover:font-bold">
                <a href="/about" className="text-black dark:text-white">
                  About
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Nav;
