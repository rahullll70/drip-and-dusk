'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const products = [
  { id: 1, name: 'Nitro cold brew', price: '₹.240' },
  { id: 2, name: 'Ice latte', price: '₹.200' },
  { id: 3, name: 'Esspresso', price: '₹.140' },
  { id: 4, name: 'Dalgona Coffee', price: '₹.220' },
  { id: 5, name: 'Cold brew', price: '₹.210' },
  { id: 6, name: 'Cappuccino', price: '₹.190' },
  { id: 7, name: 'Americano', price: '₹.170' },
  { id: 8, name: 'Affogato', price: '₹.230' },
  { id: 9, name: 'Espresso con Panna', price: '₹.180' },
  { id: 10, name: 'Caffè mocha', price: '₹.220' },
  { id: 11, name: 'Hot chocolate', price: '₹.210' },
  { id: 12, name: 'Latte macchiato', price: '₹.200' },
];

const Beverage = () => {
  return (
    <section className='bg-background py-20 mt-20 px-4 md:px-12'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header based on your image */}
        <div className='text-center mb-16 space-y-2 '>
          <h4 className='text-[10px] uppercase tracking-[0.5em] text-foreground/40 font-mono'>
            FEATURED
          </h4>
          <h2 className='text-5xl md:text-6xl font-thorin text-foreground'>
            Products
          </h2>
          <div className='w-24 h-px bg-light-bronze mx-auto mt-4 opacity-30' />
          
        </div>
        

        {/* The Grid -  */}
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-light-bronze/30 border border-light-bronze/30'>
          {products.map((item) => (
            <div
              key={item.id}
              className='bg-background p-8 flex flex-col items-center group hover:bg-beige/30 transition-colors duration-500 min-h-[480px]'
            >
              {/* 1. Heart Icon */}
              <div className='w-full flex justify-end mb-4'>
                <Heart
                  size={18}
                  strokeWidth={1}
                  className='text-foreground/40 cursor-pointer hover:fill-light-bronze hover:text-light-bronze transition-all'
                />
              </div>

              {/* 2. Constrained Image Container - This fixes the "Too Big" issue */}
              <div className='flex-grow flex items-center justify-center w-full'>
                <div className='relative h-32 w-32 md:h-40 md:w-40 flex items-center justify-center'>
                  <img
                    src={`/images/beverage_${item.id}.png`}
                    alt={item.name}
                    loading='lazy'
                    className='max-h-full max-w-full object-contain transform group-hover:scale-110 transition-transform duration-500'
                  />
                </div>
              </div>

              {/* 3. Product Info & Action Bar */}
              <div className='w-full mt-8 flex flex-col items-center'>
                {/* Product Name - Direct positioning under image */}
                <h3 className='font-sans text-[13px] tracking-[0.2em] text-foreground font-semibold uppercase text-center mb-10'>
                  {item.name}
                </h3>

                {/* Action Bar (Price + Button) - Perfect alignment at bottom */}
                <div className='w-full flex items-center border border-foreground/10 rounded-sm overflow-hidden'>
                  <span className='w-[35%] text-[11px] font-mono text-foreground/60 px-2 py-3 bg-foreground/5 border-r border-foreground/10 text-center'>
                    {item.price}
                  </span>
                  <button className='w-[65%] cursor-pointer bg-[#1a1a1a] text-background text-[10px] font-bold uppercase tracking-widest py-3 px-4 hover:bg-light-bronze transition-colors'>
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beverage;
