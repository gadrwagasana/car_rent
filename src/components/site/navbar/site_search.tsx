import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

export const Site_search = () => {
  return (
    <div className=' flex gap-2 relative'>
        <Input className='  w-60  dark:bg-black/30 border-emerald-500 focus:border-warning' placeholder=' Search' />
        <button className=' absolute right-4 top-2'><Search/></button>
    </div>
  )
}
