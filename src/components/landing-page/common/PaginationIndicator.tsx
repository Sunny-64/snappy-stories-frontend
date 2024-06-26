import React from "react";
import { SwiperClass } from "swiper/react";
// Import Swiper styles

interface INavigationProps {
    swiperInstance: SwiperClass | null;
    sliderInstance: SwiperClass | null;
    paginationId: string;
}

const PaginationIndicator = ({
    swiperInstance,
    sliderInstance,
    paginationId,
}: INavigationProps) => {
    return (
        <div className="pagination-container">
              <div
                className={`${paginationId} swiper-custom-pagination`}
            ></div>
        </div>
    );
};

export default PaginationIndicator;
