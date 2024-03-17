import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function LoginSignup({setloggedin}) {
  const navigate = useNavigate();
  const notify1 = ()=>toast.success("Account created Successfully");
  const notify2 = ()=>toast.error("Account Already Exists");
  const toast5 = ()=>toast.success("Logged in");

  const notify3 = ()=>toast.error("Inavlid Details");
  const url = "https://backend-4-zfpb.onrender.com/signup";
  const lurl = "https://backend-4-zfpb.onrender.com/login"
  async function signupaccount(){
    const response = await fetch(url,{
      method:"POST",
      mode:"no-cors",
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
       headers: {
          "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(signupdata),
    })
    const output = (await response.json());
    console.log(output)
    if(output.success===true){
      notify1();
      setlogin(true);
    }
    if(output.data===100){
      notify2();
    }
   
  }
  async function loginaccount(){

    const response  = await fetch(lurl,{
      method:"POST",
      mode:"no-cors",
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
       headers: {
          "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(logindata),
    })
    const output = await response.json();
    if(response.status===401){
      notify3();
    }
    if(response.status===200){
      console.log(output);
      toast5();
      setloggedin(true)
      navigate("/");
    }
  }
  const [login,setlogin ] = useState(true);
  const [logindata,setlogindata] = useState({"email":"","password":""});
  function loginchange(e){
    setlogindata({...logindata, [e.target.name]: e.target.value})
  }
  const [signupdata,setsignupdata] = useState({"name":"","email":"","password":""});
  function signupchange(e){
    setsignupdata({...signupdata, [e.target.name]: e.target.value})
  }
  function loginclick(e){
    e.preventDefault();
    console.log(logindata);
    loginaccount();
  }
  function signupclick(e){
    e.preventDefault();

    
    signupaccount();
  }
  return(
    <div>
      <Toaster/>
      {
        login?
        (
          <div className='flex justify-center items-center  h-[89.5vh]  bg-purple-300 mb-7'>
            <div className='flex justify-center items-center bg-white px-[40px] py-[50px]'>
              <div className='flex justify-center items-start  flex-col'>
                <h1 className='mb-7 text-2xl'>Login</h1>
                <form action="" className='flex justify-center items-start  flex-col'>
                <input onChange={loginchange} required name='email' className='border-2 text-center border-gray-400 h-[5vh] w-[248px] mb-5' type="text"placeholder='Email Address' />
                <input onChange={loginchange} name='password' className='border-2 text-center border-gray-400 h-[5vh] w-[248px]' type="password" placeholder='Password' />
                <button onClick={loginclick} className='mt-8 border-2 bg-orange1 h-[40px] w-[240px] text-white'>Continue</button>
                
                </form>
                <button onClick={(e)=>{
                  e.preventDefault();
                  setlogin(!login)}} className='ml-6 mt-3'>Create new Account</button>
              </div>
            </div>
          </div>
        ):
        (
          <div className='flex justify-center items-center  h-[89.5vh]  bg-purple-300 mb-7'>
            <div className='flex justify-center items-center bg-white px-[40px] py-[50px]'>
              <div className='flex justify-center items-start  flex-col'>
                <h1 className='mb-7 text-2xl'>Login</h1>
                <form action="" className='flex justify-center items-start  flex-col'>
                <input  onChange={signupchange} name='name' className='border-2 text-center border-gray-400 h-[5vh] w-[248px] mb-5' type="text" placeholder='Enter Name' />
                <input  onChange={signupchange}name='email' className='border-2 text-center border-gray-400 h-[5vh] w-[248px] mb-5' type="text"placeholder='Email Address' />
                <input  onChange={signupchange} name='password' className='border-2 text-center border-gray-400 h-[5vh] w-[248px]' type="password" placeholder=' Password' />
                <button onClick={signupclick}  className='mt-8 border-2 bg-orange1 h-[40px] w-[240px] text-white'>Continue</button>
                
                </form>
                <button onClick={(e)=>{
                  e.preventDefault();
                  setlogin(!login);
                }
                  } className='ml-6 mt-3'>Existing User</button>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

