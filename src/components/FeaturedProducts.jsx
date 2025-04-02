import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import toldo1 from '../assets/toldo1.jpg';
import toldo2 from '../assets/toldo2.jpg';
import toldo3 from '../assets/toldo3.jpg';
import toldo4 from '../assets/toldo4.jpg';

import ventana1 from '../assets/ventana1.jpg';
import ventana2 from '../assets/ventana2.jpg';
import ventana3 from '../assets/ventana3.jpg';
import ventana4 from '../assets/ventana4.jpg';
import ventana5 from '../assets/ventana5.jpg';
import ventana6 from '../assets/ventana6.jpg';

const images = [
  { src: toldo1, caption: 'Instalación de Toldo Retráctil' },
  { src: toldo2, caption: 'Puertas de Aluminio Modernas' },
  { src: toldo3, caption: 'Ventanas Corredizas con Seguridad' },
  { src: toldo4, caption: 'Estructuras Personalizadas de Alta Calidad' },
];

const ventanas = [
  { src: ventana1, caption: 'ventanas Corrediza de Aluminio Blanco' },
  { src: ventana2, caption: 'Ventana de Seguridad con Rejas Decorativas' },
  { src: ventana3, caption: 'Ventana de Vidrio Templado Moderna' },
  { src: ventana4, caption: 'Ventana Doble Hoja con Mosquitero' },
  { src: ventana5, caption: 'Ventana de Baño Satinada' },
  { src: ventana6, caption: 'Ventana con Acabado de Madera Sintética' },
];

const FeaturedProducts = () => {
  return (
    <section className="py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Puertas y Ventanas Ygnaciom
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
                  className="w-full h-[300px] sm:h-[400px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 text-lg font-medium">
                  {img.caption}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>


      </div>
      <h2 className="text-3xl font-bold text-center mt-16 mb-6 text-gray-800">
  Ventanas Instaladas por Ygnaciom
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
            className="w-full h-[300px] sm:h-[400px] object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 text-lg font-medium">
            {img.caption}
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>
    </section>
  );
};

export default FeaturedProducts;
