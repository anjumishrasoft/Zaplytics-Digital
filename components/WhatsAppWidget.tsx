
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppWidget: React.FC = () => {
  const phoneNumber = "919111775057";
  const message = "Hello Zaplytics! I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 font-semibold whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppWidget;
