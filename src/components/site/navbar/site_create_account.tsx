import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import React from 'react'

export const Site_create_account = () => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger className=' '>
            <Button variant={"secondary"} className=' bg-emerald-500 dark:hover:bg-emerald-700'>Get start</Button>
        </DropdownMenuTrigger>
    </DropdownMenu>
  )
}
