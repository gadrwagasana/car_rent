"use client";

import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Style_button } from './styles'

interface Props {
    car_image : string[];
    profile_image : string ;
    profile_name : string ;
    product_amount : number ;
    children ?: React.ReactNode;

}

export const Car_card = ({car_image ,children, product_amount , profile_image , profile_name} : Props) => {
    let [day , setDay] = useState<number>(1);
    const amount = product_amount * day;

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
    <blockquote className=' h-96 w-96 max-md:w-[300px] max-sm:w-60 max-lg:w-full rounded-box shadow-lg bg-white dark:bg-gray-950 p-2'>
        {/* images */}
        <Link href={"/product"} className='  w-full h-1/2 carousel carousel-center rounded-box'>
            {car_image && (
                <React.Fragment>
                    {car_image.map((items , index) => {
                    return (
                        <div key={index + 1} className=' carousel-item h-full w-full relative'>
                            <Image className=' object-cover rounded-md' src={items} alt='car image' fill priority/>
                        </div>
                    )
                    })}
                </React.Fragment>
            )}
        </Link>
        <div className=' mt-2 space-y-2'>
            <Link href={"/profile"} className=' flex gap-4 items-center cursor-pointer'>
                <div className=' relative size-10 rounded-full'><Image className=' rounded-full object-cover' fill priority src={profile_image} alt={cn("profile image for:" , )}/></div>
                <span className=' text-xl font-mono font-semibold capitalize'>{profile_name}</span>
            </Link>
            {children  ?
              children : 
              <div className='text-gray-500 text-base grid grid-cols-2'>
                <span><span>Brand :</span> Toyota</span>
                <span><span>Fuel type :</span> Petrol</span>
                <span className=' flex'><span>Year manufacture : </span> 2008</span>
              </div>
             }
            <div>
            <div className=' flex gap-4 items-center justify-center mt-2'>
                {/* <span>5000</span> */}
                <Link href={"/"} className={cn(Style_button() , "")}>{amount} Rwf</Link>
                <div className=' flex gap-3 max-md:gap-1 items-center text-white'>
                    <span className=' text-black dark:text-white'>{day}</span>
                    <span className=' capitalize text-lg text-black dark:text-white'>day</span>
                    <button onClick={toggledDayIncrement} className={cn(Style_button({type : "icon"}), " text-black dark:text-white")}>+</button>
                    <button onClick={toggledDayDecrement} className={cn(Style_button({type : "icon"}), " text-black dark:text-white")}>-</button>
                </div>
            </div>
            </div>
        </div>
    </blockquote>
  )
}
