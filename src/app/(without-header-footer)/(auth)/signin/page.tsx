import React from 'react'
import Image from 'next/image'
import Form from './Form'; 

const Page = () => {
  return (
    <section id="Signin" className="px-4 h-full">
    <div className="p-6">
    <p className="text-right">
          Don&apos;t have an account ?{" "}
          <span className="text-blue">Signup</span>
      </p>
    </div> 
      <div className="my-5 h-[80%]">
          <div className="w-[80%] sm:w-[60%] lg:w-1/2 xl:w-[40%] mx-auto h-full flex flex-col justify-center">
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
  )
}

export default Page