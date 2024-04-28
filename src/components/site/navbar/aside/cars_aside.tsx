"use client";

import { Checkbox } from '@/components/ui/checkbox'
import { User_scroll_top_56 } from '@/hooks/user_scroll_top';
import { cn } from '@/lib/utils';
import React from 'react'
import { SiAudi, SiBmw, SiJeep, SiToyota, SiVolkswagen } from 'react-icons/si'

export const Cars_aside = () => {
    const is_scrolling = User_scroll_top_56()
  return (
    <aside className={cn(" fixed w-80 dark:bg-gray-950 z-30 bg-white h-screen px-2" , is_scrolling && " pt-14")}>
        <div className=' mt-3'>
            <span className=' text-lg text-gray-500 font-semibold'>Brand</span>
            {/* all brands */}
            <div className=' flex gap-2 flex-col ml-3'>
                <div className=' mt-2 flex gap-2 items-center'>
                    <Checkbox value={"toyota"} id='toyota'/>
                    <label htmlFor="toyota" className=' flex gap-2 cursor-pointer'><SiToyota size={24} /><span>Toyota</span></label>
                </div>
                <div className=' mt-2 flex gap-2 items-center'>
                    <Checkbox value={"bmw"} id='bmw'/>
                    <label htmlFor="bmw" className=' flex gap-2 cursor-pointer'><SiBmw size={24} /><span>BMW</span></label>
                </div>
                <div className=' mt-2 flex gap-2 items-center'>
                    <Checkbox value={"volkswagen"} id='volkswagen'/>
                    <label htmlFor="volkswagen" className=' flex gap-2 cursor-pointer'><SiVolkswagen size={24} /><span>Volkswagen</span></label>
                </div>
                <div className=' mt-2 flex gap-2 items-center'>
                    <Checkbox value={"jeep"} id='jeep'/>
                    <label htmlFor="jeep" className=' flex gap-2 cursor-pointer'><SiJeep size={24} /><span>Jeep</span></label>
                </div>
                <div className=' mt-2 flex gap-2 items-center'>
                    <Checkbox value={"audi"} id='audi'/>
                    <label htmlFor="audi" className=' flex gap-2 cursor-pointer'><SiAudi size={24} /><span>Audi</span></label>
                </div>
            </div>
        </div>
    </aside>
  )
}
