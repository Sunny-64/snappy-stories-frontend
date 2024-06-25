'use client'
import React, { useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";

interface ISliderProps {
    componentToRender: React.FunctionComponent;
    slidePrevBtnId : string
    slideNextBtnId : string
    data: any[];
}

const Slider = ({ componentToRender: Component, slideNextBtnId, slidePrevBtnId, data }: ISliderProps) => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null)
    const sliderRef = useRef<SwiperRef | null>(null);

    return (
        <div className="relative px-28">
            <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={3}
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
                    nextEl: `${slideNextBtnId}`,
                    prevEl: `${slidePrevBtnId}`,
                }}
                ref={sliderRef}
                onSwiper={(swiper) => {
                    setSwiperInstance(swiper); 
                }}
            >
                {data.map((item: any, index: number) => (
                    <SwiperSlide key={index} className="py-10 px-8">
                        <Component {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-button swiper-button-prev left-0" onClick={() => swiperInstance?.slidePrev()}>
                <FaAngleLeft className="text-8xl" />
            </div>
            <div className="swiper-button swiper-button-next right-0" onClick={() => swiperInstance?.slideNext()}>
                <FaAngleRight className="text-8xl" />
            </div>
        </div>
    );
};

export default Slider;
