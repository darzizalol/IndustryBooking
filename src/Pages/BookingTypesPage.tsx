import BookingTypes from "../components/BookingTypes";
import { Link } from 'react-router-dom';

function BookingTypesPage(): React.ReactElement | null {
    return (
        <>
            <div className="nav-bar">
                <Link to="/">Calendar</Link>
                <Link to="/Booking">Booking</Link>
            </div>
            <BookingTypes />
        </>
    )
}

export default BookingTypesPage;