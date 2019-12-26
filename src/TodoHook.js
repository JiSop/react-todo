import React, { useState } from 'react';

const TodoHook = () => {
  const [ todos, setTodos ] = useState( [] );
  const [ inputValue, setInputValue ] = useState( '' );
  const [ tabState, setTabState ] = useState( 'All' );
  const tabs = [ 'All', 'Active', 'Completed' ];

  const getActiveTodos = () => {
    return todos.filter( todo => todo.completed === false );
  };

  const genCompletedTodos = () => {
    return todos.length - getActiveTodos().length;
  };

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

  const removeTodo = id => {
    setTodos( todos.filter( todo => todo.id !== id ) );
  };

  const toggleChk = id => {
    setTodos( todos.map( todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo ) );
  };

  const activeTab = tab => {
    setTabState( tab );
  };

  const chkAllCompletedTodos = e => {
    setTodos(
      todos.map( todo => ( { ...todo, completed: e.target.checked } ) ) );
    console.log( todos );
  };

  const removeCompletedTodos = () => {
    setTodos(
      getActiveTodos()
    );
  };

  return (
    <>
      <div className="container">
        <h1 className="title">React Todo v1</h1>
        <div className="ver">Hook</div>

        <form onSubmit={ onSubmitForm }>
          <input
            className="input-todo"
            placeholder="What needs to be done?"
            value={ inputValue }
            onChange={ onChangeInput }
            autoFocus
          />
        </form>

        <ul className="nav">
          { tabs.map( tab => (
            <li
              key={ tab }
              className={ tabState === tab ? "active" : "" }
              onClick={ () => {
                activeTab( tab );
              } }
            >
              { tab }
            </li>
          ) ) }
        </ul>

        <ul className="todos">
          { todos
            .filter( todo => {
              if ( tabState === "Active" ) {
                return !todo.completed;
              }
              if ( tabState === "Completed" ) {
                return todo.completed;
              }
              return true;
            } )
            .map( todo => {
              return (
                <li className="todo-item" key={ todo.id + todo.content } id={ todo.id }>
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    id={ `ck-${ todo.id }` }
                    checked={ todo.completed }
                    onChange={ () => {
                      toggleChk( todo.id );
                    } }
                  />
                  <label htmlFor={ `ck-${ todo.id }` }>{ todo.content }</label>
                  <i
                    className="remove-todo far fa-times-circle"
                    onClick={ () => {
                      removeTodo( todo.id );
                    } }
                  />
                </li>
              );
            } ) }
        </ul>

        <div className="footer">
          <div className="complete-all">
            <input
              className="custom-checkbox"
              type="checkbox"
              id="ck-complete-all"
              onChange={ chkAllCompletedTodos }
            />
            <label htmlFor="ck-complete-all">Mark all as complete</label>
          </div>
          <div className="clear-completed">
            <button className="btn" onClick={ removeCompletedTodos }>
              Clear completed (
              <span className="completed-todos">
                  { genCompletedTodos() }
                </span>
              )
            </button>
            <strong className="active-todos">
              { " " }
              { getActiveTodos().length }{ " " }
            </strong>
            items left
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoHook;