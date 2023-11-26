import { useState } from 'react'
import './App.css'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

function App() {
  const [date, setDate] = useState(new Date())

  const handleDateChange = (newDate: any) => {
    console.log('newDate', date)

    setDate(newDate)
  }

  return (
    <div>
      <h1>Calendar App</h1>
      {/* {renderCalendar()} */}
      <div>
        <Calendar
          onChange={handleDateChange}
          value={date}
          tileClassName={({ date, view }) =>
            view === 'month' && date.getDate() === new Date().getDate()
              ? 'highlight'
              : null
          }
        />
      </div>
    </div>
  )
}

export default App
