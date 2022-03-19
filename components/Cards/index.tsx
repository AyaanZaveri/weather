import React, { useEffect, useState } from 'react'
import { titleCase } from 'title-case'
import Card from './Card'
import { DateTime } from 'luxon'

const Cards = ({ weatherData }: any) => {
  const convertUnixTime = (
    unixTime: number,
    type: string,
    showSeconds: boolean
  ) => {
    if (type == 'seconds' || type == 's') {
      return DateTime.fromSeconds(unixTime).toFormat(
        `${showSeconds ? 'h:mm:ss a' : 'h:mm a'}`
      )
    } else if (type == 'milliseconds' || type == 'm') {
      return DateTime.fromMillis(unixTime).toFormat(
        `${showSeconds ? 'h:mm:ss a' : 'h:mm a'}`
      )
    }
  }

  const [currentTime, setCurrentTime] = useState<string>(
    `${convertUnixTime(Date.now(), 'milliseconds', true)}`
  )

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(`${convertUnixTime(Date.now(), 'milliseconds', true)}`)
    }, 1000)
  }, [])

  return (
    <div>
      {weatherData ? (
        <div className="flex flex-row flex-wrap gap-5 transition">
          <Card
            category="Weather"
            message={`${weatherData?.weather[0]?.main}`}
            temperature={`${Math.round(weatherData?.main.temp)}°C`}
            feelsLike={`${Math.round(weatherData?.main.feels_like)}°C`}
            weather={`${titleCase(weatherData?.weather[0].description)}`}
            infoCards={{
              pressure: `${weatherData?.main.pressure} hPa`,
              visibility: `${weatherData?.visibility / 1000} km`,
              humidity: `${weatherData?.main.humidity}%`,
            }}
            background="gradient-orange"
          />
          <Card
            category="Summary"
            message={currentTime}
            temperature="390"
            feelsLike="AQI"
            weather="West Wind"
            infoCards={{
              sunset: `${convertUnixTime(
                weatherData?.sys.sunset,
                'seconds',
                false
              )}`,
              windSpeed: `${weatherData?.wind.speed} m/s`,
              timeZone: `${
                DateTime.fromSeconds(weatherData?.timezone).offsetNameShort
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
