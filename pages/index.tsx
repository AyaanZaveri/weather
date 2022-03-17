import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useAuthState } from 'react-firebase-hooks/auth'
import Card from '../components/Cards/Card'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import { auth } from '../firebase'

const Home: NextPage = () => {
  const [user] = useAuthState(auth)
  console.log(user)

  return (
    <div className="font-outfit">
      <div className="fixed flex h-screen flex-col items-center">
        <Sidebar name={user?.displayName!} photoURL={user?.photoURL!} />
      </div>
      <div className="ml-20">
        <Nav />
        <div className="p-5">
          <Card />
        </div>
      </div>
    </div>
  )
}

export default Home
