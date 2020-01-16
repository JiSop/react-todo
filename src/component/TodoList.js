import React, { useCallback } from 'react';
import TodoListItem from "./TodoListItem";

const TodoList = ( { todos, tabState, onToggle, onRemove }) => {

  const filterTodoList = useCallback( () => {
    return todos.filter( todo => {
      if ( tabState === "Active" ) return !todo.completed;
      if ( tabState === "Completed" ) return todo.completed;
      return true;
    } );
  }, [ todos, tabState ] );

  return (
    <ul className="todos">
      { filterTodoList().map( todo => (
          <TodoListItem
            key={ todo.id + todo.content }
            todo={ todo }
            onRemove={ onRemove }
            onToggle={ onToggle }
          />
        )
      ) }
    </ul>
  );
};

export default React.memo( TodoList );