import { useEffect, useState } from 'react';
import WeatherService from '../services/WeatherService';
/**
 * Favorites component - Displays and manages favorite cities
 *
 * Shows a list of cities marked as favorites with the ability to:
 * - Fetch and display weather forecasts for each city
 * - Handle loading states during API requests
 * - Maintain real-time sync with localStorage data
 */

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);

  // Load favorite cities from localStorage on component mount
  useEffect(() => {
    const all = JSON.parse(localStorage.getItem('cities') || '[]');
    setFavorites(all.filter(c => c.favorite));
  }, []);

  /**
   * Fetches weather forecast for a specific city
   */
  const fetchForecast = async (city) => {
    setLoading(true);
    const data = await WeatherService.getWeather(city.longitude, city.latitude);
    setForecast({ city, data });
    setLoading(false);
  };

  return (
    <div>
      <h1>Favorite Cities</h1>
      <div className="row">
        {favorites.map((city, i) => (
          <div key={i} className="col-md-4 mb-3">
            <div className="card p-3">
              <h5>{city.name}, {city.country}</h5>
              <button className="btn btn-info" onClick={() => fetchForecast(city)}>Get Forecast</button>
            </div>
          </div>
        ))}
      </div>
      {loading && <div>Loading forecast...</div>}
      {forecast && !loading && (
        <div>
          <h3>Forecast for {forecast.city.name}</h3>
          <ul>
            {forecast.data.map((day, idx) => (
              <li key={idx}>{day.date} - {day.weather} - {day.tempMin}/{day.tempMax}°C</li>// hdbjnb
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Favorites;