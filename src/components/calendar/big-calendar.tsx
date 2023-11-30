import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import './calendar.css';

export const BigCalendar = ({ events }: any) => {
  const localizer = momentLocalizer(moment);

  return (
    <div>
      <Calendar
        className='calendar'
        localizer={localizer}
        events={events}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 500 }}
        onSelectEvent={(event) => console.log('Event selected:', event)}
        onNavigate={(date) => console.log('Month changed:', date)}
        step={60}
      />
    </div>
  );
};
