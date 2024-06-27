import React from 'react'
import Image from 'next/image'
const sponsors_data = [
  {
    img : '/assets/landing-page/wattpad.png'
  },
  {
    img : '/assets/landing-page/fb.png'
  },
  {
    img : '/assets/landing-page/insta.png'
  },
  {
    img : '/assets/landing-page/snapchat.png'
  },
  {
    img : '/assets/landing-page/microsoft.png'
  },
]

const Sponsors = () => {
  return (
    <section id='Sponsers' className='px-3 xs:px-4 lg:px-8 xl:px-10  py-10'>
        <p className='text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6'><span className='text-complement'>Our</span> Sponsors</p>
         <div className='flex justify-center flex-wrap md:justify-between gap-4 lg:mt-14'>
         {sponsors_data.map((sponsor, index) => (
          <div className='w-[100px] h-[100px] md:w-[140px] md:h-[100px] lg:w-[150px] lg:h-[200px] relative'>
              <Image key={index} className='w-full h-full  object-contain' src={sponsor.img} alt={'sponsor'} fill/>
          </div>
          ))}
         </div>
    </section>
  )
}

export default Sponsors