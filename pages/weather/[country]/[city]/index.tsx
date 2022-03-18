import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'
import { titleCase } from 'title-case'

const CityIndex = ({ currentWeatherData }: any) => {
  currentWeatherData = JSON.parse(currentWeatherData)
  const router = useRouter()
  const { country: country, city } = router.query

  return (
    <div>
      <h1>
        {titleCase(city as string)}, {titleCase(country as string)}
      </h1>
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
