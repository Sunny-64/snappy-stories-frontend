import React from "react";
import Slider from "../../common/slider";
import ReviewCard from "./ReviewCard";

const dummy_data = [
    {
        name: "john Doe",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit ab veniam nemo possimus. Officia cum adipisci, quaerat temporibus incidunt ratione.",
        avatar: "/avatar.jpg",
        rating : 4.5
    },
    {
        name: "Asta",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit ab veniam nemo possimus. Officia cum adipisci, quaerat temporibus incidunt ratione.",
        avatar: "/assets/landing-page/cat.jpg",
        rating : 4.9
    },
    {
        name: "Kira",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit ab veniam nemo possimus. Officia cum adipisci, quaerat temporibus incidunt ratione.",
        avatar: "/assets/landing-page/astro.jpg",
        rating : 4.1
    },
    {
        name: "Kurumi",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit ab veniam nemo possimus. Officia cum adipisci, quaerat temporibus incidunt ratione.",
        avatar: "/assets/landing-page/panda.jpg",
        rating : 4.1
    },
];


const Reviews = () => {
    return (
        <section
            id="Top-Authors"
            className="bg-white px-3 xs:px-4 lg:px-8 xl:px-10 mt-8 md:mt-16 py-10 min-h-[400px]"
        >
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
                User<span className="text-complement"> Reviews </span>
            </p>
            <Slider
                componentToRender={ReviewCard}
                slidePrevBtnId = 'slide-review-prev'
                slideNextBtnId = 'slide-review-next'
                data={dummy_data}
                navigation = {true}
                slidesPerView={3}
                swiperContainerStyles={'md:px-12 xl:px-24'}
                swiperSlideStyles = {'py-10 px-8'}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1100: {
                        slidesPerView: 3,
                    },
                }}
            />
        </section>
    );
};

export default Reviews;
