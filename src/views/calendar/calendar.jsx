import React from 'react';
import { CalendarElement } from 'components/dashboard-components';

class Calendar extends React.Component {
  render() {
    return (
      <div>
        <h5 className="mb-4">Calendar Page</h5>
        <CalendarElement />
      </div>
    );
  }
}
export default Calendar;
