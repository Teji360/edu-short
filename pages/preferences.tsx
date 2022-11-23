import React from 'react'
import Header from '../Components/Header'
import Mainapp from '../Components/Mainapp'
import Preferences from '../Components/Preferences'

type Props = {}

const preferences = (props: Props) => {
  return (
    <div className=" bg-white dark:bg-gray-900 flex min-h-screen flex-col items-center py-2 snap snap-y snap-mandatory m-0 ">
      <head>
        <title>Edu Shorts</title>
      </head>

      <div className='lg:items-start items-center flex flex-col flex-grow h-screen overflow-hidden justify-center'>
        <Header />
        <section className='snap-center lg:w-screen'>
          <Preferences />

        </section>
      </div>

  
      

      
      
      
     
      
     

    </div>
  )
}

export default preferences