
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import CustomVideoPlayer from './CustomVideoPlayer';

import toldo1 from '../assets/toldo1.jpg';
import toldo2 from '../assets/toldo2.jpg';
import toldo3 from '../assets/toldo3.jpg';
import toldo4 from '../assets/toldo4.jpg';

import ventana1 from '../assets/ventana1.jpg';
import ventana2 from '../assets/ventana2.jpg';
import ventana3 from '../assets/ventanasbano.jpg';
import ventana4 from '../assets/ventanasbano2.jpg';
import ventana5 from '../assets/ventanasbano3.jpg';

import showcase2 from '../assets/showcase2.mp4';

const images = [
  { src: toldo1, caption: 'Instalación de Toldo Retráctil' },
  { src: toldo2, caption: 'Puertas de Aluminio Modernas' },
  { src: toldo3, caption: 'Ventanas Corredizas con Seguridad' },
  { src: toldo4, caption: 'Estructuras Personalizadas de Alta Calidad' },
];

const ventanas = [
  { src: ventana1, caption: 'ventanas Corrediza de Aluminio Blanco' },
  { src: ventana2, caption: 'Ventanas de Seguridad con Rejas Decorativas' },
  { src: ventana3, caption: 'Ventanas de Vidrio Templado Moderna' },
  { src: ventana4, caption: 'Ventanas Doble Hoja con Mosquitero' },
  { src: ventana5, caption: 'Ventanas de Baño Satinada' }
];

const FeaturedProducts = () => {
  return (
    <section className="py-6 sm:py-10 bg-gray-100">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6 text-gray-800 px-4">
        Toldos Y ventanas
      </h2>

      <div className="w-full max-w-5xl mx-auto px-4">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-1 sm:py-2 text-sm sm:text-lg font-medium">
                  {img.caption}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      <h2 className="text-2xl sm:text-3xl font-bold text-center mt-10 sm:mt-16 mb-4 sm:mb-6 text-gray-800 px-4">
        Ventanas Instaladas por Ygnacio
      </h2>

      <div className="w-full max-w-5xl mx-auto px-4">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          {ventanas.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-1 sm:py-2 text-sm sm:text-lg font-medium">
                  {img.caption}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      <div className="w-full max-w-5xl mx-auto px-4 mt-10 sm:mt-16">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-3 sm:mb-4 text-gray-800">
          Nuestro Trabajo en Acción
        </h2>

        <CustomVideoPlayer />

        
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 mt-10 sm:mt-16">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-3 sm:mb-4 text-gray-800">
          
        </h2>
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-3 sm:mb-4 text-gray-800">
          Closets Y gabinetes
        </h2>
        <CustomVideoPlayer videoSrc={showcase2} />

        <p className="text-center text-xs sm:text-sm text-gray-600 mt-2 sm:mt-3 italic">
          Observa otro de nuestros proyectos destacados ✨
        </p>
      </div>
    </section>
  );
};

export default FeaturedProducts;
