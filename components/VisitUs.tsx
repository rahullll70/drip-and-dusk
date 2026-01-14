'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

export const VisitUs = () => {
  return (
    <section className='bg-background py-32 px-6 md:px-12'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
        {/* Contact Info Side */}
        <div className='order-2 lg:order-1'>
          <h4 className='font-mono text-[10px] uppercase tracking-[0.5em] text-light-bronze mb-4'>
            / Location
          </h4>
          <h2 className='text-5xl md:text-7xl font-thorin text-foreground leading-none mb-12'>
            Visit <br /> The Roastery
          </h2>

          <div className='space-y-10'>
            <div className='flex gap-6'>
              <MapPin className='text-light-bronze shrink-0' size={24} />
              <div>
                <p className='font-mono text-[10px] uppercase tracking-widest text-foreground/40 mb-2'>
                  Address
                </p>
                <p className='text-xl font-sans text-foreground leading-relaxed'>
                  Ring Rd Hyatt Regency 2 Hotel, <br /> Bhikaji Cama Place, New Delhi 110066 India
                </p>
              </div>
            </div>

            <div className='flex gap-6'>
              <Clock className='text-light-bronze shrink-0' size={24} />
              <div>
                <p className='font-mono text-[10px] uppercase tracking-widest text-foreground/40 mb-2'>
                  Hours
                </p>
                <p className='text-xl font-sans text-foreground'>
                  Mon — Fri: 07:00 - 18:00 <br />
                  Sat — Sun: 08:00 - 19:00
                </p>
              </div>
            </div>

            <div className='pt-8'>
              <button className='flex items-center cursor-pointer gap-4 bg-foreground text-background px-8 py-5 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-light-bronze transition-all duration-500 group'>
                <Navigation
                  size={16}
                  className='group-hover:translate-x-1 transition-transform'
                />
                Get Directions
              </button>
            </div>
          </div>
        </div>

        {/* Illustration Map Side */}
        <div className='order-1 lg:order-2 relative bg-foreground/5 p-4 rounded-full aspect-square flex items-center justify-center overflow-hidden'>
          {/* Background Decorative Rings */}
          <div className='absolute inset-0 border border-light-bronze/10 rounded-full scale-90' />
          <div className='absolute inset-0 border border-light-bronze/5 rounded-full scale-75' />

          {/* Animated Map SVG Illustration */}
          <motion.svg
            viewBox='0 0 400 400'
            className='w-full h-full relative z-10 p-12'
            initial={{ opacity: 0, rotate: -5 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1.5 }}
          >
            {/* Street Grid Illustration */}
            <path
              d='M50 100 L350 100 M50 200 L350 200 M50 300 L350 300'
              stroke='#2C2420'
              strokeWidth='1'
              strokeOpacity='0.1'
            />
            <path
              d='M100 50 L100 350 M200 50 L200 350 M300 50 L300 350'
              stroke='#2C2420'
              strokeWidth='1'
              strokeOpacity='0.1'
            />

            {/* Artistic Neighborhood Shape */}
            <circle
              cx='200'
              cy='200'
              r='140'
              fill='none'
              stroke='#D4AF37'
              strokeWidth='0.5'
              strokeDasharray='4 4'
            />

            {/* The Landmark Pin */}
            <motion.g
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{
                repeat: Infinity,
                duration: 2,
                repeatType: 'reverse',
              }}
            >
              <circle cx='200' cy='180' r='12' fill='#2C2420' />
              <circle cx='200' cy='180' r='4' fill='#D4AF37' />
              {/* Pulse effect */}
              <motion.circle
                cx='200'
                cy='180'
                r='20'
                stroke='#D4AF37'
                strokeWidth='1'
                fill='none'
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </motion.g>

            {/* Text Labels */}
            <text
              x='220'
              y='185'
              className='text-[12px] font-mono uppercase tracking-widest fill-foreground font-bold'
            >
              The Roastery
            </text>
            <text
              x='80'
              y='140'
              className='text-[8px] font-mono uppercase tracking-[0.4em] fill-foreground/30 italic'
            >
              Art District
            </text>
            <text
              x='260'
              y='280'
              className='text-[8px] font-mono uppercase tracking-[0.4em] fill-foreground/30 italic'
            >
              Harbor St.
            </text>
          </motion.svg>
        </div>
      </div>
    </section>
  );
};
