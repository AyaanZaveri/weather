import React from 'react'
import { convertUnixTime } from '../../lib/convertUnixTime'

const Forecast = ({ dailyWeatherData }: any) => {
  //   const fiveDays = dailyWeatherData?.list?.filter(
  //     (item: any, index: number) => {
  //       return index % 8 === 0
  //     }
  //   )
  //   console.log(fiveDays)

  const todayWeather = dailyWeatherData?.list?.slice(0, 8)

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-medium text-slate-800">
        How's the temperature today?
      </h1>
      <div className="flex">
        <div className="grid grid-cols-4 gap-2">
          {todayWeather?.map((day: any, index: number) => (
            <div key={index}>
              <div className="flex h-20 w-48 flex-col items-start justify-center rounded-2xl bg-orange-500 transition-all duration-500 ease-in-out hover:shadow-lg hover:shadow-orange-200">
                <span className="ml-4 text-sm font-light text-white">
                  {convertUnixTime(day.dt)}
                </span>
                <div className="inline-flex items-center gap-2">
                  <span className="ml-4 text-center text-xl text-white">
                    {`${Math.round(day?.main.temp)}°C`}
                  </span>
                  <span className="rounded-md bg-white px-1.5 py-0.5 text-xs">
                    {`${Math.round(day?.main.feels_like)}°C`}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Forecast
