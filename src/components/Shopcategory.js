import React, { useEffect, useState } from 'react'
import Men from '../Assets/banner_mens.png'
import Women from '../Assets/banner_women.png'
import Kids from '../Assets/banner_kids.png'
import Card from './Card'
export default function Shopcategory(props) {
  const [products,setproducts] = useState([]);
  useEffect(()=>{
    
    getdata();
  });
  useEffect(()=>{
    if(props.category==="Men"){
      setimage(Men)
    }
    if(props.category==="Women"){
      setimage(Women)
    }
    if(props.category==="Kids"){
      setimage(Kids)
    }
  },[props.category])
  const [img ,setimage] =  useState();
  const data = {
    category:props.category,
  }
  
  const url = "http://localhost:4000/getcategory"
  async function  getdata(){
    const response = await fetch(url,{
      method:"POST",
      mode:"cors",
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
       headers: {
          "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      let h1 = await response.json();
      h1 = h1.data;
      setproducts(h1);
      


    
  }
  return (
    <div>
      <div><img src={img} alt=""  /></div>
      <h1 className='text-center text-orange1 px-7 py-7 font-medium lg:text-[3vw] md:text-[3vw] text-[6vw]'>{props.category} Collection</h1>
      <div className='flex justify-center items-center gap-9 flex-wrap'>
        {
          products.length===0&&(
            <h1 className='text-[3vw] mb-[100px] '>No Products</h1>
          )
        }
      {
      products.map((product)=>{
        return <Card  key={product._id} name={product.name} description={product.description} newPrice={product.newPrice} oldPrice={product.oldPrice} />
      })
      }
      </div>
    </div>
  )
}
