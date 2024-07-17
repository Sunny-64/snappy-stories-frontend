import React from "react";
import Image from "next/image";

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex min-h-screen">
            <div className=" bg-blue text-off-white px-10 py-4 hidden lg:block">
                <div className="p-4">
                    <p className="font-semibold">Snappy Stories</p>
                    <p className=" font-light">
                        Ready to read some books login right now and browse from
                        thousands of collections.
                    </p>
                </div>
                <div className="h-[80%] flex items-center">
                    <div className="">
                        <Image
                            className="w-[100%]"
                            src={"/assets/auth/reading-book.svg"}
                            alt="img"
                            width={0}
                            height={0}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full">{children}</div>
        </div>
    );
};

export default layout;
