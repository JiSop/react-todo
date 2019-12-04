import React from 'react';
import Checkbox from "./Checkbox";

const TodoListItem = ({ removeTodo, toggleChk, todo }) => {
  return (
    <li className="todo-item" id={ todo.id }>
      <Checkbox
        id={ `ck-${ todo.id }` }
        checked={ todo.completed }
        onChange={ () => toggleChk( todo.id ) }
      />
      <label htmlFor={ `ck-${ todo.id }` }>{ todo.content }</label>
      <i
        className="remove-todo far fa-times-circle"
        onClick={ () => removeTodo( todo.id ) }
      />
    </li>
  );
};

export default TodoListItem;