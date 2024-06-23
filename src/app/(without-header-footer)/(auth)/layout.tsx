import React from 'react'

const layout = ({children} : {children : React.ReactNode}) => {
  return (
    <div className='md:grid md:grid-cols-4'>
        <div className='md:col-span-1 bg-blue-700'>left side of the layout</div>
        <div className='md:col-span-3  bg-red-500'>{children}</div>
    </div>
  )
}

export default layout