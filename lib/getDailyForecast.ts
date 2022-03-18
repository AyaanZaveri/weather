import axios from 'axios'

export const getDailyForecast = async (
  city: string,
  units: string = 'metric'
) => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_KEY}&units=${units}`
  )
  return data
}
