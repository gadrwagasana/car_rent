import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsPlayCircleFill } from 'react-icons/bs'
import { GoArrowUpRight } from 'react-icons/go'

export const SitHero = () => {
  return (
    <main className=' flex gap-3 max-lg:flex-col-reverse'>
      <div className=' w-1/2 max-lg:w-full justify-center items-center flex flex-col space-y-8'>
        <h1 className='font-bold text-5xl text-base-content text-center'>Make live easy with Us, <br /><strong> Rent car</strong></h1>
        <p className=' text-gray-500 text-center '>
          In the navbar of your car rental and sales website, you can include the following sections to help users navigate the site easily.
        </p>
        {/* know more information */}
        <div className=' flex gap-12 mt-6'>
          <Link href={"/register"} className=' button-animation btn btn-lg btn-success text-white shadow-lg shadow-success group/account'>Create account <GoArrowUpRight className='group-hover/account:scale-110 duration-300' size={20}/></Link>
          <button className='  btn btn-lg btn-warning text-white shadow-lg shadow-warning'>Why Us <BsPlayCircleFill size={20}/></button>
        </div>
      </div>
      {/* images */}
      <div className=' relative h-96 w-1/2 shadow-lg max-lg:w-full'>
        <div className='absolute z-20  border-3  border-success rounded-full justify-center items-center w-full h-full flex text-success '>
          {/* <BsPlayCircleFill size={54} className=''/> */}
        </div>
        <Image src={"/images/5.jpg"} fill className=' object-cover rounded-box shadow-lg' property='' alt='hero image'/>
      </div>
    </main>
  )
}
