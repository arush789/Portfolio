"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import AnimatedContent from "@/components/Animations/AnimatedContent";
import SpotlightCard from "@/components/Animations/SpotlightCard";
import ProjectSlider from "@/components/ProjectSlider";

import bodzImage from "../../images/bodz.jpg";
import calculatorImage from "../../images/Calculator.png";
import guessTheWordImage from "../../images/Guess The Word.png";
import matchTheCardImage from "../../images/Matching Card.png";
import movieconImage from "../../images/movie-con.jpg";
import recitoreImage from "../../images/recitore.jpg";
import recitoreV1Image from "../../images/recitore_v1.png";
import recitoreV2Image from "../../images/recitore_v2.png";
import ceresLogo from "../../images/ceres-logo.png";
import ProjectModal from "@/components/ProjectModal";

const Projectpage = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Ceres AI",
      year: "2026",
      description: "An AI-powered IoT smart farming app that classifies crop health and disease using dynamic machine learning models.",
      image: ceresLogo,
      isCeres: true,
      demoLink: "#",
      codeLink: "https://github.com/arush789/FarmApp.git",
      tags: [
        "React Native",
        "Expo",
        "Python",
        "Flask",
        "XGBoost",
        "Supabase",
        "IoT",
      ],
      features: [
        "Simulation Telemetry (IoT Ready): Currently reads simulated Nitrogen, Phosphorus, Potassium, soil moisture, and pH telemetry, structured to directly migrate to live soil sensors via Blynk Cloud APIs.",
        "XGBoost Machine Learning Classifier: Predicts both the crop disease (e.g. Brown Spot, Salt Stress) and its nutritional root cause using dynamically loaded XGBoost models.",
        "Supabase Cloud Sync: Automatically pushes predictions, logs, and sensor telemetry directly to Supabase PostgreSQL database for historical logs.",
        "Dual-Theme Responsive UI: High-contrast Dark/Light mode theme configurations tailored for outdoors field use."
      ],
      specs: [
        { label: "Frontend Mobile", value: "React Native, Expo, Context API, vector icons" },
        { label: "AI / Machine Learning", value: "Python, XGBoost, Scikit-Learn (StandardScaler)" },
        { label: "Backend API", value: "Flask Microservice, dynamic model caching" },
        { label: "Cloud Database & Auth", value: "Supabase PostgreSQL, GoTrue Auth" },
        { label: "Hardware Integration", value: "Simulation data (Future migration to physical Blynk IoT API)" }
      ]
    },
    {
      id: 2,
      title: "Best Online Dealz",
      year: "2023",
      description: "An affiliate marketing website with exclusive deals.",
      image: bodzImage,
      demoLink: "https://best-online-dealz.vercel.app",
      codeLink: "https://github.com/arush789/Best-Online-Dealz",
      tags: ["React", "Javascript", "CSS", "Vite", "Affiliate"],
      features: [
        "Affiliate Deals Engine: Dynamic listing of current deals, coupon codes, and promotional discounts.",
        "Advanced Filters: Instantly search, filter, and sort deal cards by category or stores.",
        "Responsive Card Layout: Elegant glassmorphic cards optimized for mobile and desktop screens.",
        "Performance Optimized: Extremely lightweight React/Vite layout for fast loading speeds."
      ],
      specs: [
        { label: "Framework & Core", value: "React, Vite, CSS Modules" },
        { label: "Language", value: "JavaScript (ES6+)" },
        { label: "Styling", value: "Custom Vanilla CSS" },
        { label: "Deployment", value: "Vercel Web Server" }
      ],
      browserUrl: "https://best-online-dealz.vercel.app"
    },
    {
      id: 3,
      title: "Recitore",
      year: "2024",
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
      features: [
        "V1 ➔ V2 Progression: Visual modernization and refactor of recipe exploration search application.",
        "Tailwind CSS v4 Refactor: Upgraded core layouts to full modern Tailwind v4 syntax.",
        "Framer Motion: Added smooth entry, exit, slide, and scale transitions for micro-interactions.",
        "Next.js Core: Robust routing and serverless database integration with MongoDB."
      ],
      specs: [
        { label: "Framework", value: "Next.js App Router (React)" },
        { label: "Styling Framework", value: "Tailwind CSS v4, custom utility classes" },
        { label: "Animations", value: "Framer Motion" },
        { label: "Database Layer", value: "MongoDB database" }
      ]
    },
    {
      id: 4,
      title: "Movie-Con",
      year: "2024",
      description: "A movie discovery platform with advanced search.",
      image: movieconImage,
      demoLink: "https://movie-con.vercel.app",
      codeLink: "https://github.com/arush789/MovieCon",
      tags: ["Javascript", "Vite", "Css", "TMDB API", "Movie Search"],
      features: [
        "TMDB API Integration: Fetches live trending, popular, and top-rated movies directly from the database.",
        "Intelligent Search: Real-time search with dynamic keyword matching and poster image loaders.",
        "Detailed Movie Sheets: Overviews, user reviews, release details, and production budgets.",
        "Smooth Overlays: High-fidelity image modal popups for movie trailers and backdrops."
      ],
      specs: [
        { label: "Core Logic", value: "JavaScript, Fetch API, LocalStorage" },
        { label: "Styling Framework", value: "Vibrant CSS custom properties, glassmorphism overlays" },
        { label: "API Provider", value: "The Movie Database (TMDB) API" },
        { label: "Build System", value: "Vite, ESBuild" }
      ],
      browserUrl: "https://movie-con.vercel.app"
    },
    {
      id: 5,
      title: "Calculator",
      year: "2022",
      description: "A simple yet powerful calculator with modern UI.",
      image: calculatorImage,
      demoLink: "https://calculator-cyan-three.vercel.app/",
      codeLink: "https://github.com/arush789/Calculator",
      tags: ["JavaScript", "CSS", "HTML", "Math Functions"],
      features: [
        "Interactive Keypad: High-contrast buttons with hover animations and keyboard entry support.",
        "Advanced Math Operations: Supports arithmetic, percentage, memory store/recall, and negative values.",
        "Responsive Grid Design: Auto-scaling dimensions fitting perfectly onto any screen size."
      ],
      specs: [
        { label: "Frontend", value: "HTML5, CSS3 Grid, ES6 JavaScript" },
        { label: "Logic", value: "State machine calculation stack" }
      ],
      browserUrl: "https://calculator-cyan-three.vercel.app/"
    },
    {
      id: 6,
      title: "Guess The Word",
      year: "2022",
      description: "A fun word-guessing game to test your vocabulary skills.",
      image: guessTheWordImage,
      demoLink: "https://guess-the-word-jade.vercel.app/",
      codeLink: "https://github.com/arush789/Guess-the-word",
      tags: ["JavaScript", "CSS", "HTML", "Game", "Word Challenge"],
      features: [
        "Vocabulary Database: Curated list of word puzzles across multiple difficulty tiers.",
        "Interactive Input: Visual letter block cells showing color-coded letter status hints.",
        "Streak Tracking: Local session scores to keep track of high scores and victory streaks."
      ],
      specs: [
        { label: "Technologies", value: "Vanilla JS, CSS Animations, HTML5" },
        { label: "Game Logic", value: "Dynamic randomizer & comparison arrays" }
      ],
      browserUrl: "https://guess-the-word-jade.vercel.app/"
    },
    {
      id: 7,
      title: "Match The Card",
      year: "2022",
      description:
        "A memory card-matching game with different difficulty levels.",
      image: matchTheCardImage,
      demoLink: "https://matching-card-chi.vercel.app/",
      codeLink: "https://github.com/arush789/MatchingCard",
      tags: ["JavaScript", "CSS", "HTML", "Game", "Memory Test"],
      features: [
        "Dynamic Grid Shuffling: Randomized cards layout upon every game start.",
        "Flip Animations: Smooth CSS 3D transforms simulating realistic card flipping.",
        "Performance Stats: Real-time turn tracker and time completion clocks."
      ],
      specs: [
        { label: "Core Layer", value: "JavaScript, HTML5 Semantic Elements" },
        { label: "Animation", value: "CSS 3D Transforms (perspective, rotateY)" }
      ],
      browserUrl: "https://matching-card-chi.vercel.app/"
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
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            My Creative Works
          </h1>
          <p className="mt-4 text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
            A curated selection of projects I&apos;ve built using modern web
            technologies. Each project represents a step in my journey as a
            full-stack developer.
          </p>
        </div>        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <SpotlightCard
              key={project.id}
              spotlightColor={
                mounted && theme === "dark"
                  ? "rgba(255, 255, 255, 0.05)"
                  : "rgba(0, 0, 0, 0.02)"
              }
              className={`bg-white/80 dark:bg-neutral-900/40 backdrop-blur-md border border-slate-200/60 dark:border-neutral-800/80 rounded-[36px] overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 group flex flex-col h-full p-6 ${
                project.isCeres
                  ? "hover:border-emerald-500/30 hover:shadow-emerald-500/8"
                  : project.isEvolution
                  ? "hover:border-blue-500/30 hover:shadow-blue-500/8"
                  : "hover:border-purple-500/30 hover:shadow-purple-500/8"
              }`}
            >
              {/* Image Container / Interactive Slider */}
              {project.isCeres ? (
                /* Beautiful padded logo wrapper with soft background & shadows */
                <div className="relative aspect-video w-full overflow-hidden rounded-[24px] bg-slate-100/50 dark:bg-neutral-950/60 flex items-center justify-center border border-slate-200/35 dark:border-neutral-900/50 p-6 select-none shadow-inner">
                  {/* Soft ambient glow behind logo */}
                  <div className="absolute w-32 h-32 rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 blur-2xl pointer-events-none" />
                  <div className="relative w-24 h-24 rounded-3xl overflow-hidden shadow-lg border border-slate-200/40 dark:border-neutral-800/60 transition-transform duration-500 group-hover:scale-105">
                    <Image
                      alt={project.title}
                      src={project.image}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                </div>
              ) : project.isEvolution && project.v1Image && project.v2Image ? (
                <div className="overflow-hidden rounded-[24px] border border-slate-200/50 dark:border-neutral-850 shadow-xs">
                  <ProjectSlider
                    v1Image={project.v1Image}
                    v2Image={project.v2Image}
                    alt={project.title}
                  />
                </div>
              ) : (
                <div className="relative aspect-video w-full overflow-hidden rounded-[24px] bg-white dark:bg-neutral-950 border border-slate-200/50 dark:border-neutral-800/50 shadow-xs">
                  <Image
                    alt={project.title}
                    src={project.image}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-104"
                  />
                </div>
              )}

              {/* Card content */}
              <div className="flex flex-col flex-grow pt-5">
                <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span>{project.title}</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-neutral-800 text-slate-800 dark:text-neutral-200 font-bold border border-slate-200/80 dark:border-neutral-700/80">
                      {project.year}
                    </span>
                  </div>
                  {project.isEvolution && (
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-500 font-semibold border border-blue-500/20">
                      V1 → V2 Redesign
                    </span>
                  )}
                </h3>
                <p className="mt-3 text-sm md:text-base text-slate-600 dark:text-neutral-350 leading-relaxed font-medium flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4.5 mb-5.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-3 py-1 rounded-full border transition-colors font-semibold ${
                        project.isCeres
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200/60 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-800/50"
                          : project.isEvolution
                          ? "bg-blue-50 text-blue-700 border-blue-200/60 dark:bg-blue-950/30 dark:text-blue-400 dark:border-blue-800/50"
                          : "bg-purple-50 text-purple-700 border-purple-200/60 dark:bg-purple-950/30 dark:text-purple-400 dark:border-purple-800/50"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Unified Showcase Trigger */}
                <button
                  onClick={() => {
                    setSelectedProject(project);
                    setIsModalOpen(true);
                  }}
                  className={`w-full mb-3.5 flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl border transition-all duration-300 cursor-pointer active:scale-95 shadow-xs ${
                    project.isCeres
                      ? "border-emerald-500/30 hover:border-emerald-500/50 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                      : project.isEvolution
                      ? "border-blue-500/30 hover:border-blue-500/50 bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400"
                      : "border-purple-500/30 hover:border-purple-500/50 bg-purple-500/10 hover:bg-purple-500/20 text-purple-600 dark:text-purple-400"
                  }`}
                >
                  <span className="relative flex h-2 w-2">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                      project.isCeres ? "bg-emerald-400" : project.isEvolution ? "bg-blue-400" : "bg-purple-400"
                    }`}></span>
                    <span className={`relative inline-flex rounded-full h-2 w-2 ${
                      project.isCeres ? "bg-emerald-500" : project.isEvolution ? "bg-blue-500" : "bg-purple-500"
                    }`}></span>
                  </span>
                  <span>{project.isCeres ? "View App Details & Screenshots" : project.isEvolution ? "View UI Evolution Flowchart" : "View Project Details"}</span>
                </button>

                {/* Action Buttons */}
                <div className="flex gap-3.5 mt-auto w-full">
                  {!project.isCeres && project.demoLink && project.demoLink !== "#" ? (
                    <Link
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold rounded-xl text-white cursor-pointer shadow-sm transition-all duration-300 active:scale-95 hover:shadow-md ${
                        project.isCeres
                          ? "bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400"
                          : project.isEvolution
                          ? "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400"
                          : "bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400"
                      }`}
                    >
                      <span>Live Demo</span>
                      <FaExternalLinkAlt className="text-[10px]" />
                    </Link>
                  ) : (
                    <button
                      onClick={() => {
                        setSelectedProject(project);
                        setIsModalOpen(true);
                      }}
                      className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold rounded-xl text-white cursor-pointer shadow-sm transition-all duration-300 active:scale-95 hover:shadow-md bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400"
                    >
                      <span>Showcase</span>
                      <FaExternalLinkAlt className="text-[10px]" />
                    </button>
                  )}
                  <Link
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold rounded-xl border border-slate-200 dark:border-neutral-800/80 text-slate-700 dark:text-neutral-350 hover:bg-slate-50 dark:hover:bg-neutral-850 hover:text-slate-900 dark:hover:text-white transition-all duration-300 active:scale-95"
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

      {/* Unified Project Details Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </div>
  );
};

export default Projectpage;
