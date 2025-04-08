import React from 'react';

const Hero = () => {
  return (
    <section className="w-full flex justify-center items-center overflow-hidden bg-[#0070b8]">
      <img
        src="/hero.jpg"
        alt="Puertas y Ventanas Ygnacio"
        className="w-full max-w-[1000px] h-auto object-contain"
      />
    </section>
  );
};

export default Hero;
