'use client'
import React, { useEffect, useState } from "react";
import { SwiperClass } from "swiper/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface INavigationProps {
    swiperInstance : SwiperClass | null, 
    sliderInstance : SwiperClass | null
}

const NavigationButtons = ({swiperInstance, sliderInstance} : INavigationProps) => {
    const [isStart, setIsStart] = useState<boolean>(true); 
    const [isEnd, setIsEnd] = useState<boolean>(false); 
    sliderInstance?.on('reachBeginning', () => {
        setIsStart(true);
        setIsEnd(false); 
    })
    sliderInstance?.on('reachEnd', () => {
        setIsStart(false); 
        setIsEnd(true);     
    })
    return (
        <>
            <div
                className={`swiper-button left-0 ${isStart && 'opacity-50'}`}
                onClick={() => swiperInstance?.slidePrev()}
            >
                <FaAngleLeft className="text-8xl" />
            </div>
            <div
                className={`swiper-button right-0 ${isEnd && 'opacity-50'}`}
                onClick={() => swiperInstance?.slideNext()}
            >
                <FaAngleRight className="text-8xl" />
            </div>
        </>
    );
};

export default NavigationButtons;
