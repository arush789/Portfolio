"use client";
import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { FaTimes, FaExternalLinkAlt, FaGithub, FaChevronRight, FaChevronDown, FaCheck, FaChevronLeft } from "react-icons/fa";
import { FiMaximize2 } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import ProjectSlider from "./ProjectSlider";

// Import all screenshots and assets
import ceres1 from "../images/ceres-1.jpeg";
import ceres2 from "../images/ceres-2.jpeg";
import ceres3 from "../images/ceres-3.jpeg";
import ceres4 from "../images/ceres-4.jpeg";
import ceres5 from "../images/ceres-5.jpeg";
import ceres6 from "../images/ceres-6.jpeg";
import ceres7 from "../images/ceres-7.jpeg";
import ceres8 from "../images/ceres-8.jpeg";
import ceres9 from "../images/ceres-9.jpeg";
import ceres10 from "../images/ceres-10.jpeg";
import ceres11 from "../images/ceres-11.jpeg";
import ceres12 from "../images/ceres-12.jpeg";


interface SpecItem {
  label: string;
  value: string;
}

interface Project {
  id: number;
  title: string;
  year?: string;
  description: string;
  image: StaticImageData | string;
  demoLink: string;
  codeLink: string;
  tags: string[];
  isCeres?: boolean;
  isEvolution?: boolean;
  v1Image?: StaticImageData | string;
  v2Image?: StaticImageData | string;
  features?: string[];
  specs?: SpecItem[];
  browserUrl?: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const ceresScreenshots = [
  { img: ceres1, title: "Live Sensors" },
  { img: ceres2, title: "Dashboard Stats" },
  { img: ceres3, title: "Field Metrics" },
  { img: ceres4, title: "Interactive UI" },
  { img: ceres5, title: "AI Model Predictor" },
  { img: ceres6, title: "Disease Diagnostics" },
  { img: ceres7, title: "Field Records" },
  { img: ceres8, title: "Crop Selector" },
  { img: ceres9, title: "Farmer Details" },
  { img: ceres10, title: "Cloud Integration" },
  { img: ceres11, title: "Settings & Profile" },
  { img: ceres12, title: "Onboarding Flow" },
];

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  const [activeCeresIndex, setActiveCeresIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<StaticImageData | string | null>(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxImage) {
          setLightboxImage(null);
        } else {
          onClose();
        }
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, lightboxImage]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const nextCeresScreen = () => {
    setActiveCeresIndex((prev) => (prev + 1) % ceresScreenshots.length);
  };

  const prevCeresScreen = () => {
    setActiveCeresIndex((prev) => (prev - 1 + ceresScreenshots.length) % ceresScreenshots.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-neutral-950/80 backdrop-blur-md"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative w-full max-w-6xl bg-white dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col my-8 max-h-[90vh] z-10"
      >
        {/* Glow top edge */}
        <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500" />

        {/* Header */}
        <div className="sticky top-0 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md px-6 py-4 border-b border-slate-200/60 dark:border-neutral-800/60 flex justify-between items-center z-10">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-neutral-100 flex items-center gap-2">
              <span>{project.title}</span>
              {project.year && (
                <span className="text-xs px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-neutral-800 text-slate-600 dark:text-neutral-350 font-semibold border border-slate-200/80 dark:border-neutral-700/80 shadow-2xs">
                  {project.year}
                </span>
              )}
              {project.isCeres && (
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 font-semibold border border-emerald-500/20">
                  IoT & ML Mobile
                </span>
              )}
              {project.isEvolution && (
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-500 font-semibold border border-blue-500/20">
                  V1 → V2 Redesign
                </span>
              )}
              {!project.isCeres && !project.isEvolution && (
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-500 font-semibold border border-purple-500/20">
                  Web Application
                </span>
              )}
            </h2>
            <p className="text-xs text-slate-500 dark:text-neutral-400 mt-0.5">
              {project.description}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-neutral-800 text-slate-500 dark:text-neutral-400 transition-colors"
          >
            <FaTimes className="text-lg" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-12">
          
          {/* Main Visual Showcase */}
          <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-stretch">
            
            {/* Left side visual element */}
            <div className="flex-grow flex items-center justify-center bg-slate-50 dark:bg-neutral-950/40 rounded-2xl p-6 border border-slate-200/50 dark:border-neutral-800/50 w-full lg:max-w-2xl min-h-[300px]">
              {project.isCeres ? (
                /* Portrait Phone Bezel Mockup for Ceres AI */
                <div className="flex flex-col items-center gap-4 w-full">
                  <div className="relative w-[230px] aspect-[9/19.5] border-[6px] border-neutral-800 dark:border-neutral-950 rounded-[36px] shadow-2xl bg-black overflow-hidden group select-none">
                    {/* Speaker Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-3.5 bg-neutral-800 dark:bg-neutral-950 rounded-b-xl z-20" />
                    
                    {/* Screen reflection overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-10" />

                    {/* Screenshot Frame Container */}
                    <div 
                      onClick={() => setLightboxImage(ceresScreenshots[activeCeresIndex].img)}
                      className="relative w-full h-full cursor-zoom-in"
                    >
                      <Image
                        src={ceresScreenshots[activeCeresIndex].img}
                        alt={ceresScreenshots[activeCeresIndex].title}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>

                    {/* Controls inside Phone Screen */}
                    <button 
                      onClick={prevCeresScreen}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center z-15 backdrop-blur-xs transition-colors"
                    >
                      <FaChevronLeft className="text-xs" />
                    </button>
                    <button 
                      onClick={nextCeresScreen}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center z-15 backdrop-blur-xs transition-colors"
                    >
                      <FaChevronRight className="text-xs" />
                    </button>
                  </div>

                  {/* Thumbnail Strip */}
                  <div className="flex gap-1.5 overflow-x-auto w-full max-w-md pb-2 px-1 justify-start md:justify-center">
                    {ceresScreenshots.map((shot, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveCeresIndex(idx)}
                        className={`flex-none w-10 h-16 rounded border overflow-hidden transition-all ${
                          idx === activeCeresIndex 
                            ? "border-emerald-500 scale-105 shadow-md" 
                            : "border-slate-200 dark:border-neutral-800 opacity-60 hover:opacity-100"
                        }`}
                      >
                        <Image src={shot.img} alt={shot.title} className="object-cover w-full h-full" />
                      </button>
                    ))}
                  </div>
                </div>
              ) : project.isEvolution && project.v1Image && project.v2Image ? (
                /* Interactive Before-After Slider for Recitore */
                <div className="w-full flex flex-col gap-4">
                  <ProjectSlider
                    v1Image={project.v1Image}
                    v2Image={project.v2Image}
                    alt={project.title}
                  />
                  <div className="text-center text-xs text-slate-500 dark:text-neutral-400">
                    Drag the slider to compare the classic V1 layout with the modernized V2 UI
                  </div>
                </div>
              ) : (
                /* Browser Wrapper Mockup for Web/Game projects */
                <div className="w-full flex flex-col">
                  <div className="w-full border border-slate-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-black">
                    {/* Browser Toolbar */}
                    <div className="bg-slate-100 dark:bg-neutral-950 px-4 py-2.5 flex items-center gap-2 border-b border-slate-200 dark:border-neutral-800 rounded-t-2xl">
                      {/* Dots */}
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      </div>
                      {/* Address Bar */}
                      <div className="flex-1 bg-white dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-md text-[10px] px-3 py-0.5 text-slate-400 dark:text-neutral-500 text-center select-none truncate">
                        {project.browserUrl || `https://github.com/arush789/${project.title.replace(/\s+/g, "-")}`}
                      </div>
                    </div>
                    {/* Web Preview Content */}
                    <div 
                      onClick={() => setLightboxImage(project.image)}
                      className="relative aspect-video w-full overflow-hidden bg-slate-900 cursor-zoom-in group"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-1.5">
                        <FiMaximize2 className="text-white text-xl" />
                        <span className="text-white text-xs font-semibold">Zoom Screenshot</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right side info specs & tags */}
            <div className="w-full lg:w-1/3 flex flex-col justify-between space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-neutral-100 mb-3 border-l-4 border-blue-500 pl-3">
                  Project Description
                </h3>
                <p className="text-sm text-slate-600 dark:text-neutral-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-neutral-200 mb-2.5">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-0.5 rounded-full bg-slate-200/50 text-slate-700 border border-slate-300/30 dark:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-700/40 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {project.specs && (
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-neutral-200 mb-2.5">
                    Architecture Specs
                  </h3>
                  <div className="overflow-hidden border border-slate-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-black/30">
                    <table className="w-full text-xs text-left border-collapse">
                      <tbody className="divide-y divide-slate-100 dark:divide-neutral-800/80">
                        {project.specs.slice(0, 3).map((spec, idx) => (
                          <tr key={idx}>
                            <td className="p-2.5 font-semibold text-slate-500 dark:text-neutral-400 border-r border-slate-100 dark:border-neutral-800/80 w-1/3">{spec.label}</td>
                            <td className="p-2.5 text-slate-700 dark:text-neutral-300">{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Section 2: Flowchart or Detailed Comparison */}
          {project.isCeres && (
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-neutral-100 mb-6 border-l-4 border-emerald-500 pl-3">
                System Architecture Flow
              </h3>
              <div className="grid md:grid-cols-7 items-center gap-6 md:gap-4 max-w-5xl mx-auto text-center md:text-left">
                {/* Hardware */}
                <div className="md:col-span-2 bg-slate-50 dark:bg-neutral-950/40 border border-slate-200 dark:border-neutral-800/80 rounded-2xl p-5 hover:border-slate-300 dark:hover:border-neutral-800 transition-all">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-500">Hardware Layer</span>
                  <h4 className="text-md font-bold text-slate-800 dark:text-neutral-200 mb-2 mt-1">Future Sensor Integration</h4>
                  <p className="text-xs text-slate-600 dark:text-neutral-400 leading-relaxed">
                    Currently utilizes simulated NPK, moisture, and pH telemetry, structured to directly migrate to live soil sensors via Blynk Cloud APIs.
                  </p>
                </div>
                {/* Arrow */}
                <div className="md:col-span-1 flex flex-col items-center justify-center py-2">
                  <FaChevronRight className="hidden md:block text-emerald-500 text-sm" />
                  <FaChevronDown className="block md:hidden text-emerald-500 text-sm" />
                </div>
                {/* Mobile UI */}
                <div className="md:col-span-2 bg-emerald-500/5 dark:bg-emerald-500/[0.02] border border-emerald-500/30 rounded-2xl p-5 hover:border-emerald-500/50 transition-all">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-500">Mobile Interface</span>
                  <h4 className="text-md font-bold text-slate-800 dark:text-neutral-100 mb-2 mt-1">Ceres AI Mobile UI</h4>
                  <p className="text-xs text-slate-600 dark:text-neutral-400 leading-relaxed">
                    Cross-platform Expo React Native dashboard. Features dynamic field metric graphs, interactive ML diagnostics, and local user caching.
                  </p>
                </div>
                {/* Arrow */}
                <div className="md:col-span-1 flex flex-col items-center justify-center py-2">
                  <FaChevronRight className="hidden md:block text-blue-500 text-sm" />
                  <FaChevronDown className="block md:hidden text-blue-500 text-sm" />
                </div>
                {/* ML Backend */}
                <div className="md:col-span-1 bg-slate-50 dark:bg-neutral-950/40 border border-slate-200 dark:border-neutral-800/80 rounded-2xl p-4 hover:border-slate-300 dark:hover:border-neutral-800 transition-all text-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-500">ML Backend</span>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-neutral-200 mb-1 mt-1">Flask & Supabase</h4>
                  <p className="text-[10px] text-slate-500 dark:text-neutral-400 leading-normal">
                    XGBoost models predict disease. DB logs logs.
                  </p>
                </div>
              </div>
            </div>
          )}

          {project.isEvolution && (
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-neutral-100 mb-6 border-l-4 border-blue-500 pl-3">
                V1 ➔ V2 Evolution Timeline
              </h3>
              <div className="grid md:grid-cols-7 items-center gap-6 md:gap-4 max-w-5xl mx-auto">
                <div className="md:col-span-2 bg-slate-50 dark:bg-neutral-950/40 border border-slate-200 dark:border-neutral-800/80 rounded-2xl p-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Phase 1</span>
                  <h4 className="text-md font-bold text-slate-800 dark:text-neutral-200 mb-2 mt-1">Recitore V1 (Classic)</h4>
                  <p className="text-xs text-slate-600 dark:text-neutral-400 leading-relaxed">
                    A simple recipe catalog. Structured cards and static layouts built on standard Next.js styling.
                  </p>
                </div>
                <div className="md:col-span-3 flex flex-col items-center justify-center p-2 text-center">
                  <span className="text-[10px] font-bold text-blue-500 bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-500/20 mb-2 uppercase">
                    UI/UX Modernization
                  </span>
                  <div className="w-full h-0.5 bg-gradient-to-r from-slate-200 via-blue-500 to-slate-200 dark:from-neutral-850 dark:via-blue-500 dark:to-neutral-850 rounded-full relative flex items-center justify-center">
                    <FaChevronRight className="absolute right-0 text-blue-500 text-xs" />
                  </div>
                  <ul className="mt-4 space-y-1.5 text-[11px] text-slate-500 dark:text-neutral-400 w-full text-center">
                    <li>✓ Redesigned layouts to dynamic glassmorphic panels</li>
                    <li>✓ Core styles updated to Tailwind CSS v4 syntax</li>
                    <li>✓ Smooth component entry flows via Framer Motion</li>
                  </ul>
                </div>
                <div className="md:col-span-2 bg-blue-500/5 dark:bg-blue-500/[0.02] border border-blue-500/30 rounded-2xl p-5 shadow-xs relative overflow-hidden">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-500">Phase 2</span>
                  <h4 className="text-md font-bold text-slate-800 dark:text-neutral-100 mb-2 mt-1">Recitore V2 (Modern)</h4>
                  <p className="text-xs text-slate-600 dark:text-neutral-400 leading-relaxed">
                    A premium dark-first design featuring custom layout layers, responsive margins, and glass borders.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Section 3: Detailed Technical Specs & Feature Cards */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-neutral-100 mb-6 border-l-4 border-blue-500 pl-3">
              Features & Architecture Spec
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Feature Cards Checklist */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-slate-800 dark:text-neutral-200 uppercase tracking-wider">
                  Deep-dive Features
                </h4>
                <div className="space-y-3">
                  {(project.features || [
                    "Sleek visual container layouts designed using modern best practices.",
                    "Full browser and mobile responsive optimization checking for fluid scales.",
                    "Clean, well-documented source codes hosted securely on GitHub repositories.",
                    "Seamless deployment configurations with high-performance metrics."
                  ]).map((feature, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-500 dark:bg-blue-500/20">
                        <FaCheck className="text-[10px]" />
                      </div>
                      <p className="text-xs text-slate-600 dark:text-neutral-400 leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specs Table Matrix */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-slate-800 dark:text-neutral-200 uppercase tracking-wider">
                  Technical Stack Breakdown
                </h4>
                <div className="overflow-hidden border border-slate-200 dark:border-neutral-800 rounded-2xl">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 dark:bg-neutral-950/40 border-b border-slate-200 dark:border-neutral-800">
                        <th className="p-3 font-bold text-slate-500 uppercase tracking-wider">Architecture Layer</th>
                        <th className="p-3 font-bold text-slate-500 uppercase tracking-wider">Technologies Used</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-neutral-800">
                      {(project.specs || [
                        { label: "Frontend Core", value: "HTML5, Vanilla CSS, JS (ES6+)" },
                        { label: "Execution Layer", value: "Vite, ESBuild compilers" },
                        { label: "Styling Framework", value: "Modern custom variables" },
                        { label: "Code Repository", value: "GitHub Git Sync" }
                      ]).map((spec, idx) => (
                        <tr key={idx}>
                          <td className="p-3 font-semibold text-slate-900 dark:text-neutral-200">{spec.label}</td>
                          <td className="p-3 text-slate-600 dark:text-neutral-400">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-slate-50 dark:bg-neutral-950/60 backdrop-blur-md px-6 py-4 border-t border-slate-200 dark:border-neutral-800 flex justify-between items-center z-10">
          <div className="flex gap-2">
            {project.codeLink && (
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-300 dark:border-neutral-700 text-slate-700 dark:text-neutral-300 hover:bg-slate-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <FaGithub />
                <span>Repository</span>
              </a>
            )}
            {!project.isCeres && project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-500 hover:bg-blue-600 text-white shadow-xs transition-colors"
              >
                <FaExternalLinkAlt className="text-[10px]" />
                <span>Visit Live Demo</span>
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-5 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 dark:text-neutral-950 shadow-xs transition-colors"
          >
            Done Reviewing
          </button>
        </div>
      </motion.div>

      {/* Lightbox for zoom view */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImage(null)}
              className="fixed inset-0 bg-black/95 backdrop-blur-xs cursor-zoom-out"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-5xl max-h-[90vh] z-10 flex items-center justify-center"
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
              >
                <FaTimes />
              </button>
              <div className="relative max-w-[90vw] max-h-[85vh] w-auto h-auto rounded-lg overflow-hidden">
                <Image
                  src={lightboxImage}
                  alt="Zoomed Screenshot"
                  width={1400}
                  height={800}
                  className="object-contain max-h-[80vh] w-auto rounded-lg"
                  priority
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectModal;
