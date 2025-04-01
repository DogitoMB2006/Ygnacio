import React from 'react';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      className="h-[400px] bg-cover bg-center flex items-center justify-center text-center text-red-800"
      style={{ backgroundImage: `url('/hero.jpg')` }}
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold drop-shadow">Puertas Y ventanas</h1>
        <p className="text-xl md:text-2xl mt-2">Fabricamos todo tipo de ventanas corredisas, puertas en alimunio crystal, Y mas!</p>
        <span className="text-black font-semibold block mt-1">C/La victoria cruce de la virgen #8. Sto Dgo. Norte</span>
      </motion.div>
    </section>
  );
};


export default Hero;
