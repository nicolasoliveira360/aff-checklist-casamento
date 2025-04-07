import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendarAlt, 
  faListCheck, 
  faArrowsToCircle,
  faLightbulb,
  faClock,
  faHeart
} from '@fortawesome/free-solid-svg-icons';

const benefits = [
  {
    title: "16 Meses de Planejamento",
    description: "Saiba exatamente o que fazer em cada mês, desde a escolha do buffet até os últimos detalhes da decoração",
    icon: faCalendarAlt
  },
  {
    title: "Checklist por Categoria",
    description: "Organize cada aspecto do seu casamento: decoração, buffet, música, fotografia, convites e muito mais",
    icon: faListCheck
  },
  {
    title: "Passo a Passo Detalhado",
    description: "Instruções claras e objetivas para não esquecer nenhum detalhe importante do seu grande dia",
    icon: faArrowsToCircle
  },
  {
    title: "Sem Complicação",
    description: "Linguagem simples e direta, sem termos técnicos. Qualquer noiva consegue seguir o passo a passo",
    icon: faLightbulb
  },
  {
    title: "Economia de Tempo",
    description: "Evite perder horas pesquisando na internet. Tenha tudo organizado em um só lugar",
    icon: faClock
  },
  {
    title: "Tranquilidade Garantida",
    description: "Chega de ansiedade e medo de esquecer algo. Com o checklist, você tem tudo sob controle",
    icon: faHeart
  }
];

export const BenefitsSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-rose-900">
          Um Checklist Completo Para Seu Casamento Perfeito
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Organize seu casamento com confiança usando nosso checklist detalhado. Sem complicação, sem confusão - apenas um guia prático e direto para tornar seu sonho realidade.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-rose-50 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-3">
                <FontAwesomeIcon 
                  icon={benefit.icon} 
                  className="text-rose-500 w-6 h-6"
                />
                <h3 className="text-xl font-bold text-rose-900">{benefit.title}</h3>
              </div>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-rose-50 p-8 rounded-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-rose-900 mb-6 text-center">
            Dúvidas Comuns
          </h3>
          <div className="grid gap-6">
            <div className="flex items-start gap-3">
              <FontAwesomeIcon 
                icon={faLightbulb} 
                className="text-rose-500 w-5 h-5 mt-1"
              />
              <div>
                <h4 className="font-bold text-rose-800 mb-2">
                  "Nunca organizei um casamento antes..."
                </h4>
                <p className="text-gray-700">
                  O checklist foi feito pensando em você! Cada etapa é explicada de forma simples e clara, sem termos técnicos ou complicações.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon 
                icon={faListCheck} 
                className="text-rose-500 w-5 h-5 mt-1"
              />
              <div>
                <h4 className="font-bold text-rose-800 mb-2">
                  "Tenho medo de esquecer algo importante..."
                </h4>
                <p className="text-gray-700">
                  Pode ficar tranquila! O checklist cobre absolutamente tudo, desde os grandes aspectos até os menores detalhes do seu casamento.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon 
                icon={faClock} 
                className="text-rose-500 w-5 h-5 mt-1"
              />
              <div>
                <h4 className="font-bold text-rose-800 mb-2">
                  "Não tenho muito tempo para organizar..."
                </h4>
                <p className="text-gray-700">
                  O checklist é organizado mês a mês, com tarefas distribuídas de forma equilibrada para você não se sobrecarregar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 