import { useState } from "react";
import Calendar from "../components/Calendar";
import { Link } from 'react-router-dom';

function CalendarPage(): React.ReactElement | null {

    // Button that that toggles between Business and customer view
    const [enabled, setEnabled] = useState(false);
    return (
        <div>
            <div className="nav-bar">
                <Link to="/">Calendar</Link>
            </div>

            <button
                onClick={() => setEnabled(!enabled)}
                className={`block items-center px-4 py-2 rounded-full transition-colors ${enabled ? 'bg-blue-500 text-white' : 'bg-red-200 text-gray-800'}`}
            >
                {enabled ? 'Business View' : 'Customer View'}
            </button>

            <Calendar enabled={enabled}/>

            
        </div>
    )
}

export default CalendarPage;