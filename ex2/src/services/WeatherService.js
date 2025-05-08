const WeatherService = {
    async getWeather(lon, lat) {
      const url = `https://www.7timer.info/bin/api.pl?lon=${lon}&lat=${lat}&product=civillight&output=json`;
      const res = await fetch(url);
      const json = await res.json();
      return json.dataseries.map(item => ({
        date: `${String(item.date).slice(6, 8)}/${String(item.date).slice(4, 6)}/${String(item.date).slice(0, 4)}`,
        weather: item.weather,
        tempMin: item.temp2m.min,
        tempMax: item.temp2m.max
      }));
    }
  };
  

  /**
   * {
   * דוגמה לאיך נראה גסון לאחר חילוץ
  date: "02/05/2025",
  weather: "clear",
  tempMin: 14,
  tempMax: 22
}
   */
  export default WeatherService;