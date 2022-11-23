import React from 'react'

type Props = {}

function Preferences({}: Props) {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
        <div>
            <p className='text-4xl font-semibold'>What are you interested in?</p>
        </div>
    </div>
  )
}

export default Preferences