'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../../components/Navbar';
import DetailedServices from '../../components/DetailedServices';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage() {
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
    <div ref={containerRef} className="min-h-screen bg-white">
      <div className="relative rounded-b-[3rem] bg-gray-900 pb-12">
        <Navbar />
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 pt-32 pb-20 text-center md:px-16">
          <h1 className="mb-6 font-display text-4xl font-medium text-white md:text-5xl lg:text-6xl">
            Our <span className="text-[#48b5c4]">Services</span>
          </h1>
          <p className="mx-auto max-w-2xl text-[15px] font-light leading-relaxed text-gray-300">
            We offer comprehensive dental care tailored to your needs. Discover our wide range of professional
            treatments designed to give you a healthy, confident smile.
          </p>
        </div>
      </div>
      <div className="bg-white">
        <DetailedServices />
      </div>
    </div>
  );
}
