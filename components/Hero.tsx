"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// 👇 Just 3 static slides
const sliders = [
  {
    image: "/images/hero-slide1.webp",
    link: "https://achariyagroup.in",
  },
  {
    image: "/images/hero-slide2.jpg",
    link: "https://achariyagroup.in",
  },
  {
    image: "/images/hero-slide3.png",
    link: "https://achariyagroup.in",
  },
];

const Hero = () => {
  return (
    <div className="relative w-full max-w-[1920px] mx-auto">
      {/* Swiper */}
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        loop={true}
        speed={800}
        effect="fade"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
        className="hero_slider w-full h-[180px] sm:h-80 md:h-[400px] lg:h-[500px]"
      >
        {sliders.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link href={slide.link}>
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                width={1600}
                height={500}
                unoptimized
                priority={index === 0}
                className="w-full h-full object-cover"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button
        aria-label="Previous slide"
        className="hero-prev hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-linear-to-r from-indigo-500 to-pink-500 hover:bg-linear-to-r hover:to-indigo-500 hover:from-pink-500 p-2 sm:p-3 rounded-full shadow text-white h-8 w-8 sm:h-10 sm:w-10 justify-center items-center cursor-pointer hover:bg-blue-700 transition-all duration-300"
      >
        <FiArrowLeft />
      </button>
      <button
        aria-label="Next slide"
        className="hero-next hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-linear-to-r from-indigo-500 to-pink-500 hover:bg-linear-to-r hover:to-indigo-500 hover:from-pink-500 p-2 sm:p-3 rounded-full shadow text-white h-8 w-8 sm:h-10 sm:w-10 justify-center items-center cursor-pointer hover:bg-blue-700 transition-all duration-300"
      >
        <FiArrowRight />
      </button>
    </div>
  );
};

export default Hero;
