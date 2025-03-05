"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";

const MarqueeContent = () => {
  const { resolvedTheme } = useTheme();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const skills = [
    { icon: <FaReact className="text-blue-500" />, name: "React" },
    { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
    { icon: <FaReact className="text-cyan-500" />, name: "React Native" },
    { icon: <SiNextdotjs className="text-gray-800" />, name: "Next.js" },
    { icon: <SiExpress className="text-gray-500" />, name: "Express.js" },
    { icon: <SiPostgresql className="text-blue-600" />, name: "PostgreSQL" },
    { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
  ];

  return (
    <div>
      <Marquee
        autoFill={true}
        speed={50}
        gradient={!isMobile}
        gradientWidth={300}
        gradientColor={resolvedTheme === "dark" ? "#0a0a0a" : "white"}
        className="flex items-center border-t border-b border-gray-700 
          py-4"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex gap-1 sm:gap-2 items-center mx-2 sm:mx-3 text-lg sm:text-xl border 
              px-4 sm:px-6 py-2 sm:py-5 rounded-full border-gray-600"
          >
            {skill.icon}
            <span className="text-text">{skill.name}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeContent;
