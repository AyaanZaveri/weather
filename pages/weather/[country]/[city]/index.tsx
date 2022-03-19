import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { titleCase } from 'title-case'
import Cards from '../../../../components/Cards/index'
import Nav from '../../../../components/Nav'
import Sidebar from '../../../../components/Sidebar'
import { auth } from '../../../../firebase'

const CityIndex = ({ currentWeatherData }: any) => {
  currentWeatherData = JSON.parse(currentWeatherData)
  const router = useRouter()
  const { country: country, city } = router.query

  const [user] = useAuthState(auth)

  return (
    <div className="font-outfit">
      <div className="fixed flex h-screen flex-col items-center">
        <Sidebar name={user?.displayName!} photoURL={user?.photoURL!} />
      </div>
      <div className="fixed ml-20 p-2">
        <Nav />
        <div className="p-5">
          <Cards weatherData={currentWeatherData} />
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async (context: any) => {
  const { data: currentWeatherData } = await axios.get(`
    https://api.openweathermap.org/data/2.5/weather?q=${context.query.city}, ${context.query.country}&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_KEY}&units=metric`)

  return {
    props: {
      currentWeatherData: JSON.stringify(currentWeatherData),
    },
  }
}

export default CityIndex
