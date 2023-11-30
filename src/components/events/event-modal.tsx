import { useState, useEffect } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { createEvent } from '../../redux/actions/event-action';
import { useAppDispatch } from '../../redux/hook';

const EventFormModal = ({ closeModal, isEditing, eventToEdit }: any) => {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startDate: new Date(),
    endDate: new Date(),
  });

  useEffect(() => {
    // If editing, populate form data
    if (isEditing && eventToEdit) {
      setFormData({
        title: eventToEdit.title || '',
        description: eventToEdit.description || '',
        startDate: new Date(eventToEdit.start),
        endDate: new Date(eventToEdit.end),
      });
    }
  }, [isEditing, eventToEdit]);

  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStartDateChange = (date: any) => {
    setFormData({ ...formData, startDate: date });
  };

  const handleEndDateChange = (date: any) => {
    setFormData({ ...formData, endDate: date });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Additional validation can be added here

    const eventData = {
      title: formData.title,
      description: formData.description,
      start: formData.startDate.toISOString(),
      end: formData.endDate.toISOString(),
    };

    try {
      await dispatch(createEvent(eventData));
      closeModal();
    } catch (error) {
      console.error('Error creating/editing event:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type='text'
            name='title'
            value={formData.title}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Description:
          <textarea
            name='description'
            value={formData.description}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Start Date and Time:
          <DatePicker
            selected={formData.startDate}
            onChange={handleStartDateChange}
            showTimeSelect
            dateFormat='Pp'
          />
        </label>
        <br />

        <label>
          End Date and Time:
          <DatePicker
            selected={formData.endDate}
            onChange={handleEndDateChange}
            showTimeSelect
            dateFormat='Pp'
          />
        </label>
        <br />

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default EventFormModal;
