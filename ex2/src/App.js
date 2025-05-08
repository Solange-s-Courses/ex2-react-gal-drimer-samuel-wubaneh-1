import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Favorites from './pages/Favorites';
import NavBar from './components/NavBar';

/**
 * Main application component - Serves as the root component for routing
 *
 * Sets up the React Router configuration with three main routes:
 * - Home: The default route displaying city management
 * - About: Static information about the application
 * - Favorites: Shows favorited cities with weather data
 *
 * Wraps all routes with a navigation bar and consistent container styling
 */

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;