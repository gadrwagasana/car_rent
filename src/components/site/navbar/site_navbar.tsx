"use client";

import { Dark_light_theme } from '@/components/theme/dark_light'
import React from 'react'
import { Site_logo } from './site_logo'
import { SiteNavList } from './site_nav_list'
import { Site_search } from './site_search'
import { Site_create_account } from './site_create_account'
import { User_scroll_top_56 } from '@/hooks/user_scroll_top';
import { cn } from '@/lib/utils';

export const Site_navbar = () => {
  const scrolled = User_scroll_top_56();
  return (
    <nav className={cn("flex  justify-between px-1 py-1 lg:px-2  h-14 items-center" , scrolled && " fixed z-50 w-full backdrop-blur-md bg-white/50 dark:bg-black/50 border-b border-success")}>
        {/* logo */}
        <div className=' flex gap-6 items-center'>
          <Site_logo/>
          {/* nav list */}
          <SiteNavList/>
        </div>
        <div className=' flex gap-4'>
          <Site_search/>
          <Site_create_account/>
          <Dark_light_theme/>
        </div>
    </nav>
  )
}
