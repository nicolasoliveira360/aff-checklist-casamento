import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-rose-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Sobre o Checklist</h3>
            <p className="text-sm text-gray-300">
              O Checklist de Casamento é a ferramenta perfeita para noivas que desejam organizar seu casamento de forma simples e eficiente.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/politica-de-privacidade" className="hover:underline">Política de Privacidade</a>
              </li>
              <li>
                <a href="/termos-de-uso" className="hover:underline">Termos de Uso</a>
              </li>
              <li>
                <a href="/faq" className="hover:underline">Perguntas Frequentes</a>
              </li>
              <li>
                <a href="/contato" className="hover:underline">Contato</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contato@checklistcasamento.com" className="hover:underline">
                  contato@checklistcasamento.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(11) 99999-9999</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-rose-800 pt-8 text-center">
          <p className="text-sm text-gray-300">
            © 2024 Checklist de Casamento - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}; 