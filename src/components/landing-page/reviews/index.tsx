import React from "react";
import Slider from "../common/Slider";
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
            className="px-3 xs:px-4 lg:px-8 xl:px-10 mt-8 md:mt-16 pb-10 min-h-[400px]"
        >
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
                Top<span className="text-complement"> Authors </span>
            </p>
            <Slider
                componentToRender={ReviewCard}
                slidesPerView={3}
                data={dummy_data}
            />
        </section>
    );
};

export default Reviews;
