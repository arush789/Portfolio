"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { BsMoon } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";

const Nav = () => {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="absolute w-full">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="fixed left-1/2 transform -translate-x-1/2 z-50 top-5  border-gray-200 dark:border-gray-700 lg:flex hidden w-full max-w-[85%]"
      >
        <motion.div
          initial={{ maxWidth: "85%" }}
          animate={{
            maxWidth: isScrolled ? "50%" : "85%",
            borderWidth: isScrolled ? "1px" : "0px",
            borderRadius: "1.5rem",
            boxShadow: isScrolled ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
            backdropFilter: isScrolled ? "blur(10px)" : "none",
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="w-full flex mx-auto px-6 py-2"
        >
          <nav className="flex justify-between items-center w-full">
            <div>
              <h1 className="text-text text-lg font-bold">AK</h1>
            </div>
            <ul className="flex gap-4">
              <li className="hover:font-bold">
                <Link href="/" className="text-text ">
                  Home
                </Link>
              </li>
              {/* <li className="hover:font-bold">
                <Link href="/about" className="text-text ">
                  About
                </Link>
              </li>
              <li className="hover:font-bold">
                <Link href="/projects" className="text-text ">
                  Projects
                </Link>
              </li> */}
              <li className="hover:font-bold">
                <Link href="/contact" className="text-text ">
                  Contact
                </Link>
              </li>
            </ul>
            <button
              onClick={toggleTheme}
              className="relative w-14 h-8 flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1 shadow-md"
            >
              <div className="absolute left-2 text-yellow-400">
                <MdOutlineWbSunny
                  className={`${
                    theme === "dark" ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-200`}
                />
              </div>
              <motion.div
                animate={{ x: theme === "dark" ? 24 : 0 }}
                className="absolute w-6 h-6 bg-white dark:bg-gray-900 rounded-full shadow-md"
              />
              <div className="absolute right-2 text-gray-500 dark:text-gray-300">
                <BsMoon
                  className={`${
                    theme === "dark" ? "opacity-0" : "opacity-100"
                  } transition-opacity duration-200`}
                />
              </div>
            </button>
          </nav>
        </motion.div>
      </motion.div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed left-0 right-0 z-50 transition-all duration-300 ease-in-out top-5 max-w-[85%] mx-auto lg:px-6 py-2 ${
          isScrolled
            ? "rounded-3xl max-w-[50%] shadow-lg backdrop-blur-md border border-gray-200 dark:border-gray-700"
            : "rounded-none border-transparent"
        }`}
        style={{
          borderWidth: isScrolled ? "1px" : "0px",
          transition: isScrolled ? "all 0.3s ease-in-out" : "none",
        }}
      >
        <nav className="flex justify-between items-center rounded-2xl px-5">
          <div>
            <h1 className="text-text dark:text-white text-lg">AK</h1>
          </div>
          <div className="flex gap-4 items-center">
            <button
              onClick={toggleTheme}
              className="relative w-14 h-8 flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1 shadow-md"
            >
              <div className="absolute left-2 text-yellow-400">
                <MdOutlineWbSunny
                  className={`${
                    theme === "dark" ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-200`}
                />
              </div>
              <motion.div
                animate={{ x: theme === "dark" ? 24 : 0 }}
                className="absolute w-6 h-6 bg-white dark:bg-gray-900 rounded-full shadow-md"
              />
              <div className="absolute right-2 text-gray-500 dark:text-gray-300">
                <BsMoon
                  className={`${
                    theme === "dark" ? "opacity-0" : "opacity-100"
                  } transition-opacity duration-200`}
                />
              </div>
            </button>

            {/* Menu Button */}
            <button onClick={() => setMenu(!menu)}>
              <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
                <div
                  className={`w-[50%] h-[2px] bg-text rounded-sm transition-all duration-300 origin-left ${
                    menu
                      ? "rotate-[-45deg] translate-y-[6px]"
                      : "translate-y-[0.45rem]"
                  }`}
                />
                <div
                  className={`w-[50%] h-[2px] bg-text rounded-md transition-all duration-300 ${
                    menu ? "opacity-0" : "opacity-100"
                  }`}
                />
                <div
                  className={`w-[50%] h-[2px] bg-text rounded-md transition-all duration-300 origin-left ${
                    menu
                      ? "rotate-[45deg] -translate-y-[6px]"
                      : "-translate-y-[0.45rem]"
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {menu && (
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-4"
            >
              <ul className="flex flex-col gap-4">
                <li className="hover:font-bold">
                  <Link
                    href="/"
                    onClick={() => setMenu(false)}
                    className="text-black dark:text-white"
                  >
                    Home
                  </Link>
                </li>
                {/* <li className="hover:font-bold">
                  <Link href="/about" className="text-black dark:text-white">
                    About
                  </Link>
                </li>
                <li className="hover:font-bold">
                  <Link href="/projects" className="text-black dark:text-white">
                    Projects
                  </Link>
                </li> */}
                <li className="hover:font-bold">
                  <Link
                    href="/contact"
                    onClick={() => setMenu(false)}
                    className="text-black dark:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Nav;
