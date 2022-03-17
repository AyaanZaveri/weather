import React from 'react'

interface Props {
  category: string
  message: string
  temperature: string
  feelsLike: string
  weather: string
  infoCards: { [key: string]: string }
}

const Card = ({
  category,
  message,
  temperature,
  feelsLike,
  weather,
  infoCards,
}: Props) => {
  return (
    <div className="relative flex h-72 w-96 flex-col justify-between overflow-hidden rounded-3xl bg-slate-100 p-5 text-slate-800">
      {/* <img
        className="absolute -z-10 h-full w-full"
        src=""
        alt=""
      /> */}
      {/* Heading */}
      <div className="inline-flex items-center gap-2">
        <div className="h-10 w-10 rounded-full bg-white p-1">
          <img
            src="https://basmilius.github.io/weather-icons/production/fill/all/clear-day.svg"
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">Weather</span>
          <span className="font-light text-slate-500">Go for a walk.</span>
        </div>
      </div>
      {/* Weather Info */}
      <div>
        <div className="flex flex-col">
          <div className="inline-flex items-center gap-3">
            <h1 className="text-4xl">22°C</h1>
            <div className="rounded-md bg-white px-2 py-0.5 text-sm">11°C</div>
          </div>
          <div>
            <span className="text-sm">Partly Cloudy</span>
          </div>
        </div>
      </div>
      {/* Info Cards */}
      <div className="flex flex-row justify-between">
        <div className="flex h-16 w-24 flex-col items-center justify-center rounded-2xl bg-slate-800 leading-5">
          <span className="text-sm font-light text-white">Pressure</span>
          <span className="text-white">800 mb</span>
        </div>
        <div className="flex h-16 w-24 flex-col items-center justify-center  rounded-2xl bg-lime-300">
          <span className="text-sm font-light">Visibility</span>
          <span>4.3 km</span>
        </div>
        <div className="flex h-16 w-24 flex-col items-center justify-center rounded-2xl bg-white">
          <span className="text-sm font-light">Humidity</span>
          <span>87%</span>
        </div>
      </div>
    </div>
  )
}

export default Card
