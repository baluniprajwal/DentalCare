import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import teeth1Image from '../../assets/teeth1.webp';
import teeth2Image from '../../assets/teeth2.webp';
import teeth3Image from '../../assets/teeth3.webp';
import freeDentalCheckUpImage from '../../assets/freeDentalCheckUp.webp';
import hoardingImage from '../../assets/hoarding.webp';
import interiorImage from '../../assets/interior.webp';
import clinic2Image from '../../assets/clinic2.webp';
import implant1Image from '../../assets/implant1.webp';
import implant2Image from '../../assets/inmplant2.webp';

export const metadata: Metadata = {
  title: 'Dental Clinic Gallery in Wakad, Pune',
  description:
    'View the Prateek Dental Care gallery in Wakad, Pune, including clinic interiors, treatment spaces, dental implant cases, and patient care highlights.',
};

const galleryImages = [
  {
    url: teeth2Image,
    title: 'Scaling Before & After',
  },
  {
    url: teeth1Image,
    title: 'Tooth Restoration Before & After',
  },
  {
    url: teeth3Image,
    title: 'Crowding Correction Before & After',
  },
  {
    url: freeDentalCheckUpImage,
    title: 'Free Dental Checkup Camp',
  },
  {
    url: hoardingImage,
    title: 'Clinic Hoarding',
  },
  {
    url: clinic2Image,
    title: 'Patient Waiting Lounge',
  },
  {
    url: interiorImage,
    title: 'Treatment Room Interior',
  },
  {
    url: implant1Image,
    title: 'Dental Implant X-Ray',
  },
  {
    url: implant2Image,
    title: 'Implant Placement X-Ray',
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative rounded-b-[3rem] bg-gray-900 pb-12">
        <Navbar />
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 pt-32 pb-20 text-center md:px-16">
          <h1 className="mb-6 font-display text-4xl font-medium text-white md:text-5xl lg:text-6xl">
            Our <span className="text-[#48b5c4]">Gallery</span>
          </h1>
          <p className="mx-auto max-w-2xl text-[15px] font-light leading-relaxed text-gray-300">
            Take a tour of our modern clinic, state-of-the-art facilities, and the comfortable environment we provide
            for our patients.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-16 md:py-24">
        <h2 className="sr-only">Gallery Images</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <div
              key={image.title}
              className="gallery-item group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-[2rem] shadow-sm"
            >
              <Image
                src={image.url}
                alt={image.title}
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="w-full translate-y-4 transform p-8 transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-lg font-medium text-white">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

