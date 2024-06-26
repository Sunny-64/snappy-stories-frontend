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
import Slider from "../common/Slider";
import Ui from "./Ui";

const Hero = () => {
    return (
        <section id="Hero" className="px-3 xs:px-4 lg:px-8 xl:px-10 mt-8 md:mt-4 pb-10">
            <Slider 
                componentToRender={Ui} 
                data={CAROUSAL_DATA} 
                slidesPerView={1} 
                pagination={true}
                paginationId="hero-pagination"
                paginationBulletStyles="hero-bullets"
            />
        </section>
    );
};

export default Hero;
