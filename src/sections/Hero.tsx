"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, MotionValue } from "framer-motion";

// Sub-component to handle hooks correctly inside a loop
const Cloud = ({ i, scrollY }: { i: number; scrollY: MotionValue<number> }) => {
  const y = useTransform(scrollY, [0, 1000], [0, i * 60]);
  return (
    <motion.div
      style={{ y }}
      initial={{ x: -700, y: 0 + i * 150, opacity: 0 }}
      animate={{ 
        x: 2600, 
        opacity: [0, 0.4, 0.4, 0],
      }}
      transition={{ 
        duration: 40 + i * 10, 
        repeat: Infinity, 
        ease: "linear",
        delay: i * 6
      }}
      className="absolute w-[600px] h-[250px] bg-white/20 blur-[120px] rounded-full"
    />
  );
};

const Dot = ({ dot, mouseX, mouseY }: { dot: any; mouseX: MotionValue<number>; mouseY: MotionValue<number> }) => {
  const x = useTransform(mouseX, [-0.5, 0.5], [(dot.id % 10 - 5) * 15, (dot.id % 10 - 5) * -15]);
  const y = useTransform(mouseY, [-0.5, 0.5], [(dot.id % 8 - 4) * 15, (dot.id % 8 - 4) * -15]);

  return (
    <motion.div
      className="absolute rounded-full bg-white/25 blur-[1px]"
      style={{
        width: dot.size,
        height: dot.size,
        left: dot.left,
        top: dot.top,
        x,
        y,
      }}
      animate={{
        opacity: [0.1, 0.5, 0.1],
        scale: [1, 1.3, 1],
      }}
      transition={{
        duration: dot.duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const floatX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), springConfig);
  const floatY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20]), springConfig);

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const birds = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    initialX: i % 2 === 0 ? -150 : "120%",
    y: 100 + (Math.sin(i) * 200 + 300), 
    scale: 0.3 + (i * 0.05),
    duration: 25 + (i * 5),
  }));

  const dots = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    left: (i * 13.7) % 100 + "%",
    top: (i * 19.3) % 100 + "%",
    size: (i % 4) + 1 + "px",
    duration: 4 + (i % 5),
  }));

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      id="hero" 
      className="relative h-screen flex flex-col items-center overflow-hidden bg-sky-gradient pt-32 pb-20 px-4"
    >
      {/* Moving Clouds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <Cloud key={`cloud-${i}`} i={i} scrollY={scrollY} />
        ))}
      </div>

      {/* Floating Birds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {isMounted && birds.map((bird) => (
          <motion.div
            key={`bird-${bird.id}`}
            initial={{ 
              x: bird.initialX, 
              y: bird.y,
              scale: bird.scale,
              opacity: 0 
            }}
            animate={{ 
              x: bird.initialX === -150 ? "120%" : -150,
              y: [bird.y, bird.y - 120, bird.y + 60],
              opacity: [0, 0.2, 0.2, 0]
            }}
            transition={{ 
              duration: bird.duration, 
              repeat: Infinity, 
              ease: "linear",
            }}
            className="absolute text-white/30"
          >
            <svg width="40" height="20" viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth="0.8">
              <motion.path 
                d="M0 10 Q10 0 20 10 Q30 0 40 10" 
                animate={{ d: ["M0 10 Q10 0 20 10 Q30 0 40 10", "M0 10 Q10 20 20 10 Q30 20 40 10", "M0 10 Q10 0 20 10 Q30 0 40 10"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {isMounted && dots.map((dot) => (
          <Dot key={`dot-${dot.id}`} dot={dot} mouseX={mouseX} mouseY={mouseY} />
        ))}
      </div>

      <motion.div 
        style={{ y: y1, x: floatX, rotateX: useTransform(mouseY, [-0.5, 0.5], [1.5, -1.5]), rotateY: useTransform(mouseX, [-0.5, 0.5], [-1.5, 1.5]) }} 
        className="container mx-auto relative z-10 flex flex-col items-center text-center perspective-1000 flex-1 justify-center gap-2 md:gap-4 lg:gap-6"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          className="mb-2 md:mb-4 cursor-pointer"
        >
          <div className="bg-[#1e40af]/50 backdrop-blur-md px-5 py-2 md:px-6 md:py-2.5 rounded-full border border-white/20 flex items-center gap-3 text-[12px] md:text-[14px] font-semibold text-white shadow-lg transition-all hover:bg-[#1e40af]/70">
             Open To Work <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,1)] animate-pulse" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white/95 text-sm md:text-lg font-serif italic mb-4 md:mb-6"
        >
          Hello, from the developer&apos;s desk.
        </motion.p>

        {/* Main Heading */}
        <div className="relative mb-6 md:mb-10 w-full flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-[48px] sm:text-[80px] md:text-[110px] lg:text-[140px] font-serif text-white tracking-tighter leading-[0.95] md:leading-[0.85] select-none text-shadow-xl"
          >
            <motion.div>Crafted code,</motion.div>
            <div className="flex items-center justify-center gap-6 md:gap-10 -mt-2 md:-mt-6">
              <motion.span 
                initial={{ opacity: 0, rotate: -10 }}
                animate={{ opacity: 1, rotate: -18 }}
                transition={{ delay: 1.2, duration: 1.2 }}
                className="italic font-light opacity-80 text-[0.6em]"
              >
                by
              </motion.span> 
              <motion.span>design.</motion.span>
            </div>
          </motion.h1>
          
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-40 bg-white/10 blur-[120px] -z-10 rounded-full opacity-40" />
        </div>

        {/* Bottom Tagline - High Contrast White */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1.2 }}
          className="max-w-3xl text-white text-[16px] md:text-[22px] leading-relaxed mb-6 md:mb-10 font-serif font-light px-4 italic drop-shadow-md z-30 relative"
        >
          I&apos;m Ritik, a Full Stack Developer creating modern web and mobile <br className="hidden md:block" /> experiences where engineering meets thoughtful design.
        </motion.p>

        {/* Postcard Illustration */}
        <motion.div
           initial={{ opacity: 0, y: 120, rotate: -10 }}
           animate={{ opacity: 1, y: 0, rotate: -2 }}
           whileHover={{ scale: 1.05, rotate: 0 }}
           transition={{ delay: 1.6, duration: 2, type: "spring" }}
           className="relative cursor-pointer group z-30"
        >
           <div className="w-[300px] h-[190px] sm:w-[340px] sm:h-[220px] bg-white rounded-xl shadow-2xl p-7 flex flex-col justify-between border border-slate-100 dark:bg-slate-900/50 dark:border-slate-800">
              <div className="flex justify-between items-start">
                 <div className="w-14 h-14 md:w-18 md:h-18 border-2 border-slate-50 bg-slate-50/50 rounded-2xl flex items-center justify-center text-4xl md:text-6xl shadow-inner dark:bg-slate-800/50 dark:border-slate-700">
                    🧑‍💻
                 </div>
                 <div className="text-right">
                    <div className="text-[12px] md:text-[14px] font-bold text-blue-600 tracking-tighter bg-blue-50 px-5 py-2 rounded-lg dark:bg-blue-900/30 dark:text-blue-400">
                       STAMP
                    </div>
                    <div className="text-[10px] text-slate-300 font-mono mt-3 font-bold tracking-widest uppercase dark:text-slate-500">2026 / VOL.1</div>
                 </div>
              </div>
              <div className="space-y-4 md:space-y-5 font-serif">
                 <div className="flex gap-3">
                    <div className="h-2 md:h-2.5 w-1/3 bg-blue-50 rounded-full dark:bg-blue-900/20" />
                    <div className="h-2 md:h-2.5 w-2/3 bg-slate-100/50 rounded-full dark:bg-slate-800/30" />
                 </div>
                 <div className="h-2 md:h-2.5 w-full bg-slate-50 rounded-full dark:bg-slate-800/30" />
                 <div className="h-2 md:h-2.5 w-11/12 bg-slate-50 rounded-full dark:bg-slate-800/30" />
              </div>
              <div className="flex justify-between items-end border-t border-slate-50 pt-5 dark:border-slate-800">
                 <span className="text-[11px] md:text-[14px] font-bold text-slate-400 uppercase tracking-widest dark:text-slate-500">Ritik Singh</span>
                 <div className="w-8 h-8 rounded-full bg-blue-50 animate-pulse border border-blue-100 dark:bg-blue-900/30 dark:border-blue-800" />
              </div>
           </div>
        </motion.div>
      </motion.div>

      {/* Cinematic Fade Out - More subtle to protect text readability */}
      <div className="absolute bottom-0 left-0 right-0 h-[15vh] bg-gradient-to-t from-background via-background/40 to-transparent z-20 pointer-events-none" />
    </section>
  );
}
