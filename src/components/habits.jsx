import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  render() {
    const { habits, onIncrement, onDecrement, onDelete, onReset } = this.props;
    return (
      <ul>
        {habits.map((habit) => {
          return (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onDelete={onDelete}
            />
          );
        })}
        <button onClick={onReset}>Reset</button>
      </ul>
    );
  }
}

export default Habits;
