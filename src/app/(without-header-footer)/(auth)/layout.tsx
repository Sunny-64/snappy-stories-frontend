import React from 'react'
import Image from 'next/image'

const layout = ({children} : {children : React.ReactNode}) => {
  return (
    <div className='lg:grid lg:grid-cols-4'>
        <div className='h-full md:col-span-1 bg-blue text-off-white py-4 hidden lg:block'>
            <div className='p-4'>
              <p className='font-semibold'>Snappy Stories</p>
              <p className=' font-light'>Ready to read some books login right now and browse from thousands of collections.</p>
            </div>
            <div className='py-20'>
              <Image className='w-[100%]' src={'/assets/auth/reading-book.svg'} alt='img' width={0} height={0} />
            </div>
        </div>
        <div className='md:col-span-3'>{children}</div>
    </div>
  )
}

export default layout