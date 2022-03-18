import React from 'react'
import { getCurrentWeather } from '../../lib/getCurrentWeather'
import Card from './Card'

const Weather = () => {
  getCurrentWeather('New York').then((data) => {
    console.log(data)
  })

  return (
    <div>
      <div className="flex flex-row flex-wrap gap-5 transition">
        <Card
          category="Weather"
          message="Go for a walk."
          temperature="22°C"
          feelsLike="11°C"
          weather="Partly Cloudy"
          infoCards={{
            pressure: '800 mb',
            visibility: '4.3 km',
            humidity: '87%',
          }}
          background="bg-gradient-to-tr from-yellow-100 via-amber-100 to-orange-100"
        />
        <Card
          category="Summary"
          message="~ It's a pretty good day."
          temperature="390"
          feelsLike="AQI"
          weather="West Wind"
          infoCards={{
            sunset: '7:17 PM',
            windSpeed: '3.1 m/s',
            timeZone: 'Eastern',
          }}
          background="bg-gradient-to-tr from-sky-100 via-cyan-100 to-teal-100"
        />
      </div>
    </div>
  )
}

export default Weather
