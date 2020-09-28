import React, { memo } from 'react';

const InputHabit = memo((props) => {
  const textInput = React.createRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const text = textInput.current.value;
    text && props.onAdd(text);
    textInput.current.value = '';
  };
  return (
    <form className='add-form' onSubmit={onSubmit}>
      <input className='habit_input' type='text' ref={textInput} />
      <button>Add</button>
    </form>
  );
});

export default InputHabit;
