import React from 'react'

const CurrentWeather = ({ data }) => {
  return (
    <div className="current-weather">
      <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="weather-icon" />
      <h2 className="temperature">{Math.round(data.main.temp)}°C</h2>
      <p className="description">{data.weather[0].description}</p>
    </div>
  )
}

export default CurrentWeather