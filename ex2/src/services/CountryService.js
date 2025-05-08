const CountryService = {
    async getCountries() {
      const res = await fetch('https://api.first.org/data/v1/countries');
      const data = await res.json();
      return Object.entries(data.data).map(([code, val]) => ({ code, name: val.country }));
    }
  };
  
  export default CountryService;