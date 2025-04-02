import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const phrases = [
    'Transformamos tus espacios con diseño, calidad y elegancia. Especialistas en la fabricación e instalación de closets, puertas, ventanas, toldos y gabinetes de cocina a medida.',
    'Creamos soluciones modernas y funcionales, combinando materiales de alta calidad con acabados impecables. ¡Dale un nuevo estilo a tu hogar con nosotros!',
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 5000); // eso e que dura 5 segundos cada frase

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-center text-white"
      style={{ backgroundImage: `url('/hero.jpg')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 px-4 max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight drop-shadow-md">
          Puertas y Ventanas Ygnacio
        </h1>

        {/*esto es para los textos esos con animacione*/}
        <div className="mt-4 px-2">
  <AnimatePresence mode="wait">
    <motion.p
      key={index}
      className="text-lg md:text-xl text-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
    >
      {phrases[index]}
    </motion.p>
  </AnimatePresence>
</div>


        <span className="block mt-6 text-sm text-gray-300 font-medium">
          📍 C/La Victoria, Cruce de la Virgen #8, Sto. Dgo. Norte
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;
