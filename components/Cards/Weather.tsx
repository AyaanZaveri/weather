import React from 'react'
import Card from './Card'

const Weather = () => {
  return (
    <div>
      <Card
        category="Weather"
        message="Go for a walk."
        temperature="22°C"
        feelsLike="11°C"
        weather="Partly Cloudy"
        infoCards={{
            pressure: '800 mb',
            visibility: '4.3 km',
            humidity: '87%'
        }}
      />
    </div>
  )
}

export default Weather
