import React from 'react'
import Image from 'next/image'
import Form from './Form'

const Page = () => {
  return (
    <section id="Send_Otp" className="px-4 h-full">
    <div className="p-6">
    <p className="text-right text-blue">
      Back
      </p>
    </div> 
      <div className="my-5 h-[80%]">
          <div className="w-[80%] sm:w-[60%] lg:w-1/2 xl:w-[40%] mx-auto h-full flex flex-col justify-center">
              <Form />
          </div>
      </div>
  </section>
  )
}

export default Page