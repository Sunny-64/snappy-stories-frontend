import React from "react";
import { SwiperClass } from "swiper/react";
// Import Swiper styles

interface INavigationProps {
    paginationId ?: string
    paginationBulletStyles ?: string
}

const PaginationIndicator = ({
    paginationId,
    paginationBulletStyles, 
}: INavigationProps) => {
    return (
        <div className="pagination-container">
              <div
                className={`${paginationId} ${paginationBulletStyles}`}
            ></div>
        </div>
    );
};

export default PaginationIndicator;
