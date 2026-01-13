const HourlyWeather = ({ data }) => {
  return (
    <div className="hourly-weather">
      <ul className="weather-list">
        {data.map((item, index) => (
          <li key={index} className="weather-item">
            <p className="time">{new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt={item.weather[0].description} className="weather-icon" />
            <p className="temp">{Math.round(item.main.temp)}°</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HourlyWeather;