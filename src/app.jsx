import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Header from './components/header';
import Reset from './components/reset';
import InputHabit from './inputHabit';

class App extends Component {
  state = {
    totalCount: 0,
    habits: [],
  };
  handleAdd = (name) => {
    const habits = [...this.state.habits];
    const newHabit = { id: Date.now(), name, count: 0 };
    habits.push(newHabit);
    this.setState({ habits });
  };

  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count += 1;
    this.setState({ habits });
    this.setState({ totalCount: this.state.totalCount + 1 });
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item !== habit);
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      habit.count = 0;
      return habit;
    });
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Header
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <InputHabit onAdd={this.handleAdd} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
        <Reset onReset={this.handleReset} />
      </>
    );
  }
}

export default App;
