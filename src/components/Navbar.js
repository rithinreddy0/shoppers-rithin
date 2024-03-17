import React, { useState } from 'react'
import logo from '../Assets/logo.png'
import carticon from '../Assets/cart_icon.png'
import { NavLink } from 'react-router-dom'
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
export default function Navbar({loggedin,setloggedin}) {
    const count = (0);
    const [showmenu , setshowmenu] = useState(false);
    function tooglehandler(){
    setshowmenu(!showmenu);
    }

  return (
    <>  
    <div className='flex w-full justify-around items-center h-[70px] '>
      <div className='flex items-center'><img width='50px' height='50px' src={logo} alt="" />
      <h1 className='text-3xl font-medium text-blue1'>Shoppers</h1></div>
      <div className='text-blue1  flex gap-[40px] items-center justify-between lgmenu'>
        <h5 className='text-[18px]'><NavLink to='/shop'>Shop</NavLink></h5>
        <h5 className='text-[18px]'><NavLink to='/men'>Men</NavLink></h5>
        <h5 className='text-[18px]'><NavLink to='/women'>Women</NavLink></h5>
        <h5 className='text-[18px]'><NavLink to='/kids'>Kids</NavLink></h5>
        
      </div>
      <div className='flex gap-[20px] justify-center items-center relative'>
        <button className='text-[16px] bg-slate-300 rounded-2xl h-[35px] w-[80px]'>
          {
            loggedin?(<NavLink onClick={()=>{setloggedin(false)}} to='/'>Log Out</NavLink>):(<NavLink to='login'>Login</NavLink>)
          }
        </button>
        <NavLink to="/cart"><img src={carticon}  className="relative"width="30px" height="30px" alt="" /></NavLink>
        <div className='absolute top-[-4px] z-30 left-[122px] font-extrabold text-white h-[18px] rounded-full  text-center w-[18px] bg-gray-700 flex justify-center items-center'>{count}</div>
      </div>
      {
            !showmenu?(<CiMenuFries onClick={tooglehandler} size={35} className='menulogo' />):(<IoMdClose onClick={tooglehandler} size={35} className='menulogo' />)
          }
    </div>
    {
        showmenu&&(
            <div className='text-blue1  flex gap-[40px] items-center justify-center  w-full h-full bg-blue-200 mbmenu'>
    <h5 className='text-[18px]'><NavLink to='/shop'>Shop</NavLink></h5>
    <h5 className='text-[18px]'><NavLink to='/men'>Men</NavLink></h5>
    <h5 className='text-[18px]'><NavLink to='/women'>Women</NavLink></h5>
    <h5 className='text-[18px]'><NavLink to='/kids'>Kids</NavLink></h5>
    
  </div>
        )
    }
  </>
  )
}
