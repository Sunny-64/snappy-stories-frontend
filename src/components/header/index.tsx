"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
    FaStore,
    FaMagnifyingGlass,
    FaPenNib,
    FaMessage,
    FaBars,
} from "react-icons/fa6";
import { NAV_ITEMS_MOBILE_VIEW } from "./constants";

const Header = () => {
    const [loggedIn, setLoggedIn] = useState(true);
    return (
        <header className="px-3 pt-2 pb-3 xs:px-4 lg:px-8 xl:px-10 bg-white">
            <div className="flex justify-between items-center">
                <div className="flex h-full items-center gap-6">
                    <h3 className="font-bold text-lg text-blue">
                        Snappy Stories
                    </h3>
                    <div className="hidden sm:flex text-md font-medium h-full items-center gap-3 sm:gap-3 lg:gap-5">
                        <p>Browse</p>
                        <p>Community</p>
                    </div>
                </div>

                {/* If The user is Authenticated */}
                <div className="flex gap-6 lg:gap-8">
                    <div className="hidden sm:flex items-center font-medium text-md gap-8 lg:gap-5">
                        <p>
                            <span className="sm:hidden md:block">Search</span>
                            <span className="md:hidden text-lg">
                                <FaMagnifyingGlass />
                            </span>
                        </p>
                        {!loggedIn ? (
                            <button className="">Signup</button>
                        ) : (
                            <>
                                <p>
                                    <span className="sm:hidden md:block">
                                        Post
                                    </span>
                                    <span className="md:hidden text-lg">
                                        <FaStore />
                                    </span>
                                </p>
                                <p>
                                    <span className="sm:hidden md:block">
                                        Write
                                    </span>
                                    <span className="md:hidden text-lg">
                                        <FaPenNib />
                                    </span>
                                </p>
                                <p>
                                    <span className="sm:hidden md:block">
                                        Chats
                                    </span>
                                    <span className="md:hidden text-lg">
                                        <FaMessage />
                                    </span>
                                </p>
                            </>
                        )}
                    </div>

                    <p className="flex items-center gap-2">
                        {loggedIn &&
                            <>
                                <Image
                                    className="rounded-full hidden sm:block"
                                    src="/avatar.jpg"
                                    alt="avatar"
                                    width="40"
                                    height="40"
                                />
                                <span className="hidden md:block font-medium text-md sm:hidden">
                                    @username
                                </span>
                            </>
                        }
                          <span className="text-2xl sm:hidden">
                                <FaBars />
                            </span>
                    </p>
                </div>
            </div>

            {loggedIn && (
                <div className="flex justify-between mt-4 sm:hidden">
                    {NAV_ITEMS_MOBILE_VIEW.map((item, index) => (
                        <p key={index} className="text-xl">
                            <item.icon />
                        </p>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Header;
