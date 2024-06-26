"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { SwiperOptions } from "swiper/types";
import NavigationButtons from "./NavigationButtons";
import PaginationIndicator from "./PaginationIndicator";

type TBreakPoint = {
    [key: number]: SwiperOptions;
};

interface ISliderProps {
    componentToRender: React.FunctionComponent;
    slidePrevBtnId?: string;
    slideNextBtnId?: string;
    data: any[];
    navigation?: boolean;
    pagination?: boolean;
    breakpoints?: TBreakPoint;
    slidesPerView: number;
    paginationId ?: string
    swiperContainerStyles ?: string
}


const Slider = ({
    componentToRender: Component,
    slideNextBtnId,
    slidePrevBtnId,
    data,
    navigation,
    pagination,
    breakpoints = {},
    slidesPerView,
    paginationId, 
    swiperContainerStyles
}: ISliderProps) => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);
    const [sliderIntance, setSlideInstance] = useState<SwiperClass | null>(null); 

    const sliderRef = useRef<SwiperRef | null>(null);
    return (
        <div className={`relative ${swiperContainerStyles}`}>
            <Swiper
                modules={[
                    (navigation && Navigation) ||
                        (pagination && Pagination) ||
                        Pagination,
                ]}
                spaceBetween={50}
                slidesPerView={slidesPerView}
                breakpoints={
                    Object.keys(breakpoints).length > 0
                        ? breakpoints
                        : {
                              0: {
                                  slidesPerView: 1,
                              },
                          }
                }
                pagination = {{
                    el : `.${paginationId}`, 
                    clickable : true, 
                    // bulletClass : 'pagination-custom-bullet'
                    
                }}
                navigation={{
                    nextEl: `.${slideNextBtnId}`,
                    prevEl: `.${slidePrevBtnId}`,
                    disabledClass : 'swiper-button-disabled'
                }}
                ref={sliderRef}
                onSlideChange={(swiper) => setSlideInstance(swiper)}
                onSwiper={(swiper) => {
                    setSwiperInstance(swiper);
                }}
            >
                {data.map((item: any, index: number) => (
                    <SwiperSlide key={index} className="py-10 px-8">
                        <Component {...item} />
                    </SwiperSlide>
                ))}
                <div className="swiper-pagination"></div>
            </Swiper>

            {navigation && (
                <NavigationButtons swiperInstance={swiperInstance} sliderInstance={sliderIntance}/>
            )}

            {pagination && <PaginationIndicator paginationId={paginationId || "swiper-custom-pagination"} swiperInstance={swiperInstance} sliderInstance={sliderIntance} />}

        </div>
    );
};

export default Slider;
