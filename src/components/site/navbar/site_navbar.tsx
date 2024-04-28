"use client";

import { Dark_light_theme } from '@/components/theme/dark_light'
import React from 'react'
import { Site_logo } from './site_logo'
import { SiteNavList } from './site_nav_list'
import { Site_search } from './site_search'
import { Site_create_account } from './site_create_account'
import { User_scroll_top_56 } from '@/hooks/user_scroll_top';
import { cn } from '@/lib/utils';
import { BsList } from 'react-icons/bs';

export const Site_navbar = () => {
  const scrolled = User_scroll_top_56();
  return (
    <nav className={cn("flex  justify-between px-1 py-1 lg:px-2  h-14 items-center  z-50" , scrolled && " fixed w-full backdrop-blur-md bg-white/50 dark:bg-black/50 border-b border-success")}>
      {/* is mobile */}
      <div className=' flex lg:hidden'><Site_logo/></div>
      {/* logo */}
      <div className=' flex gap-6 items-center max-lg:hidden'>
        <Site_logo/>
        {/* nav list */}
        <SiteNavList/>
      </div>
      <div className=' flex gap-4 max-lg:hidden'>
        <Site_search/>
        <Site_create_account/>
        <Dark_light_theme/>
      </div>
      {/* is mobile */}
      <div className=' flex lg:hidden'>
        <BsList size={32} />
      </div>
    </nav>
  )
}
