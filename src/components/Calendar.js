import React, { Component } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.state = {
            year : '',
            month : '',
            selectedDays: [],
        };
      }

      //TODO
      handleDayClick(day, { selected }) {
        const { selectedDays } = this.state;
        if (selected) {
          const selectedIndex = selectedDays.findIndex(selectedDay =>
            DateUtils.isSameDay(selectedDay, day)
          );
          selectedDays.splice(selectedIndex, 1);
        } else {
          selectedDays.push(day);
        }
        this.setState({ selectedDays });

        this.props.onCreate(selectedDays);

      }

      render() {
        return (
          <div>
            <DayPicker
              selectedDays={this.state.selectedDays}
              onDayClick={this.handleDayClick}
            />
          </div>
        );
      }
}

export default Calendar;