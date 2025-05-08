import { useEffect, useState } from 'react';
import CityForm from '../components/CityForm';
import CityList from '../components/CityList';
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import EditCity from '../components/EditCity';

function Home() {
  const location = useLocation();
  const [cities, setCities] = useState([]);//רשימה של כל המדינות
  const [showForm, setShowForm] = useState(false);//משתנה בוליאני להצגת או הסתרת הטופס
  const [searchTerm, setSearchTerm] = useState('');//משתנה ששומר את מילת החיפוש של שם העיר או המדינה
  const [cityToEdit, setCityToEdit] = useState(null);//משתנה להצגת הטופס עריכה או להסתרתו

  // אפקט עבור חיפוש מחדש כשמשתנים הנתיב
  useEffect(() => {
    setSearchTerm('');
  }, [location.pathname]);

  // טעינת הערים מה-`localStorage` או קובץ JSON
  useEffect(() => {
    const saved = localStorage.getItem('cities');
    if (saved) {
      setCities(JSON.parse(saved));
    } else {
      fetch('/cities.json')
        .then(res => res.json())
        .then(data => setCities(data));
    }
  }, []); // הטעינה תתבצע רק פעם אחת כשמרעננים את הדף

  // שמירת הערים ב-`localStorage` כל פעם שמשתנה המידע
  useEffect(() => {
    if (cities.length > 0) {
      localStorage.setItem('cities', JSON.stringify(cities));
    }
  }, [cities]); // שמירה ב-`localStorage` כל פעם שהערים משתנות

  // הוספת עיר לרשימה
  const addCity = (city) => setCities(prev => [...prev, city]);

  // מחיקת עיר מהמערכת
  const deleteCity = (name) => setCities(prev => prev.filter(c => c.name !== name));

  // הפיכת עיר למועדפת
  const toggleFavorite = (name) => {
    setCities(prev => {
      const updatedCities = prev.map(c =>
        c.name === name ? { ...c, favorite: !c.favorite } : c
      );
      return updatedCities;
    });
  };

  const handleEditCity = (updatedCity, originalName) => {
    const updatedCities = cities.map(c =>
      c.name === originalName ? updatedCity : c
    );
  
    localStorage.setItem('cities', JSON.stringify(updatedCities));
    setCities(updatedCities);
    setCityToEdit(null);
  };
  
  
  // סינון הערים על פי שם העיר או המדינה
  const filtered = cities.filter(c => {
    if (!c || !c.country || !c.name) return false;
    return c.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
           c.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <h1>City Weather Forecast</h1>
      
      {cityToEdit ? (

         <EditCity 
          city={cityToEdit} 
          onEditCity={handleEditCity} 
          onCancel={() => setCityToEdit(null)} 
        />
      ) : (
        <>
          {showForm ? (
            <CityForm 
              onAddCity={addCity} 
              onCancel={() => setShowForm(false)} 
            />
          ) : (
            <Button onClick={() => setShowForm(true)}>Add City</Button>
          )}
          
          <div>
            <label>
              Search by country or city:
              <input 
                type="text" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
              />
            </label>
            <Button onClick={() => setSearchTerm("")}>reset</Button>
          </div>
          
          <CityList 
            cities={filtered.sort((a, b) => a.name.localeCompare(b.name))} 
            onDeleteCity={deleteCity} 
            onToggleFavorite={toggleFavorite} 
            onEditCity={setCityToEdit} 
          />
        </>
      )}
    </>
  );
}

export default Home;