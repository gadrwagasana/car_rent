"use client";

import { Style_button } from '@/components/my_ui/styles'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export const Site_popular_Car = () => {
    let [day , setDay] = useState<number>(1);
    const [big_image , setBig_image ] = useState("/images/5.jpg")
    const amount = 400000 * day;

    const toggledDayIncrement = () => {
        if (day >= 1 ) {
            setDay (day = day  + 1);
        }
    }
    const toggledDayDecrement = () => {
        if (day >= 1 ) {
            setDay (day = day - 1);
        }
    }
  return (
    <div className='  bg-base-content  relative rounded-box max-lg:mt-20'>
        <div className=' absolute z-30 top-1/2 flex justify-between w-full'><ChevronLeft size={32} className=' hover:text-success duration-300 hover:scale-110 cursor-pointer' /> <ChevronRight size={32} className=' hover:text-success duration-300 hover:scale-110 cursor-pointer'/></div>
        <div className=' relative  h-80 w-full max-lg:h-full max-lg:bg-base-content'>
            {/* bg image */}
            <div aria-hidden className=' bg-black/30 dark:bg-black/90 z-10 absolute w-full h-full blur-md  rounded-box'/>
            <Image src={"/images/5.jpg"} fill priority alt='car image' className=' object-cover rounded-box blur-md opacity-80'/>
            {/* body */}
            <div className=' flex max-lg:flex-co items-center pl-1 lg:pl-2 justify-between z-20 absolute max-lg:relative w-full h-full gap-4 max-lg:flex max-lg:flex-col'>
                {/* image */}
                <Link href={"/car"} className="w-3/5 max-lg:w-full h-72 relative ">
                    <Image src={big_image} fill priority className=' rounded-box object-cover' alt='car image'  />
                </Link>
                {/* other images */}
                <div className=' flex flex-col gap-2 max-lg:flex-row max-lg:w-full'>
                    <div onClick={() => setBig_image("/images/5.jpg")} className={cn("relative size-36 max-lg:w-full cursor-pointer rounded-box" , big_image === "/images/5.jpg" && "border-2 border-success ")} >
                        <Image src="/images/5.jpg" alt='image car' priority fill className=' object-cover rounded-box'/>
                    </div>
                    <div onClick={() => setBig_image("/images/1.jpg")} className={cn("relative size-36 max-lg:w-full cursor-pointer rounded-box" , big_image === "/images/1.jpg" && "border-2 border-success ")}>
                        <Image src="/images/1.jpg" alt='image car' priority fill className=' object-cover rounded-box max-lg:w-full'/>
                    </div>
                </div>
                {/* description */}
                <div className=' h-full w-full bg-cover bg-base-100 dark:bg-gray-900 rounded-r-md p-4 justify-center items-center flex flex-col gap-2'>
                    <span className=' text-2xl font-bold font-mono capitalize dark:text-white text-black'>Toyota car</span>
                    <p className=' text-center text-gray-500'>In the navbar of your car rental and sales website, you can include the following sections to help users navigate the site easily.</p>
                    {/* amount */}
                    <div className=' flex gap-4 items-center text-black'>
                        {/* <span>5000</span> */}
                        <Link href={"/"} className={cn(Style_button() , " max-lg:w-52")}>{amount} Rwf</Link>
                        <div className=' flex gap-3 items-center dark:text-white text-black'>
                            <span>{day}</span>
                            <span className=' capitalize text-lg'>day</span>
                            <button onClick={toggledDayIncrement} className={cn(Style_button({type : "icon"}))}>+</button>
                            <button onClick={toggledDayDecrement} className={cn(Style_button({type : "icon"}))}>-</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
