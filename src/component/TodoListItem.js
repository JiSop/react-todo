import React from 'react';
import Checkbox from "./Checkbox";
import RemoveButton from "./RemoveButton";

const TodoListItem = ({ onToggle, onRemove, todo }) => {
  return (
    <li className="todo-item" id={ todo.id }>
      <Checkbox
        id={ `ck-${ todo.id }` }
        checked={ todo.completed }
        onChange={ () => onToggle( todo.id ) }
        readOnly={ true }
      />
      <label htmlFor={ `ck-${ todo.id }` }>{ todo.content }</label>
      <RemoveButton
        onClick={ () => onRemove( todo.id ) }
      />
    </li>
  );
};

export default React.memo( TodoListItem );