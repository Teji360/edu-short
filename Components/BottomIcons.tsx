import React from 'react'
import {HomeIcon, MagnifyingGlassIcon} from '@heroicons/react/24/solid'
import Link from 'next/link'

type Props = {}

function BottomIcons({}: Props) {
  return (
    <div className='flex flex-row space-x-5 lg:flex-col'>
        <Link href='/'>
            <HomeIcon className='h-10 w-10' />
        </Link>
        
        <MagnifyingGlassIcon className='h-10 w-10' />
    </div>
  )
}

export default BottomIcons