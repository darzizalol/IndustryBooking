import { Routes, Route } from 'react-router-dom';
import CalendarPage from './Pages/CalendarPage';
import BookingTypesPage from './Pages/BookingTypesPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CalendarPage />} />
      <Route path="/Booking" element={<BookingTypesPage />}></Route>
    </Routes>
  )
}

export default App;
