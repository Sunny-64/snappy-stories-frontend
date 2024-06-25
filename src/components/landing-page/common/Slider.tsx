'use client'
import React, { useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";

interface ISliderProps {
    componentToRender: React.FunctionComponent;
    slidesPerView: number;
    data: any[];
}

const Slider = ({ componentToRender: Component, slidesPerView, data }: ISliderProps) => {
    const sliderRef = useRef<SwiperRef>(null);

    return (
        <div className="relative px-28">
            <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={slidesPerView}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                onSwiper={(swiper) => {
                    if (sliderRef.current) {
                        // Ensure sliderRef is not null before accessing its properties
                        console.log(swiper); // Ensure swiper is properly passed
                        // Do your logic here with the swiper instance
                    }
                }}
            >
                {data.map((item: any, index: number) => (
                    <SwiperSlide key={index} className="py-10 px-8">
                        <Component {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-button swiper-button-prev left-0" onClick={() => console.log('')}>
                <FaAngleLeft className="text-8xl" />
            </div>
            <div className="swiper-button swiper-button-next right-0" onClick={() => console.log('')}>
                <FaAngleRight className="text-8xl" />
            </div>
        </div>
    );
};

export default Slider;
