import React, { PureComponent } from 'react';

class InputHabit extends PureComponent {
  textInput = React.createRef();
  onSubmit = (e) => {
    e.preventDefault();
    let text = this.textInput.current.value;
    text && this.props.onAdd(text);
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
