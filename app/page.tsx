"use client";
import AnimatedContent from "@/components/Animations/AnimatedContent";
import Aurora from "@/components/Animations/Aurora";
import FadeContent from "@/components/Animations/FadeContent";
import WhatIdo from "@/components/Home/WhatIdo";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";
import MyProjects from "../components/Home/MyProjects";
import profilePhoto from "../images/WhatsApp Image 2025-03-01 at 8.00.18 PM.jpeg";

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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const auroraColors = ["#1E3A8A", "#9333EA", "#6D28D9"];

  return (
    <div>
      <div className="absolute w-full">
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={true}
          config={{ tension: 100, friction: 25 }}
          initialOpacity={0.1}
          animateOpacity
          scale={1.05}
          threshold={0.15}
        >
          {resolvedTheme === "dark" && (
            <Aurora
              colorStops={auroraColors}
              blend={1}
              amplitude={0.5}
              speed={1}
            />
          )}
        </AnimatedContent>
      </div>

      <div className="container mx-auto px-6 py-2 lg:py-10 ">
        {/* Hero Section */}
        <FadeContent
          blur={true}
          duration={500}
          easing="ease-out"
          initialOpacity={0}
        >
          <div className="flex lg:flex-row flex-col my-24 lg:my-32 justify-center items-center gap-10 relative z-10">
            <Image
              className="rounded-full w-52 lg:w-72"
              width={300}
              height={300}
              alt="Profile"
              src={profilePhoto}
            />
            <div className="lg:w-1/2 text-center lg:text-left px-5">
              <h1 className="lg:text-5xl text-3xl font-bold mb-4">
                Hi, I’m Arush.
              </h1>
              {/* <SplitText
                text="A Full-Stack Developer specializing in React, Node.js, and React Native. I build modern, scalable, and high-performance web and mobile applications. Let’s create something amazing together!"
                delay={5.0}
                className="lg:text-[30px] text-[20px]"
              /> */}
              <p className="text-lg lg:text-3xl leading-8 lg:leading-12">
                A Full-Stack Developer specializing in React, Node.js, and React
                Native. I build modern, scalable, and high-performance web and
                mobile applications. Let’s create something amazing together!
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="mt-5 flex items-center justify-center lg:justify-start"
              >
                <div className="relative group ">
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
              </motion.div>
            </div>
          </div>
        </FadeContent>
      </div>
      {/* Skills Section */}
      <AnimatedContent
        initialOpacity={0.1}
        animateOpacity
        scale={1.05}
        threshold={0.15}
      >
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
      </AnimatedContent>
      <div className="flex justify-center items-center mt-8 lg:mt-20">
        <MyProjects />
      </div>
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        config={{ tension: 100, friction: 25 }}
        initialOpacity={0.1}
        animateOpacity
        scale={1.05}
        threshold={0.15}
      >
        <WhatIdo />
      </AnimatedContent>

      <section className="mt-32 text-center px-6">
        <h2 className="text-4xl font-bold mb-4 text-text">Let’s Connect</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          I’m always open to new opportunities, collaborations, or just a
          friendly chat. Whether you have a project idea or just want to say hi,
          feel free to reach out!
        </p>

        <div className="flex justify-center mt-6">
          <div className="relative z-10 flex items-center space-x-2">
            <Link
              href="/contact"
              className="bg-button px-4 py-2 rounded-full"
              scroll={false}
            >
              <p>Contact me</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
