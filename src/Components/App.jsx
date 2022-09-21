import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import Contact from '../pages/Contact';
import HotelsPage from '../pages/HotelsPage';
import HotelPage from '../pages/HotelPage';
import ReservationPage from '../pages/ReservationPage';
import { AuthProvider } from '../context/AuthContext';
import AdminPage from '../pages/AdminPage';
import ReservationList from './admin/ReservationList';
import AddHotel from './admin/AddHotel';
import Messages from './admin/Messages';
function App() {
  return (
    <div className='App'>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/hotels' element={<HotelsPage />} />
            <Route path='/hotel/:id' element={<HotelPage />} />
            <Route path='/reserve-now' element={<ReservationPage />} />
            <Route path='/admin' element={<AdminPage />}>
              <Route index element={<ReservationList />} />
              <Route path='new-hotel' element={<AddHotel />} />
              <Route path='messages' element={<Messages />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
