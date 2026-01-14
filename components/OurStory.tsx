'use client';

import React from 'react';
import { motion } from 'framer-motion';

const OurStory = () => {
  return (
    <section className="bg-background py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Animated Header with Thorin Font */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-light-bronze block mb-4">
            OUR
          </span>
          <h2 className="text-6xl md:text-7xl font-thorin text-foreground italic">
            Story
          </h2>
          <div className='w-24 h-px bg-light-bronze mx-auto mt-4 opacity-30' />
        </motion.div>

        {/* Narrative Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="space-y-12 text-foreground font-sans tracking-tight"
        >
          <p className="text-xl md:text-2xl leading-relaxed font-medium">
            At Drip & Dusk, we believe coffee is more than a drink — <br />
            it's a moment. A pause. A soft breath between the rush <br />
            of the day and the calm of the evening. <br />
            Our café was created for people who love slow <br />
            conversations, warm spaces, and brews that feel like <br />
            golden hour in a cup.
          </p>

          <p className="text-lg md:text-xl leading-relaxed opacity-80 max-w-2xl mx-auto">
            From handcrafted drips to rich espresso blends, every <br />
            cup is made with care, curiosity, and a touch of <br />
            creativity. We source quality beans, brew them with <br />
            intention, and serve them with the simple goal of <br />
            making your day a little warmer.
          </p>

          <p className="text-lg md:text-xl leading-relaxed opacity-80 max-w-2xl mx-auto">
            Whether you're here to work, unwind, meet a friend, or <br />
            escape the noise, Drip & Dusk is your corner of comfort <br />
            — where good coffee meets good vibes.
          </p>

          {/* Final Call with small icon */}
          <div className="pt-8">
            <p className="text-light-bronze font-medium italic text-lg">
              Step in, slow down, and enjoy the moment. ☕
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default OurStory;