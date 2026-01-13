import CurrentWeather from "./components/CurrentWeather";
import SearchSection from "./components/SearchSection";
import HourlyWeather from "./components/HourlyWeather";

const App = () => {

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