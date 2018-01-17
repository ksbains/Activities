import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
 
class Calendar extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = (date, cb) => {
    this.setState({ date });
    cb(date);
  }
 
  render() {
    return (
      <div>
        <DatePicker
          onChange={this.onChange, this.props.update}
          value={this.state.date}
        />
      </div>
    );
  }
}

export default Calendar;