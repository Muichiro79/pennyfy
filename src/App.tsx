import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import Header from './components/Header';
// import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import LandingPage from './pages/LandingPage';
import DashboardRoutes from './pages/Dashboard/DashboardRoutes';
function App() {
  return (
    <Router>
     
      <div className="content">
        <Routes>
          {/* Define routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path='/Dashboard/*' element={<DashboardRoutes />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
