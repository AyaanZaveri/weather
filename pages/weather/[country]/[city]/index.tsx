import axios from 'axios'
import React from 'react'

const CityIndex = ({ currentWeatherData }: any) => {
  console.log(currentWeatherData)

  return <div>CityIndex</div>
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
