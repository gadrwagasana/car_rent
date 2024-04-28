import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsPlayCircleFill } from 'react-icons/bs'
import { GoArrowUpRight } from 'react-icons/go'

export const SitHero = () => {
  return (
    <main className=' flex gap-3'>
      <div className=' w-1/2 justify-center items-center flex flex-col space-y-8'>
        <h1 className='font-bold text-5xl text-base-content text-center'>Make live easy with Us, <br /><strong> Rent car</strong></h1>
        <p className=' text-gray-500 text-center '>
          In the navbar of your car rental and sales website, you can include the following sections to help users navigate the site easily.
        </p>
        {/* know more information */}
        <div className=' flex gap-12 mt-6'>
          <Link href={"/register"} className=' button-animation btn btn-lg btn-success text-white shadow-lg shadow-success'>Create account <GoArrowUpRight size={20}/></Link>
          <button className=' button-animation btn btn-lg btn-warning text-white shadow-lg shadow-warning'>Why Us <BsPlayCircleFill size={20}/></button>
        </div>
      </div>
      {/* images */}
      <div className=' relative h-96 w-1/2 shadow-lg'>
        <Image src={"/images/2.jpg"} fill className=' object-cover rounded-box shadow-lg' property='' alt='hero image'/>
      </div>
    </main>
  )
}
