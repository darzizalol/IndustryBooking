import type { JSX } from "react";
import { useForm } from "react-hook-form";
import type { BookingTemplate } from "../types";
import { v4 as uuidv4 } from "uuid";

interface FormTemplateProps {
    setBookingTemplate: React.Dispatch<React.SetStateAction<JSX.Element>>,
    setListOfBookings: React.Dispatch<React.SetStateAction<BookingTemplate[]>>,
    selectedDate: string,
}

function FormTemplate({ setBookingTemplate, setListOfBookings, selectedDate }: FormTemplateProps): React.ReactElement | null {

    const [year, month, day] = selectedDate.split("-");
    const html5Date = `${year}-${month}-${day}`

    const { register, handleSubmit, watch, setValue } = useForm<BookingTemplate>({
        defaultValues: {
            bookingDate: html5Date,
        }
    });

    const handleFormSubmit = (data: BookingTemplate) => {
        const uniqueKey = uuidv4();
        data.id = uniqueKey;
        setListOfBookings(prev => [...prev, data])
        console.log(uniqueKey);
        setBookingTemplate(<></>);
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="space-y-12">

                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold text-gray-900">Booking Details</h2>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900 mb-2">
                                Choose a type of booking 
                            </label>
                            <div className="flex gap-4">
                                <button
                                    type="button"
                                    onClick={() => setValue('type', 'Hair Salon')}
                                    className={`px-4 py-2 rounded ${watch('type') === 'Hair Salon' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                                >
                                    Hair Salon
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setValue('type', 'Tuition')}
                                    className={`px-4 py-2 rounded ${watch('type') === 'Tuition' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                                >
                                    Tuition
                                </button>
                            </div>
                            <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                                First name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="first-name"
                                    type="text"
                                    autoComplete="given-name"
                                    {...register("firstName", {required: true})}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                                Last name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="last-name"
                                    type="text"
                                    autoComplete="family-name"
                                    {...register("lastName", {required: true})}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    type="email"
                                    autoComplete="email"
                                    {...register("email", {required: true})}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        {/* Booking Date & Time Picker */}
                        <div className="sm:col-span-4">
                            <label className="block text-sm/6 font-medium text-gray-900 mb-2">
                                Booking Date & Time
                            </label>
                            <div className="flex gap-4">
                                <input
                                    id="booking-date"
                                    {...register("bookingDate", {required: true})}
                                    type="date"
                                    className="block w-1/2 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                                <input
                                    id="booking-time"
                                    {...register("bookingTime", {required: true})}
                                    type="time"
                                    className="block w-1/2 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button 
                    type="button" 
                    className="text-sm/6 font-semibold text-gray-900"
                    onClick={() => setBookingTemplate(<></>)}
                >
                    Cancel
                </button>
                <button
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    type="submit"
                >
                    Save
                </button>
            </div>
        </form>
    )
}

export default FormTemplate;