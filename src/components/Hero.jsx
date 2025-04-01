import React from 'react';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
<section className="relative h-[400px] bg-cover bg-center flex items-center justify-center text-center text-white"
  style={{ backgroundImage: `url('/hero.jpg')` }}
>
  {/* Capa oscura */}
  <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

  {/* Contenido */}
  <motion.div
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="z-10 px-4"
  >
    <h1 className="text-5xl md:text-7xl font-bold drop-shadow tracking-tight">
      Puertas y Ventanas
    </h1>
    <p className="text-xl md:text-2xl mt-3">
      Fabricamos todo tipo de ventanas corredizas, puertas en aluminio crystal ¡y más!
    </p>
    <span className="text-sm md:text-base font-medium block mt-2 text-white/90">
      C/La Victoria, Cruce de la Virgen #8, Sto. Dgo. Norte
    </span>
  </motion.div>
</section>

  );
};


export default Hero;
