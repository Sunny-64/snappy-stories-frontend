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
         <div className='flex justify-between flex-wrap gap-4'>
         {sponsors_data.map((sponsor, index) => (
          <div className='w-[200px] h-[150px] relative'>
              <Image key={index} className='w-full h-full  object-contain' src={sponsor.img} alt={'sponsor'} fill/>
          </div>
          ))}
         </div>
    </section>
  )
}

export default Sponsors