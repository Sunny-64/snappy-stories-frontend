import React from "react";
import Slider from "../common/Slider";
import AuthorCard from "./AuthorCard";

const dummy_data = [
    {
        name: "john Doe",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit ab veniam nemo possimus. Officia cum adipisci, quaerat temporibus incidunt ratione.",
        avatar: "/avatar.jpg",
    },
    {
        name: "Asta",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit ab veniam nemo possimus. Officia cum adipisci, quaerat temporibus incidunt ratione.",
        avatar: "/assets/landing-page/cat.jpg",
    },
    {
        name: "Kira",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit ab veniam nemo possimus. Officia cum adipisci, quaerat temporibus incidunt ratione.",
        avatar: "/assets/landing-page/astro.jpg",
    },
    {
        name: "Kurumi",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit ab veniam nemo possimus. Officia cum adipisci, quaerat temporibus incidunt ratione.",
        avatar: "/assets/landing-page/panda.jpg",
    },
];

const TopAuthors = () => {
    return (
        <section
            id="Top-Authors"
            className="px-3 xs:px-4 lg:px-8 xl:px-10 mt-8 md:mt-16 pb-10 min-h-[400px]"
        >
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
                <span className="text-blue">Top</span> Authors
            </p>
            <Slider
                componentToRender={AuthorCard}
                slidePrevBtnId = '.slide-author-prev'
                slideNextBtnId = '.slide-author-next'
                data={dummy_data}
            />
        </section>
    );
};

export default TopAuthors;
