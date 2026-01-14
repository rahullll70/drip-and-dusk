'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Droplets, 
  Timer, 
  Thermometer, 
  Gauge, 
  Waves, 
  Wind, 
  Coffee 
} from 'lucide-react';

const guides = [
  {
    method: "V60 Pour Over",
    ratio: "1:15",
    time: "3:00 min",
    temp: "92°C",
    grind: "Medium-Fine",
    icon: <Waves size={32} />,
    description: "Produces a clean, tea-like body that highlights subtle floral and citrus notes."
  },
  {
    method: "French Press",
    ratio: "1:12",
    time: "4:00 min",
    temp: "94°C",
    grind: "Coarse",
    icon: <Coffee size={32} />,
    description: "A heavy-bodied, textured cup with rich chocolatey and earthy undertones."
  },
  {
    method: "AeroPress",
    ratio: "1:13",
    time: "2:00 min",
    temp: "85°C",
    grind: "Fine",
    icon: <Wind size={32} />,
    description: "Versatile and concentrated. Perfect for a bright, espresso-style finish."
  }
];

export const BrewingGuide = () => {
  return (
    <section className="bg-background py-32 px-6 md:px-12 border-t border-light-bronze/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-20 text-center md:text-left">
          <h4 className="font-mono text-[10px] uppercase tracking-[0.5em] text-light-bronze mb-4 italic">/ The Craft</h4>
          <h2 className="text-5xl md:text-7xl font-thorin text-foreground leading-none">Brewing <br /> Guide</h2>
        </div>

        {/* Dark Guide Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {guides.map((guide, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-foreground text-background p-10 rounded-sm flex flex-col justify-between group hover:bg-[#3d322c] transition-colors duration-500"
            >
              <div>
                <div className="text-light-bronze mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                  {guide.icon}
                </div>
                
                <h3 className="text-3xl font-thorin italic mb-6">
                  {guide.method}
                </h3>
                
                <p className="font-sans text-sm leading-relaxed opacity-60 mb-10 uppercase tracking-tight">
                  {guide.description}
                </p>

                {/* Technical Icons Grid */}
                <div className="grid grid-cols-2 gap-6 pt-8 border-t border-background/10">
                  <div className="flex items-center gap-3">
                    <Droplets size={16} className="text-light-bronze" />
                    <div className="flex flex-col">
                      <span className="text-[8px] opacity-40 uppercase tracking-tighter">Ratio</span>
                      <span className="font-mono text-[10px] tracking-widest">{guide.ratio}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Timer size={16} className="text-light-bronze" />
                    <div className="flex flex-col">
                      <span className="text-[8px] opacity-40 uppercase tracking-tighter">Time</span>
                      <span className="font-mono text-[10px] tracking-widest">{guide.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Thermometer size={16} className="text-light-bronze" />
                    <div className="flex flex-col">
                      <span className="text-[8px] opacity-40 uppercase tracking-tighter">Temp</span>
                      <span className="font-mono text-[10px] tracking-widest">{guide.temp}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Gauge size={16} className="text-light-bronze" />
                    <div className="flex flex-col">
                      <span className="text-[8px] opacity-40 uppercase tracking-tighter">Grind</span>
                      <span className="font-mono text-[10px] tracking-widest uppercase">{guide.grind}</span>
                    </div>
                  </div>
                </div>
              </div>

              <button className="mt-12 w-full py-4 cursor-pointer border border-light-bronze/30 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-light-bronze hover:text-foreground transition-all duration-300">
                Explore Method
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};