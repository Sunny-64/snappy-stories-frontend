import React from "react";
import Form from "./Form";
import Image from 'next/image'
const Page = () => {
    return (
        <section id="Signup" className="px-4 h-full">
          <div className="p-6">
          <p className="text-right">
                Already have an account ?{" "}
                <span className="text-blue">Login</span>
            </p>
          </div>
            <div className="my-5 flex flex-col justify-center">
                <div className="w-[80%] sm:w-[60%] lg:w-1/2 xl:w-[40%] mx-auto">
                    <Form />
                    <hr className="border-[1px] border-gray-400"/>
                    <div className="my-10 flex justify-center gap-4">
                        <Image className='rounded-full' src={'/assets/landing-page/fb.png'} alt='logo' width={60} height={60} />
                        <Image className='rounded-full' src={'/assets/landing-page/fb.png'} alt='logo' width={60} height={60} />
                        <Image className='rounded-full' src={'/assets/landing-page/fb.png'} alt='logo' width={60} height={60} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;
