import React, { useEffect, useState } from 'react'
import { titleCase } from 'title-case'
import Card from './Card'
import { DateTime } from 'luxon'
import { getMoonPhase } from '../../lib/getMoonPhase'
import { useRouter } from 'next/router'
import { getTimeZone } from '../../lib/getTimeZone'
import { convertUnixTime } from '../../lib/convertUnixTime'

const Cards = ({ weatherData }: any) => {
  const [currentTime, setCurrentTime] = useState<string>(
    `${convertUnixTime(Date.now(), 'milliseconds', true)}`
  )

  const [moonPhase, setMoonPhase] = useState<string>('')
  const [timeZone, setTimeZone] = useState<string>('')

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(`${convertUnixTime(Date.now(), 'milliseconds', true)}`)
    }, 1000)
  }, [])

  // getMoonPhase().then((res) => {
  //   setMoonPhase(res)
  // })

  const router = useRouter()

  const { country, city } = router.query

  const route = `${country}/${city}`

  useEffect(() => {
    getTimeZone(route)
      .then((res) => {
        setTimeZone(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      {weatherData ? (
        <div className="grid grid-flow-col gap-5 transition" style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        }}>
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
            temperature={`${convertUnixTime(
              weatherData?.sys.sunset,
              'seconds',
              false
            )}`}
            feelsLike={`${convertUnixTime(
              weatherData?.sys.sunset,
              'seconds',
              false,
              '24'
            )}`}
            weather={'Sunset'}
            infoCards={{
              sunrise: `${convertUnixTime(
                weatherData?.sys.sunrise,
                'seconds',
                false
              )}`,
              highAndLow: `${Math.round(
                weatherData?.main.temp_max
              )}°C / ${Math.round(weatherData?.main.temp_min)}°C`,
              timeZone: `${
                timeZone
                  ? timeZone
                  : DateTime.fromSeconds(weatherData?.timezone).offsetNameShort
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
