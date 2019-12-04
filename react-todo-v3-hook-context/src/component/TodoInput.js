import React, { useState, useContext, useCallback, useRef } from 'react';
import TodosContext from "../context/TodosContext";

const TodoInput = () => {
  const [ inputValue, setInputValue ] = useState( '' );
  const { action } = useContext( TodosContext );
  const { setTodos } = action;
  const nextId = useRef(0);

  // const genId = useCallback( () => {
  //   return state.todos.length ? Math.max( ...state.todos.map( todo => todo.id ) ) + 1 : 1;
  // }, [ state.todos ] );

  const onChangeInput = useCallback( e => {
    setInputValue( e.target.value );
  }, [] );

  const onInsert = useCallback( content => {
    const todo = {
      id: nextId.current,
      content,
      completed: false
    };
    setTodos( todos => todos.concat( todo ) );
    nextId.current += 1;
    // action.setTodos( [
    //   ...state.todos,
    //   { id: genId(), content: inputValue, completed: false }
    // ] );
    }, [ setTodos ]
  );

  const onSubmitForm = useCallback( e => {
    e.preventDefault();
    if ( !inputValue.trim() ) return;
    onInsert( inputValue );
    setInputValue( '' );
  }, [ inputValue, onInsert ] );

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

export default React.memo( TodoInput );