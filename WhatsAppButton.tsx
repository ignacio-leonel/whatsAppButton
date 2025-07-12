import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    const message = "Hola! Me gustaría hacer un pedido o consulta";
    window.open(`https://wa.me/5491112345678?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <motion.button
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg"
      onClick={handleClick}
      aria-label="Contactar por WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 1 
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <FaWhatsapp size={28} />
    </motion.button>
  );
};

export default WhatsAppButton;
