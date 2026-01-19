import React from 'react';

import Beverage from '@/components/Beverage';
import OurStory from '@/components/OurStory';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { BrewingGuide } from '@/components/BrewingGuide';
import { VisitUs } from '@/components/VisitUs';
import Navbar from '@/components/navbar';

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Beverage />
      <OurStory />
      <BrewingGuide />
      <VisitUs />
      <Footer />
    </div>
  );
};

export default page;
