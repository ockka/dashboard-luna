import React from 'react'
import './weather.scss'
import './weather-icons.css'
import weatherIcons from '../../weatherIcons.json'

const getTimeStamp = time =>
  new Date(time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

const weatherComponent = (props) => {
  const temp = props.weatherData.main.temp.toFixed(1)

  const prefix = 'wi wi-'
  const code = props.weatherData.weather[0].id
  let icon = weatherIcons[code].icon
  // If we are not in the ranges mentioned above, add a day/night prefix.
  if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
    icon = `day-${icon}`
  }
  icon = prefix + icon

  const sunrise = getTimeStamp(props.weatherData.sys.sunrise)
  const sunset = getTimeStamp(props.weatherData.sys.sunset)

  return (
    <div className="Container">
      <div className="IconTemp">
        <i className={icon} />
        <p className="Temp">{temp}°</p>
      </div>
      <p className="Name">{props.weatherData.name}</p>
      <div className="SunUpTime">
        <i className="wi2 wi-sunrise" />
        <p>{sunrise}</p>
        <i className="wi2 wi-sunset" />
        <p>{sunset}</p>
      </div>
    </div>
  )
}

export default weatherComponent
