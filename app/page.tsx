"use client";
import AnimatedContent from "@/components/AnimatedContent";
import Aurora from "@/components/Aurora";
import FadeContent from "@/components/FadeContent";
import Footer from "@/components/Footer";
import MyProjects from "@/components/MyProjects";
import SplitText from "@/components/SplitText";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";
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
  const [currentTheme, setCurrentTheme] = useState(resolvedTheme);

  useEffect(() => {
    setCurrentTheme(resolvedTheme);
  }, [resolvedTheme]);

  const auroraColors = ["#1E3A8A", "#9333EA", "#6D28D9"];

  return (
    <div className="absolute w-full">
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

      <div className="container mx-auto px-6 py-10 ">
        {/* Hero Section */}
        <FadeContent
          blur={true}
          duration={500}
          easing="ease-out"
          initialOpacity={0}
        >
          <div className="flex lg:flex-row flex-col my-32 justify-center items-center gap-10 relative z-10">
            <Image
              className="rounded-full w-52 lg:w-72"
              width={300}
              height={300}
              alt="Profile"
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
          gradient={true}
          gradientWidth={300}
          gradientColor={resolvedTheme == "dark" ? "#0a0a0a" : "white"}
          className="flex items-center border-t border-b border-gray-700 py-4"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex gap-2 items-center mx-3 text-xl border px-6 py-5 rounded-full border-gray-600"
            >
              {skill.icon}
              <span className="text-text">{skill.name}</span>
            </div>
          ))}
        </Marquee>
      </AnimatedContent>
      <div className="flex justify-center items-center mt-20">
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
        <div className="flex flex-col items-center mt-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-text">
            What I Do
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
            {[
              {
                title: "Web Development",
                description:
                  "Building fast, scalable, and responsive web applications using React, Next.js, and Node.js.",
                icon: <FaReact className="service-icon text-primary" />,
              },
              {
                title: "Mobile App Development",
                description:
                  "Creating smooth and user-friendly mobile apps with React Native for iOS and Android.",
                icon: <FaReact className="service-icon text-secondary" />,
              },
              {
                title: "Backend Development",
                description:
                  "Developing secure and efficient APIs using Node.js, Express.js, and databases like MongoDB & PostgreSQL.",
                icon: <FaNodeJs className="service-icon text-accent" />,
              },
              {
                title: "Database Management",
                description:
                  "Managing data efficiently using SQL & NoSQL databases such as PostgreSQL and MongoDB.",
                icon: <SiPostgresql className="service-icon text-muted" />,
              },
              {
                title: "Full-Stack Solutions",
                description:
                  "Providing end-to-end solutions, handling both frontend and backend seamlessly.",
                icon: <SiNextdotjs className="service-icon text-primary" />,
              },
              {
                title: "Performance Optimization",
                description:
                  "Optimizing applications for better speed, performance, and user experience.",
                icon: <SiExpress className="service-icon text-secondary" />,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="border-2 border-gray-700 p-5 lg:mx-0 mx-5 rounded-2xl "
              >
                <div className="mb-4 text-5xl">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-text">
                  {service.title}
                </h3>
                <p className="text-muted mt-2">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedContent>
    </div>
  );
}
