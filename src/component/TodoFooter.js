import React, { useContext, useCallback } from 'react';
import Checkbox from "./Checkbox";
import TodosContext from "../context/TodosContext";

const TodoFooter = () => {
  const { state, action } = useContext( TodosContext );
  const { setTodos } = action;
  const { todos } = state;

  const chkAllCompletedTodos = useCallback(checked => {
    setTodos( todos => todos.map( todo => ( { ...todo, completed: checked } ) ) );
  }, [ setTodos ]);

  const removeCompletedTodos = useCallback( () => {
    setTodos( todos => todos.filter( todo => todo.completed === false ) );
  }, [ setTodos ] );

  const getActiveTodos = useCallback( () => {
    return todos.filter( todo => todo.completed !== true ).length;
  }, [ todos ] );

  const genCompletedTodos = useCallback(() => {
    return todos.filter( todo => todo.completed === true ).length;
  }, [ todos ] );

  // const genCompletedTodos = useCallback( () => {
  //   return state.todos.length - getActiveTodos().length;
  // }, [ state.todos.length, getActiveTodos ] );

  return (
    <div className="footer">
      <div className="complete-all">
        <Checkbox
          id="ck-complete-all"
          onChange={ e => chkAllCompletedTodos( e.target.checked ) }
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
          { getActiveTodos() }{ " " }
        </strong>
        items left
      </div>
    </div>
  );
};

export default React.memo( TodoFooter );