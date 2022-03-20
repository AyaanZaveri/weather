import axios from 'axios'
const cheerio = require('cheerio')

export const getMoonPhase = async (): Promise<string> => {
  const { data } = await axios.get(
    'https://www.timeanddate.com/moon/phases/'
  )
  const $ = cheerio.load(data)
  const moonPhase = $('#qlook > a').text()
  return moonPhase
}
