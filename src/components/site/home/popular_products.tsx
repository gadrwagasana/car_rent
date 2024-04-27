"use client";

import { Style_button } from '@/components/my_ui/styles'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export const Site_popular_Car = () => {
    let [day , setDay] = useState<number>(1);
    const amount = 400000 * day;

    const toggledDayIncrement = () => {
        if (day >= 1 ) {
            setDay (day ++);
        }
    }
    const toggledDayDecrement = () => {
        if (day >= 1 ) {
            setDay (day --);
        }
    }
  return (
    <div className='  bg-base-content relative rounded-md'>
        <div className=' absolute z-30 top-1/2 flex justify-between w-full'><ChevronLeft size={32} className=' hover:text-success duration-300 hover:scale-110 cursor-pointer' /> <ChevronRight size={32} className=' hover:text-success duration-300 hover:scale-110 cursor-pointer'/></div>
        <div className=' relative  h-80 w-full'>
            {/* bg image */}
            <div aria-hidden className=' bg-black/30 dark:bg-black/90 z-10 absolute w-full h-full blur-md '/>
            <Image src={"/images/5.jpg"} fill priority alt='car image' className=' object-cover rounded-md blur-md opacity-80'/>
            {/* body */}
            <div className=' flex items-center pl-1 lg:pl-2 justify-between z-20 absolute w-full h-full gap-4'>
                {/* image */}
                <Image src={"/images/5.jpg"} height={520} width={520} priority className=' rounded-md' alt='car image'  />
                {/* description */}
                <div className=' h-full w-full bg-cover bg-base-300 rounded-r-md p-4 justify-center items-center flex flex-col gap-2'>
                    <span className=' text-2xl font-bold font-mono capitalize'>Toyota car</span>
                    <p className=' text-center text-gray-500'>In the navbar of your car rental and sales website, you can include the following sections to help users navigate the site easily.</p>
                    {/* amount */}
                    <div className=' flex gap-4 items-center'>
                        {/* <span>5000</span> */}
                        <Link href={"/"} className={cn(Style_button() , "")}>{amount} Rwf</Link>
                        <div className=' flex gap-3 items-center'>
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
