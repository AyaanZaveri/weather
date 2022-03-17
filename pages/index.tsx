import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useAuthState } from 'react-firebase-hooks/auth'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import { auth } from '../firebase'

const Home: NextPage = () => {
  const [user] = useAuthState(auth)
  console.log(user)

  return (
    <div>
      <div className="fixed flex h-screen items-center">
        <Nav />
        <Sidebar name={user?.displayName!} photoURL={user?.photoURL!} />
      </div>
    </div>
  )
}

export default Home
