import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { IconSearch } from '@tabler/icons'

const Search = () => {
  const [cities, setCities] = useState<any[]>([])
  const [pickedCity, setPickedCity] = useState<string>('')
  const [input, setInput] = useState('')
  const [showCities, setShowCities] = useState(false)

  const fetchCity = async () => {
    if (!input) return

    await axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${input}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_KEY}&autocomplete=true&types=place`
      )
      .then((res) => {
        setCities(res.data.features.map((city: any) => city))
      })
      .catch((err) => console.log(err))
  }

  const cityToRoute = (city: string) => {
    return city
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .split(',')
      .map((city) => city.toLowerCase().trim())
      .filter((city, index) => index !== 1)
      .reverse()
      .join('/')
  }

  useEffect(() => {
    fetchCity()
  }, [input])

  return (
    <div className="relative w-5/12">
      <div className="inline-flex w-full items-center">
        <IconSearch className="pointer-events-none absolute right-3 h-5 w-5 transform text-slate-600" />
        <input
          value={input}
          type="text"
          className="w-full rounded-md border border-slate-200 bg-white px-4 py-2 text-slate-600 transition duration-500 ease-in-out hover:bg-slate-50 focus:border-orange-500 focus:shadow-lg focus:shadow-orange-200 focus:outline-none focus:ring focus:ring-orange-200 active:bg-orange-100 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a city..."
          onFocus={() => setShowCities(true)}
          onBlur={() => {
            setTimeout(() => {
              setShowCities(false)
            }, 200)
          }}
        />
      </div>
      {cities.length > 0 ? (
        <ul
          className={`absolute z-10 mt-2 w-full overflow-hidden rounded-lg border border-slate-200 bg-white ${
            showCities ? 'block' : 'hidden'
          }`}
        >
          {cities.map((city: any) => (
            <a href={`/weather/${cityToRoute(pickedCity)}`}>
              <li
                key={city.place_name}
                className="flex cursor-pointer items-center justify-between px-4 py-3 transition-all duration-500 ease-in-out hover:bg-orange-50 dark:bg-slate-800 dark:text-white"
                onClick={() => setPickedCity(city.place_name)}
              >
                <span className="font text-sm text-slate-600">
                  {city.place_name}
                </span>
              </li>
            </a>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export default Search
