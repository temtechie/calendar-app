// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const DatetimePicker = ({ selectedDateTime, setSelectedDateTime }: any) => {
//   //   const [selectedDateTime, setSelectedDateTime] = useState('');

//   const handleDateChange = (date: any) => {
//     setSelectedDateTime(date);
//   };

//   console.log('selectedDateTime', selectedDateTime);

//   return (
//     <div>
//       <DatePicker
//         onChange={handleDateChange}
//         showTimeSelect
//         dateFormat='MMMM d, yyyy h:mm aa'
//       />
//       {/* {selectedDateTime && (
//         <p>Selected Date and Time: {selectedDateTime?.toString()}</p>
//       )} */}
//     </div>
//   );
// };

// export default DatetimePicker;

import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DateTimePickerProps {
  selectedDateTime: Date | null;
  setSelectedDateTime: (date: Date | null) => void;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  selectedDateTime,
  setSelectedDateTime,
}) => {
  const handleDateChange = (date: Date) => {
    setSelectedDateTime(date);
  };

  return (
    <div>
      <DatePicker
        selected={selectedDateTime}
        onChange={handleDateChange}
        showTimeSelect
        dateFormat='MMMM d, yyyy h:mm aa'
      />
    </div>
  );
};

export default DateTimePicker;
