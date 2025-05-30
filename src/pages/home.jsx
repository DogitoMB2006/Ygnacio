import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';

const Home = () => {
  return (
    <>
      <Hero />
      <div className="bg-gray-100 text-sm font-semibold py-3 flex flex-col md:flex-row justify-center gap-4 text-center">
 
      </div>
      <FeaturedProducts />
    </>
  );
};

export default Home;
