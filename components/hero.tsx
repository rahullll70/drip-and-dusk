'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 1. VIDEO LAYER */}
      <div className="absolute inset-0 z-0">
        <video 
          src="/videos/hero_video.mp4" 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay to make text pop */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* 2. TEXT CONTENT LAYER */}
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-4"
        >
          <span className="font-mono text-[10px] md:text-[12px] uppercase tracking-[0.6em] text-cornsilk opacity-80">
            Est. 2026 — Small Batch Roastery
          </span>
          
          <h1 className="text-7xl md:text-[160px] font-thorin text-cornsilk leading-none tracking-tighter">
            Drip <span className="italic opacity-70">&</span> Dusk
          </h1>

          <p className="font-sans text-sm md:text-lg text-cornsilk/80 max-w-md mx-auto tracking-wide font-light">
            A soft breath between the rush of the day and the calm of the evening.
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-32 flex flex-col items-center gap-2"
        >
          <div className="w-px h-12 bg-cornsilk/30" />
          <span className="text-[9px] uppercase tracking-[0.3em] text-cornsilk/50">Scroll</span>
        </motion.div>
      </div>

      {/* 3. BOTTOM MARQUEE (The "Drip & Dusk" repeating bar from your image) */}
      <div className="absolute bottom-0 w-full bg-foreground py-4 border-t border-cornsilk/10 z-20 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="font-blosta  text-cornsilk text-xl mx-12 opacity-80 tracking-widest">
              Drip & Dusk
            </span>
          ))}
        </div>
      </div>

      {/* Tailwind Animation Style for Marquee */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;