'use client';

import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

interface Message {
  text: string;
  isUser: boolean;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const { t, language } = useLanguage();

  const welcomeMessages = {
    en: "Hello! I'm your BMW assistant. How can I help you today?",
    es: "¡Hola! Soy tu asistente BMW. ¿Cómo puedo ayudarte hoy?",
    ru: "Здравствуйте! Я ваш помощник BMW. Как я могу вам помочь?"
  };

  const handleSend = () => {
    if (!inputText.trim()) return;

    // Add user message
    const userMessage: Message = {
      text: inputText,
      isUser: true
    };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        text: getBotResponse(inputText),
        isUser: false
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();
    
    // English responses
    if (language === 'en') {
      if (lowerInput.includes('price') || lowerInput.includes('cost')) {
        return "Our prices vary depending on the service. Please visit our Services page for detailed pricing.";
      }
      if (lowerInput.includes('schedule') || lowerInput.includes('appointment')) {
        return "You can schedule an appointment by calling us at (754) 925-9881 or visiting our Contact page.";
      }
      if (lowerInput.includes('tuning')) {
        return "We offer various tuning services including Stage 1, Stage 2, and custom ECU remapping.";
      }
    }
    
    // Spanish responses
    if (language === 'es') {
      if (lowerInput.includes('precio') || lowerInput.includes('costo')) {
        return "Nuestros precios varían según el servicio. Visite nuestra página de Servicios para ver los precios detallados.";
      }
      if (lowerInput.includes('cita') || lowerInput.includes('agendar')) {
        return "Puede programar una cita llamándonos al (754) 925-9881 o visitando nuestra página de Contacto.";
      }
      if (lowerInput.includes('tuning')) {
        return "Ofrecemos varios servicios de tuning, incluyendo Stage 1, Stage 2 y reprogramación personalizada de ECU.";
      }
    }
    
    // Russian responses
    if (language === 'ru') {
      if (lowerInput.includes('цена') || lowerInput.includes('стоимость')) {
        return "Наши цены зависят от услуги. Пожалуйста, посетите страницу Услуги для получения подробной информации о ценах.";
      }
      if (lowerInput.includes('запись') || lowerInput.includes('записаться')) {
        return "Вы можете записаться, позвонив нам по телефону (754) 925-9881 или посетив нашу страницу Контакты.";
      }
      if (lowerInput.includes('тюнинг')) {
        return "Мы предлагаем различные услуги по тюнингу, включая Stage 1, Stage 2 и индивидуальную прошивку ECU.";
      }
    }

    // Default responses
    const defaultResponses = {
      en: "I'm not sure I understand. Could you please rephrase your question?",
      es: "No estoy seguro de entender. ¿Podrías reformular tu pregunta?",
      ru: "Я не совсем понимаю. Не могли бы вы переформулировать ваш вопрос?"
    };

    return defaultResponses[language as keyof typeof defaultResponses];
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => {
            setIsOpen(true);
            if (messages.length === 0) {
              setMessages([{ text: welcomeMessages[language as keyof typeof welcomeMessages], isUser: false }]);
            }
          }}
          className="bg-m-red text-white p-4 rounded-full shadow-lg hover:bg-red-600 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </button>
      ) : (
        <div className="bg-m-dark border border-m-gray rounded-lg shadow-xl w-96">
          <div className="flex justify-between items-center p-4 border-b border-m-gray">
            <h3 className="text-white font-semibold">{t('chat.title')}</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.isUser
                      ? 'bg-m-red text-white'
                      : 'bg-m-gray text-gray-200'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-m-gray">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={String(t('chat.placeholder'))}
                className="flex-1 bg-m-gray text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-m-red"
              />
              <button
                onClick={handleSend}
                className="bg-m-red text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
              >
                {t('chat.send')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 