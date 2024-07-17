import React from "react";
import Form from "./Form";
const Page = () => {
    return (
        <section id="Signup" className="px-4 h-full">
          <div className="p-6">
          <p className="text-right text-blue">
             Back
          </p>
          </div>
            <div className="my-5 h-[80%] flex items-center">
                <div className="w-[80%] sm:w-[60%] lg:w-1/2 xl:w-[40%] mx-auto">
                    <Form />
                   
                </div>
            </div>
        </section>
    );
};

export default Page;
