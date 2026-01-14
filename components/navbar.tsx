'use client';

import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, Heart } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Contrast logic for visibility
  const textColor = isScrolled ? 'text-[#2C2420]' : 'text-[#fefae0]';
  const navBg = isScrolled ? 'bg-[#fefae0]/90 backdrop-blur-md border-b border-[#d4a373]/20' : 'bg-transparent';
  const logoColor = isScrolled ? 'text-[#2C2420]' : 'text-[#fefae0]';

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 px-6 md:px-12 ${navBg} ${isScrolled ? 'py-4' : 'py-10'}`}
    >
      <div className='max-w-[1400px] mx-auto flex justify-between items-center'>
        
        {/* LOGO */}
        <div className='grid items-center gap-3 cursor-pointer group'>
          <span className={`${logoColor} font-blosta text-2xl tracking-widest font-semibold transition-colors duration-500`}>
            Drip. & Dusk.
          </span>
          <div className='w-24 h-px bg-light-bronze mx-auto opacity-30' />
        </div>

        {/* NAVIGATION */}
        <div className='hidden md:flex items-center gap-12'>
          {['Collections', 'Roastery', 'About', 'Journal'].map((item) => (
            <a
              key={item}
              href='#'
              className={`relative text-[10px] uppercase tracking-[0.4em] transition-colors duration-500 group ${textColor} hover:text-[#d4a373]`}
            >
              {item}
              <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-[#ccd5ae]' : 'bg-[#fefae0]'}`} />
            </a>
          ))}
        </div>

        {/* ACTIONS */}
        <div className={`flex items-center gap-7 transition-colors duration-500 ${textColor}`}>
          <Search
            size={19}
            strokeWidth={1.5}
            className='cursor-pointer hover:text-[#d4a373] transition-colors'
          />
          
          {/* NEW HEART ICON */}
          <Heart 
            size={19} 
            strokeWidth={1.5} 
            className='cursor-pointer hover:text-[#d4a373] transition-colors hover:fill-[#d4a373]/20' 
          />

          <div className='relative cursor-pointer group'>
            <ShoppingBag size={19} strokeWidth={1.5} className='hover:text-[#d4a373] transition-colors' />
            <span className={`absolute -top-1.5 -right-2.5 border text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center transition-all duration-500
              ${isScrolled 
                ? 'bg-[#faedcd] border-[#d4a373]/30 text-[#2C2420]' 
                : 'bg-[#2C2420] border-[#fefae0]/30 text-[#fefae0]'}`}
            >
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