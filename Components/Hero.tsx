import React from 'react'
import Loginbtn from '../Components/Loginbtn'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

type Props = {}

function Hero({}: Props) {

    const { data: session } = useSession()
  if(session){
    return(
        <div className='h-screen flex flex-col text-center justify-center space-y-7 m-0'>
            <div>
                <p className="text-3xl font-semibold">Welcome! {session.user?.name}</p>
                <p>Start customizing your experience!</p>
            </div>

            <Link href='/preferences'>     
                    <button className='bg-green-400 rounded-lg pr-5 pl-5 pt-2 pb-2 hover:bg-red-800'>
                        Start Now
                    </button>
            </Link> 
        </div>
    )
  }
  return (
    <div className='h-screen flex flex-col text-center justify-center m-0'>
        <h1 className='p-5 text-4xl font-semibold '>Welcome To EduShorts! </h1>
        <p>A Place where you can swipe through your favorite content!</p>
        <p>Get Started now by signing in!</p>
    </div>
  )
}

export default Hero