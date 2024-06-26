"use client";
import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import {CAROUSAL_DATA} from './hero-data'; 

const Hero = () => {
    return (
        <section id="Hero" className="px-3 xs:px-4 lg:px-8 xl:px-10 mt-8 md:mt-4 pb-10">
            <Swiper
                className=""
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ 
                  clickable: true 
                }}
            >
             
               {CAROUSAL_DATA.map((item, index) => (
                <SwiperSlide key={index}>
                   <div className="md:grid md:grid-cols-2 h-full">
                      <div className="w-full h-full flex flex-col justify-center">
                            <p className="text-4xl md:text-5xl lg:text-6xl mb-3 font-bold">{item.title}</p>
                            <p className="mb-3 text-justify hyphens-auto">{item.description}</p>
                            {item.buttons.map((btn, i) => (<button key={i} className="px-4 py-2 rounded-sm bg-blue text-white w-1/3 md:w-1/4 lg:w-1/6">{btn}</button>))}
                        </div>
                        <div className="flex justify-center items-center">
                          <Image src={item.image} className="w-full xs:w-[90%] md:w-full lg:w-[80%]" alt="hero" width={0} height={0} priority />
                        </div>
                   </div>
                </SwiperSlide>
               ))}
            </Swiper>
        </section>
    );
};

export default Hero;
