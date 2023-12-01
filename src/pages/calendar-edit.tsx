import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { fetchSingleEvent, updateEvent } from '../redux/actions/event-action';
import DateTimePicker from '../components/common/datetime-picker';
import { useNavigate, useSearchParams } from 'react-router-dom';
import '../components/calendar/calendar.css';

const EditModal = () => {
  const [searchParams] = useSearchParams();
  const eventIdParam = searchParams.get('eventId');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (eventIdParam) {
      dispatch(fetchSingleEvent(eventIdParam));
    }
  }, [dispatch, eventIdParam]);

  const { eventData } = useAppSelector((state) => state.events);

  const [title, setTitle] = useState(eventData?.title || '');
  const [start, setStart] = useState(
    eventData ? new Date(eventData.start) : null,
  );
  const [end, setEnd] = useState(eventData ? new Date(eventData.end) : null);
  const [description, setDescription] = useState(
    eventData ? eventData.description : '',
  );

  useEffect(() => {
    if (eventData) {
      setTitle(eventData.title || '');
      setStart(new Date(eventData.start) || null);
      setEnd(new Date(eventData.end) || null);
      setDescription(eventData.description || '');
    }
  }, [eventData]);

  const handleSave = () => {
    dispatch(
      updateEvent({
        eventId: eventIdParam,
        eventData: { title, start, end, description },
      }),
    );
    setTitle('');
    setStart(null);
    setEnd(null);
    setDescription('');
    navigate('/home');
    // dispatch(getAllEvents);
  };

  return (
    <div className={``}>
      <div className='modal-content'>
        <div className='modal-header'>
          <h2>Edit Event</h2>
          <span
            className='close'
            onClick={() => navigate('/home')}
            style={{ cursor: 'pointer' }}
          >
            Go Back
          </span>
        </div>
        <div className='modal-body'>
          <label className='modal-label'>Title:</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className='modal-label'>Start:</label>
          <DateTimePicker
            selectedDateTime={start}
            setSelectedDateTime={setStart}
          />

          <label className='modal-label'>End:</label>
          <DateTimePicker selectedDateTime={end} setSelectedDateTime={setEnd} />

          <label className='modal-label'>Description (Optional):</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className='modal-footer'>
          <button onClick={handleSave}>Save</button>
          {/* <button onClick={onClose}>Cancel</button> */}
        </div>
      </div>
    </div>
  );
};

export default EditModal;
