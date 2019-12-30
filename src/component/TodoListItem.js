import React from 'react';
import Checkbox from "./Checkbox";
import RemoveButton from "./RemoveButton";

const TodoListItem = ({ removeTodo, toggleChk, todo }) => {
  return (
    <li className="todo-item" id={ todo.id }>
      <Checkbox
        id={ `ck-${ todo.id }` }
        checked={ todo.completed }
        onChange={ () => toggleChk( todo.id ) }
      />
      <label htmlFor={ `ck-${ todo.id }` }>{ todo.content }</label>
      <RemoveButton
        onClick={ () => removeTodo( todo.id ) }
      />
    </li>
  );
};

export default React.memo( TodoListItem );