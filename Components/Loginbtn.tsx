import { useSession, signIn, signOut } from "next-auth/react"
import {ArrowRightOnRectangleIcon, ArrowLeftOnRectangleIcon} from '@heroicons/react/24/outline'
export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div>
        <button
         onClick={() => signOut()}>
          <ArrowLeftOnRectangleIcon className="h-10 w-10"/>

         </button>
      </div>
    )
  }
  return (
    <div >
      <button 
      onClick={() => signIn()}>
        <ArrowRightOnRectangleIcon className="h-10 w-10"/>
      </button>
    </div>
  )
}