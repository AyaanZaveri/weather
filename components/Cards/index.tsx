import React, { useEffect, useState } from 'react'
import { titleCase } from 'title-case'
import Card from './Card'
import { DateTime } from 'luxon'

const Cards = ({ weatherData }: any) => {
  const convertUnixTime = (unixTime: number) => {
    const time = DateTime.fromSeconds(unixTime).toFormat('h:mm a')

    return time
  }

  return (
    <div>
      {weatherData ? (
        <div className="flex flex-row flex-wrap gap-5 transition">
          <Card
            category="Weather"
            message="Go for a walk."
            temperature={`${Math.round(weatherData.main.temp)}°C`}
            feelsLike={`${Math.round(weatherData.main.feels_like)}°C`}
            weather={`${titleCase(weatherData.weather[0].description)}`}
            infoCards={{
              pressure: `${weatherData.main.pressure} hPa`,
              visibility: `${weatherData.visibility / 1000} km`,
              humidity: `${weatherData.main.humidity}%`,
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
              sunset: `${convertUnixTime(weatherData.sys.sunset)}`,
              windSpeed: `${weatherData.wind.speed} m/s`,
              timeZone: `${
                DateTime.fromSeconds(weatherData.timezone).offsetNameShort
              }`,
            }}
            background="gradient-blue"
          />
        </div>
      ) : null}
    </div>
  )
}

export default Cards
