import React from 'react'
import hero from '../Assets/hero_image.png'
export default function Hero() {
  return (
    <div className='w-full h-full'>
      <div className='hero  pb-10 justify-around flex-wrap-reverse items-center bg-slate-500 flex '>
        <div className='flex flex-col flex-wrap gap-4 font-medium justify-center px-6 py-6 items-center hero1'>
          <h2 className='text-[3vw] lg:text-[2vw]'>NEW ARRAIALS ONLY</h2>
          <h1 className='text-[5vw] lg:text-[3vw]' >New</h1>
          <h1 className='text-[5vw] lg:text-[3vw] text-center'>Collections for Everyone</h1>
          <button className='bg-blue1 rounded-3xl h-[40px] text-white font-normal w-[170px]'>Latest Collections</button>
        </div>
        <div>
          <img src={hero} height="0px" width='400px' alt="" />
        </div>
      </div>
    </div>
  )
}
