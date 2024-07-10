import { SwiperOptions } from "swiper/types";

type TBreakPoint = {
    [key: number]: SwiperOptions;
};

export interface ISliderProps {
    componentToRender: React.FunctionComponent;
    slidePrevBtnId?: string
    slideNextBtnId?: string
    data: any[]
    navigation?: boolean
    pagination?: boolean
    breakpoints?: TBreakPoint
    slidesPerView: number
    paginationId?: string
    swiperContainerStyles?: string
    paginationBulletStyles?: string
    swiperSlideStyles ?: string
}