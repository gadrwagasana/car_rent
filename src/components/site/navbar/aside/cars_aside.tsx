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
    <aside className={cn(" fixed w-80 dark:bg-gray-950 z-30 bg-white py-2 overflow-scroll overflow-x-hidden h-screen max-h-screen mb-4 px-2" , is_scrolling && " pt-14")}>
        <div className=' mt-3'>
            <span className=' text-lg font-semibold'>Car Brand</span>
            {/* all brands */}
            <div className=' flex gap-2 flex-col text-gray-500'>
                {/*  */}
                <div className="form-control">
                    <label className="cursor-pointer label justify-start gap-4">
                        <input type="checkbox" className="checkbox checkbox-success text-white" />
                        <span className="label-text text-base gap-2 flex"><SiToyota size={24} className='  text-success' /> Toyota</span>
                    </label>
                </div>
                <div className="form-control">
                    <label className="cursor-pointer label justify-start gap-4">
                        <input type="checkbox" className="checkbox checkbox-success text-white" />
                        <span className="label-text text-base gap-2 flex"><SiBmw size={24} className='  text-success' /> Volkswagen</span>
                    </label>
                </div>
                <div className="form-control">
                    <label className="cursor-pointer label justify-start gap-4">
                        <input type="checkbox" className="checkbox checkbox-success text-white" />
                        <span className="label-text text-base gap-2 flex"><SiJeep size={24} className='  text-success' /> Jeep</span>
                    </label>
                </div>
                <div className="form-control">
                    <label className="cursor-pointer label justify-start gap-4">
                        <input type="checkbox" className="checkbox checkbox-success text-white" />
                        <span className="label-text text-base gap-2 flex"><SiAudi size={24} className='  text-success' /> Audi</span>
                    </label>
                </div>
                
            </div>
            {/* car model */}
            {/* price */}
            <div className=' mt-3'>
                <span className='text-lg font-semibold capitalize'>Price per day</span>
                <div  className=' mt-3 flex flex-col gap-3 text-gray-500 '>
                    <div className="flex items-center space-x-2">
                        <input type="radio" name="radio-5" className="radio radio-success" />
                        <Label htmlFor="r1">Default</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <input type="radio" name="radio-5" className="radio radio-success" />
                        <Label htmlFor="r2" className='cursor-pointer capitalize'><strong className=' uppercase'>20k RWF</strong> to <strong className=' uppercase '>50k RWF</strong></Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <input type="radio" name="radio-5" className="radio radio-success" />
                        <Label htmlFor="r3" className='cursor-pointer capitalize'><strong className=' uppercase'>50k RWF</strong> to <strong className=' uppercase '>100k RWF</strong></Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <input type="radio" name="radio-5" className="radio radio-success" />
                        <Label htmlFor="r4" className='cursor-pointer capitalize'><strong className=' uppercase'>100k RWF</strong> to <strong className=' uppercase '>150k RWF</strong></Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <input type="radio" name="radio-5" className="radio radio-success" />
                        <Label htmlFor="r5" className='cursor-pointer capitalize'><strong className=' uppercase'>150k RWF</strong> to <strong className=' uppercase '>300k RWF</strong></Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <input type="radio" name="radio-5" className="radio radio-success" />
                        <Label htmlFor="r6" className=' capitalize cursor-pointer'><strong className=' uppercase'>300k RWF</strong> to <strong className=' uppercase '>500k RWF</strong></Label>
                    </div>
                </div>
            </div>
        </div>
    </aside>
  )
}
