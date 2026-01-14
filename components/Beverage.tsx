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
        <div className='text-center mb-16 space-y-2'>
          <h4 className='text-[10px] uppercase tracking-[0.5em] text-foreground/40 font-mono'>
            FEATURED
          </h4>
          <h2 className='text-5xl md:text-6xl font-thorin text-foreground'>
            Products
          </h2>
          <div className='w-24 h-px bg-light-bronze mx-auto mt-4 opacity-30' />
        </div>

        {/* The Grid - using 1px gap on a light-bronze background to create thin borders */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-light-bronze/30 border border-light-bronze/30'>
          {products.map((item) => (
            <div
              key={item.id}
              className='bg-background p-6 flex flex-col items-center group hover:bg-beige/30 transition-colors duration-500'
            >
              {/* Heart Icon Top Right */}
              <div className='w-full flex justify-end'>
                <Heart
                  size={18}
                  strokeWidth={1}
                  className='text-foreground/40 cursor-pointer hover:fill-light-bronze hover:text-light-bronze transition-all'
                />
              </div>

              {/* Image Placeholder - Centered */}
              <div className='w-40 h-48 my-4 flex items-center justify-center relative'>
                {/* <img src="" alt={item.name} className="object-contain w-full h-full" /> */}
                <div className='absolute inset-0 border border-dashed border-light-bronze/10 rounded-lg flex items-center justify-center text-[10px] uppercase tracking-widest text-foreground/20 font-mono'>
                  Img Area
                </div>
              </div>

              {/* Product Info */}
              <div className='w-full text-center space-y-4'>
                <h3 className='font-sans text-sm tracking-tight text-foreground font-medium uppercase'>
                  {item.name}
                </h3>

                {/* Price and Order Button Bar */}
                <div className='flex items-center justify-between border border-foreground/10 rounded-sm overflow-hidden mt-6'>
                  <span className='flex-1 text-[12px] font-mono text-foreground/60 px-3 py-2 text-left bg-foreground/5'>
                    {item.price}
                  </span>
                  <button className='flex-1 cursor-pointer bg-foreground text-background text-[10px] font-bold uppercase tracking-wider py-2 px-4 hover:bg-light-bronze transition-colors'>
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
