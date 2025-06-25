import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import type { DateSelectArg, EventClickArg, EventDropArg } from '@fullcalendar/core';
import { useCalendarStore } from './CalendarStore';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import FormTemplate from './FormTemplate';
import type { BookingTemplate } from '../types';
import ApproveTable from "../components/ApproveTable";

interface CalendarProps {
  enabled: boolean,
}

export default function Calendar({ enabled }: CalendarProps): React.ReactElement | null {
  const { events, addEvent, updateEvent, removeEvent } = useCalendarStore();

  const [bookingTemplate, setBookingTemplate] = useState<React.ReactElement>(<></>);

  // Default booking used for testing
  const exampleBooking = {
    id: "1",
    firstName: "zhenghao",
    lastName: "fang",
    type: "salon",
    email: "abc@gmail.com",
    bookingDate: "2025-06-27",
    bookingTime: "15:30",
  }

  const [listOfBookings, setListOfBookings] = useState<BookingTemplate[]>([exampleBooking]);

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    if (!enabled) {
      alert('Scroll to the bottom to fill up booking details');
      setBookingTemplate(<FormTemplate
        setBookingTemplate={setBookingTemplate}
        setListOfBookings={setListOfBookings}
        selectedDate={selectInfo.startStr}
      />);

      const calendarApi = selectInfo.view.calendar;
      calendarApi.unselect();
    }
  };

  const handleFormSubmit = (formData: BookingTemplate) => {
    const newEvent = {
      id: uuidv4(),
      title: formData.firstName + " " + formData.lastName + " " + formData.type + " booking",
      start: formData.bookingDate + "T" + formData.bookingTime,
      end: formData.bookingDate + "T" + formData.bookingTime,
      allDay: false,
    };
    addEvent(newEvent);

    // Clean up
    setBookingTemplate(<></>);
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    if (confirm(`Delete event "${clickInfo.event.title}"?`)) {
      removeEvent(clickInfo.event.id);
    }
  };

  const handleEventDrop = (dropInfo: EventDropArg) => {
    const updated = {
      id: dropInfo.event.id,
      title: dropInfo.event.title,
      start: dropInfo.event.startStr,
      end: dropInfo.event.endStr || undefined,
      allDay: dropInfo.event.allDay,
    };
    updateEvent(updated);
  };

  return (
    <div data-testid="inner-component" className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Calendar</h1>
        <p className="text-gray-600">Manage [Business] events and appointments</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          events={events}
          select={handleDateSelect}
          eventClick={handleEventClick}
          eventDrop={handleEventDrop}
          height="auto"
          aspectRatio={1.35}
          eventDisplay="block"
          eventTimeFormat={{
            hour: 'numeric',
            minute: '2-digit',
            meridiem: 'short'
          }}
          dayHeaderFormat={{
            weekday: 'short',
            day: 'numeric'
          }}
          titleFormat={{
            month: 'long',
            year: 'numeric'
          }}
          buttonText={{
            today: 'Today',
            month: 'Month',
            week: 'Week',
            day: 'Day'
          }}
          slotMinTime="08:00:00"
          slotMaxTime="20:00:00"
          allDaySlot={true}
          allDayMaintainDuration={true}
          slotDuration="00:30:00"
          slotLabelInterval="01:00"
          expandRows={true}
          stickyHeaderDates={true}
          nowIndicator={true}
          businessHours={{
            daysOfWeek: [1, 2, 3, 4, 5],
            startTime: '09:00',
            endTime: '17:00',
          }}
        />
      </div>

      <div>
        {bookingTemplate}
      </div>

      <div>
        {enabled ? <ApproveTable listOfBookings={listOfBookings} setListOfBookings={setListOfBookings} handleApprove={handleFormSubmit} /> : <></>}
      </div>
    </div>

  );
}
