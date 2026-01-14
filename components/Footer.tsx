'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = [
    {
      title: "PRIVACY",
      links: ["Terms of use", "Privacy policy", "Cookies"]
    },
    {
      title: "SERVICE",
      links: ["Shop", "Order ahead", "Menu"]
    },
    {
      title: "ABOUT US",
      links: ["Find a location", "About us", "Our story"]
    },
    {
      title: "INFORMATION",
      links: ["Plans & pricing", "Sell your products", "Jobs"]
    }
  ];

  return (
    <footer className="bg-[#2C2420] text-[#fefae0] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-thorin italic tracking-tighter mb-4">
              Drip & Dusk
            </h2>
          </div>

          {/* Links Columns */}
          {footerLinks.map((section, idx) => (
            <div key={idx} className="space-y-6">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] opacity-90">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a 
                      href="#" 
                      className="text-[13px] opacity-60 hover:opacity-100 transition-opacity duration-300 font-sans tracking-wide"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar (Optional if you want to add copyright) */}
        <div className="mt-20 pt-8 border-t border-[#fefae0]/10 flex flex-col md:flex-row justify-between items-center gap-4 opacity-40 text-[10px] uppercase tracking-widest font-mono">
          <p>© 2026 DRIP & DUSK ROASTERY</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-light-bronze transition-colors">Instagram</a>
            <a href="#" className="hover:text-light-bronze transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;