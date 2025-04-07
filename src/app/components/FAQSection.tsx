import React from 'react';

const faqItems = [
  {
    pergunta: "O Check-List de casamento é totalmente online?",
    resposta: "Sim, você receberá acesso imediato após a compra através da plataforma Hotmart."
  },
  {
    pergunta: "Como funciona o Prazo de Garantia?",
    resposta: "Você tem 7 dias para avaliar o material. Se não ficar satisfeita, devolvemos 100% do seu investimento."
  },
  {
    pergunta: "O Check-List de casamento é para sempre ou some depois de um ano?",
    resposta: "O acesso é vitalício! Uma vez que você compra, tem acesso para sempre ao material."
  },
  {
    pergunta: "Como vou receber o material?",
    resposta: "Após a confirmação do pagamento, você receberá um e-mail com as instruções de acesso à área de membros."
  },
  {
    pergunta: "Posso usar o checklist no celular?",
    resposta: "Sim! O material é totalmente responsivo e pode ser acessado de qualquer dispositivo."
  }
];

export const FAQSection: React.FC = () => {
  return (
    <section className="py-16 bg-rose-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-rose-900">
          Perguntas Frequentes
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-rose-900 mb-2">{item.pergunta}</h3>
              <p className="text-gray-700">{item.resposta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 