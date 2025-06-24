import { Routes, Route } from 'react-router-dom';
import CalendarPage from './Pages/CalendarPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CalendarPage />} />
    </Routes>
  )
}

export default App;
