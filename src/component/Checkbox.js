import React from 'react';

const Checkbox = props => {
  return (
    <>
      <input
        className="custom-checkbox"
        type="checkbox"
        id={ props.id }
        checked={ props.checked }
        onChange={ props.onChange }
      />
    </>
  );
};

export default Checkbox;