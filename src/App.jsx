import CurrentWeather from "./components/CurrentWeather";
import SearchSection from "./components/SearchSection";
import HourlyWeather from "./components/HourlyWeather";

const App = () => {
  // Fetches weather details based on the API URL
  const getWeatherDetails = async (API_URL) => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
        {/* Search section */}
        <SearchSection  />

        {/* Search section */}
      <div className="weather-section">
        <CurrentWeather />

        {/* Hourly forecast list */}
        <div className="hourly-forecast">
          <ul className="weather-list">
           <HourlyWeather />
          </ul>
      </div>
    </div>
  </div>
  );
};

export default App;