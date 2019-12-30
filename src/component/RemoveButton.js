import React from 'react';

const RemoveButton = props => {
  return (
    <i
      className="remove-todo far fa-times-circle"
      onClick={ props.onClick }
    />
  );
};

export default React.memo( RemoveButton );