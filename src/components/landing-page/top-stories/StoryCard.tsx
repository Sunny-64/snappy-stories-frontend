"use client";
import React from "react";
import Image from "next/image";
const StoryCard = (props: any) => {
    return (
        <div className="md:grid md:grid-cols-2 bg-yellow-100 p-4 md:p-8 rounded-md shadow-md">
            <div className="flex justify-center ">
                <div className="w-[170px] min-h-[270px] md:w-[250px] md:min-h-[370px] relative ">
                    <Image
                        className="w-full rounded-md"
                        src={props.img}
                        alt="book"
                        fill
                    />
                </div>
            </div>

            <div className="grid grid-rows-4 ">
                <div className="sm:flex justify-between row-span-1 items-center">
                    <p className="text-3xl mt-3 font-semibold">{props.title}</p>
                    <p className="font-bold my-2">{props.rating}</p>
                </div>
                <div className="row-span-2">
                    <p className="text-justify hyphens-auto">{props.description}</p>
                </div>
                <div className="flex justify-between items-center row-span-1">
                    <button className="bg-blue py-3 px-10 text-white rounded-[4px]">Read</button>
                    <div className="flex items-center gap-3">
                        <p className="font-semibold hidden sm:block">Author name</p>
                        <div className="relative w-[60px] h-[60px]">
                            <Image
                                className="w-full h-full rounded-full"
                                src={props.authorImg}
                                alt="avatar"
                                fill
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoryCard;
