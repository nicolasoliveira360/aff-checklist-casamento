import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    imageSrc: "/img/dp-01.webp",
    alt: "Depoimento de cliente satisfeita"
  },
  {
    imageSrc: "/img/dp-02.webp",
    alt: "Depoimento de cliente satisfeita"
  },
  {
    imageSrc: "/img/dp-03.webp",
    alt: "Depoimento de cliente satisfeita"
  }
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-rose-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-rose-900">
          O Que Nossas Noivas Dizem
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((depoimento, index) => (
            <div 
              key={index} 
              className="bg-white p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative w-full aspect-auto">
                <Image
                  src={depoimento.imageSrc}
                  alt={depoimento.alt}
                  width={500}
                  height={300}
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 