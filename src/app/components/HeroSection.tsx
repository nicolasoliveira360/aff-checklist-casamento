'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export const HeroSection: React.FC = () => {
  const [showSocialProof, setShowSocialProof] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSocialProof(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const avatars = [
    {
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces&auto=format&q=90",
      alt: "Noiva satisfeita 1"
    },
    {
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces&auto=format&q=90",
      alt: "Noiva satisfeita 2"
    },
    {
      src: "https://images.unsplash.com/photo-1557555187-23d685287bc3?w=80&h=80&fit=crop&crop=faces&auto=format&q=90",
      alt: "Noiva satisfeita 3"
    },
    {
      src: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=80&h=80&fit=crop&crop=faces&auto=format&q=90",
      alt: "Noiva satisfeita 4"
    },
    {
      src: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=80&h=80&fit=crop&crop=faces&auto=format&q=90",
      alt: "Noiva satisfeita 5"
    }
  ];

  return (
    <section className="bg-white py-8 md:py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-rose-900 mb-3 md:mb-4 max-w-[280px] sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto leading-[1.2] md:leading-[1.15]"
        >
          Economize R$8.000 No Seu Casamento Com Este Checklist
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 md:mb-8 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto font-medium leading-snug">
          Descubra como +1.000 noivas planejaram o casamento perfeito sem desperdiçar tempo e dinheiro
        </p>
        
        <div className="max-w-lg sm:max-w-xl md:max-w-2xl mx-auto mb-6 md:mb-8">
          <iframe 
            loading="lazy"
            className="w-full aspect-video rounded-lg shadow-xl"
            src="https://www.youtube.com/embed/pGqQuukw-dM?controls=1&rel=0&showinfo=0&modestbranding=1&playsinline=1"
            title="Vídeo de apresentação do Checklist de Casamento"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <a 
          href="#pricing"
          className="inline-block text-base sm:text-lg md:text-xl bg-rose-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full shadow-lg hover:bg-rose-700 transform transition-all duration-300 hover:scale-105 w-full sm:w-auto mb-6"
        >
          QUERO ECONOMIZAR NO MEU CASAMENTO
        </a>

        {showSocialProof && (
          <div className="flex flex-col items-center justify-center">
            <div className="flex -space-x-2 mb-2">
              {avatars.map((avatar, index) => (
                <Image
                  key={index}
                  src={avatar.src}
                  alt={avatar.alt}
                  width={40}
                  height={40}
                  loading="lazy"
                  className="rounded-full border-2 border-white"
                />
              ))}
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 font-medium mt-1">
              4.9 de 5 (2.464 avaliações)
            </p>
          </div>
        )}
      </div>
    </section>
  );
}; 