import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import {
  deleteEvent,
  fetchEventsByStartDay,
} from '../redux/actions/event-action';
import '../components/calendar/day-view.css';
import { PATHS } from '../routes/constants';

const DayView = () => {
  const [searchParams] = useSearchParams();
  const startParam = searchParams.get('start');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (startParam) {
      dispatch(fetchEventsByStartDay(startParam));
    }
  }, [dispatch, startParam]);

  const { list } = useAppSelector((state) => state.events);

  const handleDelete = (eventId: string) => {
    dispatch(deleteEvent(eventId));
    if (startParam) {
      dispatch(fetchEventsByStartDay(startParam));
    }
  };

  const handleUpdate = (eventId: any) => {
    window.location.href = `${PATHS.EDIT_CALENDAR}?eventId=${eventId}`;
  };

  return (
    <div className='day-view'>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>Day View for {startParam}</h2>
        <h2 onClick={() => navigate('/home')}>Go back</h2>
      </div>
      <table className='event-table'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Start</th>
            <th>End</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list?.map((event: any) => (
            <tr key={event._id}>
              <td>{event.title}</td>
              <td>{event.description}</td>
              <td>{new Date(event.start).toLocaleTimeString()}</td>
              <td>{new Date(event.end).toLocaleTimeString()}</td>
              <td>
                <button onClick={() => handleUpdate(event._id)}>Update</button>
                <button onClick={() => handleDelete(event._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DayView;
