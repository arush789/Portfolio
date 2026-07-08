"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface ProjectSliderProps {
  v1Image: StaticImageData | string;
  v2Image: StaticImageData | string;
  alt: string;
}

const ProjectSlider: React.FC<ProjectSliderProps> = ({ v1Image, v2Image, alt }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleMouseUp]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-video w-full overflow-hidden rounded-2xl bg-white dark:bg-neutral-950 border border-slate-200/50 dark:border-neutral-800/50 select-none cursor-ew-resize group"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {/* V2 (Modern UI) Image - Background */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={v2Image}
          alt={`${alt} V2 (Modern UI)`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          priority
        />
        <div className="absolute right-3 top-3 bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-full select-none">
          V2 (Modern)
        </div>
      </div>

      {/* V1 (Classic UI) Image - Clipped Overlay */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <Image
          src={v1Image}
          alt={`${alt} V1 (Classic UI)`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          priority
        />
        <div className="absolute left-3 top-3 bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-full select-none">
          V1 (Classic)
        </div>
      </div>

      {/* Sliding Handler Bar */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-blue-500/80 shadow-[0_0_8px_rgba(59,130,246,0.6)] cursor-ew-resize pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Glowing Slider Handle Center Button */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white dark:bg-neutral-900 border border-blue-500 flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110 active:scale-95">
          <FiChevronLeft className="text-blue-500 w-3 h-3 -mr-0.5" />
          <FiChevronRight className="text-blue-500 w-3 h-3 -ml-0.5" />
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;
