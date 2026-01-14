'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Menu',
      links: ['Seasonal Brews', 'Signature Drip', 'Bakery', 'Merchandise'],
    },
    {
      title: 'Company',
      links: ['Our Roastery', 'Journal', 'Sustainability', 'Careers'],
    },
    {
      title: 'Support',
      links: ['Order Tracking', 'Shipping', 'Wholesale', 'Contact'],
    },
  ];

  return (
    <footer className='bg-[#1A1614] text-[#EDE8D0] py-24 px-6 md:px-16 border-t border-[#EDE8D0]/5'>
      <div className='max-w-screen-2xl mx-auto'>
        {/* Top Section: Newsletter & Brand Message */}
        <div className='flex flex-col lg:flex-row justify-between items-start gap-16 mb-32'>
          <div className='max-w-md'>
            <h3 className='text-2xl font-light mb-6 tracking-tight'>
              Join the dusk. Get brewing tips and exclusive drops in your inbox.
            </h3>
            <div className='flex w-full border-b border-[#EDE8D0]/30 py-2 focus-within:border-[#EDE8D0] transition-colors'>
              <input
                type='email'
                placeholder='email@address.com'
                className='bg-transparent outline-none w-full text-sm placeholder:opacity-30'
              />
              <button className='text-[11px] uppercase tracking-[0.2em] font-bold hover:opacity-60 transition-opacity'>
                Subscribe
              </button>
            </div>
          </div>

          <div className='text-right hidden lg:block'>
            <p className='text-[11px] uppercase tracking-[0.3em] opacity-40 mb-2'>
              Location
            </p>
            <p className='text-sm font-medium italic'>
              Majnu ka Tila, Delhi, India
            </p>
          </div>
        </div>

        {/* Middle Section: Big Brand & Links */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-end'>
          {/* Main Logo Text */}
          <div className='lg:col-span-6'>
            <h2 className='text-[12vw] lg:text-[100px] italic leading-[0.8] tracking-wider opacity-10 select-none font-blosta'>
              Drip & Dusk.
            </h2>
          </div>

          {/* Links */}
          <div className='lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8'>
            {footerLinks.map((section, idx) => (
              <div key={idx} className='space-y-6'>
                <h4 className='text-[10px] font-bold uppercase tracking-[0.25em] text-[#C4A484]'>
                  {section.title}
                </h4>
                <ul className='space-y-4'>
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href='#'
                        className='text-[13px] hover:italic hover:translate-x-1 inline-block transition-all duration-300 opacity-80 hover:opacity-100'
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='mt-32 pt-8 border-t border-[#EDE8D0]/10 flex flex-col md:flex-row justify-between items-center gap-6'>
          <div className='flex gap-10 text-[10px] uppercase tracking-widest opacity-40'>
            <p>© 2026 D&D Roastery</p>
            <a href='#' className='hover:opacity-100 transition-opacity'>
              Privacy
            </a>
            <a href='#' className='hover:opacity-100 transition-opacity'>
              Terms
            </a>
          </div>

          <div className='flex gap-6'>
            {['Instagram', 'Twitter', 'Vimeo'].map((social) => (
              <a
                key={social}
                href='#'
                className='text-[11px] uppercase tracking-widest border border-[#EDE8D0]/20 px-4 py-2 rounded-full hover:bg-[#EDE8D0] hover:text-[#1A1614] transition-all duration-500'
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
