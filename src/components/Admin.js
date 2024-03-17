import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
export default function Admin() {
    const notify10=()=>{toast.success("Product created Successfully")}
    const notify1=()=>{toast.error("Failed")}
    const [image,setimage] = useState();
    const url = "http://localhost:4000/createproduct"
    const [data,setdata] = useState({name:"",description:"",oldPrice:"",newPrice:"",category:""});
    const cangehandler = e => {
        setdata({...data, [e.target.name]: e.target.value})
     }
    
    const clicked = (e)=>{
        e.preventDefault();
        console.log(data)
        senddata();
    }
    const imagehandler = (e)=>{
      console.log(e.target.files[0])
      setimage(e.target.files[0]);
    }
    const senddata = async ()=>{
        const response = await fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
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
          if(response.status===200){
            notify10();
          }
          else{
            notify1();
          }
        }

        
       
    
  return (
    <div className='mb-[150px]'>
      <Toaster></Toaster>
      <div className='h-[50px] flex justify-center items-center  bg-blue-500 text-white'><h1 className='text-2xl'>Welcome admin</h1></div>
      <div className='flex justify-center flex-col items-center'>
        <h1 className='text-xl my-[30px]'>Create New product  </h1>
       
        <form className='flex bg-blue-400 rounded-3xl  py-11 justify-center items-center flex-col' action="">
            <label required htmlFor="name">Enter Product Name</label><input name="name"    onChange={cangehandler} type="text" />
            <label htmlFor="name">Enter Product Description</label><input name="description" required onChange={cangehandler} type="text" />
            <label htmlFor="name">Enter Product Old Price</label><input name="oldPrice" required onChange={cangehandler} type="text" />
            <label htmlFor="name">Enter Product New Price</label><input name="newPrice" required onChange={cangehandler} type="text" />
            <label htmlFor="name">Enter Product Category</label><input name="category" required onChange={cangehandler} type="text" />
            <label htmlFor="" className='flex justify-center items-center flex-col'>Upload Product image
            {
              image && (<img src={URL.createObjectURL(image)} alt="" width="60px" height="60px" />)
            } 
            <input type="file" className='flex justify-center items-center self-center' onChange={imagehandler} name="" id="" /></label>
            <button type='none' onClick={()=>setimage(null)}>remove</button>
           
           

            
            <button className='mt-5 border-2 px-3 py-1 rounded-full bg-orange-100' onClick={clicked}>Add product</button>
            
        </form>

      </div>

    </div>
  )
}
