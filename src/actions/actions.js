import { FETCH_WEATHER, FETCH_NEWS } from '../constants/actionTypes'
import communicator from '../api/communicator'
import config from '../user/config'

export function fetchWeather() {
  return {
    type: FETCH_WEATHER,
    payload: communicator.getMethod(`http://api.openweathermap.org/data/2.5/weather?id=2673730&units=metric&APPID=${
      config.WEATHER_API
    }`),
  }
}
export function fetchNews() {
  return {
    type: FETCH_NEWS,
    payload: communicator.getMethod(`https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=${config.NEWS_API}`),
  }
}
