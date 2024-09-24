"use client";

import React, { useEffect, useRef } from 'react';

const logos = [
  '/42 Blockchain Blanc.svg',
  '/42 Blockchain Blanc.svg',
  '/42 Blockchain Blanc.svg',
  '/42 Blockchain Blanc.svg',
  '/42 Blockchain Blanc.svg',
];

const Logoslides = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let interval;

    const startSlide = () => {
      interval = setInterval(() => {
        console.log('Carousel scrollLeft before:', carousel.scrollLeft);
        carousel.scrollLeft += carousel.offsetWidth;
        console.log('Carousel scrollLeft after:', carousel.scrollLeft);
        if (carousel.scrollLeft >= carousel.scrollWidth - carousel.offsetWidth) {
          console.log('Resetting scrollLeft');
          carousel.scrollLeft = 0;
        }
      }, 2000); // Adjust the speed here
    };

    const stopSlide = () => {
      clearInterval(interval);
    };

    carousel.addEventListener('mouseover', stopSlide);
    carousel.addEventListener('mouseout', startSlide);

    startSlide();

    return () => {
      stopSlide();
      carousel.removeEventListener('mouseover', stopSlide);
      carousel.removeEventListener('mouseout', startSlide);
    };
  }, []);

  return (
    <div
      ref={carouselRef}
      className="flex overflow-x-hidden whitespace-nowrap scroll-smooth"
      style={{ width: '100%' }}
    >
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt={`Logo ${index + 1}`}
          className="inline-block w-32 h-32 mx-2"
        />
      ))}
    </div>
  );
};

export default Logoslides;
