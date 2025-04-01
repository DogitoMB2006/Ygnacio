import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FloatingContactButton = () => {
  return (
    <motion.a
      href="https://wa.me/18295984152"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full flex items-center gap-2 shadow-lg hover:scale-105 transition-all duration-300 text-sm sm:text-base"
    >
      <FaWhatsapp size={20} />
      <span className="hidden sm:inline">Contáctanos</span>
    </motion.a>
  );
};

export default FloatingContactButton;
