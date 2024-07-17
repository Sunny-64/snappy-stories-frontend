import React from 'react'
import Image from 'next/image'

const Ui = (props:any) => {
  return (
    <div className="md:grid md:grid-cols-2 h-full">
    <div className="w-full h-full flex flex-col justify-center md:pr-10 xl:pr-40">
          <p className="text-4xl md:text-5xl lg:text-6xl mb-3 font-bold">{props.title}</p>
          <p className="mb-3 text-justify hyphens-auto">{props.description}</p>
          {props.buttons.map((btn:any, i:number) => (<button key={i} className="px-4 py-2 rounded-sm bg-blue text-white w-1/3 md:w-1/4 lg:w-1/6">{btn}</button>))}
      </div>
      <div className="flex justify-center items-center">
        <Image src={props.image} className="w-full xs:w-[90%] md:w-full lg:w-[80%]" alt="hero" width={0} height={0} priority />
      </div>
 </div>
  )
}

export default Ui