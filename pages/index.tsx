import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import Cards from '../components/Cards/index'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import { auth } from '../firebase'

const Home: NextPage = () => {
  const [user] = useAuthState(auth)
  console.log(user)

  const [coordinates, setCoordinates] = useState({
    latitude: 0,
    longitude: 0,
  })

  const [weatherData, setWeatherData] = useState<any>({})

  const getCurrentWeather = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_KEY}&units=metric`
      )
      .then((res) => {
        setWeatherData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCoordinates({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
    })

    getCurrentWeather()
  }, [])

  return (
    <div className="font-outfit">
      <div className="fixed flex h-screen flex-col items-center">
        <Sidebar name={user?.displayName!} photoURL={user?.photoURL!} />
      </div>
      <div className="fixed ml-20 p-2">
        <Nav />
        <div className="flex flex-col gap-7 p-5">
          <div className="inline-flex items-center gap-3">
            <h1 className="text-3xl font-medium text-slate-800">
              Welcome Back!
            </h1>
          </div>
          {weatherData.weather ? <Cards weatherData={weatherData} /> : null}
        </div>
      </div>
    </div>
  )
}

export default Home
