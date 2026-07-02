'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck } from 'lucide-react';
import teethImage from '../assets/teeth.webp';

gsap.registerPlugin(ScrollTrigger);

const servicesList = [
  'Orthodontic Braces and Aligners',
  'Root Canal Treatment (RCT)',
  'Wisdom Teeth Removal',
  'Dental Implants',
  'Scaling and Polishing',
  'Dental Fillings',
  'Bridges, Crowns, and Veneers',
  'Dentures',
  'Kids Dentistry',
  'Smile Makeover and Teeth Whitening',
  'Extractions',
  'Preventive Dentistry'
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.service-left', {
      scale: 0.95,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
      }
    });

    gsap.from('.service-item', {
      x: 30,
      opacity: 0,
      stagger: 0.05,
      duration: 0.6,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.services-list-container',
        start: 'top 85%',
      }
    });
  }, { scope: containerRef });

  return (
    <section id="services" ref={containerRef} className="px-6 md:px-16 py-8 md:py-16 max-w-[1400px] mx-auto mt-8 border-t border-gray-100">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-8">
        
        {/* Left Column */}
        <div className="service-left lg:col-span-5 bg-[#f4f7f8] rounded-[2.5rem] p-10 md:p-14 flex flex-col items-center text-center h-full min-h-[450px] relative overflow-hidden">
           <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-display font-medium text-gray-900 leading-[1.2] tracking-tight mb-10 z-10">
             Always <span className="text-[#48b5c4]">Smile</span> on Every Occasion
           </h2>
           
           <div className="relative w-full flex-1 min-h-[250px] rounded-[2rem] overflow-hidden shadow-sm border-[4px] border-white">
             <Image
               src={teethImage}
               alt="Always Smile"
               fill
               sizes="(min-width: 1024px) 35vw, 100vw"
               className="absolute inset-0 h-full w-full object-cover object-top"
             />
           </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7 flex flex-col justify-center lg:py-6 lg:pl-10">
          <p className="text-gray-600 text-[15px] md:text-base leading-relaxed mb-8 font-light">
            We offer a range of procedures designed to enhance the appearance of your smile, boosting your confidence. Below is a list of our services.
          </p>

          <h3 className="text-xl md:text-2xl font-display font-medium text-gray-900 mb-8">What We Offer</h3>
          
          <div className="services-list-container grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {servicesList.map((service, index) => (
              <div key={index} className="service-item flex items-center gap-3">
                <ShieldCheck size={20} strokeWidth={1.5} className="text-gray-900 shrink-0" />
                <span className="text-sm font-medium text-gray-800 leading-snug">{service}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
