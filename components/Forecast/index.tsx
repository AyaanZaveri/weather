import React from 'react'
import { titleCase } from 'title-case'
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
        <div className="grid w-full grid-cols-4 gap-3">
          {todayWeather?.map((day: any, index: number) => (
            <div className="w-full" key={index}>
              <div className="flex h-28 w-full flex-row justify-between rounded-2xl bg-orange-500 transition-all duration-500 ease-in-out hover:shadow-lg hover:shadow-orange-200">
                <div className="flex items-center">
                  <div className="flex flex-col items-start justify-center ">
                    <span className="ml-4 text-sm font-light text-white">
                      @ {convertUnixTime(day?.dt)}
                    </span>
                    <div className="inline-flex items-center gap-2">
                      <span className="ml-4 text-center text-3xl text-white">
                        {`${Math.round(day?.main.temp)}°C`}
                      </span>
                      <span className="rounded-md bg-white px-1.5 py-0.5 text-xs">
                        {`${Math.round(day?.main.feels_like)}°C`}
                      </span>
                    </div>
                    <span className="ml-4 text-xs font-light text-white">
                      {titleCase(day?.weather[0].description)}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-center gap-2 p-2">
                  <span className="inline-flex h-min w-max items-start justify-start rounded-full bg-slate-700 px-2 py-0.5 text-xs text-white">
                    {`${Math.round(day?.main.temp_max)}°C / ${Math.round(
                      day?.main.temp_min
                    )}°C`}
                  </span>
                  <span className="inline-flex h-min w-max items-start justify-start rounded-full bg-lime-400 px-2 py-0.5 text-xs text-slate-800">
                    {`${day?.visibility / 1000} km`}
                  </span>
                  <span className="inline-flex h-min w-max items-start justify-start rounded-full bg-white px-2 py-0.5 text-xs text-slate-800">
                    {`${day?.main.humidity}%`}
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
