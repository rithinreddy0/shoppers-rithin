import React from 'react'
import logo from '../Assets/logo.png'

export default function Footer() {
  return (
    <div>
      <div className='flex justify-center items-center flex-col gap-8'>
        <div className='flex justify-center items-center'>
            <img src={logo} alt="" />
            <h1 className='text-3xl'>Shoppers</h1>
        </div>
        <div className='flex flex-wrap justify-center items-center gap-6'>
            <h5 className='text-lg cursor-pointer'>Products</h5>
            <h5 className='text-lg cursor-pointer'>Company</h5>
            <h5 className='text-lg cursor-pointer'>Offices</h5>
            <h5 className='text-lg cursor-pointer'>About</h5>
            <h5 className='text-lg cursor-pointer'>Contact Us</h5>
        </div>
      </div>
      <br />
      <hr />
      <h1 className='text-center mt-3 mb-3'>CopyRight @2024 . All Rights Reserved</h1>
    </div>
  )
}
