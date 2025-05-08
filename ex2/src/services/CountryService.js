/**
 * CountryService - Handles country-related API operations
 *
 * Provides methods to fetch country data from external APIs
 * and transform it into a standardized format for the application.
 */


//Fetches list of countries from API
const CountryService = {
    async getCountries() {
      const res = await fetch('https://api.first.org/data/v1/countries');
      const data = await res.json();
      return Object.entries(data.data).map(([code, val]) => ({ code, name: val.country }));
    }
  };
  
  export default CountryService;