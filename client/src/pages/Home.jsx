import React from 'react';
import Hero from '../components/sections/Hero';
import ContactBar from '../components/sections/ContactBar';
import Services from '../components/sections/Services';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import CTA from '../components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <ContactBar />
      <Services />
      <WhyChooseUs />
      <CTA />
    </>
  );
}