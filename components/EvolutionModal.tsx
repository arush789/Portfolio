"use client";
import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { FaTimes, FaExternalLinkAlt, FaGithub, FaChevronRight, FaChevronDown, FaCheck } from "react-icons/fa";
import { FiMaximize2 } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

interface EvolutionModalProps {
  isOpen: boolean;
  onClose: () => void;
  v1Image: StaticImageData | string;
  v2Image: StaticImageData | string;
}

const EvolutionModal: React.FC<EvolutionModalProps> = ({ isOpen, onClose, v1Image, v2Image }) => {
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

  if (!isOpen) return null;

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
        {/* Header */}
        <div className="sticky top-0 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md px-6 py-4 border-b border-slate-200 dark:border-neutral-800 flex justify-between items-center z-10">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-neutral-100 flex items-center gap-2">
              Recitore <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-500 font-semibold border border-blue-500/20">V1 → V2 Progression</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-neutral-400 mt-0.5">
              UI/UX Evolution & Full-Stack Redesign
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
          
          {/* Section 1: Evolution Flowchart */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-neutral-100 mb-6 border-l-4 border-blue-500 pl-3">
              1. The Upgrade Flowchart
            </h3>
                       <div className="grid md:grid-cols-7 items-center gap-6 md:gap-4 max-w-5xl mx-auto">
              {/* V1 Block */}
              <div className="md:col-span-2 bg-slate-50 dark:bg-neutral-950/40 border border-slate-200 dark:border-neutral-800/80 rounded-2xl p-5 hover:border-slate-300 dark:hover:border-neutral-800 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Phase 1</span>
                  <span className="text-[10px] px-2 py-0.5 bg-slate-200 text-slate-700 dark:bg-neutral-800 dark:text-neutral-300 rounded font-medium">Classic</span>
                </div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-neutral-200 mb-2">Recitore V1</h4>
                <p className="text-xs text-slate-600 dark:text-neutral-400 leading-relaxed mb-4">
                  A recipe exploration search application. Features structured card items and persistent recipe storage.
                </p>
                <div className="space-y-2">
                  <div className="text-[11px] font-semibold text-slate-500 dark:text-neutral-400">Core Stack:</div>
                  <div className="flex flex-wrap gap-1">
                    {["Next.js", "React", "MongoDB", "Tailwind CSS", "Javascript"].map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 bg-slate-200/50 dark:bg-neutral-800/40 text-slate-600 dark:text-neutral-400 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Transition Flow Arrow (Desktop horizontal, Mobile vertical) */}
              <div className="md:col-span-3 flex flex-col items-center justify-center py-4 px-2">
                {/* Horizontal flow line for desktop */}
                <div className="hidden md:flex flex-col items-center w-full">
                  <span className="text-[10px] font-bold text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20 mb-2 uppercase tracking-wide">
                    UI/UX Modernization
                  </span>
                  
                  {/* Glowing Arrow Line */}
                  <div className="relative w-full h-1 bg-gradient-to-r from-slate-200 via-blue-500 to-slate-200 dark:from-neutral-800 dark:via-blue-500 dark:to-neutral-800 rounded-full flex items-center justify-center">
                    <div className="absolute right-0 w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                    <FaChevronRight className="absolute right-0 text-blue-500 text-xs translate-x-1" />
                  </div>
                </div>

                {/* Vertical flow line for mobile */}
                <div className="flex md:hidden flex-col items-center py-2">
                  <span className="text-[9px] font-bold text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20 mb-2 uppercase tracking-wide">
                    UI/UX Modernization
                  </span>
                  <div className="h-8 w-0.5 bg-gradient-to-b from-slate-200 via-blue-500 to-slate-200 dark:from-neutral-800 dark:via-blue-500 dark:to-neutral-800 relative flex items-center justify-center">
                    <FaChevronDown className="absolute bottom-0 text-blue-500 text-xs translate-y-1" />
                  </div>
                </div>

                {/* Micro Updates Log */}
                <ul className="mt-4 space-y-2 text-[11px] text-slate-500 dark:text-neutral-400 w-full text-center md:text-left md:pl-6 list-none">
                  <li className="flex items-center gap-1.5 justify-center md:justify-start">
                    <FaCheck className="text-emerald-500 text-[9px] shrink-0" />
                    <span>Redesigned layout to a premium <strong>Glassmorphic UI</strong></span>
                  </li>
                  <li className="flex items-center gap-1.5 justify-center md:justify-start">
                    <FaCheck className="text-emerald-500 text-[9px] shrink-0" />
                    <span>Upgraded core engine to <strong>Tailwind CSS v4</strong></span>
                  </li>
                  <li className="flex items-center gap-1.5 justify-center md:justify-start">
                    <FaCheck className="text-emerald-500 text-[9px] shrink-0" />
                    <span>Added smooth <strong>Framer Motion transitions</strong></span>
                  </li>
                  <li className="flex items-center gap-1.5 justify-center md:justify-start">
                    <FaCheck className="text-emerald-500 text-[9px] shrink-0" />
                    <span>Enhanced responsive fluid card styling & glows</span>
                  </li>
                </ul>
              </div>

              {/* V2 Block */}
              <div className="md:col-span-2 bg-blue-500/5 dark:bg-blue-500/[0.02] border border-blue-500/30 rounded-2xl p-5 shadow-xs relative overflow-hidden group hover:border-blue-500/50 transition-all">
                {/* Glow top edge */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500" />
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-500">Phase 2</span>
                  <span className="text-[10px] px-2 py-0.5 bg-blue-500/10 text-blue-500 dark:bg-blue-500/20 rounded font-bold">Modern V2</span>
                </div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-neutral-100 mb-2">Recitore V2</h4>
                <p className="text-xs text-slate-600 dark:text-neutral-400 leading-relaxed mb-4">
                  A modernized visual interface. Features dynamic hover cards, glow borders, and elegant overlays.
                </p>
                <div className="space-y-2">
                  <div className="text-[11px] font-semibold text-blue-500 dark:text-blue-400">Core Stack:</div>
                  <div className="flex flex-wrap gap-1">
                    {["Next.js", "React", "MongoDB", "Tailwind CSS v4", "Framer Motion"].map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 dark:bg-blue-500/20 rounded font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Visual Comparison with Zoom Details */}
          <div>
            <div className="flex justify-between items-baseline mb-6 border-l-4 border-blue-500 pl-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-neutral-100">
                2. Visual Comparison & Details
              </h3>
              <span className="text-xs text-slate-500 dark:text-neutral-400 hidden sm:inline">
                Click any image to enlarge and inspect design details
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* V1 Screenshot Card */}
              <div className="bg-slate-50 dark:bg-neutral-950/30 border border-slate-200 dark:border-neutral-800/80 rounded-2xl overflow-hidden flex flex-col">
                <div className="relative aspect-video w-full group overflow-hidden bg-neutral-900 cursor-zoom-in" onClick={() => setLightboxImage(v1Image)}>
                  <Image
                    src={v1Image}
                    alt="Recitore V1 UI Screenshot"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <FiMaximize2 className="text-white text-xl" />
                    <span className="text-white text-xs font-semibold">Zoom Screenshot</span>
                  </div>
                  <div className="absolute left-4 bottom-4 bg-black/60 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-full">
                    Recitore V1 (Classic UI)
                  </div>
                </div>
                <div className="p-5 flex-grow">
                  <h4 className="font-bold text-slate-800 dark:text-neutral-200 text-sm mb-2">Classic Layout Notes</h4>
                  <ul className="space-y-1.5 text-xs text-slate-500 dark:text-neutral-400 list-disc pl-4">
                    <li>Fixed-width grid layout with traditional styling.</li>
                    <li>Simple search inputs and recipe listings.</li>
                    <li>Standard layout design with solid borders.</li>
                    <li>Fully powered by MongoDB backend and Next.js APIs.</li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-slate-200 dark:border-neutral-800 flex justify-between items-center">
                    <span className="text-[10px] text-slate-400 dark:text-neutral-500">Live URL: recitore.vercel.app</span>
                    <a
                      href="https://recitore.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-500 hover:text-blue-600 flex items-center gap-1 font-semibold"
                    >
                      <span>Visit V1</span>
                      <FaExternalLinkAlt className="text-[9px]" />
                    </a>
                  </div>
                </div>
              </div>

              {/* V2 Screenshot Card */}
              <div className="bg-slate-50 dark:bg-neutral-950/30 border border-slate-200 dark:border-neutral-800/80 rounded-2xl overflow-hidden flex flex-col">
                <div className="relative aspect-video w-full group overflow-hidden bg-neutral-900 cursor-zoom-in" onClick={() => setLightboxImage(v2Image)}>
                  <Image
                    src={v2Image}
                    alt="Recitore V2 UI Screenshot"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <FiMaximize2 className="text-white text-xl" />
                    <span className="text-white text-xs font-semibold">Zoom Screenshot</span>
                  </div>
                  <div className="absolute left-4 bottom-4 bg-blue-500/80 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-full">
                    Recitore V2 (Modern UI)
                  </div>
                </div>
                <div className="p-5 flex-grow">
                  <h4 className="font-bold text-slate-800 dark:text-neutral-200 text-sm mb-2">Modern Layout Upgrades</h4>
                  <ul className="space-y-1.5 text-xs text-slate-500 dark:text-neutral-400 list-disc pl-4">
                    <li>Dynamic, glassmorphic design cards with glowing borders.</li>
                    <li>Sleek, fluid grid structures fitting varying screens.</li>
                    <li>Smooth micro-interactions and transitions via Framer Motion.</li>
                    <li>Keeps the robust MongoDB API backend with visual optimization.</li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-slate-200 dark:border-neutral-800 flex justify-between items-center">
                    <span className="text-[10px] text-slate-400 dark:text-neutral-500">Live URL: recitore-v2.vercel.app</span>
                    <a
                      href="https://recitore-v2.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-500 hover:text-blue-600 flex items-center gap-1 font-semibold"
                    >
                      <span>Visit V2</span>
                      <FaExternalLinkAlt className="text-[9px]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Technical Spec Matrix */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-neutral-100 mb-6 border-l-4 border-blue-500 pl-3">
              3. Architectural Comparison
            </h3>

            <div className="overflow-x-auto border border-slate-200 dark:border-neutral-800 rounded-2xl">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-neutral-950/40 border-b border-slate-200 dark:border-neutral-800">
                    <th className="p-4 font-bold text-slate-600 dark:text-neutral-400 uppercase tracking-wider">Feature / Metric</th>
                    <th className="p-4 font-bold text-slate-600 dark:text-neutral-400 uppercase tracking-wider">Recitore V1 (Classic)</th>
                    <th className="p-4 font-bold text-blue-500 uppercase tracking-wider">Recitore V2 (Modern)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-neutral-800">
                  <tr>
                    <td className="p-4 font-semibold text-slate-900 dark:text-neutral-200">Framework & Architecture</td>
                    <td className="p-4 text-slate-600 dark:text-neutral-400">Next.js App Router</td>
                    <td className="p-4 font-medium text-slate-800 dark:text-blue-400">Next.js App Router (Identical Core)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-900 dark:text-neutral-200">Database & APIs</td>
                    <td className="p-4 text-slate-600 dark:text-neutral-400">MongoDB Database</td>
                    <td className="p-4 font-medium text-slate-800 dark:text-blue-400">MongoDB Database (Identical Core)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-900 dark:text-neutral-200">Styling Framework</td>
                    <td className="p-4 text-slate-600 dark:text-neutral-400">Tailwind CSS (v3 styles)</td>
                    <td className="p-4 font-medium text-slate-800 dark:text-blue-400">Tailwind CSS v4 (Modern Refactor)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-900 dark:text-neutral-200">Animations</td>
                    <td className="p-4 text-slate-600 dark:text-neutral-400">Basic hover transitions</td>
                    <td className="p-4 font-medium text-slate-800 dark:text-blue-400">Framer Motion entry, exit, & hover flows</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-900 dark:text-neutral-200">Visual Aesthetic</td>
                    <td className="p-4 text-slate-600 dark:text-neutral-400">Traditional CSS structure, standard cards</td>
                    <td className="p-4 font-medium text-slate-800 dark:text-blue-400">Vibrant gradients, glassmorphism, responsive glows</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-slate-50 dark:bg-neutral-950/60 backdrop-blur-md px-6 py-4 border-t border-slate-200 dark:border-neutral-800 flex justify-between items-center z-10">
          <div className="flex gap-2">
            <a
              href="https://github.com/arush789/Recitore"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-300 dark:border-neutral-700 text-slate-700 dark:text-neutral-300 hover:bg-slate-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <FaGithub />
              <span>Repository</span>
            </a>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-1.5 text-xs font-semibold rounded-lg bg-blue-500 hover:bg-blue-600 text-white shadow-xs transition-colors"
          >
            Done Reviewing
          </button>
        </div>
      </motion.div>

      {/* Lightbox for large screenshots */}
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
              className="relative max-w-5xl max-h-[90vh] z-10"
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
              >
                <FaTimes />
              </button>
              <div className="relative aspect-video w-full max-w-[90vw] max-h-[80vh] overflow-hidden rounded-lg">
                <Image
                  src={lightboxImage}
                  alt="Zoomed Screenshot"
                  fill
                  className="object-contain"
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

export default EvolutionModal;
