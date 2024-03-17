import React from 'react'
import img from '../Assets/product_16.png'
export default function Card(props) {
  return (
    <div>
      <div className='w-[200px] flex border-2 border-gray-600 gap-2 rounded-2xl px-5 py-4 h-250px] flex-col justify-center items-center lg:h-[400px] lg:w-[300px]'>
        <img src={img} width="180px"  className='lg:w-[200px]' alt="" />
        <h1 className='text-xl font-medium text-center'>{props.name}</h1>
        <h3>{props.description}</h3>
        <div className='flex justify-center items-center gap-10'>
            <h1>${props.newPrice}</h1>
            <h1 className='line-through'>${props.oldPrice}</h1>
        </div>
      </div>
    </div>
  )
}
