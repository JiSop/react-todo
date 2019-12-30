import React, { useState } from 'react';

const TodoInput = ({ todos, setTodos }) => {
  const [ inputValue, setInputValue ] = useState( '' );

  const genId = () => {
    return todos.length ? Math.max( ...todos.map( todo => todo.id ) ) + 1 : 1;
  };

  const onChangeInput = e => {
    setInputValue( e.target.value );
  };

  const onSubmitForm = e => {
    e.preventDefault();
    if ( !inputValue.trim() ) return;
    setTodos( [
      ...todos,
      { id: genId(), content: inputValue, completed: false }
    ] );
    setInputValue( '' );
  };

  return (
    <form onSubmit={ onSubmitForm }>
      <input
        className="input-todo"
        placeholder="What needs to be done?"
        value={ inputValue }
        onChange={ onChangeInput }
        autoFocus
      />
    </form>
  );
};

export default TodoInput;