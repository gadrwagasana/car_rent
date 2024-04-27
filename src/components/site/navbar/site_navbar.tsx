import { Dark_light_theme } from '@/components/theme/dark_light'
import React from 'react'
import { Site_logo } from './site_logo'
import { SiteNavList } from './site_nav_list'
import { Site_search } from './site_search'
import { Site_create_account } from './site_create_account'

export const Site_navbar = () => {
  return (
    <nav className=' flex  justify-between px-1 py-1 lg:px-2 border-b border-emerald-500  h-14 items-center'>
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
