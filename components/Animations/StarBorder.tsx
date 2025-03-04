"use client";

import React from "react";
import { useTheme } from "next-themes";

type StarBorderProps<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T> & {
    as?: T;
    className?: string;
    children?: React.ReactNode;
    speed?: React.CSSProperties["animationDuration"];
  };

const StarBorder = <T extends React.ElementType = "button">({
  as,
  className = "",
  speed = "6s",
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || "button";
  const { theme } = useTheme();

  const color = theme === "dark" ? "#FFD700" : "#1E3A8A"; // Gold for dark theme, blue for light

  return (
    <Component
      className={`relative inline-block py-[1px] overflow-hidden rounded-[20px] ${className}`}
      {...rest}
    >
      <div
        className="absolute w-[300%] h-[50%] opacity-100 bottom-[-12px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="absolute w-[300%] h-[50%] opacity-100 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className={`relative z-1 border text-center text-[16px] py-[12px] px-[22px] rounded-[20px] ${
          theme === "dark"
            ? "bg-gradient-to-b from-gray-900 to-black border-gray-700 text-white"
            : "bg-gradient-to-b from-white to-gray-200 border-gray-300 text-black"
        }`}
      >
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
