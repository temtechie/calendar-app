import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EventPage = () => {
  const [selectedDateTime, setSelectedDateTime] = useState('');

  const handleDateChange = (date: any) => {
    setSelectedDateTime(date);
  };

  console.log('selectedDateTime', selectedDateTime);

  return (
    <div>
      <DatePicker
        // selected={selectedDateTime}
        onChange={handleDateChange}
        showTimeSelect
        dateFormat='MMMM d, yyyy h:mm aa'
      />
      {selectedDateTime && (
        <p>Selected Date and Time: {selectedDateTime?.toString()}</p>
      )}
    </div>
  );
};

export default EventPage;
