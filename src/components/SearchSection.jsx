import { useRef } from "react";

const SearchSection = ({ fetchWeatherData }) => {
  const inputRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const cityName = inputRef.current.value.trim();
    if (cityName) 
      fetchWeatherData(cityName);
  };

  return (
    <div className="search-section">
        <form className="search-form" onSubmit={handleSearch}>
          <span className="material-symbols-rounded">🔍</span>
          <input ref={inputRef} type="search" placeholder="Enter a city name" className="search-input" required />
        </form>
      </div>
    );
};

export default SearchSection;