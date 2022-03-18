import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import Cards from '../components/Cards/index'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import { auth } from '../firebase'
import { getCurrentWeather } from '../lib/getCurrentWeather'
import { getDailyForecast } from '../lib/getDailyForecast'

const Home: NextPage = () => {
  const [user] = useAuthState(auth)
  console.log(user)

  const [currentWeather, setCurrentWeather] = useState({})
  const [dailyForecast, setDailyForecast] = useState({})

  return (
    <div className="font-outfit">
      <div className="fixed flex h-screen flex-col items-center">
        <Sidebar name={user?.displayName!} photoURL={user?.photoURL!} />
      </div>
      <div className="fixed ml-20 p-2">
        <Nav />
        <div className="p-5">
          <Cards />
        </div>
      </div>
    </div>
  )
}

export default Home
