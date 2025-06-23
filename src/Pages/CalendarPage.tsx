import Calendar from "../components/Calendar";
import { Link } from 'react-router-dom';

function CalendarPage(): React.ReactElement | null {
    return (
        <>
            <div className="nav-bar">
                <Link to="/">Calendar</Link>
                <Link to="/Booking">Booking</Link>
            </div>
            <Calendar />
        </>
    )
}

export default CalendarPage;