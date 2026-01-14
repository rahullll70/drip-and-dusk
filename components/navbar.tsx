'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, ShoppingBag, Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-700 px-6 md:px-12 
      ${
        isScrolled
          ? 'bg-[#fefae0]/90 backdrop-blur-md py-4 border-b border-[#d4a373]/20'
          : 'bg-transparent py-10'
      }`}
    >
      <div className='max-w-[1400px] mx-auto flex justify-between items-center'>
        {/* LOGO - Using Bronze for warmth */}
        <div className='flex items-center gap-3 cursor-pointer group'>
          <span className='text-[#2C2420] font-DMSans text-2xl tracking-tighter font-semibold'>
            Drip. & Dusk.
          </span>
        </div>

        {/* NAVIGATION - Using Tea Green for hover states */}
        <div className='hidden md:flex items-center gap-12'>
          {['Collections', 'Roastery', 'About', 'Journal'].map((item) => (
            <a
              key={item}
              href='#'
              className='relative text-[10px] uppercase tracking-[0.4em] text-[#2C2420]/70 hover:text-[#d4a373] transition-colors group'
            >
              {item}
              <span className='absolute -bottom-1 left-0 w-0 h-px bg-[#ccd5ae] transition-all duration-300 group-hover:w-full' />
            </a>
          ))}
        </div>

        {/* ACTIONS - Using Papaya Whip for the cart badge */}
        <div className='flex items-center gap-7 text-[#2C2420]'>
          <Search
            size={19}
            strokeWidth={1.5}
            className='cursor-pointer hover:text-[#d4a373]'
          />
          <div className='relative cursor-pointer group'>
            <ShoppingBag size={19} strokeWidth={1.5} />
            <span className='absolute -top-1.5 -right-2.5 bg-[#faedcd] border border-[#d4a373]/30 text-[#2C2420] text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center'>
              3
            </span>
          </div>
          <Menu size={22} className='md:hidden cursor-pointer' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
