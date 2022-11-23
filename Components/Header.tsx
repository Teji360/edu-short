import Image from 'next/image'
import React from 'react'
import {SunIcon, ChatBubbleBottomCenterIcon, HeartIcon, ChevronDownIcon, PlusCircleIcon, Cog8ToothIcon, MoonIcon} from '@heroicons/react/24/outline'
import Loginbtn from '../Components/Loginbtn'
import BottomIcons from './BottomIcons'
type Props = {}

function Header({}: Props) {

  return (
    <div className='min-h-screen absolute top-0 flex flex-col items-center space-x-5 justify-around '>   
        <div className=' flex flex-row flex-grow lg:flex-col lg:space-y-5 space-x-5 p-5'>
        <h1 className='text-3xl'>Edu Shorts</h1>
            

            <div>
                <Image src='' alt='' className='sm:hidden' 
                />   
            </div>

            <div>
                <PlusCircleIcon
                className='h-10 w-10'  />

            </div>
        
            <div>
                <ChatBubbleBottomCenterIcon
                className='h-10 w-10' />
            </div>

            <div>
                <HeartIcon
                 className='h-10 w-10'  />
            </div>
        
            <div>
                <Loginbtn />
            </div>

            <div>
                <ChevronDownIcon
                className='h-10 w-10 hover:cursor-pointer' />
                <ul className='flex-col space-y-3 hidden'>
                    <div><MoonIcon className='h-7 w-7' /></div>
                    <div><Cog8ToothIcon className='h-7 w-7'/></div>

                </ul>
            </div>

        </div>
            
            
            <div className='p-5 lg:hidden'>
                <BottomIcons />
            </div>
        
    </div>



        

        
        

  )
}

export default Header