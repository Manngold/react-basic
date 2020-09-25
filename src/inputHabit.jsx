import React, { Component } from 'react';

class InputHabit extends Component {
  textInput = React.createRef();
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.textInput.current.value);
    this.textInput.current.value = '';
  };
  render() {
    return (
      <form className='add-form' onSubmit={this.onSubmit}>
        <input className='habit_input' type='text' ref={this.textInput} />
        <button>Add</button>
      </form>
    );
  }
}

export default InputHabit;
