import React from 'react';
import Hero from '@/components/Hero';
import Schedule from '@/components/Schedule';
import About from '@/components/About';
import Milestones from '@/components/Milestones';
import Marketplace from '@/components/Marketplace';
import Social from '@/components/Social';
import Contact from '@/components/Contact';
import FloatingSakura from '@/components/FloatingSakura';
import Version from '@/components/Version';

const Index = () => {
  return (
    <div className="min-h-screen bg-violet-light relative">
      <FloatingSakura />
      <Hero />
      <Schedule />
      <About />
      <Milestones />
      <Marketplace />
      <Social />
      <Contact />
      <Version />
    </div>
  );
};

export default Index;