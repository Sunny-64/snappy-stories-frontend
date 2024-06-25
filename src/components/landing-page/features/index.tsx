import React from 'react'
import { FEATURES } from './data'
import Image from 'next/image'

const Features = () => {
  return (
    <section id='Features' className='bg-[#4462F424] flex flex-col-reverse md:grid md:grid-cols-2 min-h-[400px] px-3 xs:px-4 lg:px-8 xl:px-10 mt-8 md:mt-4 py-10'>
      <div className='flex justify-center feat-img'> 
            <Image className='w-[70%] sm:w-[70%] md:w-full lg:w-[90%]' src='/assets/landing-page/creativity.svg' alt='feat' height={0} width={0}/>
      </div>
      <div className='flex flex-col justify-center xl:px-20'>
        <p className='text-center xl:text-left text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>Our Some <span className='text-blue'>Features</span></p>
        {FEATURES.map((feat, index) => (
            <div key={index} className='flex gap-4 my-4 items-center'>
                <Image className='lg:w-[80px] rounded-md' src={feat.image} alt='feat' width={50} height={50} style={{width : 'auto', height : 'auto'}}/>
                <p className='text-justify hyphens-auto'>{feat.description}</p>
            </div>
        ))}
      </div>
    </section>
  )
}

export default Features