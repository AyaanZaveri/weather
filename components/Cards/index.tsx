import React, { useEffect, useState } from 'react'
import { getCurrentWeather } from '../../lib/getCurrentWeather'
import { getDailyForecast } from '../../lib/getDailyForecast'
import Card from './Card'

const Weather = () => {
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
          background="gradient-orange"
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
          background="gradient-blue"
        />
      </div>
    </div>
  )
}

export default Weather
