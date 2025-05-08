import React from 'react';
import CityItem from './CityItem'; // Import את הקומפוננטה של CityItem
/**
 * CityList  - Renders a collection of CityItem components
 *
 * Responsible for:
 * - Displaying cities in a responsive grid layout
 * - Passing city data and action handlers to individual CityItems
 */
function CityList({ cities, onDeleteCity, onToggleFavorite, onEditCity }) {
  return (
    <div className="row">
      {cities.map(city => (
        <CityItem 
          key={city.name} // השתמש בשם העיר כמפתח ייחודי
          city={city} // העבר את פרטי העיר כפרופס
          onDeleteCity={onDeleteCity} // העבר את פונקציית מחיקת העיר
          onToggleFavorite={onToggleFavorite} // העבר את פונקציית החלפת מצב מועדף
          onEditCity={onEditCity} // העבר את פונקציית עריכת העיר
        />
      ))}
    </div>
  );
}

export default CityList;
