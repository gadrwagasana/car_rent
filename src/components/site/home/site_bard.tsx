"use client";

import { Style_button } from '@/components/my_ui/styles'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { GoArrowUpRight } from 'react-icons/go'

export const Site_bard = () => {
    const [bigImage , setBigImage] = useState("/images/3.jpg")
  return (
    <div className=' flex flex-col'>
        <h2 className=' text-4xl capitalize font-semibold'>Choose <span className=' text-success'>brand</span></h2>
        <div className=' flex gap-2 mt-2 space-x-4'>
            {[...Array(7)].map((items, index ) => (
                <Link href={"/cars"} key={ index + 1}>
                    <Image className='grayscale-[70%] hover:grayscale-0' src={`/icons/${index + 1}.png`} alt={cn("Brand for :")} height={72} width={72} priority/>
                </Link>
            ))}
            {[...Array(7)].map((items, index ) => (
                <Link href={"/cars"} key={ index + 1}>
                    <Image src={`/icons/${index + 1}.png`} className='grayscale-[70%] hover:grayscale-0' alt={cn("Brand for :")} height={72} width={72} priority/>
                </Link>
            ))}
        </div>
        {/* top cars */}
        <div className=' mt-4 px-3 flex max-lg:flex-col'>
            <div className=' w-1/2 max-lg:w-full'>
                <div className=' flex gap-3'>
                    <h3 className=' font-bold text-6xl  font-serif'>Toyota <span className=' text-success'>cars</span></h3>
                    <Image src={"/icons/2.png"} priority sizes='100wv' alt='toyota cars' height={82} width={82}/>
                </div>
                <p className=' text-gray-500'>Best car form <strong className=' capitalize'>toyota</strong> sales website, you can include the following sections to help users navigate the site easily.</p>
                {/* start chart */}
                <div className=' mt-4 flex gap-4 max-lg:justify-center max-md:gap-8'>
                    <Link href={"/car"} className={cn(Style_button() , " capitalize button-animation")} >Rent now <GoArrowUpRight className='group-hover/account:scale-110 duration-300' size={20}/></Link>
                    <Link href={"/car"} className={cn(Style_button() , " capitalize button-animation hover:bg-success bg-warning shadow-warning hover:shadow-success")} >All toyota cars <GoArrowUpRight className='group-hover/account:scale-110 duration-300' size={20}/></Link>
                </div>
                {/* customer */}
                <div className=' flex  gap-6 mt-12'>
                    {/* brand */}
                    <div className=' flex flex-col items-center'>
                        <div className=' font-bold text-4xl'>1.7K <span className=' text-success'>+</span></div>
                        <span className=' text-gray-500'>Rented</span>
                    </div>
                    <div className=' flex flex-col items-center'>
                        <div className=' font-bold text-4xl'>300 <span className=' text-success'>+</span></div>
                        <span className=' text-gray-500'>Cars</span>
                    </div>
                </div>
                {/* images */}
                <div className=' mt-8 flex gap-2'>
                    <div onClick={() => setBigImage("/images/2.jpg")} className={cn(" relative size-52  cursor-pointer" , bigImage === "/images/2.jpg" && "border-2 border-success rounded-box")}>
                        <Image priority className=' object-cover rounded-box'  fill src={"/images/2.jpg"} alt='product images'/>
                    </div>
                    <div onClick={() => setBigImage("/images/7.jpg")} className={cn(" relative size-52  cursor-pointer" , bigImage === "/images/1.jpg" && "border-2 border-success rounded-box")}>
                        <Image priority className=' object-cover rounded-box'  fill src={"/images/7.jpg"} alt='product images'/>
                    </div>
                    <div onClick={() => setBigImage("/images/3.jpg")} className={cn(" relative size-52  cursor-pointer" , bigImage === "/images/5.jpg" && "border-2 border-success rounded-box")}>
                        <Image priority className=' object-cover rounded-box'  fill src={"/images/5.jpg"} alt='product images'/>
                    </div>
                </div>
            </div>
            {/* big image */}
            <div className=' w-1/2 max-lg:w-full'>
                <Link href={"/cars"} >
                    <div className=' w-full h-full max-lg:h-80 max-lg:mt-4 relative'><Image src={bigImage} fill alt='images' priority className=' object-cover rounded-box'/></div>
                </Link>
            </div>
        </div>
    </div>
  )
}
