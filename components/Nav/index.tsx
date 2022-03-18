import { userInfo } from 'os'
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase'
import Search from './Search'

const Nav = () => {
  const [user] = useAuthState(auth)

  return (
    <div className="flex flex-row justify-between p-5 text-slate-800">
      <div className="inline-flex items-center space-x-3">
        <img className="h-10 w-10 rounded-full" src={user?.photoURL!} alt="" />
        <h2 className="text-xl font-light leading-6">
          Hello, <br /> <span className="font-medium">{user?.displayName}</span>
        </h2>
      </div>
      <Search />
    </div>
  )
}

export default Nav
