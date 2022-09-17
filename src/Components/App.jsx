import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import Contact from '../pages/Contact';
import HotelsPage from '../pages/HotelsPage';
import HotelPage from '../pages/HotelPage';
import ReservationPage from '../pages/ReservationPage';
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/hotels' element={<HotelsPage />} />
          <Route path='/hotel/:id' element={<HotelPage />} />
          <Route path='/reserve-now' element={<ReservationPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
