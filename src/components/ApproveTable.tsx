import type { BookingTemplate } from "../types";

interface ApproveTableProps {
    listOfBookings: BookingTemplate[],
    handleApprove: (formData: BookingTemplate) => void,
    setListOfBookings: React.Dispatch<React.SetStateAction<BookingTemplate[]>>,
}

function ApproveTable({ listOfBookings, setListOfBookings, handleApprove }: ApproveTableProps) {

    const approveBooking = (index: string | undefined) => {
        // console.log(index)
        const data = listOfBookings.filter(x => x.id == index)[0];
        const newListOfBookings = listOfBookings.filter(x => x.id != index);
        setListOfBookings(newListOfBookings);
        // console.log(data);
        handleApprove(data);
    }

    const rejectBooking = (index: string | undefined) => {
        const newListOfBookings = listOfBookings.filter(x => x.id != index);
        setListOfBookings(newListOfBookings);
    }

    const tableData = listOfBookings.map(booking =>  
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-gray-300">
            {booking.firstName}
        </th>
        <td className="px-6 py-4 border border-gray-300">
            {booking.lastName}
        </td>
        <td className="px-6 py-4 border border-gray-300">
            {booking.type}
        </td>
        <td className="px-6 py-4 border border-gray-300">
            {booking.email}
        </td>
        <td className="px-6 py-4 border border-gray-300">
            {booking.bookingDate}
        </td>
        <td className="px-6 py-4 border border-gray-300">
            {booking.bookingTime}
        </td>
        <td className="px-6 py-4 text-right border border-gray-300">
            <button onClick={() => approveBooking(booking.id)}>Yes</button>
            <button onClick={() => rejectBooking(booking.id)}>No</button>
        </td>
    </tr>)

    return (

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <h2>Approval List</h2>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border border-gray-300">

                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 border border-gray-300">
                            First name
                        </th>
                        <th scope="col" className="px-6 py-3 border border-gray-300">
                            Last name
                        </th>
                        <th scope="col" className="px-6 py-3 border border-gray-300">
                            Type of Booking
                        </th>
                        <th scope="col" className="px-6 py-3 border border-gray-300">
                            Email Address
                        </th>
                        <th scope="col" className="px-6 py-3 border border-gray-300">
                            Booking Date
                        </th>
                        <th scope="col" className="px-6 py-3 border border-gray-300">
                            Booking Time
                        </th>
                        <th scope="col" className="px-6 py-3 border border-gray-300">
                            Approve?
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </table>
        </div>


    )
}

export default ApproveTable;