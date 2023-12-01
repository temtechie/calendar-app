import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import './calendar.css';
import { useCallback } from 'react';

export const BigCalendar = ({ events }: any) => {
  const localizer = momentLocalizer(moment);

  const onSelectEvent = useCallback((calEvent: any) => {
    const formattedDate = calEvent?.start.toISOString();
    const formattedDateWithOffset = formattedDate.replace('Z', '+00:00');
    const dateObject = new Date(formattedDateWithOffset);
    const extractedDate = dateObject.toISOString().split('T')[0];
    window.location.href = `/calendar?start=${extractedDate}`;
  }, []);

  return (
    <div>
      <Calendar
        className='calendar'
        localizer={localizer}
        events={events}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 600 }}
        onSelectEvent={onSelectEvent}
        onNavigate={(date) => console.log('Month changed:', date)}
        step={60}
      />
    </div>
  );
};
