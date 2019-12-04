import React from 'react';
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, setTodos, tabState }) => {

  const removeTodo = id => {
    setTodos( todos.filter( todo => todo.id !== id ) );
  };

  const toggleChk = id => {
    setTodos( todos.map( todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo ) );
    console.log(todos);
  };

  return (
    <ul className="todos">
      { todos
        .filter( todo => {
          if ( tabState === "Active" ) return !todo.completed;
          if ( tabState === "Completed" ) return todo.completed;
          return true;
        } )
        .map( todo => {
          return (
            <TodoListItem
              key={ todo.id + todo.content }
              todo={ todo }
              removeTodo={ removeTodo }
              toggleChk={ toggleChk }
            />
          );
        } ) }
    </ul>
  );
};

export default TodoList;