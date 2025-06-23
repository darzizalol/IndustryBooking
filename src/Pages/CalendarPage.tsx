import Calendar from "../components/Calendar";
import { Link } from 'react-router-dom';

function CalendarPage() {
    return (
        <>
            <div className="nav-bar">
                <Link to="/">Calendar</Link>
            </div>
            <Calendar />
        </>
    )
}

export default CalendarPage;