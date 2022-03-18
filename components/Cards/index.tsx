import React from 'react'
import Card from './Card'

const Weather = () => {
  return (
    <div>
      <div className="grid grid-flow-col place-content-start gap-5">
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
        />
      </div>
    </div>
  )
}

export default Weather
