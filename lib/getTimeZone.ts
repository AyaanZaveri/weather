import axios from 'axios'
const cheerio = require('cheerio')

export const getTimeZone = async (route: string): Promise<string> => {
  const { data } = await axios.get(
    `https://www.timeanddate.com/time/zone/${route}`
  )
  const $ = cheerio.load(data)
  const timeZone = $('#cta > a').text()
  return timeZone
}
