import React from 'react'

const Forecast = ({ dailyWeatherData }: any) => {
  const fiveDays = dailyWeatherData?.list?.filter(
    (item: any, index: number) => {
      return index % 8 === 0
    }
  )
  console.log(fiveDays)
  return (
    <div className='flex flex-col gap-3'>
      <h1 className="text-2xl font-medium text-slate-800">
        How's the temperature today?
      </h1>
      <div className='flex flex-row gap-3'>
        {fiveDays?.map((day: any, index: number) => (
          <div key={index}>
            <div className="flex h-20 w-28 flex-col items-center justify-center rounded-2xl bg-slate-800 transition-all duration-500 ease-in-out hover:shadow-lg hover:shadow-slate-300">
              <span className="text-sm font-light text-white">{index}</span>
              <span className="text-center text-xl text-white"></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Forecast
