import React, { useState, useEffect } from 'react';

function CityForm({ onAddCity, onCancel, city, onEditCity }) {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [favorite, setFavorite] = useState(false);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [countries, setCountries] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetch('https://api.first.org/data/v1/countries')
      .then(res => res.json())
      .then(data => {
        const countryList = Object.values(data.data).map(c => c.country);
        setCountries(countryList.sort());
      });
  }, []);

  useEffect(() => {
    if (city) {
      setName(city.name);
      setCountry(city.country);
      setFavorite(city.favorite);
      setLatitude(city.latitude);
      setLongitude(city.longitude);
    }
  }, [city]);

  const validate = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required.';
    } else if (!/^[a-zA-Z ]+$/.test(name.trim())) {
      newErrors.name = 'Name must contain only English letters.';
    }

    if (!country) {
      newErrors.country = 'Country is required.';
    }

    const lat = parseFloat(latitude);
    if (isNaN(lat) || lat < -90 || lat > 90) {
      newErrors.latitude = 'Latitude must be between -90 and 90.';
    }

    const lon = parseFloat(longitude);
    if (isNaN(lon) || lon < -180 || lon > 180) {
      newErrors.longitude = 'Longitude must be between -180 and 180.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newCity = {
      name: name.trim(),
      country,
      favorite,
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude)
    };

    city ? onEditCity(newCity) : onAddCity(newCity);

    // Clear form
    setName('');
    setCountry('');
    setFavorite(false);
    setLatitude('');
    setLongitude('');
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label>City Name</label>
        <input
          type="text"
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>

      <div className="form-group">
        <label>Country</label>
        <select
          className={`form-control ${errors.country ? 'is-invalid' : ''}`}
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="">Select Country</option>
          {countries.map((c, i) => (
            <option key={i} value={c}>{c}</option>
          ))}
        </select>
        {errors.country && <div className="invalid-feedback">{errors.country}</div>}
      </div>

      <div className="form-group">
        <label>Latitude</label>
        <input
          type="number"
          className={`form-control ${errors.latitude ? 'is-invalid' : ''}`}
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
        {errors.latitude && <div className="invalid-feedback">{errors.latitude}</div>}
      </div>

      <div className="form-group">
        <label>Longitude</label>
        <input
          type="number"
          className={`form-control ${errors.longitude ? 'is-invalid' : ''}`}
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
        {errors.longitude && <div className="invalid-feedback">{errors.longitude}</div>}
      </div>

      <div className="form-check mb-3">
        <input
          type="checkbox"
          className="form-check-input"
          checked={favorite}
          onChange={() => setFavorite(!favorite)}
          id="favorite"
        />
        <label className="form-check-label" htmlFor="favorite">Favorite</label>
      </div>

      <button type="submit" className="btn btn-success">{city ? 'Save Changes' : 'Add City'}</button>
      <button type="button" className="btn btn-secondary ml-2" onClick={onCancel}>Cancel</button>
    </form>
  );
}

export default CityForm;
