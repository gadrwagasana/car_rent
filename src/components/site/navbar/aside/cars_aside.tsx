"use client";

import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { User_scroll_top_56 } from '@/hooks/user_scroll_top';
import { cn } from '@/lib/utils';
import React from 'react'
import { SiAudi, SiBmw, SiJeep, SiToyota, SiVolkswagen } from 'react-icons/si'

export const Cars_aside = () => {
    const is_scrolling = User_scroll_top_56()
  return (
    <aside className={cn(" fixed w-80 dark:bg-gray-950 z-30 bg-white py-2 overflow-scroll overflow-x-hidden max-h-screen mb-4 px-2" , is_scrolling && " pt-14")}>
        <div className=' mt-3'>
            <span className=' text-lg font-semibold'>Brand</span>
            {/* all brands */}
            <div className=' flex gap-2 flex-col ml-3 text-gray-500'>
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
            {/* car model */}
            {/* price */}
            <div className=' mt-3'>
                <span className='text-lg font-semibold capitalize'>Price per day</span>
                <RadioGroup defaultValue='default' className=' mt-3 ml-3 flex flex-col gap-3 text-gray-500 '>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="default" id="r1" />
                        <Label htmlFor="r1">Default</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="20kTo50" id="r2" />
                        <Label htmlFor="r2" className='cursor-pointer capitalize'><strong className=' uppercase'>20k RWF</strong> to <strong className=' uppercase '>50k RWF</strong></Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="50kTo100" id="r3" />
                        <Label htmlFor="r3" className='cursor-pointer capitalize'><strong className=' uppercase'>50k RWF</strong> to <strong className=' uppercase '>100k RWF</strong></Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="100kTo150" id="r4" />
                        <Label htmlFor="r4" className='cursor-pointer capitalize'><strong className=' uppercase'>100k RWF</strong> to <strong className=' uppercase '>150k RWF</strong></Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="150kTo300" id="r5" />
                        <Label htmlFor="r5" className='cursor-pointer capitalize'><strong className=' uppercase'>150k RWF</strong> to <strong className=' uppercase '>300k RWF</strong></Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="300kTo500" id="r6" />
                        <Label htmlFor="r6" className=' capitalize cursor-pointer'><strong className=' uppercase'>300k RWF</strong> to <strong className=' uppercase '>500k RWF</strong></Label>
                    </div>
                </RadioGroup>
            </div>
        </div>
    </aside>
  )
}
