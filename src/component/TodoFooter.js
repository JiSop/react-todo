import React, { useCallback } from 'react';
import Checkbox from "./Checkbox";

const TodoFooter = ( { todos, onToggleAll, onRemoveCompleted } ) => {

  const getActiveTodos = useCallback( () => {
    return todos.filter( todo => todo.completed !== true ).length;
  }, [ todos ] );

  const genCompletedTodos = useCallback(() => {
    return todos.filter( todo => todo.completed === true ).length;
  }, [ todos ] );

  return (
    <div className="footer">
      <div className="complete-all">
        <Checkbox
          id="ck-complete-all"
          onChange={ e => onToggleAll( e.target.checked ) }
        />
        <label htmlFor="ck-complete-all">Mark all as complete</label>
      </div>
      <div className="clear-completed">
        <button className="btn" onClick={ onRemoveCompleted }>
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