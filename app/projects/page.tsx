"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import AnimatedContent from "@/components/Animations/AnimatedContent";
import SpotlightCard from "@/components/Animations/SpotlightCard";
import ProjectSlider from "@/components/ProjectSlider";
import EvolutionModal from "@/components/EvolutionModal";

import bodzImage from "../../images/bodz.jpg";
import calculatorImage from "../../images/Calculator.png";
import guessTheWordImage from "../../images/Guess The Word.png";
import matchTheCardImage from "../../images/Matching Card.png";
import movieconImage from "../../images/movie-con.jpg";
import recitoreImage from "../../images/recitore.jpg";
import recitoreV1Image from "../../images/recitore_v1.png";
import recitoreV2Image from "../../images/recitore_v2.png";

const Projectpage = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isEvolutionOpen, setIsEvolutionOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Best Online Dealz",
      description: "An affiliate marketing website with exclusive deals.",
      image: bodzImage,
      demoLink: "https://best-online-dealz.vercel.app",
      codeLink: "https://github.com/arush789/Best-Online-Dealz",
      tags: ["React", "Javascript", "CSS", "Vite", "Affiliate"],
    },
    {
      id: 2,
      title: "Recitore",
      description: "Explore recipes with ease. Modernized from classic V1 layout to full-featured modern V2 UI.",
      image: recitoreImage,
      v1Image: recitoreV1Image,
      v2Image: recitoreV2Image,
      isEvolution: true,
      demoLink: "https://recitore-v2.vercel.app/",
      codeLink: "https://github.com/arush789/Recitore",
      tags: [
        "Next.js",
        "React",
        "MongoDB",
        "Tailwindcss",
        "Framer Motion",
        "Recipe UI",
      ],
    },
    {
      id: 3,
      title: "Movie-Con",
      description: "A movie discovery platform with advanced search.",
      image: movieconImage,
      demoLink: "https://movie-con.vercel.app",
      codeLink: "https://github.com/arush789/MovieCon",
      tags: ["Javascript", "Vite", "Css", "TMDB API", "Movie Search"],
    },
    {
      id: 4,
      title: "Calculator",
      description: "A simple yet powerful calculator with modern UI.",
      image: calculatorImage,
      demoLink: "https://calculator-cyan-three.vercel.app/",
      codeLink: "https://github.com/arush789/Calculator",
      tags: ["JavaScript", "CSS", "HTML", "Math Functions"],
    },
    {
      id: 5,
      title: "Guess The Word",
      description: "A fun word-guessing game to test your vocabulary skills.",
      image: guessTheWordImage,
      demoLink: "https://guess-the-word-jade.vercel.app/",
      codeLink: "https://github.com/arush789/Guess-the-word",
      tags: ["JavaScript", "CSS", "HTML", "Game", "Word Challenge"],
    },
    {
      id: 6,
      title: "Match The Card",
      description:
        "A memory card-matching game with different difficulty levels.",
      image: matchTheCardImage,
      demoLink: "https://matching-card-chi.vercel.app/",
      codeLink: "https://github.com/arush789/MatchingCard",
      tags: ["JavaScript", "CSS", "HTML", "Game", "Memory Test"],
    },
  ];

  return (
    <div className="mt-32 px-6 pb-20">
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
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 dark:from-teal-300 dark:via-blue-400 dark:to-purple-400">
            My Creative Works
          </h1>
          <p className="mt-4 text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
            A curated selection of projects I&apos;ve built using modern web
            technologies. Each project represents a step in my journey as a
            full-stack developer.
          </p>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <SpotlightCard
              key={project.id}
              spotlightColor={
                mounted && theme === "dark"
                  ? "rgba(255, 255, 255, 0.08)"
                  : "rgba(0, 0, 0, 0.04)"
              }
              className="bg-white dark:bg-black border border-gray-200 dark:border-neutral-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
            >
              {/* Image Container / Interactive Slider */}
              {project.isEvolution && project.v1Image && project.v2Image ? (
                <ProjectSlider
                  v1Image={project.v1Image}
                  v2Image={project.v2Image}
                  alt={project.title}
                />
              ) : (
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-white dark:bg-neutral-950 border border-slate-200/50 dark:border-neutral-800/50">
                  <Image
                    alt={project.title}
                    src={project.image}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              {/* Card content */}
              <div className="flex flex-col flex-grow pt-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                  <span>{project.title}</span>
                  {project.isEvolution && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-500 font-semibold border border-blue-500/20">
                      V1 → V2 Redesign
                    </span>
                  )}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-neutral-400 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-0.5 rounded-full bg-slate-200/60 text-slate-700 border border-slate-300/30 dark:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-700/40 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Evolution Trigger (Pulsing Glow button) */}
                {project.isEvolution && (
                  <button
                    onClick={() => setIsEvolutionOpen(true)}
                    className="w-full mb-3 flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl border border-blue-500/30 hover:border-blue-500/50 bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 transition-all duration-300 cursor-pointer active:scale-95 shadow-xs"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    <span>View UI Evolution Flowchart</span>
                  </button>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto w-full">
                  <Link
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-neutral-950 shadow-sm transition-all duration-300 active:scale-95"
                  >
                    <span>Demo</span>
                    <FaExternalLinkAlt className="text-[10px]" />
                  </Link>
                  <Link
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-xl border border-slate-300 dark:border-neutral-750 text-slate-800 dark:text-neutral-200 hover:bg-slate-100/80 dark:hover:bg-neutral-800 transition-all duration-300 active:scale-95"
                  >
                    <FaGithub className="text-sm" />
                    <span>Code</span>
                  </Link>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </AnimatedContent>

      {/* Recitore Evolution Modal */}
      <EvolutionModal
        isOpen={isEvolutionOpen}
        onClose={() => setIsEvolutionOpen(false)}
        v1Image={recitoreV1Image}
        v2Image={recitoreV2Image}
      />
    </div>
  );
};

export default Projectpage;
