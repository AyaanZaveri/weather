import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { titleCase } from 'title-case'
import Cards from '../../../../components/Cards/index'
import Nav from '../../../../components/Nav'
import Sidebar from '../../../../components/Sidebar'
import { auth, db } from '../../../../firebase'
import * as countries from 'i18n-iso-countries'
import { IconStar } from '@tabler/icons'
import { HiStar } from 'react-icons/hi'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  where,
} from 'firebase/firestore'

const CityIndex = ({ currentWeatherData }: any) => {
  currentWeatherData = JSON.parse(currentWeatherData)
  const router = useRouter()
  const { country: country, city } = router.query

  const [user] = useAuthState(auth)

  countries.registerLocale(require('i18n-iso-countries/langs/en.json'))
  const listOfCountries = countries.getNames('en', { select: 'official' })
  const countryCode = Object.keys(listOfCountries)
    .find(
      (key) =>
        listOfCountries[key].toLowerCase().includes(country as string) &&
        listOfCountries[key][0] == country![0].toUpperCase()
    )
    ?.toLowerCase()

  const countryFlag = `https://flagicons.lipis.dev/flags/4x3/${countryCode}.svg`

  const usersRef = collection(db, 'users')

  // get uid of user from firebase
  const userRef = doc(usersRef, user?.uid)
  const favoritesRef = collection(userRef, 'favorites')

  const addFavorite = async () => {
    const favorites = {
      country: country,
      city: city,
      countryCode: countryCode,
      countryFlag: countryFlag,
      timestamp: serverTimestamp(),
    }

    await addDoc(favoritesRef, favorites)
  }

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
              {titleCase(city as string)}, {titleCase(country as string)}
            </h1>
            <img
              className="w-7 opacity-90"
              src={countryFlag ? countryFlag : ''}
              alt=""
            />
            <HiStar
              onClick={addFavorite}
              className="hover: h-5 w-5 transition delay-200 ease-in-out hover:text-orange-500"
            />
          </div>
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
