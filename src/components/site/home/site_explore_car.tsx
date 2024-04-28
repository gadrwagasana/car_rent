import { Car_card } from '@/components/my_ui/car_card'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

export const Site_explore_car = () => {
  return (
    <div className=' w-full'>
        <div className=' flex justify-between w-full'>
        <h2 className=' text-4xl capitalize font-semibold'>Explore <span className=' text-success'>Car</span></h2>
        <Link href={"/cars"} className=' link link-success capitalize  flex gap-2 group/link items-center'>All cars <BsArrowRight size={20} className='group-hover/link:scale-x-110 duration-300 mt-1'/></Link>
        </div>
        <div className=' mt-3 space-x-2 grid grid-cols-3 max-lg:grid-cols-2 space-y-3'>
            {[...Array(6)].map((items, index ) => (
                <Car_card key={index + 1} product_amount={5000} car_image={["/images/5.jpg" , "/images/1.jpg", "/images/4.jpg"]} profile_image='/images/2.jpg' profile_name='bruno rwanda'/>
            ))}
        </div>
    </div>
  )
}
