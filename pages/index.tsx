import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Aboutme from '../Components/Aboutme'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import {Cog8ToothIcon} from '@heroicons/react/24/outline'
import BottomIcons from '../Components/BottomIcons'
import Mainapp from '../Components/Mainapp'

const Home: NextPage = () => {
  return (
    <div className=" bg-white dark:bg-gray-900 overflow-hidden flex min-h-screen flex-col items-center py-2 snap snap-y snap-mandatory m-0 ">
      <head>
        <title>Edu Shorts</title>
      </head>

      <div className='lg:items-start items-center flex flex-col flex-grow h-screen overflow-hidden'>
        <Header />
        <section className='snap-start w-screen '>
          <Mainapp />
        </section>
      </div>

  
      

      
      
      
     
      
     

    </div>
  )
}

export default Home
