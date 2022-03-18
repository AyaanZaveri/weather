import React, { useState } from 'react'
import axios from 'axios'

const Search = () => {
  const [cities, setCities] = useState<string[]>([])
  const [pickedCity, setPickedCity] = useState<string>('')
  const [input, setInput] = useState('')

  const fetchCity = async (e: any) => {
    e.preventDefault()
    setInput(e.target.value)
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

  console.log(cities)

  return (
    <div>
      <input
        value={input}
        type="text"
        className="w-full rounded-md border border-slate-200 bg-white px-4 py-2 text-slate-600 transition hover:bg-slate-50 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-200 focus:outline-none focus:ring focus:ring-blue-200 active:bg-blue-100 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
        onChange={(e) => fetchCity(e)}
        placeholder="Enter a city..."
      />
      {cities.length > 0 ? (
        <ul className="absolute top-0 left-0 right-0 z-10 mt-4 overflow-y-auto overflow-x-hidden rounded-md bg-white shadow-lg">
          {cities.map((city: string) => (
            <li
              key={city}
              className="flex cursor-pointer items-center justify-between px-4 py-2 hover:bg-slate-100 dark:bg-slate-800 dark:text-white"
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
