import { Button, buttonVariants } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import React from 'react'

export const Site_create_account = () => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger className={cn(buttonVariants({variant : "secondary" }) , " bg-emerald-500 dark:hover:bg-emerald-700")}>Get start
        </DropdownMenuTrigger>
    </DropdownMenu>
  )
}
