const CalendarTop = ({ openModal }: any) => {
  return (
    <div className='calendar-top'>
      <div>Calendar View</div>
      <div>
        <button
          onClick={() => openModal('create', {})}
          style={{ cursor: 'pointer' }}
          className='calendar-top-btn'
        >
          Add Event
        </button>
      </div>
    </div>
  );
};

export default CalendarTop;
