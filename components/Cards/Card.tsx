import React from 'react'
import { titleCase } from 'title-case'

interface Props {
  category: string
  message: string
  temperature: string
  feelsLike: string
  weather: string
  infoCards: { [key: string]: string }
  background: string
}

const Card = ({
  category,
  message,
  temperature,
  feelsLike,
  weather,
  infoCards,
  background,
}: Props) => {
  return (
    <div className="w-full">
      <div
        className={`relative flex w-full flex-col justify-between gap-10 overflow-hidden rounded-3xl p-6 text-slate-800 transition duration-500 ease-in-out ${background}`}
      >
        {/* Heading */}
        <div className="inline-flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-white p-1 transition duration-500 ease-in-out hover:shadow-lg hover:shadow-white">
            <img
              src="https://basmilius.github.io/weather-icons/production/fill/all/clear-day.svg"
              alt=""
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">{category}</span>
            <span className="text-sm font-light">{message}</span>
          </div>
        </div>
        {/* Weather Info */}
        <div>
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-3">
              <h1 className="text-5xl">{temperature}</h1>
              <div className="group relative flex items-center justify-center">
                <div className="rounded-md bg-white px-2 py-0.5 text-sm">
                  {feelsLike}
                </div>
              </div>
            </div>
            <div>
              <span className="text-sm transition-all duration-500 ease-in-out hover:text-base">
                {weather}
              </span>
            </div>
          </div>
        </div>
        {/* Info Cards */}
        <div className="grid grid-cols-3 gap-5">
          <div className="flex h-20 w-full flex-col items-center justify-center rounded-2xl bg-slate-800 transition-all duration-500 ease-in-out hover:shadow-lg hover:shadow-slate-300">
            <span className="text-sm font-light text-white">
              {titleCase(
                Object.keys(infoCards)[0]
                  .split(/(?=[A-Z])/)
                  .map((s) => s.toLowerCase())
                  .join(' ')
              )}
            </span>
            <span className="text-center text-xl text-white">
              {infoCards[Object.keys(infoCards)[0]]}
            </span>
          </div>
          <div className="flex h-20 w-full flex-col items-center justify-center rounded-2xl bg-lime-300 transition-all duration-500 ease-in-out hover:shadow-lg hover:shadow-lime-200">
            <span className="text-sm font-light">
              {titleCase(
                Object.keys(infoCards)[1]
                  .split(/(?=[A-Z])/)
                  .map((s) => s.toLowerCase())
                  .join(' ')
              )}
            </span>
            <span className="text-center text-xl">
              {infoCards[Object.keys(infoCards)[1]]}
            </span>
          </div>
          <div className="flex h-20 w-full flex-col items-center justify-center rounded-2xl bg-white transition-all duration-500 ease-in-out hover:shadow-lg hover:shadow-slate-100">
            <span className="text-sm font-light">
              {titleCase(
                Object.keys(infoCards)[2]
                  .split(/(?=[A-Z])/)
                  .map((s) => s.toLowerCase())
                  .join(' ')
              )}
            </span>
            <span className="text-center text-xl">
              {infoCards[Object.keys(infoCards)[2]]}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
