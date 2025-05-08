/**
 * CityItem  - Displays individual city card
 *
 * Presents city information with interactive controls for:
 * - Toggling favorite status
 * - Initiating edit mode
 * - Deleting the city
 */
import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

function CityItem({ city, onDeleteCity, onToggleFavorite, onEditCity }) {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{city.name} - {city.country}</h5>
          
          <button
            className="btn btn-outline-danger mb-2"
            onClick={() => onToggleFavorite(city.name)}
          >
            {city.favorite ? ' ❤️ Favorite' : ' 🤍 Add to Favorite'}
          </button>
          
          <br />
          
          <button className="btn btn-info mb-2" onClick={() => onEditCity(city)}>
            Edit
          </button>
          
          <br />
          
          <button className="btn btn-danger" onClick={() => onDeleteCity(city.name)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default CityItem;
