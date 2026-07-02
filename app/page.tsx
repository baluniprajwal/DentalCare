'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import Process from '../components/Process';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Features from '../components/Features';
import FeatureTreatment from '../components/FeatureTreatment';
import AdvancedCare from '../components/AdvancedCare';
import ScheduleConsultation from '../components/ScheduleConsultation';
import ClinicLocation from '../components/ClinicLocation';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray<HTMLElement>('section');
    sections.forEach((sec) => {
      gsap.fromTo(
        sec,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sec,
            start: 'top 85%',
          },
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="home-page">
      <Hero />
      <Process />
      <AboutUs />
      <Services />
      <Features />
      <FeatureTreatment />
      <AdvancedCare />
      <ScheduleConsultation />
      <ClinicLocation />
    </div>
  );
}
