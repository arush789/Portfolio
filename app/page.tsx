"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import BlurText from "@/components/BlurText";
import SplitText from "@/components/SplitText";
import FadeContent from "@/components/FadeContent";
import profilePhoto from "../images/WhatsApp Image 2025-03-01 at 8.00.18 PM.jpeg";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

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
  return (
    <div>
      <FadeContent
        blur={true}
        duration={500}
        easing="ease-out"
        initialOpacity={0}
        className="flex gap-10"
      >
        <div className="flex lg:flex-row flex-col mt-32 mb-10 justify-center items-center gap-10 ">
          <div>
            <Image
              className="rounded-full w-52 lg:w-full"
              width={300}
              height={300}
              alt="Arush"
              src={profilePhoto}
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left px-5">
            <h1 className="lg:text-5xl text-2xl font-bold mb-8 ">
              Hi, I’m Arush.
            </h1>
            <SplitText
              text="A Full-Stack Developer specializing in React, Node.js, and React Native. I build modern, scalable, and high-performance web and mobile applications. Let’s create something amazing together!"
              delay={10}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="lg:text-[30px] text-[20px]"
            />
          </div>
        </div>
      </FadeContent>

      <div className="mt-10 py-4 ">
        <Marquee
          gradient={false}
          autoFill={true}
          speed={50}
          className="flex items-center"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 mx-8 text-2xl border-1 p-4 rounded-full border-gray-600"
            >
              {skill.icon}
              <span className="">{skill.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
