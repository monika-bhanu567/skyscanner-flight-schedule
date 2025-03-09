import React, { useState } from 'react';
import BpkCalendar from 'bpk-component-calendar';
import format from 'date-fns/format';
import { BpkButton } from 'bpk-component-button';
import 'bpk-stylesheets/base';
import 'bpk-stylesheets/font';
import './App.scss';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="App">
      <header>
        <h1>Flight Schedule</h1>
      </header>
      <main>
        <BpkCalendar
          id="calendar"
          onDateSelect={handleDateSelect}
          formatDate={date => format(date, 'dd MMM yyyy')}
          daysOfWeek={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}
        />
        {selectedDate && (
          <p>Selected Date: {format(selectedDate, 'dd MMM yyyy')}</p>
        )}
        <BpkButton onClick={() => alert('Continue clicked!')}>Continue</BpkButton>
      </main>
    </div>
  );
};

export default App;
