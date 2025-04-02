import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    'INICIO',
    'CONTACTO'
  ];

  return (
    <nav className="bg-[#1e1e1e]/90 backdrop-blur-md text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-xl border-b border-white/10 transition-all">
      <div className="text-xl font-bold tracking-wider">Puertas Y ventanas Empresa</div>

      {}
      <button className="md:hidden" onClick={toggleMenu}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menú grande */}
      <ul className="hidden md:flex gap-6 text-sm font-medium">
        {navLinks.map((link, i) => (
          <li key={i}>
            <a href="#" className="hover:text-yellow-300">{link}</a>
          </li>
        ))}
      </ul>

      {/* menu que aparecera se supone en el telefono*/}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[70px] left-0 w-full bg-[#2b190b] flex flex-col gap-4 p-4 text-center md:hidden z-40"
          >
            {navLinks.map((link, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="hover:text-yellow-300 text-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
