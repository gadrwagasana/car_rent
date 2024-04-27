import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Site_logo = () => {
  return (
    <Link href={"/"}>
        <Image
         src={"/logo.png"}
         alt='rent car logo'
         sizes='100vw'
         width={78}
         height={78}
        />
    </Link>
  )
}
