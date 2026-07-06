"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const MarqueeContent = () => {
  const { resolvedTheme } = useTheme();

  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const skills = [
    { icon: <FaReact className="text-blue-500" />, name: "React" },
    { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
    { icon: <FaReact className="text-cyan-500" />, name: "React Native" },
    {
      icon: <SiNextdotjs className="text-gray-800 dark:text-white" />,
      name: "Next.js",
    },
    { icon: <SiExpress className="text-gray-500" />, name: "Express.js" },
    { icon: <SiPostgresql className="text-blue-600" />, name: "PostgreSQL" },
    { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
    { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
    { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript" },
    { icon: <FaPython className="text-yellow-500" />, name: "Python" },
    { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind CSS" },
    { icon: <FaGitAlt className="text-orange-500" />, name: "Git" },
    { icon: <SiFirebase className="text-yellow-500" />, name: "Firebase" },
    { icon: <FaHtml5 className="text-orange-600" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS3" },
  ];

  return (
    <div>
      <Marquee
        autoFill={true}
        speed={50}
        gradient={!isMobile}
        gradientWidth={300}
        gradientColor={mounted && resolvedTheme === "dark" ? "#0a0a0a" : "white"}
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
