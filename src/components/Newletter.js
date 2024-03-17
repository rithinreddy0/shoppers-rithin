import React from 'react'

export default function Newletter() {
  return (
    <div className='mt-[100px]'>
      <div className='hero1 h-[242px] flex justify-center items-center flex-col gap-9'>
        <h1 className='text-5xl font-semibold text-gray1'>Get Exclusive Offers On Your Email</h1>
        <h2 className='font-normal text-2xl'>Suscribe to our Newsletter and Stay Updated</h2>
        <input className='w-[60vw] h-[70px] border-2 border-gray-500 text-center' placeholder='Enter your Email here' type="text" />

      </div>
    </div>
  )
}
