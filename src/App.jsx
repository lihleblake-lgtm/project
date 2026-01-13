import { useState } from "react";
import NoResultsDiv from "./components/NoResultsDiv";
import CurrentWeather from "./components/CurrentWeather";
import SearchSection from "./components/SearchSection";
import HourlyWeather from "./components/HourlyWeather";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [hourlyData, setHourlyData] = useState([]);
  const [isError, setIsError] = useState(false);  

  const fetchWeatherData = async (city) => {
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    setIsError(false);

    try {
      //1. Fetch current weather data
      const currentResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const currentData = await currentResponse.json();

      // Check if city exists
      if (currentData.cod === "404") {
        setIsError(true);
        setWeatherData(null);
        setHourlyData([]);
        return;
      } 

      // 2. Fetch hourly forecast data
      const hourlyResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
      const hourlyData = await hourlyResponse.json();

      setWeatherData(currentData);
      setHourlyData(hourlyData.list.slice(0, 7)); // Next 7 time slots

    } catch (error) {
      console.error("Network error:", error);
      setIsError(true);
    }
  };

  const getGreetingMessage = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning 🌞!";
    if (hour < 18) return "Good Afternoon ✨!";
    return "Good Evening 🌙!";
  }

  return (
    <div className="container">

      {/* If no weather data, show the bubbly welcome screen */}
      {!weatherData && !isError && (
        <div className="welcome-section">
          <div className="bubbly-logo">
            <span className="material-symbols-rounded">cloudy_filled</span>
            </div>
            <h1 className="app-title">Daily Weather🌈</h1>
            <p className="app-tagline">Welcome to daily weather, <br/> where we capture accurate patterns 24/7.</p>
            </div>
      )}


        {/* Pass fetchWeatherData function to SearchSection */}
        <SearchSection fetchWeatherData={fetchWeatherData} />

      <div className="weather-section">
        {isError ? (
          <NoResultsDiv />
        ) : (
          <>

          {/* ADD THIS BUTTON HERE */}
          {weatherData && (
            <button className="back-btn" onClick={() => setWeatherData(null)}>
              <span className="material-symbols-rounded">🔙</span>Back to Search
            </button>
          )}

          {/* Only show components if we have data */}
          {weatherData && <CurrentWeather data={weatherData} />}

          <div className="hourly-forecast"></div>
          <ul className="weather-list"></ul>

          {/* Pass the array of forecast data to HourlyWeather */}
          {hourlyData.length > 0 && <HourlyWeather data={hourlyData} />}
          </>

        )}
      </div>
    </div>
  );
};

export default App;