"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import bodzImage from "../../images/bodz.jpg";
import movieconImage from "../../images/movie-con.jpg";
import recitoreImage from "../../images/recitore.jpg";
import AnimatedContent from "../Animations/AnimatedContent";
import SpotlightCard from "../Animations/SpotlightCard";

const projects = [
  {
    id: 1,
    title: "Best Online Dealz",
    description: "An affiliate marketing website with exclusive deals.",
    image: bodzImage,
    demoLink: "https://best-online-dealz.vercel.app",
    codeLink: "https://github.com/yourusername/best-online-dealz",
  },
  {
    id: 2,
    title: "Recitore",
    description: "Find and explore recipes with ease.",
    image: recitoreImage,
    demoLink: "https://recitore.vercel.app",
    codeLink: "https://github.com/yourusername/recitore",
  },
  {
    id: 3,
    title: "Movie-Con",
    description: "A movie discovery platform with advanced search.",
    image: movieconImage,
    demoLink: "https://movie-con.vercel.app",
    codeLink: "https://github.com/yourusername/movie-con",
  },
];

const MyProjects = () => {
  const { theme } = useTheme();
  return (
    <div className="pt-16 pb-20 px-6">
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
        <h2 className="text-4xl font-bold text-center mb-12 text-text">
          My Projects
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <SpotlightCard
              key={project.id}
              spotlightColor={
                theme === "dark"
                  ? "rgba(255, 255, 255, 0.2)"
                  : "rgba(0, 0, 0, 0.2)"
              }
              className="bg-background border-2"
            >
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="border-2 border-gray-300 rounded-xl"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-text">
                  {project.title}
                </h3>
                <p className="mt-3">{project.description}</p>
                <div className="mt-4 flex justify-center space-x-4">
                  <Link
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-white z-50 bg-button rounded-lg hover:bg-blue-600 transition-all duration-300"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </AnimatedContent>
    </div>
  );
};

export default MyProjects;
