import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { IconSearch } from '@tabler/icons'

const Search = () => {
  const [cities, setCities] = useState<string[]>([])
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
        setCities(
          res.data.features.map((city: { place_name: any }) => city.place_name)
        )
      })
      .catch((err) => console.log(err))
  }

  console.log(pickedCity)

  useEffect(() => {
    fetchCity()
  }, [input])

  return (
    <div className="relative w-4/12">
      <div className="inline-flex w-full items-center">
        <IconSearch className="pointer-events-none absolute right-3 h-5 w-5 transform text-slate-600" />
        <input
          value={input}
          type="text"
          className="w-full rounded-md border border-slate-200 bg-white px-4 py-2 text-slate-600 transition hover:bg-slate-50 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-200 focus:outline-none focus:ring focus:ring-blue-200 active:bg-blue-100 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
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
          className={`absolute w-full z-10 mt-2 overflow-hidden rounded-lg border border-slate-200 bg-white/30 backdrop-blur-sm ${
            showCities ? 'block' : 'hidden'
          }`}
        >
          {cities.map((city: string) => (
            <li
              key={city}
              className="flex cursor-pointer items-center justify-between px-4 py-2 transition-all delay-200 ease-in-out hover:bg-blue-50 dark:bg-slate-800 dark:text-white"
              onClick={() => setPickedCity(city)}
            >
              <span className="text-sm font-light text-slate-500">{city}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export default Search
