import React from 'react';
import { FaWhatsapp, FaMapMarkerAlt, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
        
        {/* Marca y Frase */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Puertas y Ventanas Ygnaciom</h3>
          <p className="text-sm italic">“Calidad y elegancia que protegen tu hogar.”</p>
        </div>

        {/* Contacto Rápido */}
        <div className="flex flex-col gap-2 items-center sm:items-start">
          <a
            href="https://wa.me/18295984152" // cámbialo a tu número real
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-green-400 transition"
          >
            <FaWhatsapp size={20} /> Escríbenos por WhatsApp
          </a>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt size={18} /> <span>Cobertura en República Dominicana</span>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="flex gap-4 justify-center sm:justify-end mt-4 sm:mt-0">
          <a href="https://facebook.com" target="_blank" className="hover:text-blue-500">
            <FaFacebookF size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" className="hover:text-pink-500">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-8 border-t border-white/10 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Ygnaciom. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
