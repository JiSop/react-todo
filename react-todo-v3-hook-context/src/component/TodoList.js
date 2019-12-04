import React, { useContext, useCallback } from 'react';
import TodoListItem from "./TodoListItem";
import TodosContext from "../context/TodosContext";

const TodoList = () => {
  const { state, action } = useContext( TodosContext );
  const { setTodos } = action;
  const { todos, tabState } = state;

  const filterTodoList = useCallback( () => {
    return todos.filter( todo => {
      if ( tabState === "Active" ) return !todo.completed;
      if ( tabState === "Completed" ) return todo.completed;
      return true;
    } );
  }, [ todos, tabState ] );

  const removeTodo = useCallback( id => {
    setTodos( todos => todos.filter( todo => todo.id !== id ) );
  }, [ setTodos ] );

  const toggleChk = useCallback( id => {
    setTodos( todos => todos.map( todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo ) );
  }, [ setTodos ] );

  return (
    <ul className="todos">
      { filterTodoList().map( todo => (
          <TodoListItem
            key={ todo.id + todo.content }
            todo={ todo }
            removeTodo={ removeTodo }
            toggleChk={ toggleChk }
          />
        )
      ) }
    </ul>
  );
};

export default React.memo( TodoList );