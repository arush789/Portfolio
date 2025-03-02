"use client";
import Aurora from "@/components/Aurora";
import FadeContent from "@/components/FadeContent";
import SplitText from "@/components/SplitText";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";
import profilePhoto from "../images/WhatsApp Image 2025-03-01 at 8.00.18 PM.jpeg";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const skills = [
  { icon: <FaReact className="text-blue-500" />, name: "React" },
  { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
  { icon: <FaReact className="text-cyan-500" />, name: "React Native" },
  { icon: <SiNextdotjs className="text-gray-800" />, name: "Next.js" },
  { icon: <SiExpress className="text-gray-500" />, name: "Express.js" },
  { icon: <SiPostgresql className="text-blue-600" />, name: "PostgreSQL" },
  { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
];

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(resolvedTheme);

  useEffect(() => {
    setCurrentTheme(resolvedTheme);
  }, [resolvedTheme]);

  const auroraColors =
    currentTheme === "dark"
      ? ["#1E3A8A", "#9333EA", "#6D28D9"]
      : ["#D3E671", "#FFF0BD", "#F8ED8C"];

  return (
    <div className="absolute w-full h-[5000px]">
      <div className="absolute w-full">
        <Aurora colorStops={auroraColors} blend={1} amplitude={0.5} speed={1} />
      </div>
      <div className="container mx-auto px-6 py-10 ">
        {/* Hero Section */}
        <FadeContent
          blur={true}
          duration={500}
          easing="ease-out"
          initialOpacity={0}
        >
          <div className="flex lg:flex-row flex-col mt-32 mb-10 justify-center items-center gap-10 relative z-10">
            <Image
              className="rounded-full w-52 lg:w-72"
              width={300}
              height={300}
              alt="Arush"
              src={profilePhoto}
            />
            <div className="lg:w-1/2 text-center lg:text-left px-5">
              <h1 className="lg:text-5xl text-2xl font-bold mb-4">
                Hi, I’m Arush.
              </h1>
              <SplitText
                text="A Full-Stack Developer specializing in React, Node.js, and React Native. I build modern, scalable, and high-performance web and mobile applications. Let’s create something amazing together!"
                delay={5.0}
                animateBy="words"
                direction="top"
                className="lg:text-[30px] text-[20px]"
              />
              <div className="mt-5 flex items-center">
                <div className="relative group">
                  <button className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 cursor-pointer rounded-2xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                    <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                    <span className="relative z-10 block px-6 py-3 rounded-2xl bg-button">
                      <div className="relative z-10 flex items-center space-x-2">
                        <span className="transition-all duration-500 group-hover:translate-x-1 text-white">
                          Contact me
                        </span>
                      </div>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </FadeContent>

        {/* Skills Section */}
      </div>
      <div className="mt-10 py-4 text-center">
        <Marquee autoFill={true} speed={50} className="flex items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center mx-8 text-xl border p-4 rounded-full border-gray-600"
            >
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
      {/* <div>
        <MyProjects />
      </div> */}
    </div>
  );
}
