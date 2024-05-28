'use client'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider, { Settings } from 'react-slick';
import Image from 'next/image';
import images from '../assets'; // Ensure assets.ts exports an array of strings

const Home: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <Slider {...settings} className="w-[80vw]">
        {images.map((src: string, index: number) => (
          <div key={index} className="">
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </main>
  );
}

export default Home;
