import { userInfo } from 'os'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase'

const Nav = () => {
  const [user] = useAuthState(auth)

  return (
    <div className="p-5 text-slate-800">
      <div className="inline-flex items-center space-x-3">
        <img className="h-10 w-10 rounded-full" src={user?.photoURL!} alt="" />
        <h2 className="text-xl font-light leading-6">
          Hello, <br /> <span className="font-medium">{user?.displayName}</span>
        </h2>
      </div>
    </div>
  )
}

export default Nav
