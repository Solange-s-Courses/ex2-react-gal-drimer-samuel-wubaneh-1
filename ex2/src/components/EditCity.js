import React, { useState, useEffect } from 'react';
/**
 * EditCity  - Specialized form for city modifications
 *
 * Features:
 * - Pre-populates with existing city data
 * - Validates required fields
 * - Preserves original city name for reference
 */
function EditCity({ city, onEditCity, onCancel }) {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [favorite, setFavorite] = useState(false);
  const [errors, setErrors] = useState({});
  const [originalName, setOriginalName] = useState('');


  useEffect(() => {
    if (city) {
      setName(city.name);
      setCountry(city.country);
      setFavorite(city.favorite);
      setOriginalName(city.name); 
    }
  }, [city]);
  

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'City name is required';
    if (!country.trim()) newErrors.country = 'Country is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const updatedCity = {
      ...city,
      name,
      country,
      favorite,
    };

    onEditCity(updatedCity, originalName);

  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit City</h3>
      <div className="form-group">
        <label>City Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <small className="text-danger">{errors.name}</small>}
      </div>

      <div className="form-group">
        <label>Country</label>
        <input
          type="text"
          className="form-control"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        {errors.country && <small className="text-danger">{errors.country}</small>}
      </div>

      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          checked={favorite}
          onChange={() => setFavorite(!favorite)}
        />
        <label className="form-check-label">Favorite</label>
      </div>

      <button type="submit" className="btn btn-warning">Save Changes</button>
      <button type="button" className="btn btn-secondary ml-2" onClick={onCancel}>Cancel</button>
    </form>
  );
}

export default EditCity;
