import { useState } from 'react';
import './Modal.css';
import DateTimePicker from '../common/datetime-picker';
import { createEvent, getAllEvents } from '../../redux/actions/event-action';
import { useAppDispatch } from '../../redux/hook';

const Modal = ({ isOpen, onClose, mode, eventData }: any) => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState(eventData ? eventData.title : '');
  const [start, setStart] = useState(
    eventData ? new Date(eventData.start) : null,
  );
  const [end, setEnd] = useState(eventData ? new Date(eventData.end) : null);
  const [description, setDescription] = useState(
    eventData ? eventData.description : '',
  );

  const handleSave = () => {
    console.log({ title, start, end, description });
    dispatch(createEvent({ title, start, end, description }));
    onClose();
    setTitle('');
    setStart(null);
    setEnd(null);
    setDescription('');
    dispatch(getAllEvents());
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className='modal-content'>
        <div className='modal-header'>
          <h2>
            {mode === 'create'
              ? 'Create Event'
              : mode === 'edit'
                ? 'Edit Event'
                : 'Delete Event'}
          </h2>
          <span
            className='close'
            onClick={onClose}
            style={{ cursor: 'pointer' }}
          >
            &times;
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
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
