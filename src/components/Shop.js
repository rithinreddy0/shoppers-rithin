import React, { useEffect, useState } from 'react'
import Hero from './Hero'
import Newletter from './Newletter'
import Card from './Card'

export default function Shop() {
  const [products,setproducts] = useState([]);
    useEffect(()=>{
      receivedata();
    })
    const url = "https://backend-4-zfpb.onrender.com/getallproducts"
    async function receivedata(){
      const response = await fetch(url);
      const data = await response.json();
      setproducts(data.data);
     
      
    }
  return (
    <div>
      <Hero/>
      {/* <Card name='Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse' newPrice="200" oldPrice="400"/> */}
      <h1  className='text-center text-6xl my-7 mx-4 text-orange1'>Collections</h1>
      <div className='flex justify-center items-center gap-9 flex-wrap'>
      {
      products.map((product)=>{
        return <Card  key={product._id} name={product.name} description={product.description} newPrice={product.newPrice} oldPrice={product.oldPrice} />
      })
      }
      </div>
      <Newletter/>
    </div>
  )
}
