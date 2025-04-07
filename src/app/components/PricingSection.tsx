import React from 'react';
import Image from 'next/image';
import { CTAButton } from './CTAButton';

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-rose-900">
            Investimento Especial
          </h2>
          
          <div className="bg-rose-50 p-8 rounded-lg shadow-lg mb-8">
            <div className="mb-8">
              <span className="inline-block bg-rose-200 text-rose-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
                OFERTA POR TEMPO LIMITADO
              </span>
              <p className="text-gray-600">De <span className="text-gray-600">R$ 97,00</span> por apenas:</p>
              <p className="text-5xl font-bold text-rose-900 mb-4">R$ 37,00</p>
              <p className="text-gray-600">ou em até 5x sem juros</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center gap-2 text-gray-700">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Acesso imediato ao material</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-700">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Acesso vitalício</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-700">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Suporte exclusivo</span>
              </div>
            </div>
            
            <CTAButton href="https://go.hotmart.com/T99054146P?ap=5106" className="w-full justify-center">
              COMPRAR AGORA
            </CTAButton>
          </div>

          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="relative w-[120px] h-[120px]">
              <Image 
                src="/img/garantia.png" 
                alt="Selo de garantia de 7 dias"
                fill
                className="object-contain animate-float"
              />
            </div>
            <div className="text-left max-w-sm">
              <h3 className="font-bold text-xl text-rose-900 mb-2">Garantia de 7 dias</h3>
              <p className="text-gray-700">
                Se você não ficar satisfeita, devolvemos 100% do seu dinheiro sem burocracia
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4">
              <svg className="w-8 h-8 mx-auto mb-2 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <h4 className="font-bold text-gray-900">Pagamento Seguro</h4>
            </div>
            <div className="p-4">
              <svg className="w-8 h-8 mx-auto mb-2 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h4 className="font-bold text-gray-900">Acesso Imediato</h4>
            </div>
            <div className="p-4">
              <svg className="w-8 h-8 mx-auto mb-2 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h4 className="font-bold text-gray-900">Suporte por Email</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 