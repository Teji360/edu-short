import React from 'react'
import Aboutme from './Aboutme'
import Hero from './Hero'

type Props = {}

function Mainapp({}: Props) {
  return (
    <div className=' h-screen overflow-y-scroll overflow-x-hidden'>
        <section>
          <Hero />  
        </section>
        
        <section>
          <Aboutme />  
        </section>
        
    </div>
  )
}

export default Mainapp