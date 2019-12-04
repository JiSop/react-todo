import React from 'react';
import Checkbox from "./Checkbox";

const TodoFooter = ({ todos, setTodos }) => {

  const chkAllCompletedTodos = e => {
    setTodos(
      todos.map( todo => ( { ...todo, completed: e.target.checked } ) ) );
    console.log( todos );
  };

  const removeCompletedTodos = () => {
    setTodos( getActiveTodos() );
  };

  const getActiveTodos = () => {
    return todos.filter( todo => todo.completed === false );
  };

  const genCompletedTodos = () => {
    return todos.length - getActiveTodos().length;
  };

  return (
    <div className="footer">
      <div className="complete-all">
        <Checkbox
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
  );
};

export default TodoFooter;