import React from 'react';

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: '¿Qué es diceverse?',
      answer: 'diceverse es una plataforma de juegos de rol impulsada por IA que ofrece experiencias inmersivas y accesibles desde cualquier lugar.',
    },
    {
      question: '¿Qué sistemas de dados soporta?',
      answer: 'diceverse soporta una variedad de sistemas de dados, adaptándose a tus necesidades y preferencias de juego.',
    },
    {
      question: '¿Puedo jugar en solitario?',
      answer: 'Sí, diceverse está diseñado para sesiones individuales y multijugador.',
    },
  ];

  return (
    <div className="faq space-y-6">
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <h3 className="font-bold">{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};
