'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-700 rounded-full blur-[2px] animate-pulse" />
          <span className="text-white font-serif text-2xl tracking-tighter uppercase italic">Drip & Dusk</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {['Home', 'Coffee', 'About', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 text-white">
          <Search size={20} className="cursor-pointer hover:text-orange-700 transition-colors" />
          <div className="relative cursor-pointer group">
             <ShoppingBag size={20} />
             <span className="absolute -top-1 -right-1 bg-orange-700 text-[8px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </div>
          <Menu className="md:hidden cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background Image/Overlay */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0 opacity-40"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#0a0a0a] z-10" />
        <img 
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2070" 
          alt="Coffee Background" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-orange-700 mb-6 block">
            Est. 2026 — Small Batch Roastery
          </span>
          <h1 className="text-6xl md:text-[120px] font-medium text-white tracking-tighter leading-[0.85] mb-8">
            WAKE WITH <span className="italic font-serif text-zinc-400">DRIP</span> <br />
            WAIT FOR <span className="italic font-serif text-zinc-400">DUSK</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-orange-700 hover:text-white transition-all duration-500"
            >
              Shop the Collection
            </motion.button>
            <button className="text-white text-xs font-bold uppercase tracking-widest border-b border-white/20 pb-2 hover:border-orange-700 transition-colors">
              Our Process
            </button>
          </div>
        </motion.div>
      </div>

      {/* Aesthetic Accents */}
      <div className="absolute bottom-12 left-12 hidden md:block z-20">
        <div className="flex items-center gap-4">
          <div className="w-12 h-px bg-orange-700/50" />
          <p className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
            Sourced ethically from <br /> the Ethiopian Highlands
          </p>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 z-20">
         <motion.div 
           animate={{ y: [0, 10, 0] }}
           transition={{ duration: 2, repeat: Infinity }}
           className="w-px h-24 bg-gradient-to-b from-white to-transparent opacity-20"
         />
      </div>
    </section>
  );
};

const DripAndDusk = () => {
  return (
    <main className="bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      {/* Other sections like your GhostScroll and WhyChooseUs would go here */}
    </main>
  );
};

export default DripAndDusk;