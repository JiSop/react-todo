import React from 'react';

const TodoInput = ( { input, onChangeInput, onInsert } ) => {

  const onSubmitForm = e => {
    e.preventDefault();
    if ( !input.trim() ) return;
    onInsert( input );
    onChangeInput( '' );
  };

  const onChange = e => onChangeInput( e.target.value );

  return (
    <form onSubmit={ onSubmitForm }>
      <input
        className="input-todo"
        placeholder="What needs to be done?"
        value={ input }
        onChange={ onChange }
        autoFocus
      />
    </form>
  );
};

export default React.memo( TodoInput );