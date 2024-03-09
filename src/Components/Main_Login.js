import React from 'react'
import { IoMdPlay } from "react-icons/io";
import logo from '../Assets/bg removed.png'
import 'animate.css';

export default function Main_Login() {
  return (
        <div className='w-[90%] animate__animated animate__zoomIn h-4/5 mx-auto shadow-md'>
            <div className='flex flex-row w-full h-full relative'>
        {/* Gradient background */}
        <div className='grad w-full rounded-sm h-full relative'>
          {/* Transparent white overlay */}
          <div className='absolute title inset-0 flex items-center justify-center'>
            {/* Absolute-positioned content */}
            <div className='text-white font-bold  w-[60%] bg-white bg-opacity-20 p-4 border border-slate-200 h-[60%]'>
                <div className='flex animate__animated animate__lightSpeedInLeft flex-col items-start justify-center text-4xl tracking-wide leading-[1.3]'>
                    
                    <span className='flex gap-4'> <IoMdPlay size={50}/>Digital Platform for Distance </span>
                    <span className='text-black flex ml-10'>learning.</span>
                </div>
                <div className='text-[12px] font-light pl-10 mt-5 tracking-wide animate__animated animate__fadeInLeft'>
                    You will never know everything. <br /> But You will know More.
                </div>
            </div>
          </div>
        </div>

                <div className='w-full h-full bg-white rounded-sm'>
                    
                    <div className='w-[80%] top-[10%] relative h-[80%] mx-auto'>

                        <img src={logo} alt="logo" className='w-[50px] mb-4'/>

                        <div className='flex animate__animated animate__backInDown flex-col gap-1 my-9'>
                            <h1 className='font-semibold text-xl'>Hey, hello <span>👋</span></h1>
                            <p className='text-[12px] tracking-wide'>Enter the information you entered while registering.</p>
                        </div>

                        <form className='mt-5 w-4/5'>
                            <div className='flex flex-col'>
                            <label className='text-sm font-semibold' htmlFor="email">Email</label>
                            <input type="email" className="outline-none border border-slate-300 shadow-sm p-1 rounded-sm" name='email' id='email'/>
                            </div>

                            <div className='flex flex-col mt-3'>
                                <label  className='text-sm font-semibold' htmlFor="password">Password</label>
                                <input className="outline-none border border-slate-300 shadow-sm p-1 rounded-sm" type="password" name='password' id='password'/>
                            </div>
                        </form>
                        
                    </div>

                </div>
            </div>
        </div>
  )
}
