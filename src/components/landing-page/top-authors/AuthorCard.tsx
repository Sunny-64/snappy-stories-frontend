'use client'
import React from 'react'
import Image from 'next/image'

const AuthorCard = (props:any) => {
  return (
    <div className='bg-[#4462F4B3] px-2 md:px-4 py-6 flex flex-col items-center text-white rounded-lg'>
        <Image className='rounded-full mb-2 ' src={props.avatar} width={70} height={70} alt='avatar'/>
        <p className='text-lg font-medium mb-4'>{props.name}</p>
        <p className='hyphens-auto md:px-3 text-center mb-4'>{props.description}</p>
        <div className='w-full my-4 flex justify-around'>
            <button className='py-2 px-6 bg-complement text-black font-medium rounded-sm'>Follow</button>
            <button className='py-2 px-6 border-[2px] border-complement text-black font-medium rounded-sm'>Visit Profile</button>
        </div>
    </div>
  )
}

export default AuthorCard