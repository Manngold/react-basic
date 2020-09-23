import React, { Component } from 'react';

class InputHabit extends Component {
  handleAdd = () => {
    const name = document.querySelector('.habit_input').value;
    if (name.length > 0) {
      this.props.onAdd(name);
    } else return;
    this.clearInput();
  };
  clearInput = () => {
    document.querySelector('.habit_input').value = '';
  };
  render() {
    return (
      <div>
        <input className='habit_input' type='text' />
        <button onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}

export default InputHabit;
