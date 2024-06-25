'use client';
import React from 'react'
import Image from 'next/image'
const ReviewCard = (props:any) => {
  return (
    <div className='bg-complement-light-70 px-4 py-10 flex flex-col items-center text-black rounded-lg'>
        <Image className='rounded-full mb-2 ' src={props.avatar} width={70} height={70} alt='avatar'/>
        <p className='text-lg font-medium mb-4'>{props.name}</p>
        <p className='hyphens-auto px-3 text-center mb-4'>{props.description}</p>
        <p className='text-center font-semibold text-lg'>{props.rating}</p>
    </div>
  )
}

export default ReviewCard