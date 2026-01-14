'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Beaker, Wind, Zap } from 'lucide-react';

const steps = [
  {
    title: "Sourcing",
    desc: "Single-origin green beans selected for their unique terroir.",
    icon: <Beaker size={20} />,
  },
  {
    title: "The Roast",
    desc: "Small batches roasted to the 'first crack' for peak acidity.",
    icon: <Flame size={20} />,
  },
  {
    title: "Cooling",
    desc: "Precision air-cooling to lock in volatile aromatic compounds.",
    icon: <Wind size={20} />,
  },
  {
    title: "Cupping",
    desc: "Rigorous quality testing to ensure every bag meets the dusk standard.",
    icon: <Zap size={20} />,
  }
];

export const Roastery = () => {
  return (
    <section className="bg-foreground py-32 px-6 md:px-12 text-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.5em] text-light-bronze mb-6">/ Inside the Drum</h4>
            <h2 className="text-5xl md:text-8xl font-thorin italic leading-none">The Roastery</h2>
            <p className="mt-8 text-xl opacity-60 font-light leading-relaxed">
              Our Loring Smart Roaster uses convection heating to highlight the delicate 
              sugars of the bean without the bitter smoke of traditional drum roasters.
            </p>
          </div>
          <div className="text-right">
            <span className="text-8xl font-thorin opacity-10">2026</span>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-background/10 border border-background/10">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-12 bg-foreground hover:bg-[#352b26] transition-colors group"
            >
              <div className="text-light-bronze mb-8 group-hover:scale-110 transition-transform duration-500">
                {step.icon}
              </div>
              <h3 className="font-thorin text-2xl mb-4 italic">{step.title}</h3>
              <p className="font-mono text-[10px] uppercase tracking-wider leading-loose opacity-50">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Technical Detail Image Area */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2 aspect-video bg-background/5 border border-background/10 rounded-sm flex items-center justify-center relative overflow-hidden group">
                 {/* Empty Image Tag as requested */}
                 <img src="" alt="Roaster Machine" className="object-cover w-full h-full" />
                 <div className="absolute inset-0 flex items-center justify-center font-mono text-[10px] uppercase tracking-[1em] opacity-20 group-hover:opacity-40 transition-opacity">
                    Machine.Model_L15
                 </div>
            </div>
            <div className="space-y-6">
                <div className="p-6 border border-light-bronze/20 rounded-sm">
                    <p className="font-mono text-[9px] uppercase tracking-widest text-light-bronze mb-2">Current Batch</p>
                    <p className="text-2xl font-thorin italic text-background">Ethiopia Sidamo</p>
                </div>
                <div className="p-6 border border-light-bronze/20 rounded-sm">
                    <p className="font-mono text-[9px] uppercase tracking-widest text-light-bronze mb-2">Roast Profile</p>
                    <p className="text-2xl font-thorin italic text-background">Light-Medium</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};