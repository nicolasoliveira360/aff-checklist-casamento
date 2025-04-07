import React from 'react';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ href, children, className = '' }) => {
  return (
    <a 
      href={href}
      className={`inline-block bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 px-8 rounded-full text-xl transition-all transform hover:scale-105 ${className}`}
    >
      {children}
    </a>
  );
}; 